import React, { useState } from 'react';
import { 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Image as ImageIcon 
} from 'lucide-react';

import dolphinClean from '../assets/images/dolphin_purifier_clean_1782199132303.jpg';
import dolphinReal1 from '../assets/images/dolphin_purifier_real_1782197884075.jpg';
import dolphinReal2 from '../assets/images/dolphin_purifier_real_1782198075575.jpg';
import dolphinRegenerated from '../assets/images/regenerated_image_1782474232891.jpg';
import aquagrandReal from '../assets/images/aquagrand_purifier_real_1782198845580.jpg';
import aquagrandRealRegenerated from '../assets/images/regenerated_image_1782450159003.jpg';
import aquagrandNewPng from '../assets/images/regenerated_image_1782450897506.png';
import aquagrandLatest from '../assets/images/regenerated_image_1782451055529.jpg';
import aquagrandNewest from '../assets/images/regenerated_image_1782451174279.png';
import activeCopperRegenerated from '../assets/images/regenerated_image_1785215352898.jpg';
import banner from '../assets/images/rainbow_aquafresh_banner_1782197155821.jpg';
import youngIndianLady from '../assets/images/young_indian_lady_drinking_water_1782205858892.jpg';
import youngLady1 from '../assets/images/young_lady_drinking_water_1782195940803.jpg';
import youngLady2 from '../assets/images/young_lady_drinking_water_1782204286662.jpg';
import copperPearl from '../assets/images/copper_pearl_purifier_1782309867459.jpg';
import aiquaBlack from '../assets/images/aiqua_black_purifier_1782311042035.jpg';
import purosis from '../assets/images/purosis_purifier_1782311060179.jpg';
import innovica from '../assets/images/innovica_purifier_1782311075535.jpg';
import aquaPearl from '../assets/images/aqua_pearl_purifier_1782311099161.jpg';
import lxOne from '../assets/images/lx_one_purifier_1782311116515.jpg';
import lxOneRegenerated from '../assets/images/regenerated_image_1785215545745.png';
import lxTwo from '../assets/images/lx_two_purifier_1782311134517.jpg';
import aquaRoma from '../assets/images/aqua_roma_purifier_1782311148201.jpg';
import curveOrganic from '../assets/images/curve_organic_purifier_1782311166720.jpg';
import aqua2090 from '../assets/images/aqua_2090_purifier_1782311182565.jpg';
import purosisPlus from '../assets/images/purosis_plus_purifier_1782311198178.jpg';
import comm25 from '../assets/images/comm_25_lph_1782311825199.jpg';
import comm50 from '../assets/images/comm_50_lph_1782311838920.jpg';
import comm100 from '../assets/images/comm_100_lph_1782311854360.jpg';
import comm500 from '../assets/images/comm_500_lph_1782311871874.jpg';
import comm2000 from '../assets/images/comm_2000_lph_1782311891941.jpg';

export const PROJECT_ASSETS: Record<string, string> = {
  'dolphin_purifier_clean_1782199132303.jpg': dolphinClean,
  'aquagrand_purifier_real_1782198845580.jpg': aquagrandReal,
  'regenerated_image_1782450159003.jpg': aquagrandRealRegenerated,
  'regenerated_image_1782474232891.jpg': dolphinRegenerated,
  'regenerated_image_1782450897506.png': aquagrandNewPng,
  'regenerated_image_1782451055529.jpg': aquagrandLatest,
  'regenerated_image_1782451174279.png': aquagrandNewest,
  'regenerated_image_1785215352898.jpg': activeCopperRegenerated,
  'dolphin_purifier_real_1782197884075.jpg': dolphinReal1,
  'dolphin_purifier_real_1782198075575.jpg': dolphinReal2,
  'rainbow_aquafresh_banner_1782197155821.jpg': banner,
  'young_indian_lady_drinking_water_1782205858892.jpg': youngIndianLady,
  'young_lady_drinking_water_1782195940803.jpg': youngLady1,
  'young_lady_drinking_water_1782204286662.jpg': youngLady2,
  'copper_pearl_purifier_1782309867459.jpg': copperPearl,
  'aiqua_black_purifier_1782311042035.jpg': aiquaBlack,
  'purosis_purifier_1782311060179.jpg': purosis,
  'innovica_purifier_1782311075535.jpg': innovica,
  'aqua_pearl_purifier_1782311099161.jpg': aquaPearl,
  'lx_one_purifier_1782311116515.jpg': lxOne,
  'regenerated_image_1785215545745.png': lxOneRegenerated,
  'lxOne': lxOneRegenerated,
  'lxone_purifier': lxOneRegenerated,
  'lx_two_purifier_1782311134517.jpg': lxTwo,
  'aqua_roma_purifier_1782311148201.jpg': aquaRoma,
  'curve_organic_purifier_1782311166720.jpg': curveOrganic,
  'aqua_2090_purifier_1782311182565.jpg': aqua2090,
  'purosis_plus_purifier_1782311198178.jpg': purosisPlus,
  'comm_25_lph_1782311825199.jpg': comm25,
  'comm_50_lph_1782311838920.jpg': comm50,
  'comm_100_lph_1782311854360.jpg': comm100,
  'comm_500_lph_1782311871874.jpg': comm500,
  'comm_2000_lph_1782311891941.jpg': comm2000,
};

