import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PurifierMockup from './components/PurifierMockup';
import RainbowLogo from './components/RainbowLogo';
import SocialShareBar from './components/SocialShareBar';
import youngIndianLadyDrinkingWater from './assets/images/young_indian_lady_drinking_water_1782205858892.jpg';
import { 
  ProductCardImage, 
  ProductImageGalleryDetail, 
  ProductSingleImageUploader,
  getProductImages,
  PLACEHOLDER_IMAGE 
} from './components/ProductImageGallery';
import { 
  DOMESTIC_PRODUCTS as STATIC_DOMESTIC_PRODUCTS, 
  COMMERCIAL_CAPACITIES, 
  SERVICES, 
  SERVICE_AREAS, 
  GOOGLE_REVIEWS, 
  CONTACT_INFO 
} from './data';
import { Lead, Product, ServiceItem, CommercialCapacity, ServiceArea } from './types';
import {
  Phone,
  MessageSquare,
  Wrench,
  Award,
  Clock,
  ShieldCheck,
  CheckCircle,
  Truck,
  Sparkles,
  Droplet,
  MapPin,
  ChevronRight,
  Star,
  Users,
  CornerRightDown,
  Calculator,
  Mail,
  Zap,
  Tag,
  PhoneCall,
  Search,
  BookOpen,
  Camera,
  Upload,
  Trash2,
  X,
  Lock,
  Unlock
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ProductsPage } from './pages/ProductsPage';
import { InstallationPage } from './pages/InstallationPage';
import { AmcPage } from './pages/AmcPage';
import { CommercialPlantsPage } from './pages/CommercialPlantsPage';
import { RepairPage } from './pages/RepairPage';
import { FilterReplacementPage } from './pages/FilterReplacementPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { KothapetServicePage } from './pages/KothapetServicePage';
import { RoServiceHyderabadPage } from './pages/RoServiceHyderabadPage';
import { LeadForm } from './components/LeadForm';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GoogleMapSection } from './components/GoogleMapSection';
import { BlogPage } from './pages/BlogPage';
import { LocationServicePage } from './pages/LocationServicePage';
import { SpecificServicePage } from './pages/SpecificServicePage';
import { CommercialPlantDetailPage } from './pages/CommercialPlantDetailPage';
import { BlogArticlePage } from './pages/BlogArticlePage';
import { HYDERABAD_LOCATIONS_DATA } from './data/locationPagesData';
import { SPECIALIZED_SERVICES_DATA } from './data/servicePagesData';
import { COMMERCIAL_PLANTS_DATA } from './data/commercialPagesData';
import { BLOG_ARTICLES_DATA } from './data/blogArticlesData';

export const KEY_LEADS = 'RAINBOW_AQUAFRESH_LOCAL_LEADS';

