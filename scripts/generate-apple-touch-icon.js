import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

// Helper to write 32-bit uint big endian
function writeUInt32BE(buf, offset, val) {
  buf.writeUInt32BE(val, offset);
}

// Helper to write PNG Chunk
function makeChunk(type, data) {
  const len = data.length;
  const buf = Buffer.alloc(4 + 4 + len + 4);
  buf.writeUInt32BE(len, 0);
  buf.write(type, 4, 4, 'ascii');
  data.copy(buf, 8);

  // CRC32 calculation
  let crc = 0xffffffff;
  const crcBuf = buf.subarray(4, 8 + len);
  for (let i = 0; i < crcBuf.length; i++) {
    const byte = crcBuf[i];
    crc ^= byte;
    for (let j = 0; j < 8; j++) {
      if (crc & 1) {
        crc = (crc >>> 1) ^ 0xedb88320;
      } else {
        crc = crc >>> 1;
      }
    }
  }
  crc = (crc ^ 0xffffffff) >>> 0;
  buf.writeUInt32BE(crc, 8 + len);
  return buf;
}

// Generate 180x180 PNG image buffer
function generateAppleTouchIconBuffer() {
  const width = 180;
  const height = 180;

  // Header: 13 bytes (IHDR)
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 2; // color type: Truecolor (RGB)
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace

  const rowSize = 1 + width * 3;
  const rawData = Buffer.alloc(height * rowSize);

  const cx = width / 2;
  const cy = height / 2;

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize;
    rawData[rowOffset] = 0; // Filter type 0 (None)

    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 3;
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Gradient background: Premium Royal Blue (#0052A3 to #002D62)
      let r = Math.floor(0 + (y / height) * 0);
      let g = Math.floor(82 + (y / height) * (-37));
      let b = Math.floor(163 + (y / height) * (-65));

      // Water drop shape inside
      // Standard teardrop equation approximation
      const nx = dx / 50;
      const ny = (dy + 10) / 50;
      const inDrop = (nx * nx + Math.pow(ny - Math.abs(nx) * 0.4, 2) < 0.6) && (dy < 40);

      if (inDrop) {
        // Cyan/White water drop highlight
        r = 220;
        g = 240;
        b = 255;
      } else if (dist > 75) {
        // Subtle outer border ring
        r = Math.min(255, r + 40);
        g = Math.min(255, g + 50);
        b = Math.min(255, b + 60);
      }

      rawData[pxOffset] = r;
      rawData[pxOffset + 1] = g;
      rawData[pxOffset + 2] = b;
    }
  }

  const compressedData = zlib.deflateSync(rawData);

  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdrChunk = makeChunk('IHDR', ihdr);
  const idatChunk = makeChunk('IDAT', compressedData);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const iconBuf = generateAppleTouchIconBuffer();
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), iconBuf);
console.log('Generated 180x180 PNG in public/apple-touch-icon.png (size: ' + iconBuf.length + ' bytes)');