// Premium high-fidelity SVG placeholder to use when images are missing
export const PLACEHOLDER_IMAGE = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23f8fafc' rx='8'/><rect x='10' y='10' width='80' height='80' fill='none' stroke='%23e2e8f0' stroke-width='1' stroke-dasharray='3'/><path d='M32,25 h36 v50 c0,4 -4,8 -8,8 h-20 c-4,0 -8,-4 -8,-8 z' fill='none' stroke='%232563eb' stroke-width='3.5' stroke-linejoin='round'/><circle cx='50' cy='45' r='10' fill='none' stroke='%233b82f6' stroke-width='2'/><path d='M47,45 l2,2 l4,-4' fill='none' stroke='%2310b981' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/><path d='M42,70 h16' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round'/><text x='50' y='92' font-family='system-ui, sans-serif' font-size='5' font-weight='900' fill='%2394a3b8' text-anchor='middle' letter-spacing='0.5'>RAINBOW AQUAFRESH</text></svg>";

export const DEFAULT_PRODUCT_IMAGES: Record<string, string[]> = {
  dolphin: [dolphinRegenerated, dolphinReal1, dolphinReal2],
  aquagrand: [aquagrandNewest],
  'copper-pearl': [copperPearl],
  'aiqua-black': [aiquaBlack],
  purosis: [purosis],
  innovica: [innovica],
  'aqua-pearl': [aquaPearl],
  'lx-one': [lxOneRegenerated],
  'lx-two': [lxTwo],
  'aqua-roma': [aquaRoma],
  'curve-organic': [curveOrganic],
  'aqua-2090': [aqua2090],
  'purosis-plus': [purosisPlus],
  
  'hot-and-cold-3-in-1': [activeCopperRegenerated, copperPearl, aiquaBlack, aquaPearl],
  'aquafresh-active-copper': [activeCopperRegenerated, copperPearl, aiquaBlack, aquaPearl],

  '25-lph': [comm25],
  '50-lph': [comm50],
  '100-lph': [comm100],
  '250-lph': [comm500],
  '500-lph': [comm500],
  '1000-lph': [comm2000],
  '2000-lph': [comm2000],
};

// Stub functions to maintain backward-compatibility with other modules
export const loadAllStoredImages = () => ({});
export const clearAllCustomImages = () => {};
export const saveStoredImages = () => {};

export const resolveImageSrc = (src: string): string => {
  if (!src) return '';
  if (src.startsWith('data:image') || src.startsWith('http://') || src.startsWith('https://') || src.startsWith('/') || src.startsWith('.')) {
    return src;
  }
  if (PROJECT_ASSETS[src]) {
    return PROJECT_ASSETS[src];
  }
  const filename = src.split('/').pop() || src;
  if (PROJECT_ASSETS[filename]) {
    return PROJECT_ASSETS[filename];
  }
  return '';
};