export default function App() {
  const normalizePath = (p: string) => {
    if (p === '/' || p === '/products/') return p;
    if (p === '/products') return '/products/';
    return p.endsWith('/') && p.length > 1 ? p.slice(0, -1) : p;
  };

  const [currentPath, setCurrentPath] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const handleLocationChange = () => {
      let path = normalizePath(window.location.pathname);
      if (window.location.pathname !== path) {
        window.history.replaceState(null, '', path);
      }
      setCurrentPath(path);
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: 'page_view',
        page_path: currentPath,
        page_title: document.title,
        page_location: window.location.href
      });
    }
  }, [currentPath]);

  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);



  // Focus and Active item variables
  const [domesticProducts, setDomesticProducts] = useState<Product[]>(() => {
    try {
      const stored = localStorage.getItem('rainbow_custom_products');
      if (stored) {
        const parsed = JSON.parse(stored) as Product[];
        const loadedList = parsed.map(item => {
          const staticItem = STATIC_DOMESTIC_PRODUCTS.find(s => s.id === item.id);
          const finalItem = staticItem ? {
            ...item,
            name: staticItem.name,
            storageCapacity: staticItem.storageCapacity,
            flowCapacity: staticItem.flowCapacity,
            purificationTechnology: staticItem.purificationTechnology,
            warranty: staticItem.warranty,
            price: staticItem.price,
          } : item;

          return {
            ...finalItem,
            specs: [
              { label: 'Purification Technology', value: finalItem.purificationTechnology },
              { label: 'Storage Capacity', value: finalItem.storageCapacity },
              { label: 'Flow Capacity (LPH)', value: finalItem.flowCapacity },
              { label: 'TDS Controller', value: finalItem.tdsController },
              { label: 'Copper Feature', value: finalItem.copperFeature },
              { label: 'Warranty', value: finalItem.warranty },
              { label: 'Power Consumption', value: finalItem.powerConsumption }
            ]
          };
        });

        // Ensure the strict serial order is preserved even for cached custom products from localStorage
        loadedList.sort((a, b) => {
          const idxA = STATIC_DOMESTIC_PRODUCTS.findIndex(s => s.id === a.id);
          const idxB = STATIC_DOMESTIC_PRODUCTS.findIndex(s => s.id === b.id);
          if (idxA === -1) return 1;
          if (idxB === -1) return -1;
          return idxA - idxB;
        });

        return loadedList;
      }
    } catch (e) {
      console.error('Failed loading custom products', e);
    }
    return STATIC_DOMESTIC_PRODUCTS;
  });

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const currentSelectedProduct = selectedProduct 
    ? domesticProducts.find(p => p.id === selectedProduct.id) || selectedProduct 
    : null;

  // Authoritative dynamic products datasource replacing original static constant using scoping shadowing
  const DOMESTIC_PRODUCTS = domesticProducts;

  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [adminSelectedId, setAdminSelectedId] = useState('dolphin');

  // Sync hash routing for SEO friendly individual product URLs
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#product-')) {
        const id = hash.replace('#product-', '');
        const found = domesticProducts.find(p => p.id === id);
        if (found) {
          setSelectedProduct(found);
        }
      } else if (hash === '' || hash === '#products' || hash === '#hero') {
        setSelectedProduct(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [domesticProducts]);

  useEffect(() => {
    if (selectedProduct) {
      if (window.location.hash !== `#product-${selectedProduct.id}`) {
        window.location.hash = `#product-${selectedProduct.id}`;
      }
    } else {
      if (window.location.hash.startsWith('#product-')) {
        window.location.hash = '#products';
      }
    }
  }, [selectedProduct]);

  const [compareProduct1, setCompareProduct1] = useState<string>('dolphin');
  const [compareProduct2, setCompareProduct2] = useState<string>('aquagrand');
  const [compareProduct3, setCompareProduct3] = useState<string>('aqua-pearl');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const faqItems = [
    {
      question: "What is the recommended TDS level for drinking water?",
      answer: "According to Indian standards (BIS), a TDS level between 50 to 150 mg/L is considered ideal and safe for healthy drinking water, preserving essential natural minerals."
    },
    {
      question: "How often should RO water purifier filters be replaced?",
      answer: "Sediment and carbon pre-filters should generally be replaced every 6 to 12 months, while the high-performance RO membrane typically lasts 1.5 to 2 years, depending on input water quality and usage."
    },
    {
      question: "Do you provide repair services for other water purifier brands in Hyderabad?",
      answer: "Yes, our expert technicians provide servicing, installations, repairs, and genuine filter replacements for all major brands including Kent, Aquaguard, Pureit, Livpure, A.O. Smith, Blue Star, Havells, and many others."
    },
    {
      question: "What is covered under the RO AMC (Annual Maintenance Contract) plan?",
      answer: "Our AMC plans cover scheduled periodic servicing visits, unlimited breakdown support, free filter cleaning, and optional spare parts replacement, providing complete peace of mind."
    },
    {
      question: "What is the warranty on new RO water purifiers?",
      answer: "We offer up to 1-year comprehensive warranty on all domestic water purifiers, along with free delivery and installation across Hyderabad."
    }
  ];

  const toggleFaq = (idx: number) => {
    setExpandedFaq(expandedFaq === idx ? null : idx);
  };
  const [activeCommercialTab, setActiveCommercialTab] = useState<string>('25-lph');
  const [areaSearchKeyword, setAreaSearchKeyword] = useState<string>('');
  const [areaSearchResult, setAreaSearchResult] = useState<ServiceArea | null>(null);
  const [feedbackToast, setFeedbackToast] = useState<string | null>(null);

  const [customImages, setCustomImages] = useState<Record<string, string[]>>(() => {
    try {
      const stored = localStorage.getItem('rainbow_custom_product_images');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Failed to parse custom images from localStorage', e);
    }
    return {};
  });

  const [aiGenerationStatus, setAiGenerationStatus] = useState<string | null>(null);



  // Form states
  const [serviceBookingForm, setServiceBookingForm] = useState({
    name: '',
    mobile: '',
    serviceType: 'repair',
    area: 'Malakpet',
    note: ''
  });

  const [productEnquiryForm, setProductEnquiryForm] = useState({
    name: '',
    mobile: '',
    productName: '',
    msg: ''
  });

  const [commercialEnquiryForm, setCommercialEnquiryForm] = useState({
    name: '',
    mobile: '',
    capacity: '25 LPH',
    msg: ''
  });

  const [dealerForm, setDealerForm] = useState({
    name: '',
    mobile: '',
    city: '',
    businessType: 'Retail Store Counter',
    message: ''
  });

  const [generalContactForm, setGeneralContactForm] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });

  const [newsletterEmail, setNewsletterEmail] = useState('');

  // Auto-scroll target helper
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'products', 'services', 'commercial', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            if (section === 'hero') {
              setActiveSection('home');
            } else {
              setActiveSection(section);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let title = 'Rainbow Aquafresh Systems | RO Water Purifier Sales & Service Hyderabad';
    let desc = 'Rainbow Aquafresh Systems provides RO water purifier sales, installation, repair, AMC and commercial RO plant solutions in Hyderabad. Call +91 8885556965.';
    let path = '';
    
    if (activeSection === 'products') {
      title = 'Domestic RO Water Purifiers | Rainbow Aquafresh Systems';
      desc = 'Premium range of domestic RO water purifiers in Hyderabad. Check prices, specs, and request free demo for Rainbow Aquafresh, Dolphin, and AquaGrand.';
      path = '#products';
    } else if (activeSection === 'commercial') {
      title = 'Commercial RO Plants in Hyderabad | Rainbow Aquafresh Systems';
      desc = 'Commercial RO plants manufacturers in Hyderabad. High-performance industrial water purifiers for schools, hospitals, hostels, and factories starting at 25 LPH.';
      path = '#commercial';
    } else if (activeSection === 'services') {
      title = 'RO Repair, Installation & AMC Services | Rainbow Aquafresh Systems';
      desc = 'Professional RO repair services, same-day filter replacement, water purifier installation, and affordable AMC plans in Hyderabad. 24/7 fast support.';
      path = '#services';
    } else if (activeSection === 'faq') {
      title = 'Frequently Asked Questions | Rainbow Aquafresh Systems';
      desc = 'Expert answers regarding RO water purifier TDS index balancing, filter lifespan, repair costs, and maintenance warranty across Hyderabad.';
      path = '#faq';
    } else if (activeSection === 'contact') {
      title = 'Contact Rainbow Aquafresh Systems | Hyderabad';
      desc = 'Contact Rainbow Aquafresh Systems Hyderabad at +91 8885556965. Visit our Malakpet office for free water quality testing and professional RO repair.';
      path = '#contact';
    }

    document.title = title;

    // Update Meta Description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', desc);
    }

    // Update Canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://www.rainbowafs.com/' + path);
    }
  }, [activeSection]);

  // Helper: Save Lead locally and drop success feedback
  const saveLeadToLocal = (leadData: Omit<Lead, 'id' | 'timestamp' | 'status'>) => {
    try {
      const existingLeadsStr = localStorage.getItem(KEY_LEADS);
      const existingLeads: Lead[] = existingLeadsStr ? JSON.parse(existingLeadsStr) : [];
      
      const newLead: Lead = {
        ...leadData,
        id: `L-${Math.floor(1000 + Math.random() * 9000)}`,
        timestamp: new Date().toISOString(),
        status: 'new'
      };

      const revised = [newLead, ...existingLeads];
      localStorage.setItem(KEY_LEADS, JSON.stringify(revised));
      
      // Flash Toast Feedback
      setFeedbackToast(`Success! Your request has been logged. Our representative will contact you shortly.`);
      setTimeout(() => setFeedbackToast(null), 5000);

      return newLead;
    } catch (e) {
      console.error(e);
      return null;
    }
  };

  // Click handler helpers
  const handleServiceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceBookingForm.name || !serviceBookingForm.mobile) {
      alert('Please enter your Name and Mobile number.');
      return;
    }

    const matchedService = SERVICES.find(s => s.id === serviceBookingForm.serviceType)?.title || serviceBookingForm.serviceType;
    
    // Save to CRM
    saveLeadToLocal({
      type: 'service_booking',
      name: serviceBookingForm.name,
      mobile: serviceBookingForm.mobile,
      city: serviceBookingForm.area,
      targetItem: `Requested: ${matchedService}`,
      message: serviceBookingForm.note
    });

    // Dynamic WhatsApp Link Generation
    const waText = encodeURIComponent(
      `Hi Rainbow Aquafresh,\n\n` +
      `I would like to book an RO service.\n\n` +
      `Name: ${serviceBookingForm.name}\n` +
      `Mobile: ${serviceBookingForm.mobile}\n` +
      `Area: ${serviceBookingForm.area}\n` +
      `Service Required: ${matchedService}\n\n` +
      `Please confirm my appointment.`
    );
    
    const waUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${waText}`;
    
    // Reset form & Open WhatsApp on separate tab
    setServiceBookingForm({ name: '', mobile: '', serviceType: 'repair', area: 'Malakpet', note: '' });
    setIsServiceModalOpen(false);
    window.open(waUrl, '_blank');
  };

  const handleProductEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!productEnquiryForm.name || !productEnquiryForm.mobile) {
      alert('Please fill in Name and Mobile fields.');
      return;
    }

    saveLeadToLocal({
      type: 'product_enquiry',
      name: productEnquiryForm.name,
      mobile: productEnquiryForm.mobile,
      targetItem: `Sales Enquiry: ${productEnquiryForm.productName}`,
      message: productEnquiryForm.msg
    });

    const waText = encodeURIComponent(
      `Hi Rainbow Aquafresh,\n\n` +
      `I'm interested in purchasing the ${productEnquiryForm.productName || 'RO Water Purifier'}.\n\n` +
      `Please send me the price, specifications, warranty, delivery, and installation details.`
    );
    const waUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${waText}`;
    
    setProductEnquiryForm({ name: '', mobile: '', productName: '', msg: '' });
    setSelectedProduct(null);
    window.open(waUrl, '_blank');
  };

  const handleCommercialEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commercialEnquiryForm.name || !commercialEnquiryForm.mobile) {
      alert('Please specify Name and Mobile number.');
      return;
    }

    saveLeadToLocal({
      type: 'commercial_enquiry',
      name: commercialEnquiryForm.name,
      mobile: commercialEnquiryForm.mobile,
      targetItem: `Commercial RO: ${commercialEnquiryForm.capacity}`,
      message: commercialEnquiryForm.msg
    });

    const waText = encodeURIComponent(
      `Hi Rainbow Aquafresh,\n\n` +
      `I'm interested in purchasing the ${commercialEnquiryForm.capacity} Commercial RO Plant.\n\n` +
      `Please send me the price, specifications, warranty, delivery, and installation details.`
    );
    const waUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${waText}`;

    setCommercialEnquiryForm({ name: '', mobile: '', capacity: activeCommercialTab, msg: '' });
    window.open(waUrl, '_blank');
  };

  const handleDealerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dealerForm.name || !dealerForm.mobile || !dealerForm.city) {
      alert('Name, Mobile, and City are required fields.');
      return;
    }

    saveLeadToLocal({
      type: 'dealer_franchise',
      name: dealerForm.name,
      mobile: dealerForm.mobile,
      city: dealerForm.city,
      businessType: dealerForm.businessType,
      targetItem: 'Become a Rainbow Dealer Program',
      message: dealerForm.message
    });

    const waText = encodeURIComponent(
      `🤝 *Rainbow Dealer Partnership Application*\n\n` +
      `👤 *Applicant Name:* ${dealerForm.name}\n` +
      `📱 *Mobile Number:* ${dealerForm.mobile}\n` +
      `📍 *Proposed City/Area:* ${dealerForm.city}\n` +
      `🏢 *Business Type:* ${dealerForm.businessType}\n` +
      `✉️ *Query Details:* ${dealerForm.message || 'Looking for distributorship catalog and pricing details.'}`
    );
    const waUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${waText}`;

    setDealerForm({ name: '', mobile: '', city: '', businessType: 'Retail Store Counter', message: '' });
    window.open(waUrl, '_blank');
  };

  const handleGeneralContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!generalContactForm.name || !generalContactForm.mobile) {
      alert('Name and Mobile details are required.');
      return;
    }

    saveLeadToLocal({
      type: 'general_contact',
      name: generalContactForm.name,
      mobile: generalContactForm.mobile,
      email: generalContactForm.email,
      targetItem: 'General Contact Form Query',
      message: generalContactForm.message
    });

    // Pure modal success feedback
    setGeneralContactForm({ name: '', mobile: '', email: '', message: '' });
    alert('Thank you for contacting Rainbow Aquafresh! Our Hyderabad team is already processing your message and will call you within 2 hours.');
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    alert(`Thank you for subscribing! We will send seasonal water purifier filter replacement reminders to ${newsletterEmail}.`);
    setNewsletterEmail('');
  };

  const handleCheckArea = (e: React.FormEvent) => {
    e.preventDefault();
    if (!areaSearchKeyword) {
      setAreaSearchResult(null);
      return;
    }

    const found = SERVICE_AREAS.find(a => 
      a.name.toLowerCase().includes(areaSearchKeyword.toLowerCase()) || 
      (a.pincodes && a.pincodes.some(pin => pin.includes(areaSearchKeyword)))
    );

    if (found) {
      setAreaSearchResult(found);
    } else {
      setAreaSearchResult({
        name: 'Custom Zone / Outer Area',
        notes: 'We frequently service outer Hyderabad zones too! Contact +91 8885556965 to speak directly with an expert.'
      });
    }
  };

  const currentCommercialDetail = COMMERCIAL_CAPACITIES.find(c => c.id === activeCommercialTab) || COMMERCIAL_CAPACITIES[0];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white">
      
      {/* Dynamic SEO Meta Tags Support */}
      <title>Rainbow Aquafresh | #1 RO Service Hyderabad | Repair & Installation</title>
      <meta name="description" content="Best RO Water Purifier Service in Hyderabad. Repair, Installation, AMC & Sales. 24/7 Support. Call +91 8885556965 for Fast Service." />
      <meta name="keywords" content="RO Water Purifier Hyderabad, RO Service Hyderabad, RO Repair Near Me, Water Purifier Service Hyderabad, Commercial RO Plant Hyderabad, RO Installation Hyderabad, Rainbow Aquafresh Systems" />

      {/* Navigation Header */}
      <Header />

      {/* Floating Action Alerts (Feedback success box) */}
      <AnimatePresence>
        {feedbackToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 right-6 z-45 max-w-sm bg-slate-900 text-white rounded-xl shadow-2xl p-4 border border-blue-500/30 flex items-start gap-3"
          >
            <div className="bg-blue-600 p-1.5 rounded-lg shrink-0 mt-0.5">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-sky-400">Rainbow CRM Status</p>
              <p className="text-xs text-slate-300 mt-1 font-medium">{feedbackToast}</p>
            </div>
            <button onClick={() => setFeedbackToast(null)} className="text-slate-400 hover:text-white text-xs shrink-0 self-start ml-2 font-bold">×</button>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-20">
        {currentPath === '/products/' || currentPath === '/products' ? (
          <ProductsPage
            products={domesticProducts}
            customImages={customImages}
            onSelectProduct={(prod) => {
              setSelectedProduct(prod);
            }}
            onOpenBooking={() => setIsServiceModalOpen(true)}
          />
        ) : currentPath === '/ro-installation-hyderabad' ? (
          <InstallationPage onOpenBooking={() => setIsServiceModalOpen(true)} />
        ) : currentPath === '/ro-amc-service' ? (
          <AmcPage onOpenBooking={() => setIsServiceModalOpen(true)} />
        ) : currentPath === '/commercial-ro-plants' ? (
          <CommercialPlantsPage onOpenBooking={() => setIsServiceModalOpen(true)} />
        ) : currentPath === '/ro-repair-hyderabad' ? (
          <RepairPage onOpenBooking={() => setIsServiceModalOpen(true)} />
        ) : currentPath === '/ro-filter-replacement-hyderabad' ? (
          <FilterReplacementPage onOpenBooking={() => setIsServiceModalOpen(true)} />
        ) : currentPath === '/about' ? (
          <AboutPage onOpenBooking={() => setIsServiceModalOpen(true)} />
        ) : currentPath === '/contact' ? (
          <ContactPage />
        ) : currentPath === '/blog' || currentPath === '/water-guide' ? (
          <BlogPage />
        ) : currentPath === '/ro-water-purifier-service-kothapet-hyderabad' || currentPath === '/ro-service-kothapet-hyderabad' ? (
          <KothapetServicePage onOpenBooking={() => setIsServiceModalOpen(true)} />
        ) : currentPath === '/ro-service-hyderabad' ? (
          <RoServiceHyderabadPage onOpenBooking={() => setIsServiceModalOpen(true)} />
        ) : currentPath.startsWith('/blog/') ? (
          <BlogArticlePage articleKey={currentPath.replace('/blog/', '')} />
        ) : Object.keys(HYDERABAD_LOCATIONS_DATA).some(k => HYDERABAD_LOCATIONS_DATA[k].slug === currentPath.replace('/', '') || k === currentPath.replace('/', '')) ? (
          <LocationServicePage 
            locationKey={Object.keys(HYDERABAD_LOCATIONS_DATA).find(k => HYDERABAD_LOCATIONS_DATA[k].slug === currentPath.replace('/', '') || k === currentPath.replace('/', '')) || ''} 
            onOpenBooking={() => setIsServiceModalOpen(true)} 
          />
        ) : Object.keys(SPECIALIZED_SERVICES_DATA).some(k => SPECIALIZED_SERVICES_DATA[k].slug === currentPath.replace('/', '') || k === currentPath.replace('/', '')) ? (
          <SpecificServicePage 
            serviceKey={Object.keys(SPECIALIZED_SERVICES_DATA).find(k => SPECIALIZED_SERVICES_DATA[k].slug === currentPath.replace('/', '') || k === currentPath.replace('/', '')) || ''} 
            onOpenBooking={() => setIsServiceModalOpen(true)} 
          />
        ) : Object.keys(COMMERCIAL_PLANTS_DATA).some(k => COMMERCIAL_PLANTS_DATA[k].slug === currentPath.replace('/', '') || k === currentPath.replace('/', '')) ? (
          <CommercialPlantDetailPage 
            plantKey={Object.keys(COMMERCIAL_PLANTS_DATA).find(k => COMMERCIAL_PLANTS_DATA[k].slug === currentPath.replace('/', '') || k === currentPath.replace('/', '')) || ''} 
            onOpenBooking={() => setIsServiceModalOpen(true)} 
          />
        ) : (
          <>
        {/* Breadcrumbs Navigation */}
        <div className="bg-white border-b border-blue-50 py-2.5 text-[10px] sm:text-[11px] font-bold text-slate-500 font-sans shadow-3xs relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-1.5 flex-wrap">
            <span className="hover:text-blue-600 cursor-pointer text-slate-400" onClick={() => scrollToId('hero')}>Home</span>
            <span className="text-slate-300 font-normal">/</span>
            {activeSection === 'home' && <span className="text-blue-600 uppercase tracking-wider text-[9px] bg-blue-50/70 px-2 py-0.5 rounded border border-blue-100/50">Welcome Showcase</span>}
            {activeSection === 'products' && <span className="text-blue-600 uppercase tracking-wider text-[9px] bg-blue-50/70 px-2 py-0.5 rounded border border-blue-100/50">Domestic RO Purifiers</span>}
            {activeSection === 'services' && <span className="text-blue-600 uppercase tracking-wider text-[9px] bg-blue-50/70 px-2 py-0.5 rounded border border-blue-100/50">RO Repair & Maintenance Services</span>}
            {activeSection === 'commercial' && <span className="text-blue-600 uppercase tracking-wider text-[9px] bg-blue-50/70 px-2 py-0.5 rounded border border-blue-100/50">Commercial RO Plants</span>}
            {activeSection === 'faq' && <span className="text-blue-600 uppercase tracking-wider text-[9px] bg-blue-50/70 px-2 py-0.5 rounded border border-blue-100/50">FAQs Support</span>}
            {activeSection === 'contact' && <span className="text-blue-600 uppercase tracking-wider text-[9px] bg-blue-50/70 px-2 py-0.5 rounded border border-blue-100/50">Contact Us</span>}
          </div>
        </div>
        
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-slate-50 text-slate-800 py-12 lg:py-20 border-b border-blue-50" id="hero">
          {/* Water Decoration ambient glow */}
          <div className="absolute -right-10 -top-10 w-64 h-64 bg-blue-50/60 rounded-full blur-3xl opacity-80 pointer-events-none" />
          <div className="absolute left-10 -bottom-10 w-48 h-48 bg-sky-100/40 rounded-full blur-2xl opacity-60 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center font-sans">
              
              {/* Left Column: Hero Description & Brand Action Area */}
              <div id="hero-left-brand-panel" className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-blue-50 shadow-xl shadow-blue-900/5 relative overflow-hidden flex flex-col justify-center">
                <div className="flex flex-col justify-center">
                  
                  <span className="bg-blue-100 text-blue-700 text-[11px] font-bold px-3.5 py-1.5 rounded-full w-fit mb-3.5 uppercase tracking-wider flex items-center gap-1.5 self-start">
                    <Award className="w-3.5 h-3.5 text-blue-600" /> 20+ Years Excellence
                  </span>
                  
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-[1.15] mb-3 tracking-tight">
                    RO Water Purifier Sales, Installation & Repair in Hyderabad
                  </h1>

                  <p className="text-slate-500 text-xs sm:text-sm mb-5 leading-relaxed font-normal">
                    Sales • Installation • Repair • AMC • Commercial RO. Beautiful, genuine water solutions with TDS level balancing across Hyderabad!
                  </p>

                  {/* Sub-features list inline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[10px] sm:text-xs">
                    <div className="flex items-center gap-1.5 text-slate-600 font-bold bg-slate-50/80 py-2 px-2.5 rounded-xl border border-slate-100 shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping shrink-0" /> Sales (Top Models)
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-600 font-bold bg-slate-50/80 py-2 px-2.5 rounded-xl border border-slate-100 shadow-xs">
                      <Wrench className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Free Install
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-600 font-bold bg-slate-50/80 py-2 px-2.5 rounded-xl border border-slate-100 shadow-xs">
                      <Zap className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Same Day Repair
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-600 font-bold bg-slate-50/80 py-2 px-2.5 rounded-xl border border-slate-100 shadow-xs">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0" /> AMC Secure
                    </div>
                  </div>
                </div>

                {/* Custom Requested buttons: Headline, Subheadline, Call Now, and WhatsApp */}
                <div className="flex flex-col sm:flex-row gap-3 pt-5 border-t border-slate-100 mt-5">
                  <a
                    id="hero-call-now-btn"
                    href={`tel:${CONTACT_INFO.phones[0]}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-xl text-center shadow-lg shadow-blue-100 hover:scale-[1.01] transition-transform flex items-center justify-center gap-2 text-xs cursor-pointer"
                  >
                    <Phone className="w-4 h-4 fill-white" /> Call Now: {CONTACT_INFO.phones[0]}
                  </a>
                  
                  <a
                    id="hero-whatsapp-btn"
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(
                      "Hi Rainbow Aquafresh,\n\nI'd like to enquire about your RO water purifier products and services.\n\nPlease share the details."
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    referrerPolicy="no-referrer"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3.5 rounded-xl text-center shadow-lg shadow-green-100 hover:scale-[1.01] transition-transform flex items-center justify-center gap-2 text-xs cursor-pointer"
                  >
                    <MessageSquare className="w-4.5 h-4.5" /> WhatsApp Support
                  </a>
                </div>
              </div>

              {/* Right Column: Premium family-branding young beautiful lady photo */}
              <div id="hero-right-lady-panel" className="lg:col-span-5 relative z-10 w-full flex flex-col items-center justify-center">
                <div className="relative w-full max-w-sm md:max-w-[420px] lg:max-w-[450px] aspect-square bg-white border border-blue-50 rounded-3xl p-3 shadow-xl shadow-blue-900/5 flex items-center justify-center overflow-hidden group mx-auto">
                  <img 
                    src={youngIndianLadyDrinkingWater} 
                    alt="Happy customer drinking healthy purified water - RO Water Purifier Sales & Service in Hyderabad | Rainbow Aquafresh Systems" 
                    width="450"
                    height="450"
                    fetchPriority="high"
                    className="w-full h-full object-cover object-center rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle 100% Purity Tag */}
                  <div className="absolute bottom-5 left-5 bg-blue-600/95 backdrop-blur-md text-white text-[10px] font-bold uppercase px-3 py-2 rounded-xl shadow-md border border-white/10 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-sky-200 animate-pulse" />
                    <span>Pure Alkaline Mineral TDS Balanced</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* WHY CHOOSE US */}
        <section className="py-16 bg-white border-b border-slate-200" id="why-choose-us">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-black uppercase tracking-widest text-blue-700 block mb-1">EXPERIENCE EXCELLENCE</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 tracking-tight">Why Choose Rainbow Aquafresh Systems</h2>
              <p className="text-slate-500 font-normal mt-3 text-sm leading-relaxed">
                Celebrating over two decades of pristine customer services in the Hyderabad water purification marketplace. We value complete clarity, high-grade spares, and transparent communication.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              
              <div className="bg-white p-7 rounded-3xl border border-blue-50/80 shadow-md shadow-blue-900/5 flex flex-col justify-between hover:shadow-xl hover:shadow-blue-900/10 hover:border-blue-100 transition-all cursor-default">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <Award className="w-5 h-5" />
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-base">20+ Years Experience</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">Operational robust knowledge since 2006. We understand different regional mineral hardiness across Hyderabad.</p>
                </div>
                <span className="text-[10px] uppercase font-bold text-blue-600 mt-5 tracking-wider font-mono">Expert Standard</span>
              </div>

              <div className="bg-white p-7 rounded-3xl border border-blue-50/80 shadow-md shadow-blue-900/5 flex flex-col justify-between hover:shadow-xl hover:shadow-blue-900/10 hover:border-blue-100 transition-all cursor-default">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-base">Same Day Service</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">Quick site assessment and immediate resolution. Most household repair works completed within 2 hours of arrival.</p>
                </div>
                <span className="text-[10px] uppercase font-bold text-blue-600 mt-5 tracking-wider font-mono">2-Hour Target</span>
              </div>

              <div className="bg-white p-7 rounded-3xl border border-blue-50/80 shadow-md shadow-blue-900/5 flex flex-col justify-between hover:shadow-xl hover:shadow-blue-900/10 hover:border-blue-100 transition-all cursor-default">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-base">Genuine Spare Parts</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">Only use premium food-grade abs plastics housings, 100GPD copper pumps, and USA filmtec membranes spares.</p>
                </div>
                <span className="text-[10px] uppercase font-bold text-blue-600 mt-5 tracking-wider font-mono">100% Original</span>
              </div>

              <div className="bg-white p-7 rounded-3xl border border-blue-50/80 shadow-md shadow-blue-900/5 flex flex-col justify-between hover:shadow-xl hover:shadow-blue-900/10 hover:border-blue-100 transition-all cursor-default">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-base">Trained Technicians</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">Certified chemical water experts executing sanitization, custom TDS adjustment, and structural leak prevention checks.</p>
                </div>
                <span className="text-[10px] uppercase font-bold text-blue-600 mt-5 tracking-wider font-mono">Verified Team</span>
              </div>

            </div>

            {/* Extra smaller metrics support */}
            <div className="mt-10 bg-white rounded-3xl p-8 border border-blue-50 shadow-xl shadow-blue-900/5 flex flex-col sm:flex-row justify-around items-center gap-6 text-center">
              <div>
                <p className="text-3xl font-black text-blue-600">45,000+</p>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1.5 font-sans">Happy Homes Serviced</p>
              </div>
              <div className="hidden sm:block h-12 w-px bg-blue-100/60" />
              <div>
                <p className="text-3xl font-black text-blue-600">2,500+</p>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1.5 font-sans">Commercial Plants Installed</p>
              </div>
              <div className="hidden sm:block h-12 w-px bg-blue-100/60" />
              <div>
                <p className="text-3xl font-black text-blue-600">100%</p>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1.5 font-sans">Genuine Hyderabad Coverage</p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Share Bar */}
        <SocialShareBar />

        {/* COMPREHENSIVE WATER QUALITY & RO FILTRATION GUIDE (EXPANDED HOMEPAGE CONTENT ~800 WORDS) */}
        <section className="py-12 bg-slate-50 border-b border-slate-200" id="hyderabad-water-guide">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700 text-sm leading-relaxed">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-blue-100 shadow-sm space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-blue-700 block font-mono">HYDERABAD WATER EXPERTISE GUIDE</span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Understanding Water Quality & RO Purification Requirements Across Greater Hyderabad
              </h3>

              <p className="text-slate-600 leading-relaxed font-normal">
                Drinking water quality across Greater Hyderabad varies significantly depending on whether your supply originates from municipal Manjeera or Krishna river pipelines, deep borewells, or commercial water tankers. Ground water in rapidly expanding residential and IT corridors such as Gachibowli, Hitec City, Kondapur, Kukatpally, Miyapur, Tellapur, Jubilee Hills, and Secunderabad frequently exhibits elevated Total Dissolved Solids (TDS) levels ranging from 400 mg/L to over 1800 mg/L, accompanied by high mineral hardness, dissolved heavy metals, and fluoride.
              </p>

              <p className="text-slate-600 leading-relaxed font-normal">
                According to official drinking water safety specifications established by the{' '}
                <a 
                  href="https://www.bis.gov.in" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 font-bold underline hover:text-blue-800 transition-colors"
                >
                  Bureau of Indian Standards (BIS IS 10500:2012)
                </a>
                , the desirable limit for TDS in potable water is 500 mg/L. Furthermore, international drinking water safety recommendations published by the{' '}
                <a 
                  href="https://www.who.int/news-room/fact-sheets/detail/drinking-water" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 font-bold underline hover:text-blue-800 transition-colors"
                >
                  World Health Organization (WHO Drinking Water Guidelines)
                </a>
                 emphasize the vital balance between eliminating chemical contaminants, dissolved heavy metals, and biological pathogens, while retaining essential natural minerals such as calcium, magnesium, and potassium.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 space-y-2">
                  <h4 className="font-extrabold text-blue-900 text-base">5-Stage RO + UV + UF + Copper Alkaline Process</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Our multi-stage domestic purifiers utilize a 5-micron spun sediment pre-filter to trap physical rust, sand, and silt particles. Next, an activated carbon block absorbs residual chlorine, pesticides, and foul odors. The high-rejection 0.0001-micron Reverse Osmosis (RO) membrane removes up to 98% of dissolved salts and micro-impurities. UV sterilizers kill biological microbes, while an active Copper Alkaline cartridge restores essential minerals and optimizes water pH to a healthy 7.5–8.5 level.
                  </p>
                </div>

                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 space-y-2">
                  <h4 className="font-extrabold text-blue-900 text-base">Same-Day Doorstep Service & Diagnostic Repairs</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    If your water purifier suffers from reduced water flow, continuous wastewater discharge, abnormal booster pump noise, power supply adapter trip, or taste variations, our certified technicians arrive within 2 hours across Malakpet, Dilsukhnagar, LB Nagar, Jubilee Hills, Secunderabad, and surrounding areas. We stock 100% genuine spares including 100GPD copper booster pumps, Food-Grade ABS filter housings, and USA Filmtec membranes.
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 space-y-2">
                <h4 className="font-extrabold text-slate-900 text-base">Annual Maintenance Contracts (AMC) & Commercial Solutions</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  To guarantee year-round access to pure water, Rainbow Aquafresh Systems offers comprehensive Annual Maintenance Contracts (AMC). Our plans cover scheduled preventative servicing visits, quarterly filter cartridge replacement, free emergency breakdown calls, and zero hidden service charges. For educational institutions, hostels, restaurants, offices, and apartment complexes, we engineer turnkey Commercial RO Plants from 25 LPH to 2000 LPH with stainless steel skids and automated backwash valves.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* PRODUCTS SECTION */}
        <section className="py-16 bg-slate-50" id="products">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <nav className="flex items-center justify-center mb-4 text-[10px] font-bold text-slate-400 gap-1 uppercase tracking-wider font-mono select-none">
                <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToId('hero'); }} className="hover:text-blue-600 transition-colors">Home</a>
                <ChevronRight className="w-3 h-3 text-slate-300" />
                <span className="text-slate-550">Products</span>
              </nav>
              <span className="text-xs font-black uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                PRODUCT SHOWCASE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3 tracking-tight">
                Domestic RO Water Purifiers
              </h2>
              <p className="text-slate-500 mt-2 text-sm leading-relaxed font-normal">
                Choose from our stellar catalog of domestic water filtration appliances. Click on any model to view full technical specifications and request on-site demonstration or booking instant-time!
              </p>
            </div>

            {/* Products grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {domesticProducts.map((prod) => (
                <div 
                  key={prod.id} 
                  className="bg-white rounded-3xl border border-blue-50/80 overflow-hidden shadow-md shadow-blue-900/5 hover:shadow-xl hover:shadow-blue-900/10 hover:border-blue-100 transition-all flex flex-col justify-between hover:-translate-y-1"
                >
                  {/* Decorative product model indicator flag */}
                  <div className="p-4 bg-slate-50 border-b border-blue-50 flex justify-between items-center">
                    <span className="text-xs font-black uppercase tracking-wider text-slate-400 font-mono">MODEL ID: {prod.id}</span>
                  </div>

                  {/* Purifier interactive Visual Mockup */}
                  <div className="group relative">
                    <ProductCardImage 
                      productId={prod.id} 
                      productName={prod.name} 
                      onClickDetails={() => setSelectedProduct(prod)} 
                      customImages={customImages}
                    />
                  </div>

                  {/* Body textual block */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between font-sans">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="text-xl font-extrabold text-slate-900 tracking-tight leading-none">{prod.name}</h4>
                        <div className="text-right flex flex-col items-end">
                          <div className="flex items-center gap-1.5">
                            {prod.originalPrice && (
                              <span className="text-xs text-slate-400 line-through font-semibold font-mono">{prod.originalPrice}</span>
                            )}
                            <span className="text-sm font-black text-blue-600 bg-blue-50/80 px-2.5 py-1 rounded-lg border border-blue-100 font-mono shadow-xs">
                              {prod.price || 'Enquire'}
                            </span>
                          </div>
                          <span className="text-[10px] font-black text-emerald-600 tracking-tight mt-1 bg-emerald-50 border border-emerald-100 px-1.5 py-0.5 rounded-sm uppercase whitespace-nowrap animate-pulse">📞 Call for Best Offer</span>
                        </div>
                      </div>
                      
                      <p className="text-xs text-slate-500 mt-2.5 leading-relaxed h-14 overflow-hidden font-normal text-ellipsis">
                        {prod.description}
                      </p>

                      <div className="mt-4 bg-slate-50 border border-blue-50/60 rounded-xl p-3 space-y-1">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block font-mono">Best Application:</span>
                        <p className="text-xs text-slate-700 font-bold leading-none">{prod.bestFor}</p>
                      </div>

                      {/* Display limited high-level specifications as small labels */}
                      <div className="grid grid-cols-2 gap-2 mt-4 text-[11px]">
                        <div className="bg-slate-50 p-2 rounded-lg border border-blue-50/40 text-slate-600 font-medium flex items-center justify-between">
                          <span>💾 Cap:</span>
                          <strong className="text-indigo-600 font-black bg-indigo-50 px-2.5 py-0.5 rounded-md border border-indigo-100 font-mono text-[10px] shadow-2xs">{prod.storageCapacity}</strong>
                        </div>
                        <div className="bg-slate-50 p-2 rounded-lg border border-blue-50/40 text-slate-600 font-medium flex items-center justify-between">
                          <span>⚡ Flow:</span>
                          <strong className="text-blue-600 font-black bg-blue-50/80 px-2.5 py-0.5 rounded-md border border-blue-100 font-mono text-[10px] shadow-2xs">{prod.flowCapacity}</strong>
                        </div>
                      </div>
                    </div>

                    {/* Operational buttons */}
                    <div className="space-y-2 pt-4 border-t border-slate-100">
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setSelectedProduct(prod)}
                          className="border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold py-2.5 rounded-xl text-center text-xs transition-all cursor-pointer"
                        >
                          Specs & Gallery
                        </button>

                        <button
                          onClick={() => {
                            const modelInput = document.getElementById('enquiry-model-field') as HTMLSelectElement | HTMLInputElement;
                            if (modelInput) {
                              modelInput.value = prod.id;
                            }
                            const contactSection = document.getElementById('contact');
                            if (contactSection) {
                              contactSection.scrollIntoView({ behavior: 'smooth' });
                            }
                            setFeedbackToast(`Perfect! We have prefilled the booking form for ${prod.name}.`);
                            setTimeout(() => setFeedbackToast(null), 4000);
                          }}
                          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl text-center text-xs shadow-md shadow-blue-100 transition-all cursor-pointer"
                        >
                          Buy Now
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <a
                          href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(
                            `Hi Rainbow Aquafresh,\n\nI want to buy the ${prod.name} RO Purifier.\n\nPlease share delivery and installation timings.`
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 rounded-xl text-center text-[10px] transition-all flex items-center justify-center gap-1 cursor-pointer shadow-2xs"
                        >
                          WhatsApp Enquiry
                        </a>

                        <a
                          href={`tel:${CONTACT_INFO.rawPhones[0]}`}
                          className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded-xl text-center text-[10px] transition-all flex items-center justify-center gap-1 cursor-pointer shadow-2xs"
                        >
                          <Phone className="w-3 h-3" /> Call Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* INTERACTIVE SPECIFICATION COMPARISON MATRIX */}
            <div className="mt-16 bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-blue-900/5 border border-blue-50/60 font-sans">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full font-mono">
                    COMPARE SPECIFICATIONS
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 mt-3 tracking-tight">Product Specifications Comparison Matrix</h3>
                  <p className="text-xs text-slate-500 mt-1">Select and compare any three domestic models side-by-side to find your ideal solution.</p>
                </div>
                
                <div className="flex flex-wrap items-center gap-2 self-stretch lg:self-auto bg-slate-50/80 border border-slate-100 p-2 rounded-2xl">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 px-1 font-mono">Compare Models:</div>
                  <div className="grid grid-cols-3 gap-2 w-full lg:w-auto">
                    <select
                      value={compareProduct1}
                      onChange={(e) => setCompareProduct1(e.target.value)}
                      className="text-xs font-bold bg-white border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer text-slate-800"
                    >
                      {DOMESTIC_PRODUCTS.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                    </select>
                    <select
                      value={compareProduct2}
                      onChange={(e) => setCompareProduct2(e.target.value)}
                      className="text-xs font-bold bg-white border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer text-slate-800"
                    >
                      {DOMESTIC_PRODUCTS.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                    </select>
                    <select
                      value={compareProduct3}
                      onChange={(e) => setCompareProduct3(e.target.value)}
                      className="text-xs font-bold bg-white border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer text-slate-800"
                    >
                      <option value="">-- None --</option>
                      {DOMESTIC_PRODUCTS.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              {/* Specification Table Comparison Grid */}
              <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-xs bg-white">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-slate-800 border-b border-slate-100">
                      <th className="p-4 font-black uppercase tracking-wider text-[10px] text-slate-400 min-w-[200px]">Specification Parameter</th>
                      
                      {/* Product 1 Header Column */}
                      {(() => {
                        const p1 = DOMESTIC_PRODUCTS.find(p => p.id === compareProduct1);
                        return p1 && (
                          <th key="col-p1" className="p-4 text-center border-l border-slate-100 min-w-[160px] bg-blue-50/5">
                            <span className="block font-black text-slate-900 text-sm">{p1.name}</span>
                            <span className="inline-block mt-1 text-[11px] font-black text-blue-600 bg-blue-50/80 px-2.5 py-0.5 rounded-lg border border-blue-100 font-mono">{p1.price}</span>
                            <span className="block text-[9px] font-black text-emerald-600 uppercase mt-0.5 animate-pulse">📞 Call for Best Offer</span>
                          </th>
                        );
                      })()}

                      {/* Product 2 Header Column */}
                      {(() => {
                        const p2 = DOMESTIC_PRODUCTS.find(p => p.id === compareProduct2);
                        return p2 && (
                          <th key="col-p2" className="p-4 text-center border-l border-slate-100 min-w-[160px] bg-blue-50/5">
                            <span className="block font-black text-slate-900 text-sm">{p2.name}</span>
                            <span className="inline-block mt-1 text-[11px] font-black text-blue-600 bg-blue-50/80 px-2.5 py-0.5 rounded-lg border border-blue-100 font-mono">{p2.price}</span>
                            <span className="block text-[9px] font-black text-emerald-600 uppercase mt-0.5 animate-pulse">📞 Call for Best Offer</span>
                          </th>
                        );
                      })()}

                      {/* Optional Product 3 Header Column */}
                      {(() => {
                        const p3 = DOMESTIC_PRODUCTS.find(p => p.id === compareProduct3);
                        return p3 ? (
                          <th key="col-p3" className="p-4 text-center border-l border-slate-100 min-w-[160px] bg-blue-50/5">
                            <span className="block font-black text-slate-900 text-sm">{p3.name}</span>
                            <span className="inline-block mt-1 text-[11px] font-black text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-0.5 rounded-lg font-mono">{p3.price}</span>
                            <span className="block text-[9px] font-black text-emerald-600 uppercase mt-0.5 animate-pulse">📞 Call for Best Offer</span>
                          </th>
                        ) : compareProduct3 ? (
                          <th key="col-p3-empty" className="p-4 text-center border-l border-slate-100 min-w-[160px] text-slate-300 italic font-medium">No selected model</th>
                        ) : null;
                      })()}
                    </tr>
                  </thead>
                  <tbody>
                    {/* Rows */}
                    {[
                      { key: 'storageCapacity', label: 'Storage Capacity' },
                      { key: 'flowCapacity', label: 'Flow Capacity (LPH)' },
                      { key: 'purificationTechnology', label: 'Purification Technology' },
                      { key: 'tdsController', label: 'TDS Controller' },
                      { key: 'copperFeature', label: 'Copper Feature' },
                      { key: 'warranty', label: 'Warranty' },
                      { key: 'powerConsumption', label: 'Power Consumption' },
                      { key: 'originalPrice', label: 'Standard Price / MRP' },
                      { key: 'description', label: 'Product Description' }
                    ].map((row, idx) => {
                      const p1 = DOMESTIC_PRODUCTS.find(p => p.id === compareProduct1);
                      const p2 = DOMESTIC_PRODUCTS.find(p => p.id === compareProduct2);
                      const p3 = DOMESTIC_PRODUCTS.find(p => p.id === compareProduct3);

                      return (
                        <tr key={idx} className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50/40 text-slate-700">
                          <td className="p-4 font-extrabold text-slate-800 bg-slate-50/20 text-xs">{row.label}</td>
                          
                          {p1 && (
                            <td className="p-4 text-center border-l border-slate-100 text-xs max-w-xs font-sans leading-relaxed">
                              {row.key === 'originalPrice' ? (
                                <span className="line-through text-slate-400 font-mono font-bold">{p1.originalPrice}</span>
                              ) : row.key === 'description' ? (
                                <span className="text-slate-500 font-normal leading-normal text-left inline-block">{p1.description}</span>
                              ) : (
                                <span className="font-bold text-slate-900">{p1[row.key as keyof Product] as string}</span>
                              )}
                            </td>
                          )}

                          {p2 && (
                            <td className="p-4 text-center border-l border-slate-100 text-xs max-w-xs font-sans leading-relaxed">
                              {row.key === 'originalPrice' ? (
                                <span className="line-through text-slate-400 font-mono font-bold">{p2.originalPrice}</span>
                              ) : row.key === 'description' ? (
                                <span className="text-slate-500 font-normal leading-normal text-left inline-block">{p2.description}</span>
                              ) : (
                                <span className="font-bold text-slate-900">{p2[row.key as keyof Product] as string}</span>
                              )}
                            </td>
                          )}

                          {compareProduct3 ? (
                            p3 ? (
                              <td className="p-4 text-center border-l border-slate-100 text-xs max-w-xs font-sans leading-relaxed">
                                {row.key === 'originalPrice' ? (
                                  <span className="line-through text-slate-400 font-mono font-bold">{p3.originalPrice}</span>
                                ) : row.key === 'description' ? (
                                  <span className="text-slate-500 font-normal leading-normal text-left inline-block">{p3.description}</span>
                                ) : (
                                  <span className="font-bold text-slate-900">{p3[row.key as keyof Product] as string}</span>
                                )}
                              </td>
                            ) : (
                              <td className="p-4 text-center border-l border-slate-100 text-xs text-slate-300 italic">-</td>
                            )
                          ) : null}
                        </tr>
                      );
                    })}

                    {/* Features compare Row */}
                    <tr className="border-t border-slate-100 hover:bg-slate-50/40">
                      <td className="p-4 font-extrabold text-slate-800 bg-slate-50/20 text-xs">Features & Key Highlights</td>
                      {(() => {
                        const p1 = DOMESTIC_PRODUCTS.find(p => p.id === compareProduct1);
                        return p1 && (
                          <td key="opt-f1" className="p-4 border-l border-slate-100">
                            <ul className="text-left space-y-1.5 list-disc list-inside text-slate-500 text-xs font-medium">
                              {p1.keyFeatures.map((kf, i) => <li key={i}>{kf}</li>)}
                            </ul>
                          </td>
                        );
                      })()}
                      {(() => {
                        const p2 = DOMESTIC_PRODUCTS.find(p => p.id === compareProduct2);
                        return p2 && (
                          <td key="opt-f2" className="p-4 border-l border-slate-100">
                            <ul className="text-left space-y-1.5 list-disc list-inside text-slate-500 text-xs font-medium">
                              {p2.keyFeatures.map((kf, i) => <li key={i}>{kf}</li>)}
                            </ul>
                          </td>
                        );
                      })()}
                      {compareProduct3 ? (
                        (() => {
                          const p3 = DOMESTIC_PRODUCTS.find(p => p.id === compareProduct3);
                          return p3 ? (
                            <td key="opt-f3" className="p-4 border-l border-slate-100">
                              <ul className="text-left space-y-1.5 list-disc list-inside text-slate-500 text-xs font-medium">
                                {p3.keyFeatures.map((kf, i) => <li key={i}>{kf}</li>)}
                              </ul>
                            </td>
                          ) : (
                            <td className="p-4 border-l border-slate-100 text-center text-xs text-slate-300 italic">-</td>
                          );
                        })()
                      ) : null}
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Action buttons footer for compared products */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-100">
                {(() => {
                  const p1 = DOMESTIC_PRODUCTS.find(p => p.id === compareProduct1);
                  return p1 && (
                    <button
                      onClick={() => {
                        setProductEnquiryForm({
                          ...productEnquiryForm,
                          productName: p1.name,
                          msg: `Interested in purchasing ${p1.name} after technical comparison.`
                        });
                        scrollToId('quick-sales-enquiry');
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm shadow-blue-105"
                    >
                      <MessageSquare className="w-4 h-4" /> Enquire {p1.name}
                    </button>
                  );
                })()}

                {(() => {
                  const p2 = DOMESTIC_PRODUCTS.find(p => p.id === compareProduct2);
                  return p2 && (
                    <button
                      onClick={() => {
                        setProductEnquiryForm({
                          ...productEnquiryForm,
                          productName: p2.name,
                          msg: `Interested in purchasing ${p2.name} after technical comparison.`
                        });
                        scrollToId('quick-sales-enquiry');
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm shadow-blue-105"
                    >
                      <MessageSquare className="w-4 h-4" /> Enquire {p2.name}
                    </button>
                  );
                })()}

                {compareProduct3 ? (
                  (() => {
                    const p3 = DOMESTIC_PRODUCTS.find(p => p.id === compareProduct3);
                    return p3 ? (
                      <button
                        onClick={() => {
                          setProductEnquiryForm({
                            ...productEnquiryForm,
                            productName: p3.name,
                            msg: `Interested in purchasing ${p3.name} after technical comparison.`
                          });
                          scrollToId('quick-sales-enquiry');
                        }}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-xl text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm shadow-indigo-105"
                      >
                        <MessageSquare className="w-4 h-4" /> Enquire {p3.name}
                      </button>
                    ) : (
                      <div className="hidden sm:block"></div>
                    );
                  })()
                ) : null}
              </div>
            </div>

            {/* Middle Promo Commercial banner */}
            <div className="mt-12 bg-white text-slate-800 rounded-3xl p-8 lg:p-12 shadow-xl shadow-blue-900/5 border border-blue-50 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-3 text-center lg:text-left py-2 font-sans">
                <span className="text-[10px] font-black uppercase tracking-widest bg-blue-50 border border-blue-100 py-1.5 px-3 rounded-full text-blue-700">
                  COMMERCIAL CAPACITY SCALE UP
                </span>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 mt-2">Need high-volume RO purifiers?</h3>
                <p className="text-xs sm:text-sm text-slate-500 max-w-xl font-normal leading-relaxed">
                  We manufacture custom industrial grade Stainless Steel RO Plants starting from 25 LPH to 1000 LPH, perfect for Hyderabad hostels, multi-floor offices, and food processing mills.
                </p>
              </div>
              <button
                onClick={() => scrollToId('commercial')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-blue-100 transition-all shrink-0 hover:scale-[1.02] flex items-center gap-1 text-sm cursor-pointer"
              >
                <span>Explore Commercial Range</span> <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>


        {/* DETAILED PRODUCTS MODAL DIALOG */}
        <AnimatePresence>
          {currentSelectedProduct && (
            <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
              <motion.div 
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                className="bg-white rounded-3xl shadow-2xl border border-blue-50 w-full max-w-3xl overflow-hidden max-h-[95vh] flex flex-col font-sans"
              >
                <div className="bg-white p-6 border-b border-blue-50 shrink-0 flex justify-between items-start gap-4">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md font-mono">Domestic Filter Spec Sheet</span>
                    <div className="flex items-center gap-3 mt-2 flex-wrap">
                      <h3 className="text-xl font-black text-slate-900 tracking-tight">{currentSelectedProduct.name} Purifiers</h3>
                      {currentSelectedProduct.price && (
                        <div className="flex items-center gap-2 flex-wrap">
                          <div className="flex items-center gap-1.5 bg-blue-50/80 px-2.5 py-1 rounded-xl border border-blue-100 shadow-xs">
                            {currentSelectedProduct.originalPrice && (
                              <span className="text-xs text-slate-400 line-through font-bold font-mono">{currentSelectedProduct.originalPrice}</span>
                            )}
                            <span className="text-sm font-black text-blue-600 font-mono">{currentSelectedProduct.price}</span>
                          </div>
                          <span className="text-[11px] font-black text-emerald-600 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-lg uppercase animate-pulse">📞 Call for Best Offer</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedProduct(null)}
                    className="text-slate-400 hover:text-slate-700 bg-slate-50 hover:bg-slate-100 p-2 px-3 rounded-xl cursor-pointer transition-all text-xs font-bold"
                  >
                    Close ✕
                  </button>
                </div>

                <div className="overflow-y-auto p-6 space-y-6 flex-1">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                    <div>
                      <ProductImageGalleryDetail 
                        productId={currentSelectedProduct.id} 
                        productName={currentSelectedProduct.name} 
                        customImages={customImages} 
                      />
                    </div>

                    <div className="space-y-4 bg-slate-50/50 p-5 rounded-2xl border border-slate-100">
                      <div>
                        <p className="font-bold text-slate-400 text-[9px] uppercase tracking-wider font-mono">Overview Description:</p>
                        <p className="text-xs text-slate-600 mt-1 font-medium leading-relaxed">{currentSelectedProduct.description}</p>
                      </div>
                      <p className="font-extrabold text-slate-900 text-sm border-t border-slate-200/50 pt-3">Key Superior Capabilities:</p>
                      <ul className="space-y-3 text-xs text-slate-600 font-semibold direct-features">
                        {currentSelectedProduct.keyFeatures.map((f, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle className="w-4 h-4 text-emerald-500 inline shrink-0 mt-0.5" /> 
                            <span className="leading-relaxed">{f}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="pt-2 border-t border-slate-200/60 mt-4">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block font-mono">Best Application Profile</span>
                        <p className="text-xs text-slate-700 font-bold mt-1 leading-snug">{currentSelectedProduct.bestFor}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="font-extrabold text-slate-900 text-sm">Technical Specifications:</p>
                    <div className="border border-blue-50/80 rounded-2xl overflow-hidden shadow-xs">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="bg-slate-50 text-slate-400 font-bold border-b border-blue-50">
                            <th className="p-3">Specification Parameter</th>
                            <th className="p-3">Target Standard Values</th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentSelectedProduct.specs.map((s, idx) => (
                            <tr key={idx} className="border-b border-blue-50/40 last:border-b-0 text-slate-655 font-semibold hover:bg-slate-50/30">
                              <td className="p-3 font-semibold text-slate-800">{s.label}</td>
                              <td className="p-3 font-mono text-blue-600 font-bold">{s.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-blue-50/40 border border-blue-50/80 rounded-2xl p-5">
                    <p className="font-bold text-blue-900 text-xs font-mono uppercase tracking-wider">Recommended Usage Environment:</p>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
                      Ideal for {currentSelectedProduct.bestFor}. Highly recommended for Hyderabad municipal, Manjeera water tap supplies and medium mineral hardness borewells.
                    </p>
                  </div>

                  {/* Related Products Showcase for SEO internal links and navigation */}
                  <div className="border-t border-slate-100 pt-5 mt-5">
                    <p className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-3">Related Products you may like:</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {domesticProducts.filter(p => p.id !== currentSelectedProduct.id).slice(0, 3).map((prod) => (
                        <div 
                          key={prod.id} 
                          onClick={() => {
                            setSelectedProduct(prod);
                            // Scroll detailed modal body to top
                            const modalBody = document.querySelector('.overflow-y-auto');
                            if (modalBody) modalBody.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="border border-slate-100 rounded-xl p-2.5 bg-white hover:border-blue-300 hover:shadow-xs transition-all cursor-pointer flex flex-col items-center justify-between text-center group"
                        >
                          <div className="w-16 h-16 flex items-center justify-center mb-1">
                            <PurifierMockup modelId={prod.id} className="w-full h-full object-contain" />
                          </div>
                          <span className="text-[10px] font-bold text-slate-905 leading-tight group-hover:text-blue-600 line-clamp-1">{prod.name}</span>
                          <span className="text-[9px] font-extrabold text-blue-600 font-mono mt-0.5">{prod.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border-t border-slate-100 shrink-0 grid grid-cols-2 sm:flex sm:flex-row gap-2 justify-end text-center">
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold px-4 py-2.5 rounded-xl text-xs transition-all cursor-pointer"
                  >
                    Back to Products
                  </button>

                  <button
                    onClick={() => {
                      const modelInput = document.getElementById('enquiry-model-field') as HTMLSelectElement | HTMLInputElement;
                      if (modelInput) {
                        modelInput.value = currentSelectedProduct.id;
                      }
                      setSelectedProduct(null);
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                      setFeedbackToast(`Perfect! We have prefilled the booking form for ${currentSelectedProduct.name}.`);
                      setTimeout(() => setFeedbackToast(null), 4000);
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition-all cursor-pointer shadow-md shadow-blue-100 flex items-center justify-center gap-1.5"
                  >
                    Buy Now
                  </button>

                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(
                      `Hi Rainbow Aquafresh Systems,\n\nI am interested in buying the ${currentSelectedProduct.name} Domestic RO Water Purifier.\n\nPlease share price discount, delivery details, and installation timings for Hyderabad.\n\nThank you.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-emerald-100"
                  >
                    Enquire on WhatsApp
                  </a>

                  <a
                    href={`tel:${CONTACT_INFO.rawPhones[0]}`}
                    className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-amber-100"
                  >
                    <Phone className="w-3.5 h-3.5" /> Call Now
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* ADMIN CMS CONTENT MANAGEMENT CONSOLE MODAL */}
        {isAdminModalOpen && (
          <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl shadow-2xl border border-blue-100 w-full max-w-2xl overflow-hidden max-h-[90vh] flex flex-col font-sans"
            >
              {/* Header */}
              <div className="bg-slate-900 p-6 text-white shrink-0 flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-black tracking-tight">Rainbow Aquafresh CMS Console</h3>
                  <p className="text-xs text-blue-300 font-medium font-mono">AUTHORIZED PERSONNEL ONLY • PRODUCT MANAGER</p>
                </div>
                <button 
                  onClick={() => setIsAdminModalOpen(false)}
                  className="text-slate-450 hover:text-white bg-white/10 hover:bg-white/20 p-2 px-3 rounded-xl transition-all text-xs font-bold cursor-pointer"
                >
                  Close ✕
                </button>
              </div>

              {/* Body */}
              <div className="overflow-y-auto p-6 space-y-6 flex-1 bg-slate-50/50">
                
                {/* Selector */}
                <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-wider font-mono">Select Product to Manage:</label>
                  <select 
                    value={adminSelectedId}
                    onChange={(e) => setAdminSelectedId(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {domesticProducts.map(p => (
                      <option key={p.id} value={p.id}>{p.name} ({p.id})</option>
                    ))}
                  </select>
                </div>

                {/* Manage Images section */}
                {(() => {
                  const targetProd = domesticProducts.find(p => p.id === adminSelectedId);
                  if (!targetProd) return null;
                  
                  // Load active 4 images (resolved, using getProductImages)
                  const activeImages = getProductImages(targetProd.id, customImages);

                  return (
                    <div className="space-y-6">
                      
                      {/* Image replacement grid */}
                      <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs space-y-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="text-sm font-black text-slate-800 uppercase tracking-wider font-mono">1. Replace Product Images (Max 4)</h4>
                            <p className="text-[10px] text-slate-500 mt-0.5 font-medium">Upload Slot 1 (Original) to automatically regenerate high-fidelity AI backgrounds & angles for Slots 2-4.</p>
                          </div>
                          <button 
                            type="button"
                            onClick={() => {
                              const updated = { ...customImages };
                              delete updated[targetProd.id];
                              setCustomImages(updated);
                              localStorage.setItem('rainbow_custom_product_images', JSON.stringify(updated));
                              setFeedbackToast('Images reset to system defaults!');
                              setTimeout(() => setFeedbackToast(null), 3000);
                            }}
                            className="text-[10px] font-bold text-red-600 bg-red-50 hover:bg-red-100 border border-red-100 px-2.5 py-1.5 rounded-lg cursor-pointer transition-all shrink-0"
                          >
                            Reset to Default Images
                          </button>
                        </div>

                        {aiGenerationStatus && (
                          <div className="bg-blue-50 border border-blue-200 text-blue-800 rounded-xl p-3.5 flex items-center space-x-3.5 animate-pulse">
                            <svg className="animate-spin h-5 w-5 text-blue-600 shrink-0" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <div className="text-xs">
                              <p className="font-bold">AI Gallery Generation in Progress</p>
                              <p className="text-blue-600 font-semibold font-mono text-[10px] mt-0.5">{aiGenerationStatus}</p>
                            </div>
                          </div>
                        )}
                        
                        <div className="grid grid-cols-2 gap-4">
                          {[0, 1, 2, 3].map((idx) => {
                            const imgUrl = activeImages[idx];
                            const slotLabels = [
                              { title: "SLOT 1 (ORIGINAL REFERENCE)", desc: "Keep original image (Unedited)" },
                              { title: "SLOT 2 (AI PREMIUM KITCHEN)", desc: "Premium modern kitchen background" },
                              { title: "SLOT 3 (AI LUXURY 45°)", desc: "45° luxury downlit perspective" },
                              { title: "SLOT 4 (AI LIFESTYLE)", desc: "Modular kitchen wall/counter setup" }
                            ];
                            const label = slotLabels[idx];

                            return (
                              <div key={idx} className="border border-slate-150 rounded-xl p-3 bg-slate-50/50 flex flex-col items-center space-y-2 relative">
                                <div className="text-center">
                                  <span className="block text-[10px] font-black text-slate-700 font-mono leading-tight">{label.title}</span>
                                  <span className="block text-[8px] text-slate-400 font-bold leading-none mt-0.5">{label.desc}</span>
                                </div>
                                
                                <div className="w-20 h-20 bg-white border border-slate-100 rounded-lg overflow-hidden flex items-center justify-center p-1 relative">
                                  {aiGenerationStatus && idx > 0 && (
                                    <div className="absolute inset-0 bg-blue-50/95 flex flex-col items-center justify-center p-2 text-center z-10">
                                      <svg className="animate-spin h-5 w-5 text-blue-600 mb-1" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                      </svg>
                                      <span className="text-[8px] text-blue-600 font-bold leading-none animate-pulse">Generating...</span>
                                    </div>
                                  )}
                                  <img 
                                    src={imgUrl} 
                                    alt="Preview" 
                                    className="w-full h-full object-contain"
                                    referrerPolicy="no-referrer"
                                  />
                                </div>

                                <label className="w-full text-center">
                                  <span className="block text-[10px] bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-150 py-1.5 rounded-lg font-bold cursor-pointer transition-all">
                                    {idx === 0 ? "Upload & Generate" : "Replace Manually"}
                                  </span>
                                  <input 
                                    type="file" 
                                    accept="image/*" 
                                    className="hidden" 
                                    onChange={async (e) => {
                                      const file = e.target.files?.[0];
                                      if (file) {
                                        const reader = new FileReader();
                                        reader.onloadend = async () => {
                                          const base64 = reader.result as string;
                                          const updated = { ...customImages };
                                          if (!updated[targetProd.id]) {
                                            updated[targetProd.id] = [...getProductImages(targetProd.id, customImages)];
                                          }
                                          updated[targetProd.id][idx] = base64;
                                          setCustomImages(updated);
                                          localStorage.setItem('rainbow_custom_product_images', JSON.stringify(updated));

                                          if (idx === 0) {
                                            setAiGenerationStatus("Reading reference image dimensions...");
                                            try {
                                              setAiGenerationStatus("Generating Style 2, 3, and 4 in high-fidelity...");
                                              const res = await fetch("/api/generate-gallery", {
                                                method: "POST",
                                                headers: { "Content-Type": "application/json" },
                                                body: JSON.stringify({ base64Image: base64, productId: targetProd.id })
                                              });
                                              const data = await res.json();
                                              if (data.success && data.images && data.images.length === 3) {
                                                const finalUpdated = { ...updated };
                                                finalUpdated[targetProd.id][1] = data.images[0];
                                                finalUpdated[targetProd.id][2] = data.images[1];
                                                finalUpdated[targetProd.id][3] = data.images[2];
                                                setCustomImages(finalUpdated);
                                                localStorage.setItem('rainbow_custom_product_images', JSON.stringify(finalUpdated));
                                                setFeedbackToast("Success: 3 gorgeous AI product photos generated!");
                                              } else {
                                                const errMsg = data.error || "Missing images in server response.";
                                                setFeedbackToast(`AI Info: ${errMsg}`);
                                              }
                                            } catch (err: any) {
                                              console.error("AI Generation failed:", err);
                                              setFeedbackToast(`AI Generation failed: ${err.message || err}`);
                                            } finally {
                                              setAiGenerationStatus(null);
                                              setTimeout(() => setFeedbackToast(null), 5000);
                                            }
                                          } else {
                                            setFeedbackToast(`Slot ${idx + 1} image updated successfully!`);
                                            setTimeout(() => setFeedbackToast(null), 3000);
                                          }
                                        };
                                        reader.readAsDataURL(file);
                                      }
                                    }}
                                  />
                                </label>

                                {idx === 0 && (
                                  <button
                                    type="button"
                                    onClick={async () => {
                                      if (!imgUrl) {
                                        setFeedbackToast("Error: No reference image available to generate from.");
                                        setTimeout(() => setFeedbackToast(null), 3000);
                                        return;
                                      }
                                      setAiGenerationStatus("Reading active reference image...");
                                      try {
                                        setAiGenerationStatus("Triggering Gemini 2.5 Flash Image generator...");
                                        const res = await fetch("/api/generate-gallery", {
                                          method: "POST",
                                          headers: { "Content-Type": "application/json" },
                                          body: JSON.stringify({ base64Image: imgUrl, productId: targetProd.id })
                                        });
                                        const data = await res.json();
                                        if (data.success && data.images && data.images.length === 3) {
                                          const finalUpdated = { ...customImages };
                                          if (!finalUpdated[targetProd.id]) {
                                            finalUpdated[targetProd.id] = [...getProductImages(targetProd.id, customImages)];
                                          }
                                          finalUpdated[targetProd.id][1] = data.images[0];
                                          finalUpdated[targetProd.id][2] = data.images[1];
                                          finalUpdated[targetProd.id][3] = data.images[2];
                                          setCustomImages(finalUpdated);
                                          localStorage.setItem('rainbow_custom_product_images', JSON.stringify(finalUpdated));
                                          setFeedbackToast("Success: AI generated 3 professional gallery images!");
                                        } else {
                                          const errMsg = data.error || "Missing images in response.";
                                          setFeedbackToast(`AI Info: ${errMsg}`);
                                        }
                                      } catch (err: any) {
                                        console.error("AI Generation failed:", err);
                                        setFeedbackToast(`AI Generation failed: ${err.message || err}`);
                                      } finally {
                                        setAiGenerationStatus(null);
                                        setTimeout(() => setFeedbackToast(null), 5000);
                                      }
                                    }}
                                    className="w-full text-center text-[8px] bg-slate-800 hover:bg-slate-900 text-white font-black uppercase tracking-wider py-1 rounded font-mono cursor-pointer transition-all flex items-center justify-center space-x-1"
                                    disabled={!!aiGenerationStatus}
                                  >
                                    <span>⚡ Auto-Regenerate Gallery</span>
                                  </button>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Edit Specifications section */}
                      <form 
                        onSubmit={(e) => {
                          e.preventDefault();
                          const formData = new FormData(e.currentTarget);
                          const updatedFields = {
                            name: formData.get('name') as string,
                            price: formData.get('price') as string,
                            originalPrice: formData.get('originalPrice') as string,
                            warranty: formData.get('warranty') as string,
                            storageCapacity: formData.get('storageCapacity') as string,
                            flowCapacity: formData.get('flowCapacity') as string,
                            purificationTechnology: formData.get('purificationTechnology') as string,
                            tdsController: formData.get('tdsController') as string,
                            copperFeature: formData.get('copperFeature') as string,
                            powerConsumption: formData.get('powerConsumption') as string,
                            description: formData.get('description') as string,
                            bestFor: formData.get('bestFor') as string,
                          };

                          const updatedList = domesticProducts.map(p => {
                            if (p.id === targetProd.id) {
                              const item = { ...p, ...updatedFields };
                              return {
                                ...item,
                                specs: [
                                  { label: 'Purification Technology', value: item.purificationTechnology },
                                  { label: 'Storage Capacity', value: item.storageCapacity },
                                  { label: 'Flow Capacity (LPH)', value: item.flowCapacity },
                                  { label: 'TDS Controller', value: item.tdsController },
                                  { label: 'Copper Feature', value: item.copperFeature },
                                  { label: 'Warranty', value: item.warranty },
                                  { label: 'Power Consumption', value: item.powerConsumption }
                                ]
                              };
                            }
                            return p;
                          });
                          setDomesticProducts(updatedList);
                          localStorage.setItem('rainbow_custom_products', JSON.stringify(updatedList));
                          setFeedbackToast('Specifications saved successfully!');
                          setTimeout(() => setFeedbackToast(null), 3000);
                        }}
                        className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs space-y-4"
                      >
                        <h4 className="text-sm font-black text-slate-800 uppercase tracking-wider font-mono">2. Edit Specifications</h4>
                        
                        <div className="grid grid-cols-2 gap-4 text-xs">
                          <div className="space-y-1">
                            <label className="font-bold text-slate-500">Product Name:</label>
                            <input type="text" name="name" defaultValue={targetProd.name} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 font-semibold text-slate-800" required />
                          </div>
                          <div className="space-y-1">
                            <label className="font-bold text-slate-500">Offer Price (Price):</label>
                            <input type="text" name="price" defaultValue={targetProd.price} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 font-semibold text-slate-800" required />
                          </div>
                          <div className="space-y-1">
                            <label className="font-bold text-slate-500">MRP (Original Price):</label>
                            <input type="text" name="originalPrice" defaultValue={targetProd.originalPrice} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 font-semibold text-slate-800" />
                          </div>
                          <div className="space-y-1">
                            <label className="font-bold text-slate-500">Warranty:</label>
                            <input type="text" name="warranty" defaultValue={targetProd.warranty} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 font-semibold text-slate-800" required />
                          </div>
                          <div className="space-y-1">
                            <label className="font-bold text-slate-500">Storage Capacity:</label>
                            <input type="text" name="storageCapacity" defaultValue={targetProd.storageCapacity} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 font-semibold text-slate-800" required />
                          </div>
                          <div className="space-y-1">
                            <label className="font-bold text-slate-500">Flow Capacity:</label>
                            <input type="text" name="flowCapacity" defaultValue={targetProd.flowCapacity} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 font-semibold text-slate-800" required />
                          </div>
                          <div className="space-y-1 col-span-2">
                            <label className="font-bold text-slate-500">Purification Technology:</label>
                            <input type="text" name="purificationTechnology" defaultValue={targetProd.purificationTechnology} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 font-semibold text-slate-800" required />
                          </div>
                          <div className="space-y-1">
                            <label className="font-bold text-slate-500">TDS Controller:</label>
                            <input type="text" name="tdsController" defaultValue={targetProd.tdsController} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 font-semibold text-slate-800" required />
                          </div>
                          <div className="space-y-1">
                            <label className="font-bold text-slate-500">Copper Feature:</label>
                            <input type="text" name="copperFeature" defaultValue={targetProd.copperFeature} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 font-semibold text-slate-800" required />
                          </div>
                          <div className="space-y-1">
                            <label className="font-bold text-slate-500">Power Consumption:</label>
                            <input type="text" name="powerConsumption" defaultValue={targetProd.powerConsumption} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 font-semibold text-slate-800" required />
                          </div>
                          <div className="space-y-1">
                            <label className="font-bold text-slate-500">Best Application Profile (Best For):</label>
                            <input type="text" name="bestFor" defaultValue={targetProd.bestFor} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 font-semibold text-slate-800" required />
                          </div>
                          <div className="space-y-1 col-span-2">
                            <label className="font-bold text-slate-500">Short Description:</label>
                            <textarea name="description" defaultValue={targetProd.description} rows={3} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 font-semibold text-slate-800" required></textarea>
                          </div>
                        </div>

                        <div className="pt-2 flex justify-end">
                          <button 
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition-all cursor-pointer shadow-md shadow-blue-100"
                          >
                            Save Product Specifications
                          </button>
                        </div>
                      </form>

                    </div>
                  );
                })()}

              </div>

              {/* Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 shrink-0 flex justify-between items-center">
                <button 
                  type="button"
                  onClick={() => {
                    if(confirm("Are you sure you want to delete all customizations and reset the entire catalog to defaults?")) {
                      localStorage.removeItem('rainbow_custom_products');
                      localStorage.removeItem('rainbow_custom_product_images');
                      window.location.reload();
                    }
                  }}
                  className="text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 px-4 py-2.5 rounded-xl cursor-pointer transition-all"
                >
                  Factory Reset Site Data
                </button>
                <button 
                  onClick={() => setIsAdminModalOpen(false)}
                  className="bg-slate-800 hover:bg-slate-900 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-all cursor-pointer shadow-xs"
                >
                  Finished & Close
                </button>
              </div>
            </motion.div>
          </div>
        )}


        {/* SERVICES SECTION */}
        <section className="py-16 bg-white border-b border-slate-200" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12" id="booking-anchor">
              <nav className="flex items-center justify-center mb-4 text-[10px] font-bold text-slate-400 gap-1 uppercase tracking-wider font-mono select-none">
                <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToId('hero'); }} className="hover:text-blue-600 transition-colors">Home</a>
                <ChevronRight className="w-3 h-3 text-slate-300" />
                <span className="text-slate-550">Services</span>
              </nav>
              <span className="text-xs font-black uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                SERVICES PORTFOLIO
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 tracking-tight">
                Water Purifier Services
              </h2>
              <p className="text-slate-500 mt-3 text-sm leading-relaxed font-normal">
                Rainbow Aquafresh Systems provides premium repair, maintenance & installations for all brands. Select options below to pre-book a domestic diagnostic and servicing professional.
              </p>
            </div>

            {/* Subsection 1: Water Purifier Installation */}
            <div className="mb-14">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-blue-100 pb-3 mb-6">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  RO Installation
                </h2>
                <div className="text-[10px] sm:text-xs text-slate-500 font-medium font-sans mt-1 sm:mt-0">
                  Related Services: <span className="text-blue-600 font-bold">Unboxing, Level Calibration, Pressure Pump Fitting, Pipe Relocation</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {SERVICES.filter(item => ['installation', 'filter-replacement'].includes(item.id)).map((item) => (
                  <div 
                    key={item.id} 
                    className="bg-white rounded-3xl border border-blue-50/80 p-6 flex flex-col justify-between shadow-md shadow-blue-900/5 hover:shadow-xl hover:shadow-blue-900/10 hover:border-blue-100 transition-all cursor-pointer hover:-translate-y-1"
                    onClick={() => {
                      setServiceBookingForm({
                        ...serviceBookingForm,
                        serviceType: item.id,
                        note: `Required: ${item.title}`
                      });
                      setIsServiceModalOpen(true);
                    }}
                  >
                    <div className="space-y-4 font-sans">
                      <div className="p-2.5 bg-blue-50 rounded-xl border border-blue-100 inline-block text-blue-600">
                        <Droplet className="w-5 h-5" />
                      </div>

                      <div>
                        <h4 className="font-extrabold text-slate-900 text-base">{item.title}</h4>
                        <p className="text-xs text-slate-505 mt-2.5 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="space-y-1 bg-slate-50 rounded-xl p-3 border border-blue-50/30 text-[11px]">
                        <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block font-mono">Service price:</span>
                        <p className="text-xs text-blue-700 font-bold leading-none mt-1">{item.priceRange || 'Genuine pricing'}</p>
                      </div>

                      <div className="space-y-1.5 text-[11px] border-t border-slate-100 pt-3">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono">Common Indicators:</span>
                        <div className="flex flex-col gap-1">
                          {item.commonSigns.map((sign, idx) => (
                            <span key={idx} className="text-slate-600 font-medium">⚠️ {sign}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <button
                      className="w-full mt-5 bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-700 text-xs font-bold uppercase tracking-wider py-2.5 rounded-xl transition-all cursor-pointer"
                    >
                      Choose Slot Now
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Subsection 2: RO Repair & Maintenance */}
            <div className="mb-14">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-blue-100 pb-3 mb-6">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Water Purifier Repair
                </h2>
                <div className="text-[10px] sm:text-xs text-slate-500 font-medium font-sans mt-1 sm:mt-0">
                  Related Services: <span className="text-blue-600 font-bold">Booster Pump Repair, Adapter Replacement, TDS Tuning, Free Mineral Checkup</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {SERVICES.filter(item => ['repair', 'maintenance', 'tds-adjustment', 'water-testing'].includes(item.id)).map((item) => (
                  <div 
                    key={item.id} 
                    className="bg-white rounded-3xl border border-blue-50/80 p-6 flex flex-col justify-between shadow-md shadow-blue-900/5 hover:shadow-xl hover:shadow-blue-900/10 hover:border-blue-100 transition-all cursor-pointer hover:-translate-y-1"
                    onClick={() => {
                      setServiceBookingForm({
                        ...serviceBookingForm,
                        serviceType: item.id,
                        note: `Required: ${item.title}`
                      });
                      setIsServiceModalOpen(true);
                    }}
                  >
                    <div className="space-y-4 font-sans">
                      <div className="p-2.5 bg-blue-50 rounded-xl border border-blue-100 inline-block text-blue-600">
                        <Droplet className="w-5 h-5" />
                      </div>

                      <div>
                        <h4 className="font-extrabold text-slate-900 text-base">{item.title}</h4>
                        <p className="text-xs text-slate-505 mt-2.5 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="space-y-1 bg-slate-50 rounded-xl p-3 border border-blue-50/30 text-[11px]">
                        <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block font-mono">Service price:</span>
                        <p className="text-xs text-blue-700 font-bold leading-none mt-1">{item.priceRange || 'Genuine pricing'}</p>
                      </div>

                      <div className="space-y-1.5 text-[11px] border-t border-slate-100 pt-3">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono">Common Indicators:</span>
                        <div className="flex flex-col gap-1">
                          {item.commonSigns.map((sign, idx) => (
                            <span key={idx} className="text-slate-600 font-medium">⚠️ {sign}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <button
                      className="w-full mt-5 bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-700 text-xs font-bold uppercase tracking-wider py-2.5 rounded-xl transition-all cursor-pointer"
                    >
                      Choose Slot Now
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Subsection 3: AMC Services */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-blue-100 pb-3 mb-6">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  AMC Services
                </h2>
                <div className="text-[10px] sm:text-xs text-slate-500 font-medium font-sans mt-1 sm:mt-0">
                  Related Services: <span className="text-blue-600 font-bold">Domestic AMC, Corporate Maintenance SLA, Scheduled Multi-Point Diagnostics</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {SERVICES.filter(item => ['amc-services', 'commercial-amc'].includes(item.id)).map((item) => (
                  <div 
                    key={item.id} 
                    className="bg-white rounded-3xl border border-blue-50/80 p-6 flex flex-col justify-between shadow-md shadow-blue-900/5 hover:shadow-xl hover:shadow-blue-900/10 hover:border-blue-100 transition-all cursor-pointer hover:-translate-y-1"
                    onClick={() => {
                      setServiceBookingForm({
                        ...serviceBookingForm,
                        serviceType: item.id,
                        note: `Required: ${item.title}`
                      });
                      setIsServiceModalOpen(true);
                    }}
                  >
                    <div className="space-y-4 font-sans">
                      <div className="p-2.5 bg-blue-50 rounded-xl border border-blue-100 inline-block text-blue-600">
                        <Droplet className="w-5 h-5" />
                      </div>

                      <div>
                        <h4 className="font-extrabold text-slate-900 text-base">{item.title}</h4>
                        <p className="text-xs text-slate-505 mt-2.5 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="space-y-1 bg-slate-50 rounded-xl p-3 border border-blue-50/30 text-[11px]">
                        <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block font-mono">Service price:</span>
                        <p className="text-xs text-blue-700 font-bold leading-none mt-1">{item.priceRange || 'Genuine pricing'}</p>
                      </div>

                      <div className="space-y-1.5 text-[11px] border-t border-slate-100 pt-3">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono">Common Indicators:</span>
                        <div className="flex flex-col gap-1">
                          {item.commonSigns.map((sign, idx) => (
                            <span key={idx} className="text-slate-600 font-medium">⚠️ {sign}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <button
                      className="w-full mt-5 bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-700 text-xs font-bold uppercase tracking-wider py-2.5 rounded-xl transition-all cursor-pointer"
                    >
                      Choose Slot Now
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick multi-brand support ticker bar */}
            <div className="mt-12 bg-white border border-blue-50/80 shadow-md shadow-blue-900/5 rounded-3xl p-8 text-center text-xs space-y-4 font-sans">
              <p className="text-blue-600 font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-1.5 leading-none">
                🔧 Multi-Brand Support Experience
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 font-bold text-slate-500 font-mono text-[11px]">
                <span>KENT RO</span>
                <span className="text-blue-200">•</span>
                <span>AQUAGUARD</span>
                <span className="text-blue-200">•</span>
                <span>PUREIT</span>
                <span className="text-blue-200">•</span>
                <span>LIVPURE</span>
                <span className="text-blue-200">•</span>
                <span>A.O. SMITH</span>
                <span className="text-blue-200">•</span>
                <span>BLUE STAR</span>
                <span className="text-blue-200">•</span>
                <span>HAVELLS</span>
                <span className="text-blue-200">•</span>
                <span className="text-blue-600 font-bold">ALL BRANDS</span>
              </div>
            </div>
          </div>
        </section>


        {/* COMMERCIAL RO PLANTS */}
        <section className="py-16 bg-slate-50 border-b border-slate-200" id="commercial">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <nav className="flex items-center justify-center mb-4 text-[10px] font-bold text-slate-400 gap-1 uppercase tracking-wider font-mono select-none">
                <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToId('hero'); }} className="hover:text-blue-600 transition-colors">Home</a>
                <ChevronRight className="w-3 h-3 text-slate-300" />
                <span className="text-slate-550">Commercial RO Plants</span>
              </nav>
              <span className="text-xs font-black uppercase tracking-widest text-slate-400 bg-slate-900 text-white px-3 py-1 rounded-full">
                HEAVY DUTY SOLUTIONS
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3 tracking-tight">
                Commercial RO Plants
              </h2>
              <p className="text-slate-500 mt-2 text-sm leading-relaxed font-normal">
                From drinking water skids to complex raw borewell water corrections, explore our premium line-up of custom industrial plants available across Hyderabad. Includes full testing on-site!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start font-sans">
              
              {/* Capacity select tabs left column */}
              <div className="lg:col-span-4 space-y-2.5">
                <span className="text-[10px] font-black uppercase text-slate-400 block tracking-widest mb-2 px-1 font-mono">Select Capacity:</span>
                
                {COMMERCIAL_CAPACITIES.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      setActiveCommercialTab(c.id);
                      setCommercialEnquiryForm(f => ({ ...f, capacity: c.capacity }));
                    }}
                    className={`w-full text-left p-4.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                      activeCommercialTab === c.id 
                        ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-100 translate-x-1' 
                        : 'bg-white text-slate-800 border-blue-50 hover:border-blue-100 hover:shadow-md'
                    }`}
                  >
                    <div>
                      <h4 className="font-extrabold text-sm">{c.capacity} Skid Plant</h4>
                      <p className={`text-[10px] mt-1 leading-none ${activeCommercialTab === c.id ? 'text-blue-100' : 'text-slate-400 font-mono'}`}>
                        Output: {c.hourlyOutput}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 shrink-0" />
                  </button>
                ))}
              </div>

              {/* Dynamic details area on Right */}
              <div id="commercial-detail-card" className="lg:col-span-8 bg-white rounded-3xl border border-blue-50/80 p-6 sm:p-8 shadow-xl shadow-blue-900/5">
                {/* 1. Header block containing Capacity, Production Output, and Call/WhatsApp triggers */}
                <div className="border-b border-slate-100 pb-5 mb-6 flex flex-wrap items-center justify-between gap-4 font-sans">
                  <div>
                    <span className="bg-slate-900 text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                      Active SSD Industrial Skid
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight mt-1.5">
                      {currentCommercialDetail.capacity} RO Plant Solution
                    </h3>
                    <p className="text-xs text-blue-700 font-bold mt-1 uppercase font-mono tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping"></span>
                      Production Output: {currentCommercialDetail.hourlyOutput}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2">
                    {/* Call Now button */}
                    <a 
                      href={`tel:${CONTACT_INFO.phones[0]}`}
                      className="bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5 transition-all border border-blue-100 cursor-pointer shadow-sm"
                    >
                      <PhoneCall className="w-3.5 h-3.5" /> Call Now
                    </a>

                    {/* WhatsApp enquiry button */}
                    <a 
                      href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(
                        `Hi Rainbow Aquafresh,\n\nI'm interested in purchasing the ${currentCommercialDetail.capacity} Commercial RO Plant.\n\nPlease send me the price, specifications, warranty, delivery, and installation details.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-md shadow-emerald-100"
                    >
                      <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Enquiry
                    </a>
                  </div>
                </div>

                {/* 2. Visual & Textual split layout content */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  
                  {/* Left visual column - High Resolution Square Product Single Image Container */}
                  <div className="md:col-span-5 space-y-4">
                    <ProductSingleImageUploader 
                      productId={currentCommercialDetail.id} 
                      productName={currentCommercialDetail.capacity} 
                      uploadLabel={`Upload ${currentCommercialDetail.capacity} Image`}
                      customImages={customImages}
                    />
                  </div>

                  {/* Right textual specs and direct quick enquiry form column */}
                  <div className="md:col-span-7 space-y-5">
                    
                    <div>
                      <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">Application Target Profile:</p>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        High performance, USA membrane engineered heavy-duty water purification. Ideal for {currentCommercialDetail.idealFor}.
                      </p>
                    </div>

                    {/* Applications */}
                    <div className="space-y-1.5 border-t border-slate-100 pt-4">
                      <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">Perfect Applications:</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-655 font-medium">
                        {currentCommercialDetail.applications.map((app, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <span className="text-blue-500 select-none">🔹</span>
                            <span className="text-slate-600 font-semibold">{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Features */}
                    <div className="space-y-1.5 border-t border-slate-100 pt-4">
                      <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">Included Plant Features:</p>
                      <ul className="space-y-2 text-xs">
                        {currentCommercialDetail.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-700 font-semibold">
                            <CheckCircle className="w-4 h-4 text-emerald-500 inline shrink-0 mt-0.5" /> 
                            <span className="leading-tight">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technical Specifications */}
                    <div className="space-y-1.5 border-t border-slate-100 pt-4">
                      <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">Technical Specifications Summary:</p>
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/60 text-[11px] font-mono space-y-1">
                        {currentCommercialDetail.specs.map((sp, idx) => (
                          <p key={idx} className="text-slate-600 inline-block mr-4">• {sp}</p>
                        ))}
                      </div>
                    </div>

                    {/* Fast Quote / Enquiry form block */}
                    <div className="bg-slate-50/70 border border-blue-50/60 rounded-2xl p-4.5 space-y-3 mt-2">
                      <p className="text-xs font-black uppercase text-slate-400 tracking-wider text-center font-mono">
                        Fast Commercial Quote & Enquiry
                      </p>
                      
                      <form onSubmit={handleCommercialEnquirySubmit} className="space-y-2.5 text-xs">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          <input
                            type="text"
                            required
                            placeholder="Contact Person Name"
                            className="w-full bg-white border border-blue-100 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-100 text-slate-900 font-medium transition-all"
                            value={commercialEnquiryForm.name}
                            onChange={(e) => setCommercialEnquiryForm({ ...commercialEnquiryForm, name: e.target.value })}
                          />
                          
                          <input
                            type="tel"
                            required
                            placeholder="Your Mobile Number"
                            className="w-full bg-white border border-blue-100 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-100 text-slate-900 font-medium transition-all"
                            value={commercialEnquiryForm.mobile}
                            onChange={(e) => setCommercialEnquiryForm({ ...commercialEnquiryForm, mobile: e.target.value })}
                          />
                        </div>

                        <textarea
                          rows={2}
                          placeholder={`Specify details for your ${currentCommercialDetail.capacity} setup (e.g. Hospital use, Raw water source)...`}
                          className="w-full bg-white border border-blue-100 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-100 text-slate-900 font-medium transition-all"
                          value={commercialEnquiryForm.msg}
                          onChange={(e) => setCommercialEnquiryForm({ ...commercialEnquiryForm, msg: e.target.value })}
                        />

                        <button
                          type="submit"
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-1 transition-all uppercase tracking-widest cursor-pointer shadow-md shadow-blue-100"
                        >
                          Request Quotation Details
                        </button>
                      </form>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* WATER SOFTENERS SECTION */}
        <section className="py-16 bg-white border-b border-slate-200" id="softeners">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <nav className="flex items-center justify-center mb-4 text-[10px] font-bold text-slate-400 gap-1 uppercase tracking-wider font-mono select-none">
                <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToId('hero'); }} className="hover:text-blue-600 transition-colors">Home</a>
                <ChevronRight className="w-3 h-3 text-slate-300" />
                <span className="text-slate-550">Water Softeners</span>
              </nav>
              <span className="text-xs font-black uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full font-mono">
                HARD WATER REMEDIES
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3 tracking-tight">
                Water Softeners
              </h2>
              <p className="text-slate-500 mt-2 text-sm leading-relaxed font-normal">
                Eliminate scaling, protect your expensive plumbing, and enjoy softer water with our automatic water softeners. Perfect for independent houses, villas, and apartments experiencing extreme borewell hardness in Hyderabad.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-slate-100 flex flex-col justify-between hover:shadow-lg transition-all">
                <div>
                  <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider font-mono">Domestic Series</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-3">Semi-Automatic Water Softener</h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed font-medium">
                    Ideal for overhead tanks and individual bathrooms. Uses manual multiport valve for easy regeneration and features heavy-duty food-grade FRP vessels.
                  </p>
                  <ul className="text-xs text-slate-600 mt-4 space-y-2 font-semibold">
                    <li className="flex items-center gap-2">✓ Scale-free bathroom fittings & showers</li>
                    <li className="flex items-center gap-2">✓ Prevents hair fall and dry skin issues</li>
                    <li className="flex items-center gap-2">✓ Protects washing machines and geysers</li>
                  </ul>
                </div>
                <div className="mt-6 border-t border-slate-200/50 pt-4 flex items-center justify-between">
                  <span className="text-xs font-black text-blue-700 font-mono">Starting from ₹18,000</span>
                  <button 
                    onClick={() => {
                      setProductEnquiryForm({
                        name: '',
                        mobile: '',
                        productName: 'Semi-Automatic Water Softener',
                        msg: 'I am interested in the Semi-Automatic Water Softener. Please provide a quotation and details.'
                      });
                      scrollToId('quick-sales-enquiry');
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-bold px-4 py-2 rounded-xl transition-all shadow-xs"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>

              <div className="bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-slate-100 flex flex-col justify-between hover:shadow-lg transition-all">
                <div>
                  <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider font-mono">Premium Series</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-3">Fully Automatic Water Softener</h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed font-medium">
                    Zero manual intervention. Automatically regenerates based on time or volume. Keeps your entire villa or apartment building free from hard-water scaling seamlessly.
                  </p>
                  <ul className="text-xs text-slate-600 mt-4 space-y-2 font-semibold">
                    <li className="flex items-center gap-2">✓ Fully automatic volume/time regeneration</li>
                    <li className="flex items-center gap-2">✓ High-capacity premium resin bed</li>
                    <li className="flex items-center gap-2">✓ Extremely low salt and water waste</li>
                  </ul>
                </div>
                <div className="mt-6 border-t border-slate-200/50 pt-4 flex items-center justify-between">
                  <span className="text-xs font-black text-blue-700 font-mono">Starting from ₹35,000</span>
                  <button 
                    onClick={() => {
                      setProductEnquiryForm({
                        name: '',
                        mobile: '',
                        productName: 'Fully Automatic Water Softener',
                        msg: 'I am interested in the Fully Automatic Water Softener. Please provide a quotation and details.'
                      });
                      scrollToId('quick-sales-enquiry');
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-bold px-4 py-2 rounded-xl transition-all shadow-xs"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* DEALER & FRANCHISE OPPORTUNITY */}
        <section className="py-16 bg-white border-b border-slate-200" id="dealer">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Opportunities list column */}
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-flex items-center gap-1 bg-emerald-50 border border-emerald-250 text-emerald-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider font-mono">
                  🤝 Partnership Support Network
                </span>

                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  Become a Rainbow Aquafresh Dealer
                </h2>

                <p className="text-slate-500 font-normal text-sm leading-relaxed max-w-2xl">
                  Expand your local water services business in Telangana and Andhra Pradesh. We recruit reliable sub-distributors, wholesale shop owners, and freelance filter installation technicians with outstanding training support.
                </p>

                {/* Benefits structured cards list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex gap-4 items-start bg-white p-5 rounded-2xl border border-blue-50/80 shadow-md shadow-blue-900/5 hover:shadow-lg transition-all">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-extrabold text-sm font-mono mt-0.5">
                      01
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-sm">Wholesale Pricing</h4>
                      <p className="text-xs text-slate-500 leading-relaxed mt-1 font-normal">Enjoy maximum distributor profit margins with heavy volume discounts on domestic cabinets & spares bundles.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start bg-white p-5 rounded-2xl border border-blue-50/80 shadow-md shadow-blue-900/5 hover:shadow-lg transition-all">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-extrabold text-sm font-mono mt-0.5">
                      02
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-sm">Technical Training</h4>
                      <p className="text-xs text-slate-500 leading-relaxed mt-1 font-normal">Get 1-on-1 practical hand-holding for testing parameters, multi-valve programming, and industrial skids layout setup.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start bg-white p-5 rounded-2xl border border-blue-50/80 shadow-md shadow-blue-900/5 hover:shadow-lg transition-all">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-extrabold text-sm font-mono mt-0.5">
                      03
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-sm">Marketing Support</h4>
                      <p className="text-xs text-slate-500 leading-relaxed mt-1 font-normal">Receive free physical standees, branded t-shirts, brochures and local catalog guides ready to print.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start bg-white p-5 rounded-2xl border border-blue-50/80 shadow-md shadow-blue-900/5 hover:shadow-lg transition-all">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-extrabold text-sm font-mono mt-0.5">
                      04
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-sm">Territory Opportunities</h4>
                      <p className="text-xs text-slate-500 leading-relaxed mt-1 font-normal">Secure exclusive sales conversion rights in your specific Hyderabad zone pin-codes to avoid cross competition.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lead registration form panel */}
              <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-8 shadow-2xl relative border border-slate-800">
                <h3 className="text-lg font-black tracking-tight flex items-center gap-1.5 leading-none">
                  👥 Dealer Registration Form
                </h3>
                <p className="text-xs text-slate-400 mt-2 font-normal">Submit your operational details to connect instantly with the manager.</p>
                
                <form onSubmit={handleDealerSubmit} className="mt-5 space-y-4 text-sm font-sans">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 font-mono" htmlFor="dealer-name">Your Full Name *</label>
                    <input
                      id="dealer-name"
                      type="text"
                      required
                      placeholder="e.g. Madhan Kumar"
                      className="w-full text-xs bg-slate-800/80 border border-slate-700 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium transition-all"
                      value={dealerForm.name}
                      onChange={(e) => setDealerForm({ ...dealerForm, name: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 font-mono" htmlFor="dealer-phone">Contact Mobile *</label>
                      <input
                        id="dealer-phone"
                        type="tel"
                        required
                        placeholder="10-digit number"
                        className="w-full text-xs bg-slate-800/80 border border-slate-700 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium transition-all"
                        value={dealerForm.mobile}
                        onChange={(e) => setDealerForm({ ...dealerForm, mobile: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 font-mono" htmlFor="dealer-city">City/Area Territory *</label>
                      <input
                        id="dealer-city"
                        type="text"
                        required
                        placeholder="e.g. Secunderabad"
                        className="w-full text-xs bg-slate-800/80 border border-slate-700 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium transition-all"
                        value={dealerForm.city}
                        onChange={(e) => setDealerForm({ ...dealerForm, city: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 font-mono" htmlFor="dealer-type">Current Business Type *</label>
                    <select
                      id="dealer-type"
                      className="w-full text-xs bg-slate-800/80 border border-slate-700 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium transition-all"
                      value={dealerForm.businessType}
                      onChange={(e) => setDealerForm({ ...dealerForm, businessType: e.target.value })}
                    >
                      <option value="Retail Store Counter">Retail Store Counter</option>
                      <option value="Freelancer Tech / Plumber">Freelancer Tech / Plumber</option>
                      <option value="Hardware Wholesale Supplier">Hardware Wholesale Supplier</option>
                      <option value="Individual Direct Sales agent">Individual Direct Sales agent</option>
                      <option value="Other Startup Business">Other Startup Business</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 font-mono" htmlFor="dealer-msg">Brief Message (e.g. storage/volumes capacity)</label>
                    <textarea
                      id="dealer-msg"
                      rows={2}
                      placeholder="Expected initial stock requirements..."
                      className="w-full text-xs bg-slate-800/80 border border-slate-700 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium transition-all"
                      value={dealerForm.message}
                      onChange={(e) => setDealerForm({ ...dealerForm, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl shadow-lg shadow-emerald-950/30 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>🤝 Register & Send Proposal</span>
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>


        {/* REVIEWS CAROUSEL */}
        <section className="py-16 bg-slate-50 border-b border-slate-200" id="reviews">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-black uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                CUSTOMER FEEDBACK
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 tracking-tight">
                Customer Reviews
              </h2>
              <p className="text-slate-500 mt-2 text-sm leading-relaxed font-normal">
                Don’t just take our word for it—read our latest 5-star Google reviews from homeowners, shop managers, and factory engineers who trust us.
              </p>
            </div>

            {/* Testimonials horizontal scroll / grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {GOOGLE_REVIEWS.map((rev) => (
                <div key={rev.id} className="bg-white rounded-2xl border border-slate-205 p-6 shadow-3xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center font-black text-xs text-blue-800 font-mono">
                          {rev.name[0]}
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 text-sm leading-none">{rev.name}</h4>
                          <span className="text-[10px] text-slate-400 mt-1 block">{rev.date}</span>
                        </div>
                      </div>
                      
                      {/* Source Google seal */}
                      <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md font-bold font-mono">
                        {rev.source}
                      </span>
                    </div>

                    {/* Standard Five Star rating rendering */}
                    <div className="flex gap-1 py-3 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed italic font-normal">
                      "{rev.comment}"
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center text-[10px] text-slate-405 font-bold">
                    <span>📍 Verified Client</span>
                    <span className="text-blue-600">★★★★★ Rated</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* SERVICE AREAS ZONE SELECTOR */}
        <section className="py-16 bg-white border-b border-slate-200" id="areas">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Keywords area column */}
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-black uppercase tracking-widest text-blue-700 select-none">HYDERABAD LOCALITY SERVICE COVERAGE</span>
                
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-none">
                  Our Service Coverage Areas in Hyderabad
                </h2>

                <p className="text-slate-500 font-normal mt-2 text-sm leading-relaxed">
                  We are based in <strong>Malakpet, Hyderabad</strong>, and coordinate trained, mobile active technicians across all prime urban zones daily.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs pt-2.5 font-sans">
                  {SERVICE_AREAS.slice(0, 10).map((area, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white border border-blue-50/60 shadow-sm shadow-blue-900/3 hover:shadow-md hover:border-blue-100 rounded-xl p-3.5 flex flex-col justify-between transition-all"
                    >
                      <span className="font-extrabold text-slate-800">{area.name}</span>
                      <span className="text-[10px] text-slate-405 font-mono mt-1.5 leading-none">{area.pincodes && area.pincodes[0] ? `PIN: ${area.pincodes[0]}` : 'Zone wide'}</span>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed italic">
                  * Note: For suburbs or deep zone districts not mentioned in standard catalogs, we arrange scheduled delivery visits on a prior 24-hour notice call.
                </p>
              </div>

              {/* Dynamic location Checker on right */}
              <div className="lg:col-span-5 bg-white border border-blue-50/80 shadow-xl shadow-blue-900/5 rounded-3xl p-6 sm:p-8 font-sans">
                <h4 className="font-extrabold text-slate-900 text-sm tracking-tight flex items-center gap-1.5 leading-none">
                  <MapPin className="text-blue-600 shrink-0 w-4.5 h-4.5" /> Local Service Checker Tool
                </h4>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">Check if our service experts are active in your locality pincode or area right now.</p>
                
                <form onSubmit={handleCheckArea} className="mt-5 flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <input
                      required
                      type="text"
                      placeholder="Enter Area e.g. LB Nagar or Pin"
                      className="w-full pl-9.5 pr-3 py-2.5 text-xs border border-blue-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 bg-white font-medium transition-all"
                      value={areaSearchKeyword}
                      onChange={(e) => setAreaSearchKeyword(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase px-5 rounded-xl shadow-md shadow-blue-100 transition-all cursor-pointer"
                  >
                    Check Zone
                  </button>
                </form>

                {/* Display matched result dynamically */}
                {areaSearchResult && (
                  <div className="mt-5 bg-slate-50 rounded-2xl border border-blue-50/80 p-5 animate-in fade-in slide-in-from-top-4 duration-250">
                    <p className="font-extrabold text-blue-900 text-sm flex items-center gap-1">{areaSearchResult.name}</p>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      {areaSearchResult.notes}
                    </p>
                    {areaSearchResult.pincodes && areaSearchResult.pincodes.length > 0 && (
                      <p className="text-[10px] text-slate-400 mt-2 font-mono">
                        Active pin-codes: {areaSearchResult.pincodes.join(', ')}
                      </p>
                    )}
                    <button
                      onClick={() => scrollToId('hero')}
                      className="mt-4 text-xs font-bold text-blue-600 hover:text-blue-800 inline-block cursor-pointer border-b border-dashed border-blue-600 pb-0.5 leading-none"
                    >
                      → Book Service in this Locality slot
                    </button>
                  </div>
                )}
              </div>

            </div>
          </div>
        </section>


        {/* DEDICATED SALES ENQUIRY SECTION */}
        <section className="py-16 bg-slate-50 border-b border-slate-200" id="quick-sales-enquiry">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl border border-slate-205 p-8 lg:p-12 shadow-xl">
              <div className="max-w-3xl mx-auto text-center mb-8">
                <h3 className="text-xs font-black uppercase tracking-widest text-blue-700">GOT AN ENQUIRY?</h3>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 tracking-tight">Domestic RO Sales Enquiry</h2>
                <p className="text-slate-500 mt-2 text-sm">
                  Specify details below. Our representative will contact you with specific model pricing, catalogs, and installation calendars.
                </p>
              </div>

              <form onSubmit={handleProductEnquirySubmit} className="max-w-2xl mx-auto space-y-4 text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-705 uppercase mb-1" htmlFor="sales-name">Your Full Name *</label>
                    <input
                      id="sales-name"
                      required
                      type="text"
                      placeholder="e.g. Anand Kumar"
                      className="w-full text-xs border border-slate-350 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      value={productEnquiryForm.name}
                      onChange={(e) => setProductEnquiryForm({ ...productEnquiryForm, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-750 uppercase mb-1" htmlFor="sales-phone">Your Mobile Phone *</label>
                    <input
                      id="sales-phone"
                      required
                      type="tel"
                      placeholder="10 digit contact number"
                      className="w-full text-xs border border-slate-350 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      value={productEnquiryForm.mobile}
                      onChange={(e) => setProductEnquiryForm({ ...productEnquiryForm, mobile: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-755 uppercase mb-1" htmlFor="sales-product">Select Model Interested *</label>
                    <select
                      id="sales-product"
                      className="w-full text-xs border border-slate-350 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      value={productEnquiryForm.productName}
                      onChange={(e) => setProductEnquiryForm({ ...productEnquiryForm, productName: e.target.value })}
                    >
                      <option value="">-- Choose a Perfect Model --</option>
                      {DOMESTIC_PRODUCTS.map((prod) => (
                        <option key={prod.id} value={prod.name}>{prod.name} Purifiers</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-755 uppercase mb-1" htmlFor="sales-desc">Brief Query message</label>
                    <input
                      id="sales-desc"
                      type="text"
                      placeholder="e.g. Need alkaline bio calcium filter details"
                      className="w-full text-xs border border-slate-350 rounded-lg px-3 py-2 text-slate-900"
                      value={productEnquiryForm.msg}
                      onChange={(e) => setProductEnquiryForm({ ...productEnquiryForm, msg: e.target.value })}
                    />
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-lg text-xs uppercase tracking-wider shadow-md transition-all inline-flex items-center gap-2"
                  >
                    <span>⚡ Submit Enquiry & Chat WA</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>


        {/* FREQUENTLY ASKED QUESTIONS SECTION */}
        <section className="py-16 bg-white border-b border-slate-200" id="faq">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <nav className="flex items-center justify-center mb-4 text-[10px] font-bold text-slate-400 gap-1 uppercase tracking-wider font-mono select-none">
                <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToId('hero'); }} className="hover:text-blue-600 transition-colors">Home</a>
                <ChevronRight className="w-3 h-3 text-slate-300" />
                <span className="text-slate-550">FAQ</span>
              </nav>
              <span className="text-xs font-black uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                FAQ GUIDE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 tracking-tight">
                FAQ
              </h2>
              <p className="text-slate-500 mt-2 text-sm">
                Clear, expert answers to common queries regarding RO sales, repairs, installation, and AMC services in Hyderabad.
              </p>
            </div>

            <div className="space-y-4">
              {faqItems.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-slate-50 transition-all p-4 cursor-pointer"
                  onClick={() => toggleFaq(idx)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">{faq.question}</h3>
                    <span className="text-blue-600 font-extrabold text-lg shrink-0">
                      {expandedFaq === idx ? '−' : '+'}
                    </span>
                  </div>
                  {expandedFaq === idx && (
                    <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-200">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VERIFIED CUSTOMER TESTIMONIALS SECTION */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
          <TestimonialsSection />
        </div>

        {/* MAIN CONTACT SECTION */}
        <section className="py-16 bg-white" id="contact">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column context parameters */}
              <div className="lg:col-span-4 space-y-6">
                <div>
                  <nav className="flex items-center text-[10px] font-bold text-slate-400 gap-1 uppercase tracking-wider font-mono select-none mb-2.5">
                    <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToId('hero'); }} className="hover:text-blue-600 transition-colors">Home</a>
                    <ChevronRight className="w-3 h-3 text-slate-300" />
                    <span className="text-slate-550">Contact Us</span>
                  </nav>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">CONNECT WITH EXPERTS</span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 tracking-tight">
                    Contact Us
                  </h2>
                  <p className="text-slate-500 font-normal mt-2 text-sm leading-relaxed">
                    Come have a cup of tea and test your tap water TDS index absolutely free of cost at our head branch office.
                  </p>
                </div>

                <div className="space-y-4 text-xs font-medium">
                  {/* Address block */}
                  <div className="flex gap-2.5 items-start">
                    <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-extrabold text-slate-905">Office Headquarters:</p>
                      <p className="text-slate-655 mt-0.5 leading-relaxed">{CONTACT_INFO.address}</p>
                    </div>
                  </div>

                  {/* Phone block */}
                  <div className="flex gap-2.5 items-start">
                    <Phone className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-extrabold text-slate-905">Active Call Support Lines:</p>
                      <p className="text-slate-655 mt-0.5">
                        {CONTACT_INFO.phones.join(' OR ')}
                      </p>
                      <span className="text-[11px] text-slate-450 block mt-1 tracking-wider uppercase font-mono">Available: 24/7 Priority Emergency support</span>
                    </div>
                  </div>

                  {/* WhatsApp Support block */}
                  <div className="flex gap-2.5 items-start">
                    <MessageSquare className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-extrabold text-slate-905">Live WhatsApp Chat Desk:</p>
                      <p className="text-slate-655 mt-0.5">Contact manager directly via mobile text chat.</p>
                      <a 
                        href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(
                          "Hi Rainbow Aquafresh,\n\nI'd like to enquire about your RO water purifier products and services.\n\nPlease share the details."
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-700 hover:text-blue-800 font-bold block mt-1"
                      >
                        Launch Direct Chat window →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Direct Google reviews counters badge */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-between shadow-2xs">
                  <div>
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4.5 h-4.5 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs text-slate-800 font-bold mt-1">4.9 Star Verified Client Rating</p>
                    <p className="text-[10px] text-slate-400">Based on 280+ total reviews in Malakpet</p>
                  </div>
                  <CheckCircle className="w-10 h-10 text-blue-600 opacity-60 shrink-0" />
                </div>
              </div>

              {/* Right Column general contact form */}
              <div className="lg:col-span-8 bg-slate-50 rounded-2xl border border-slate-205 p-6 sm:p-8 shadow-xs">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Send Offline Query Message</p>
                <h3 className="text-lg font-black text-slate-900 tracking-tight mt-0.5">Rainbow Water Quality Support</h3>
                
                <form onSubmit={handleGeneralContactSubmit} className="mt-4 space-y-4 text-xs font-medium">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-slate-700 mb-1" htmlFor="cont-name">Client Name *</label>
                      <input
                        id="cont-name"
                        required
                        type="text"
                        placeholder="Your Name"
                        className="w-full bg-white border border-slate-350 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-600"
                        value={generalContactForm.name}
                        onChange={(e) => setGeneralContactForm({ ...generalContactForm, name: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 mb-1" htmlFor="cont-phone">Mobile Phone *</label>
                      <input
                        id="cont-phone"
                        required
                        type="tel"
                        placeholder="Active Mobile"
                        className="w-full bg-white border border-slate-350 rounded-lg px-3 py-2 text-slate-900"
                        value={generalContactForm.mobile}
                        onChange={(e) => setGeneralContactForm({ ...generalContactForm, mobile: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-slate-705 mb-1" htmlFor="cont-email">Email ID (Optional)</label>
                      <input
                        id="cont-email"
                        type="email"
                        placeholder="name@email.com"
                        className="w-full bg-white border border-slate-350 rounded-lg px-3 py-2 text-slate-900"
                        value={generalContactForm.email}
                        onChange={(e) => setGeneralContactForm({ ...generalContactForm, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-705 mb-1" htmlFor="cont-msg">Detailed Query message *</label>
                    <textarea
                      id="cont-msg"
                      rows={3}
                      required
                      placeholder="Ask us anything about price quote, parts validation or water pH testing"
                      className="w-full bg-white border border-slate-350 rounded-lg px-3 py-2 text-slate-900"
                      value={generalContactForm.message}
                      onChange={(e) => setGeneralContactForm({ ...generalContactForm, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-blue-750 hover:bg-blue-800 text-white font-bold py-2.5 px-6 rounded-lg shadow-sm font-sans uppercase tracking-wide text-xs"
                  >
                    Submit Messages Query
                  </button>
                </form>

                {/* Google Map dynamic iframe embed */}
                <div className="mt-6 border border-slate-200 rounded-xl overflow-hidden h-48 relative">
                  <iframe
                    src={CONTACT_INFO.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    title="Rainbow Aquafresh Systems Malakpet Map Pin"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* NEWSLETTER FORM BAR */}
        <section className="bg-slate-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              
              <div className="space-y-1 text-center md:text-left">
                <h3 className="text-lg font-bold">Subscribe to Pure-Health reminders</h3>
                <p className="text-xs text-slate-400">Get periodic guides for filter changes, TDS testing recommendations & holiday offers.</p>
              </div>

              <form onSubmit={handleNewsletterSubmit} className="flex gap-2 w-full max-w-md shrink-0">
                <input
                  required
                  type="email"
                  placeholder="name@email.com"
                  className="bg-slate-800 text-white text-xs px-4 py-2.5 rounded-lg flex-1 border border-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                />
                
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-5 py-2.5 rounded-lg uppercase tracking-wider shadow-sm transition-all text-center"
                >
                  Join List
                </button>
              </form>

            </div>
          </div>
        </section>
          </>
        )}
      </main>

      {/* FLOATING CALL-TO-ACTION BUTTONS */}
      {/* Bottom Right: Floating Call and WhatsApp Buttons */}
      <div 
        id="floating-cta-right-container"
        className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none text-sans select-none"
      >
        {/* Floating Call Button */}
        <div className="pointer-events-auto">
          <a
            id="floating-call-button"
            href="tel:+918885556965"
            className="flex items-center gap-2 bg-blue-650 hover:bg-blue-700 text-white font-black px-4.5 py-3 rounded-full shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 active:scale-95 group border border-blue-400/20"
          >
            <Phone className="w-4 h-4 text-white fill-white group-hover:rotate-12 transition-transform shrink-0" />
            <span className="text-xs font-black uppercase tracking-wider hidden sm:inline">Call Now</span>
          </a>
        </div>

        {/* Floating WhatsApp Button */}
        <div className="pointer-events-auto relative">
          {/* Pulsing ring effect */}
          <div className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping pointer-events-none" style={{ animationDuration: '3s' }} />
          <a
            id="floating-whatsapp-button"
            href={`https://wa.me/918885556965?text=${encodeURIComponent(
              "Hi Rainbow Aquafresh,\n\nI'd like to enquire about your RO water purifier products and services.\n\nPlease share the details."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="relative flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-black px-4.5 py-3 rounded-full shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/35 transition-all duration-300 hover:scale-105 active:scale-95 group border border-emerald-400/20"
          >
            <MessageSquare className="w-4 h-4 text-white fill-white group-hover:scale-110 transition-transform shrink-0" />
            <span className="text-xs font-black uppercase tracking-wider hidden sm:inline">WhatsApp Now</span>
          </a>
        </div>
      </div>

      {/* Bottom Left: Floating Service Booking Button */}
      <div 
        id="floating-cta-left-container"
        className="fixed bottom-6 left-6 z-40 pointer-events-none text-sans select-none"
      >
        <div className="pointer-events-auto">
          <button
            id="floating-booking-button"
            onClick={() => setIsServiceModalOpen(true)}
            className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-black px-4.5 py-3 rounded-full shadow-lg shadow-slate-950/40 hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group border border-slate-705 cursor-pointer"
          >
            <Wrench className="w-4 h-4 text-sky-400 group-hover:rotate-12 transition-transform shrink-0" />
            <span className="text-xs font-black uppercase tracking-wider hidden sm:inline">Book Service</span>
            {/* Tiny green online dot */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
          </button>
        </div>
      </div>



      {/* SERVICE BOOKING POPUP MODAL */}
      <AnimatePresence>
        {isServiceModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-blue-50 text-slate-800"
            >
              {/* Top Banner section */}
              <div className="bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-5 text-white relative">
                <button
                  onClick={() => setIsServiceModalOpen(false)}
                  className="absolute top-4 right-4 text-white hover:bg-white/10 p-1.5 rounded-full transition-colors cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-1.5">
                  <Wrench className="w-4.5 h-4.5 text-sky-200" />
                  <span className="text-[10px] uppercase font-black tracking-widest text-sky-100">Same-Day Priority Booking</span>
                </div>
                <h3 className="text-xl font-extrabold mt-1 tracking-tight">Rapid RO Service Scheduler</h3>
                <p className="text-xs text-blue-100 mt-1 leading-normal font-medium">Connects with our service team instantly via WhatsApp on submission.</p>
              </div>

              {/* Form Content */}
              <form onSubmit={handleServiceSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-[11px] font-black text-slate-700 uppercase tracking-widest mb-1.5" htmlFor="modal-service-name">
                    Your Full Name *
                  </label>
                  <input
                    id="modal-service-name"
                    type="text"
                    placeholder="e.g. Prasad Rao"
                    required
                    className="w-full text-xs border border-blue-100 bg-slate-50/50 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 font-medium transition-all"
                    value={serviceBookingForm.name}
                    onChange={(e) => setServiceBookingForm({ ...serviceBookingForm, name: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-black text-slate-700 uppercase tracking-widest mb-1.5" htmlFor="modal-service-phone">
                      Mobile Phone *
                    </label>
                    <input
                      id="modal-service-phone"
                      type="tel"
                      placeholder="10-digit number"
                      required
                      className="w-full text-xs border border-blue-100 bg-slate-50/50 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 font-medium transition-all"
                      value={serviceBookingForm.mobile}
                      onChange={(e) => setServiceBookingForm({ ...serviceBookingForm, mobile: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-black text-slate-700 uppercase tracking-widest mb-1.5" htmlFor="modal-service-area">
                      Your Area Location *
                    </label>
                    <select
                      id="modal-service-area"
                      className="w-full text-xs border border-blue-100 bg-slate-50/50 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 font-medium transition-all cursor-pointer"
                      value={serviceBookingForm.area}
                      onChange={(e) => setServiceBookingForm({ ...serviceBookingForm, area: e.target.value })}
                    >
                      {SERVICE_AREAS.map((a, idx) => (
                        <option key={idx} value={a.name}>{a.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-black text-slate-700 uppercase tracking-widest mb-1.5" htmlFor="modal-service-type">
                    Required Solution *
                  </label>
                  <select
                    id="modal-service-type"
                    className="w-full text-xs border border-blue-100 bg-slate-50/50 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 font-medium transition-all cursor-pointer"
                    value={serviceBookingForm.serviceType}
                    onChange={(e) => setServiceBookingForm({ ...serviceBookingForm, serviceType: e.target.value })}
                  >
                    {SERVICES.map((serv) => (
                      <option key={serv.id} value={serv.id}>{serv.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-black text-slate-700 uppercase tracking-widest mb-1.5" htmlFor="modal-service-note">
                    Issues description (Optional)
                  </label>
                  <textarea
                    id="modal-service-note"
                    rows={2}
                    placeholder="e.g. Water is leaking, filter change, low TDS taste"
                    className="w-full text-xs border border-blue-100 bg-slate-50/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 text-slate-900 font-medium transition-all"
                    value={serviceBookingForm.note}
                    onChange={(e) => setServiceBookingForm({ ...serviceBookingForm, note: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-black uppercase tracking-wider py-4 rounded-xl shadow-lg shadow-blue-100 transition-all hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4.5 h-4.5" />
                  <span>Submit & Connect WhatsApp</span>
                </button>

                <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest mt-1">Or Call Support Lines Directly</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-1.5 pt-2 border-t border-slate-100">
                  <a
                    href="tel:+918885556965"
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50/50 hover:bg-blue-100 border border-blue-100 px-3 py-2 rounded-xl transition-all flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 animate-pulse text-blue-500 shrink-0" />
                    <span>Primary: +91 8885556965</span>
                  </a>
                  <a
                    href="tel:+918341256965"
                    className="text-xs font-bold text-slate-650 hover:text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-200 px-3 py-2 rounded-xl transition-all flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span>Secondary: +91 8341256965</span>
                  </a>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isPrivacyModalOpen && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-2xl w-full max-h-[85vh] overflow-y-auto font-sans text-xs sm:text-sm text-slate-650 relative"
            >
              <div className="p-6 sm:p-8 space-y-4">
                <button
                  onClick={() => setIsPrivacyModalOpen(false)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-full transition-colors cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">Privacy Policy</h3>
                </div>
                <p className="text-xs text-slate-400 font-mono">Last Updated: June 25, 2026</p>
                <p className="leading-relaxed">
                  At <strong>Rainbow Aquafresh Systems</strong>, we prioritize the privacy of our visitors and clients in Hyderabad. This Privacy Policy document outlines the types of information we collect, how we use it, and how we protect it.
                </p>
                <h4 className="text-sm font-bold text-slate-900">1. Information Collection and Use</h4>
                <p className="leading-relaxed">
                  We collect basic customer information when you submit an enquiry form or make a booking, such as your full name, contact mobile phone number, area location, and your specific water purifier system requirements. This information is solely used to establish contact and deliver our services.
                </p>
                <h4 className="text-sm font-bold text-slate-900">2. Data Security & Storage</h4>
                <p className="leading-relaxed">
                  Your details are stored securely within local clients and never shared, leased, or sold to third-party marketing companies. We only share operational scheduling details with our registered water treatment service technicians for home maintenance runs.
                </p>
                <h4 className="text-sm font-bold text-slate-900">3. Cookies</h4>
                <p className="leading-relaxed">
                  Our website uses standard browser session cookies to optimize loading times, keep your locally saved product catalogs active, and verify area eligibility. No personal diagnostic data is tracked.
                </p>
                <div className="pt-4 border-t border-slate-100 flex justify-end">
                  <button 
                    onClick={() => setIsPrivacyModalOpen(false)}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all cursor-pointer"
                  >
                    I Accept
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {isTermsModalOpen && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-2xl w-full max-h-[85vh] overflow-y-auto font-sans text-xs sm:text-sm text-slate-650 relative"
            >
              <div className="p-6 sm:p-8 space-y-4">
                <button
                  onClick={() => setIsTermsModalOpen(false)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-full transition-colors cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">Terms & Conditions</h3>
                </div>
                <p className="text-xs text-slate-400 font-mono">Last Updated: June 25, 2026</p>
                <p className="leading-relaxed">
                  Welcome to <strong>Rainbow Aquafresh Systems</strong>. By accessing our website, booking our servicing professionals, or purchasing our domestic and commercial RO systems, you agree to comply with the following terms.
                </p>
                <h4 className="text-sm font-bold text-slate-900">1. Servicing & Diagnostics</h4>
                <p className="leading-relaxed">
                  Our domestic service diagnostics fee is flat-rate based on the selected area in Hyderabad. Our on-site service experts will evaluate your raw water TDS index and provide a complete transparent quote before installing replacement filter membranes or electrical pumps.
                </p>
                <h4 className="text-sm font-bold text-slate-900">2. Warranty Exclusions</h4>
                <p className="leading-relaxed">
                  Warranties apply exclusively to genuine spare parts and RO electrical components (SMPS, booster pumps, solenoid valves) supplied by us. Consumable filters (sediment, carbon, pre-filter candle) are subject to raw water input turbidity levels and are not warranted against physical clogging.
                </p>
                <h4 className="text-sm font-bold text-slate-900">3. Installation Demarcation</h4>
                <p className="leading-relaxed">
                  Standard domestic water purifier installation includes mounting, layout lines, and initial TDS tuning. Customers must provide an active electricity power outlet and a tap point within 1.5 meters of the installation zone.
                </p>
                <div className="pt-4 border-t border-slate-100 flex justify-end">
                  <button 
                    onClick={() => setIsTermsModalOpen(false)}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all cursor-pointer"
                  >
                    I Understand
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {isBlogModalOpen && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-3xl w-full max-h-[85vh] overflow-y-auto font-sans text-xs sm:text-sm text-slate-650 relative"
            >
              <div className="p-6 sm:p-8 space-y-6">
                <button
                  onClick={() => setIsBlogModalOpen(false)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-slate-650 p-1.5 rounded-full transition-colors cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-2">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                  <div>
                    <h3 className="text-xl font-black text-slate-900 tracking-tight">Rainbow Pure-Water Knowledge Blog</h3>
                    <p className="text-[10px] text-slate-450 uppercase font-bold font-mono tracking-widest mt-0.5">Authoritative Water Treatment Insights for Hyderabad Residents</p>
                  </div>
                </div>

                <div className="space-y-8 divide-y divide-slate-150">
                  {/* Article 1 */}
                  <div className="pt-2">
                    <span className="text-[10px] font-black uppercase bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-mono">Water Quality Guide</span>
                    <h4 className="text-md font-extrabold text-slate-900 mt-2 leading-snug">RO Water Purifier Hyderabad: Understanding Safe TDS Levels for Drinking Water</h4>
                    <p className="text-slate-400 text-[10px] flex items-center gap-1.5 mt-1 font-semibold">
                      <Clock className="w-3 h-3" /> 4 Min Read • Written by Purifier Expert
                    </p>
                    <p className="mt-2 leading-relaxed">
                      Total Dissolved Solids (TDS) refers to inorganic salts and organic matter dissolved in water. For the citizens of Hyderabad, understanding this index is crucial. Municipal water supply (Manjeera/Krishna) usually has a TDS of 150-250 ppm, which is generally soft. However, groundwater and borewell water in areas like LB Nagar, Gachibowli, or Kukatpally can spike above 1000-2000 ppm. 
                    </p>
                    <p className="mt-2 leading-relaxed font-semibold text-slate-850">
                      TDS safe index baseline:
                    </p>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li><strong>Below 300 ppm:</strong> Excellent for drinking, soft, and sweet taste.</li>
                      <li><strong>300 - 600 ppm:</strong> Good quality, standard for mineralized water.</li>
                      <li><strong>600 - 900 ppm:</strong> Fairly hard, requires filtration to avoid scale build-up.</li>
                      <li><strong>Above 1200 ppm:</strong> Highly unpalatable and unsafe; mandatory to use an active multi-stage **RO Water Purifier Hyderabad** with advanced TDS adjusters.</li>
                    </ul>
                    <p className="mt-2 leading-relaxed">
                      At Rainbow Aquafresh Systems, our installation experts calibrate every domestic RO purifier unit with precise TDS controllers to ensure your water retains healthy essential minerals like calcium and magnesium while stripping toxic heavy metals.
                    </p>
                  </div>

                  {/* Article 2 */}
                  <div className="pt-6">
                    <span className="text-[10px] font-black uppercase bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-mono">Maintenance Tips</span>
                    <h4 className="text-md font-extrabold text-slate-900 mt-2 leading-snug">RO Service Hyderabad: How Often Should You Replace Filters & Membranes?</h4>
                    <p className="text-slate-400 text-[10px] flex items-center gap-1.5 mt-1 font-semibold">
                      <Clock className="w-3 h-3" /> 5 Min Read • Written by Service Manager
                    </p>
                    <p className="mt-2 leading-relaxed">
                      Regularly scheduling your **RO Service Hyderabad** is the easiest way to prevent expensive water purifier break-downs. A domestic RO system operates under high pressure, forcing water through micro-pores. Over time, physical contaminants block these pathways.
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li><strong>Spun Pre-Filter:</strong> Change every 3 to 6 months. It takes the brunt of mud, silt, and rust particles.</li>
                      <li><strong>Sediment & Activated Carbon Filters:</strong> Replace every 12 months. This protects the RO membrane from chlorine damage and removes organic odors.</li>
                      <li><strong>RO Membrane:</strong> Change every 1.5 to 2 years, depending on input hardness. If water taste turns salty or flow rate drops, call for **RO Repair Hyderabad** services immediately.</li>
                    </ul>
                    <p className="mt-2 leading-relaxed">
                      To take the hassle out of tracking dates, we offer custom **AMC Services** in Hyderabad. Our automated CRM system schedules and dispatches water quality experts to your doorstep twice a year for full filter testing, ensuring pure water and peace of mind!
                    </p>
                  </div>

                  {/* Article 3 */}
                  <div className="pt-6">
                    <span className="text-[10px] font-black uppercase bg-purple-100 text-purple-800 px-2 py-0.5 rounded font-mono">Industrial Water Tech</span>
                    <h4 className="text-md font-extrabold text-slate-900 mt-2 leading-snug">Why Your Business Needs a Heavy-Duty Commercial RO Plant in Hyderabad</h4>
                    <p className="text-slate-400 text-[10px] flex items-center gap-1.5 mt-1 font-semibold">
                      <Clock className="w-3 h-3" /> 4 Min Read • Written by Engineering Lead
                    </p>
                    <p className="mt-2 leading-relaxed">
                      Whether you run a manufacturing facility, a hostel, a school, or a corporate workspace, clean water is a fundamental requirement. A standard domestic filter is insufficient for high-volume requirements. This is where a custom **Commercial RO Plant** becomes indispensable.
                    </p>
                    <p className="mt-2 leading-relaxed">
                      Our commercial systems start from 25 LPH up to 5000 LPH, using heavy-duty booster pumps and high-flux multi-port media vessels. Investing in proper industrial systems reduces plumbing scale blockages, keeps cafeteria food fresh and safe, and protects boiler equipment from calcification.
                    </p>
                    <p className="mt-2 leading-relaxed text-blue-700 font-bold">
                      Ready to upgrade? Call +91 8885556965 to book a free on-site water quality assessment and commercial layout drafting today!
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex justify-end">
                  <button 
                    onClick={() => setIsBlogModalOpen(false)}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all cursor-pointer shadow-md"
                  >
                    Close Blog
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* SEO rich structured footer */}
      <Footer 
        onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
        onOpenTerms={() => setIsTermsModalOpen(true)}
        onOpenBlog={() => {
          window.history.pushState(null, '', '/blog');
          window.dispatchEvent(new PopStateEvent('popstate'));
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenAdmin={() => setIsAdminModalOpen(true)}
        scrollToId={scrollToId}
      />
    </div>
  );
}
