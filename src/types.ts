export interface Product {
  id: string;
  name: string;
  category: 'domestic' | 'commercial' | 'accessories';
  description: string;
  image: string; // Placeholder or generated SVG style
  bestFor: string;
  tag?: string;
  features?: string[];
  mrp?: string | number;
  
  // Centralized, editable physical specifications
  storageCapacity: string;
  flowCapacity: string;
  purificationTechnology: string;
  tdsController: string;
  copperFeature: string;
  warranty: string;
  powerConsumption: string;
  
  price: string; // Offer Price
  originalPrice: string; // Original Price / MRP
  keyFeatures: string[];
  
  specs: { label: string; value: string }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Dynamic icon mapper key
  priceRange?: string;
  commonSigns: string[];
}

export interface CommercialCapacity {
  id: string;
  capacity: string; // e.g. "25 LPH"
  hourlyOutput: string; // e.g. "25 Litres Per Hour"
  applications: string[];
  features: string[];
  idealFor: string;
  specs: string[];
}

export interface DealerFormState {
  name: string;
  mobile: string;
  city: string;
  businessType: string;
  message?: string;
}

export interface Lead {
  id: string;
  type: 'service_booking' | 'product_enquiry' | 'commercial_enquiry' | 'dealer_franchise' | 'general_contact';
  name: string;
  mobile: string;
  email?: string;
  city?: string;
  targetItem: string; // Product name, Service name, Plant capacity, etc.
  message?: string;
  businessType?: string; // Dealer specific
  status: 'new' | 'contacted' | 'completed';
  timestamp: string;
}

export interface ServiceArea {
  name: string;
  pincodes?: string[];
  notes?: string;
}

export interface CustomerReview {
  id: string;
  name: string;
  rating: number;
  comment: string;
  source: string;
  date: string;
}