export const getProductImages = (productId: string, customImages?: Record<string, string[]>): string[] => {
  let list: string[] = [];
  
  // 1. Prioritize Content Management (custom uploaded images)
  if (customImages && customImages[productId] && customImages[productId].length > 0) {
    list = customImages[productId].map(resolveImageSrc).filter(Boolean);
  } else {
    // 2. Fallback to pre-defined defaults
    const defaults = DEFAULT_PRODUCT_IMAGES[productId];
    if (defaults && defaults.length > 0) {
      list = defaults.map(resolveImageSrc).filter(Boolean);
    }
  }

  // 3. Ensure there are always exactly 4 images for standard display, using placeholders for missing images
  while (list.length < 4) {
    list.push(PLACEHOLDER_IMAGE);
  }

  return list.slice(0, 4);
};

// ----------------------------------------------------
// 1. PRODUCT CARD DISPLAY: Main active image (Read Only)
// ----------------------------------------------------
interface ProductCardImageProps {
  productId: string;
  productName: string;
  className?: string;
  onClickDetails?: () => void;
  customImages?: Record<string, string[]>;
}

export const ProductCardImage: React.FC<ProductCardImageProps> = ({
  productId,
  productName,
  className = '',
  onClickDetails,
  customImages,
}) => {
  const images = getProductImages(productId, customImages);
  const mainImage = images[0] || PLACEHOLDER_IMAGE;

  return (
    <div 
      className={`relative aspect-square w-full bg-white flex flex-col items-center justify-center overflow-hidden border border-slate-100 rounded-2xl shadow-xs hover:shadow-md group cursor-pointer transition-all duration-300 ${className}`}
      id={`prod-card-img-${productId}`}
      onClick={onClickDetails}
    >
      <div className="absolute inset-0 bg-white flex items-center justify-center">
        <img 
          src={mainImage} 
          alt={`${productName} RO Water Purifier - Premium sales and service Hyderabad`} 
          width="400"
          height="400"
          className="w-full h-full object-contain p-4 transition-transform duration-500 ease-out group-hover:scale-105"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
      </div>
    </div>
  );
};

// ----------------------------------------------------
// 2. DETAILED SPECS MODAL: Complete Interactive Slider Gallery (Read Only)
// ----------------------------------------------------
interface ProductImageGalleryDetailProps {
  productId: string;
  productName: string;
  customImages?: Record<string, string[]>;
}

export const ProductImageGalleryDetail: React.FC<ProductImageGalleryDetailProps> = ({
  productId,
  productName,
  customImages,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [lightboxScale, setLightboxScale] = useState<number>(1);

  // Swipe State
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const slots = getProductImages(productId, customImages);
  const activeImageSrc = slots[activeIndex] || PLACEHOLDER_IMAGE;

  // Hover Zoom Coordinates
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y });
  };

  // Touch handlers for mobile swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setActiveIndex((prev) => (prev + 1) % slots.length);
    } else if (isRightSwipe) {
      setActiveIndex((prev) => (prev - 1 + slots.length) % slots.length);
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="flex flex-col space-y-4 font-sans" id={`prod-gallery-manager-${productId}`}>
      {/* Main image viewer with hover zoom & swipe */}
      <div 
        className="relative bg-white border border-slate-100 rounded-2xl aspect-square w-full flex items-center justify-center p-6 shadow-sm overflow-hidden group select-none cursor-zoom-in"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={() => {
          setLightboxScale(1);
          setIsLightboxOpen(true);
        }}
        title="Click to zoom in fullscreen"
      >
        <img 
          src={activeImageSrc} 
          alt={`${productName} RO Water Purifier view ${activeIndex + 1}`} 
          style={
            isHovered 
              ? { transform: 'scale(1.8)', transformOrigin: `${zoomPos.x}% ${zoomPos.y}%` } 
              : undefined
          }
          className="w-full h-full object-contain p-4 transition-transform duration-150 ease-out"
          referrerPolicy="no-referrer"
          loading="lazy"
        />

        {/* Hover zoom instruction banner */}
        <div className="absolute bottom-3 left-3 bg-slate-900/75 backdrop-blur-xs text-[10px] text-white px-2.5 py-1 rounded-md font-bold flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
          <Maximize2 className="w-3 h-3" /> Click to Zoom Fullscreen
        </div>
      </div>

      {/* Slider Thumbnail Gallery */}
      <div className="space-y-1.5">
        <div className="flex flex-wrap gap-2 justify-center">
          {slots.map((thumbnailSrc, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div 
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative w-14 h-14 aspect-square bg-slate-50 rounded-xl border flex items-center justify-center p-1 cursor-pointer overflow-hidden transition-all select-none
                  ${isActive 
                    ? 'border-blue-600 ring-2 ring-blue-100 bg-white shadow-xs scale-102' 
                    : 'border-slate-200 hover:border-blue-400 hover:bg-white'
                  }`}
              >
                <img 
                  src={thumbnailSrc} 
                  alt={`${productName} thumbnail view ${idx + 1}`} 
                  className="w-full h-full object-contain rounded-md"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Fulscreen Lightbox Zoom Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-950/95 flex flex-col items-center justify-between p-4 md:p-6 select-none font-sans">
          {/* Lightbox Header */}
          <div className="w-full flex justify-between items-center text-white pb-3 border-b border-white/10">
            <div>
              <h4 className="text-sm font-black tracking-tight">{productName}</h4>
              <p className="text-xs text-slate-400 font-medium">Image {activeIndex + 1} of {slots.length}</p>
            </div>
            <div className="flex items-center gap-3">
              {/* Zoom controls */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxScale(prev => Math.min(prev + 0.5, 3));
                }}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-all cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxScale(prev => Math.max(prev - 0.5, 1));
                }}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-all cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setIsLightboxOpen(false)}
                className="p-2 bg-white/15 hover:bg-white/25 rounded-lg text-white font-bold transition-all cursor-pointer"
                title="Close Lightbox"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Lightbox Viewer Area */}
          <div className="relative flex-1 w-full flex items-center justify-center p-4">
            {/* Left Nav Button */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex(prev => (prev - 1 + slots.length) % slots.length);
                setLightboxScale(1);
              }}
              className="absolute left-2 md:left-4 z-10 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Scale zoomed image frame */}
            <div className="w-full h-full max-w-2xl max-h-[70vh] flex items-center justify-center overflow-auto">
              <img 
                src={activeImageSrc} 
                alt={`${productName} zoomed view`} 
                style={{ transform: `scale(${lightboxScale})` }}
                className="max-w-full max-h-full object-contain transition-transform duration-200"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Right Nav Button */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex(prev => (prev + 1) % slots.length);
                setLightboxScale(1);
              }}
              className="absolute right-2 md:right-4 z-10 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Footer Thumbnails */}
          <div className="w-full flex flex-col items-center gap-3 pt-3 border-t border-white/10">
            <div className="flex gap-2">
              {slots.map((thumbnailSrc, idx) => (
                <div 
                  key={idx}
                  onClick={() => {
                    setActiveIndex(idx);
                    setLightboxScale(1);
                  }}
                  className={`w-12 h-12 bg-white/5 rounded-lg overflow-hidden border p-0.5 cursor-pointer transition-all
                    ${idx === activeIndex ? 'border-blue-500 scale-105' : 'border-white/10'}`}
                >
                  <img src={thumbnailSrc} className="w-full h-full object-contain rounded" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest font-mono">Drag or zoom to inspect the finest details</p>
          </div>
        </div>
      )}
    </div>
  );
};

// ----------------------------------------------------
// 3. COMMERCIAL PLANTS: High Resolution Container (Read Only)
// ----------------------------------------------------
interface ProductSingleImageUploaderProps {
  productId: string;
  productName: string;
  className?: string;
  customImages?: Record<string, string[]>;
}

export const ProductSingleImageUploader: React.FC<ProductSingleImageUploaderProps> = ({
  productId,
  productName,
  className = '',
  customImages,
}) => {
  const images = getProductImages(productId, customImages);
  const mainImage = images[0] || PLACEHOLDER_IMAGE;

  return (
    <div 
      className={`relative aspect-square w-full bg-white flex flex-col items-center justify-center overflow-hidden border border-slate-100 rounded-2xl shadow-md group transition-all duration-300 ${className}`}
      id={`single-uploader-${productId}`}
    >
      <div className="absolute inset-0 bg-white flex items-center justify-center p-4">
        <img 
          src={mainImage} 
          alt={`${productName} Commercial RO Water Plant`} 
          className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
      </div>
    </div>
  );
};
