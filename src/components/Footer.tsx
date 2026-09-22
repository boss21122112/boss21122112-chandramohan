import React from 'react';
import { CONTACT_INFO, SERVICE_AREAS } from '../data';
import { Youtube, Instagram, MapPin, Phone, Mail, Globe, Check } from 'lucide-react';

export interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
  onOpenBlog?: () => void;
  onOpenAdmin?: () => void;
  scrollToId?: (id: string) => void;
}

export default function Footer({ onOpenPrivacy, onOpenTerms, onOpenBlog, onOpenAdmin, scrollToId }: FooterProps) {
  const currentYear = new Date().getFullYear();

  // Inject Google Rich Snippets SEO Schema Graph (LocalBusiness, Organization, WebSite, BreadcrumbList, Product, Service, FAQ)
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://www.rainbowafs.com/#website',
        'url': 'https://www.rainbowafs.com',
        'name': 'Rainbow Aquafresh Systems',
        'description': 'RO Water Purifier Sales, Service & Commercial RO Plants in Hyderabad.',
        'potentialAction': {
          '@type': 'SearchAction',
          'target': {
            '@type': 'EntryPoint',
            'urlTemplate': 'https://www.rainbowafs.com/?q={search_term_string}'
          },
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'Organization',
        '@id': 'https://www.rainbowafs.com/#organization',
        'name': CONTACT_INFO.companyName,
        'url': 'https://www.rainbowafs.com',
        'logo': 'https://www.rainbowafs.com/logo-purifier.png',
        'sameAs': [
          `https://instagram.com/${CONTACT_INFO.instagram}`,
          `https://youtube.com/${CONTACT_INFO.youtube}`
        ]
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://www.rainbowafs.com/#localbusiness',
        'name': CONTACT_INFO.companyName,
        'image': 'https://www.rainbowafs.com/logo-purifier.png',
        'url': 'https://www.rainbowafs.com',
        'telephone': CONTACT_INFO.phones[0],
        'priceRange': '$$',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': '16-10-27/109, 37-2RT, MCH Colony, Malakpet',
          'addressLocality': 'Hyderabad',
          'addressRegion': 'Telangana',
          'postalCode': '500036',
          'addressCountry': 'IN'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 17.356234,
          'longitude': 78.498877
        },
        'openingHoursSpecification': {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': [
            'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
          ],
          'opens': '00:00',
          'closes': '23:59'
        },
        'sameAs': [
          `https://instagram.com/${CONTACT_INFO.instagram}`,
          `https://youtube.com/${CONTACT_INFO.youtube}`
        ]
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.rainbowafs.com/#breadcrumb',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://www.rainbowafs.com'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Products',
            'item': 'https://www.rainbowafs.com/#products'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Services',
            'item': 'https://www.rainbowafs.com/#services'
          },
          {
            '@type': 'ListItem',
            'position': 4,
            'name': 'Commercial RO Plants',
            'item': 'https://www.rainbowafs.com/#commercial'
          },
          {
            '@type': 'ListItem',
            'position': 5,
            'name': 'Water Softeners',
            'item': 'https://www.rainbowafs.com/#softeners'
          }
        ]
      },
      {
        '@type': 'Product',
        '@id': 'https://www.rainbowafs.com/#product-aquafresh',
        'name': 'Rainbow Aquafresh Active Copper RO',
        'image': 'https://www.rainbowafs.com/logo-purifier.png',
        'description': 'Multi-stage RO+UV+UF+TDS water purifier with active copper mineralizer for home drinking water.',
        'brand': {
          '@type': 'Brand',
          'name': 'Rainbow Aquafresh'
        },
        'offers': {
          '@type': 'Offer',
          'price': '8500',
          'priceCurrency': 'INR',
          'availability': 'https://schema.org/InStock',
          'url': 'https://www.rainbowafs.com/#products'
        },
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '4.9',
          'reviewCount': '142'
        }
      },
      {
        '@type': 'Product',
        '@id': 'https://www.rainbowafs.com/#product-dolphin',
        'name': 'Dolphin RO Water Purifier',
        'image': 'https://www.rainbowafs.com/logo-purifier.png',
        'description': 'Sturdy wall-mounted domestic multi-stage RO water purifier suitable for borewell water supply up to 1500 ppm TDS.',
        'brand': {
          '@type': 'Brand',
          'name': 'Dolphin'
        },
        'offers': {
          '@type': 'Offer',
          'price': '7500',
          'priceCurrency': 'INR',
          'availability': 'https://schema.org/InStock',
          'url': 'https://www.rainbowafs.com/#products'
        },
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '4.8',
          'reviewCount': '98'
        }
      },
      {
        '@type': 'Product',
        '@id': 'https://www.rainbowafs.com/#product-aquagrand',
        'name': 'AquaGrand Active Copper RO',
        'image': 'https://www.rainbowafs.com/logo-purifier.png',
        'description': 'Alkaline mineralized multi-stage domestic RO purifier with 15 liters high volume storage container.',
        'brand': {
          '@type': 'Brand',
          'name': 'AquaGrand'
        },
        'offers': {
          '@type': 'Offer',
          'price': '8000',
          'priceCurrency': 'INR',
          'availability': 'https://schema.org/InStock',
          'url': 'https://www.rainbowafs.com/#products'
        },
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '4.8',
          'reviewCount': '115'
        }
      },
      {
        '@type': 'Product',
        '@id': 'https://www.rainbowafs.com/#product-hot-and-cold-3-in-1',
        'name': 'Hot and Cold 3 in 1 RO',
        'image': 'https://www.rainbowafs.com/logo-purifier.png',
        'description': 'Advanced 3-in-1 multi-temperature RO water purifier delivering instant Hot, Cold, and Normal water with 6-stage advanced purification.',
        'brand': {
          '@type': 'Brand',
          'name': 'Rainbow Aquafresh'
        },
        'offers': {
          '@type': 'Offer',
          'price': '16500',
          'priceCurrency': 'INR',
          'availability': 'https://schema.org/InStock',
          'url': 'https://www.rainbowafs.com/#products'
        },
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '4.9',
          'reviewCount': '85'
        }
      },
      {
        '@type': 'Service',
        '@id': 'https://www.rainbowafs.com/#service-repair',
        'name': 'Water Purifier Repair',
        'description': 'Professional RO repair services in Hyderabad, including booster pump fix, TDS tuning, filter candle servicing, and genuine membrane replacement.',
        'provider': {
          '@id': 'https://www.rainbowafs.com/#localbusiness'
        },
        'areaServed': {
          '@type': 'Place',
          'name': 'Hyderabad'
        }
      },
      {
        '@type': 'Service',
        '@id': 'https://www.rainbowafs.com/#service-installation',
        'name': 'RO Installation',
        'description': 'Precision home wall mounting, system unboxing, level calibration, pressure-pump routing, and pipeline relocations.',
        'provider': {
          '@id': 'https://www.rainbowafs.com/#localbusiness'
        },
        'areaServed': {
          '@type': 'Place',
          'name': 'Hyderabad'
        }
      },
      {
        '@type': 'Service',
        '@id': 'https://www.rainbowafs.com/#service-amc',
        'name': 'AMC Services',
        'description': 'Annual Maintenance Contracts for domestic water filters with automated service scheduler alerts and regular filter checkups.',
        'provider': {
          '@id': 'https://www.rainbowafs.com/#localbusiness'
        },
        'areaServed': {
          '@type': 'Place',
          'name': 'Hyderabad'
        }
      },
      {
        '@type': 'Service',
        '@id': 'https://www.rainbowafs.com/#service-softeners',
        'name': 'Water Softeners',
        'description': 'Premium automatic and manual water softening plants for whole house, bathrooms, or industrial washing machine inlets.',
        'provider': {
          '@id': 'https://www.rainbowafs.com/#localbusiness'
        },
        'areaServed': {
          '@type': 'Place',
          'name': 'Hyderabad'
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.rainbowafs.com/#faq-schema',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'What is the recommended TDS level for drinking water?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'According to Indian standards (BIS), a TDS level between 50 to 150 mg/L is considered ideal and safe for healthy drinking water, preserving essential natural minerals.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How often should RO water purifier filters be replaced?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sediment and carbon pre-filters should generally be replaced every 6 to 12 months, while the high-performance RO membrane typically lasts 1.5 to 2 years, depending on input water quality and usage.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Do you provide repair services for other water purifier brands in Hyderabad?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes, our expert technicians provide servicing, installations, repairs, and genuine filter replacements for all major brands including Kent, Aquaguard, Pureit, Livpure, A.O. Smith, Blue Star, Havells, and many others.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What is covered under the RO AMC (Annual Maintenance Contract) plan?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Our AMC plans cover scheduled periodic servicing visits, unlimited breakdown support, free filter cleaning, and optional spare parts replacement, providing complete peace of mind.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What is the warranty on new RO water purifiers?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'We offer up to 1-year comprehensive warranty on all domestic water purifiers, along with free delivery and installation across Hyderabad.'
            }
          }
        ]
      }
    ]
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-900" id="footer">
      {/* Schema Markup Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Logo & Brand block */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                R
              </div>
              <div>
                <h4 className="text-white font-extrabold text-md tracking-tight">Rainbow Aquafresh</h4>
                <p className="text-[10px] text-sky-450 uppercase tracking-widest font-bold">Systems Hyderabad</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              Hyderabad’s premier RO Water Purifier Sales, Service, and Installation agency with over 20+ years of trust-tested water quality experience.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://instagram.com/${CONTACT_INFO.instagram}`}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 hover:bg-pink-600 hover:text-white flex items-center justify-center border border-slate-800 transition-all"
                title="Follow on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://youtube.com/${CONTACT_INFO.youtube}`}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 hover:bg-red-650 hover:text-white flex items-center justify-center border border-slate-800 transition-all"
                title="Subscribe on YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Contact info */}
          <div className="space-y-4">
            <h5 className="font-bold text-sm text-white uppercase tracking-wider relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-8 after:h-0.5 after:bg-blue-500 pb-1">
              Contact Channels
            </h5>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-slate-450 leading-relaxed">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4.5 h-4.5 text-green-500 shrink-0" />
                <div className="flex flex-col">
                  {CONTACT_INFO.phones.map((phone, idx) => (
                    <a key={idx} href={`tel:${CONTACT_INFO.rawPhones[idx]}`} className="hover:text-blue-400 font-semibold transition-all">
                      {phone}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4.5 h-4.5 text-sky-500 shrink-0" />
                <a href="mailto:rainbow.afs@gmail.com" className="hover:text-blue-400 font-sans">
                  rainbow.afs@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                <span className="font-mono">{CONTACT_INFO.website}</span>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4 col-span-1">
            <h5 className="font-bold text-sm text-white uppercase tracking-wider relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-8 after:h-0.5 after:bg-blue-500 pb-1">
              Quick Links
            </h5>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-2 text-xs text-slate-400">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Products & Spares", href: "/products/" },
                { label: "RO Installation", href: "/ro-installation-hyderabad" },
                { label: "RO AMC Plans", href: "/ro-amc-service" },
                { label: "Commercial RO Plants", href: "/commercial-ro-plants" },
                { label: "RO Service Hyderabad", href: "/ro-service-hyderabad" },
                { label: "RO Repair & Service", href: "/ro-repair-hyderabad" },
                { label: "Filter Replacement", href: "/ro-filter-replacement-hyderabad" },
                { label: "Water Guides & Blog", href: "/blog" },
                { label: "Hyderabad Water Guide", href: "/water-guide" },
                { label: "Contact Us", href: "/contact" }
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {
                        e.preventDefault();
                        if (window.location.pathname !== link.href) {
                          window.history.pushState(null, '', link.href);
                          window.dispatchEvent(new PopStateEvent('popstate'));
                        } else {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                      }
                    }}
                    className="hover:text-blue-400 transition-all block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Regional SEO map zones */}
          <div className="space-y-4">
            <h5 className="font-bold text-sm text-white uppercase tracking-wider relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-8 after:h-0.5 after:bg-blue-500 pb-1">
              Top Service Areas
            </h5>
            <div className="flex flex-wrap gap-1.5 text-[11px]">
              {SERVICE_AREAS.slice(0, 10).map((area, idx) => (
                <span
                  key={idx}
                  className="bg-slate-900 border border-slate-800 text-slate-450 px-2 py-0.5 rounded-md font-medium"
                >
                  {area.name}
                </span>
              ))}
              <span className="bg-blue-950/40 border border-blue-900 text-blue-405 px-2 py-0.5 rounded-md font-semibold">
                Secunderabad
              </span>
              <span className="bg-blue-950/40 border border-blue-900 text-blue-405 px-2 py-0.5 rounded-md font-semibold">
                Hyderabad Wide
              </span>
            </div>
            <p className="text-[10px] text-slate-500 leading-normal">
              Serving our neighbors in LB Nagar, Kothapet, Dilsukhnagar, Malakpet, Nagole, Uppal & Gachibowli with 24/7 prioritized service.
            </p>
          </div>

        </div>

        {/* Regional SEO Directory Matrix */}
        <div className="border-t border-slate-900 pt-8 pb-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-[11px]">
          <div>
            <h6 className="text-white font-bold mb-3 uppercase tracking-wider text-[10px] text-sky-400">Hyderabad Location Hubs</h6>
            <ul className="space-y-1.5 text-slate-400">
              <li><a href="/ro-service-dilsukhnagar-hyderabad" className="hover:text-blue-400 transition-colors">RO Service Dilsukhnagar</a></li>
              <li><a href="/ro-service-lb-nagar-hyderabad" className="hover:text-blue-400 transition-colors">RO Service LB Nagar</a></li>
              <li><a href="/ro-service-kukatpally-hyderabad" className="hover:text-blue-400 transition-colors">RO Service Kukatpally</a></li>
              <li><a href="/ro-service-miyapur-hyderabad" className="hover:text-blue-400 transition-colors">RO Service Miyapur</a></li>
              <li><a href="/ro-service-gachibowli-hyderabad" className="hover:text-blue-400 transition-colors">RO Service Gachibowli</a></li>
              <li><a href="/ro-service-kondapur-hyderabad" className="hover:text-blue-400 transition-colors">RO Service Kondapur</a></li>
              <li><a href="/ro-service-secunderabad" className="hover:text-blue-400 transition-colors">RO Service Secunderabad</a></li>
              <li><a href="/ro-service-hitech-city-hyderabad" className="hover:text-blue-400 transition-colors">RO Service Hitech City</a></li>
            </ul>
          </div>

          <div>
            <h6 className="text-white font-bold mb-3 uppercase tracking-wider text-[10px] text-sky-400">Specialized Services</h6>
            <ul className="space-y-1.5 text-slate-400">
              <li><a href="/ro-membrane-replacement-service-hyderabad" className="hover:text-blue-400 transition-colors">Membrane Replacement</a></li>
              <li><a href="/ro-booster-pump-repair-replacement-hyderabad" className="hover:text-blue-400 transition-colors">Booster Pump Repair</a></li>
              <li><a href="/ro-smps-power-supply-repair-hyderabad" className="hover:text-blue-400 transition-colors">SMPS Power Supply Repair</a></li>
              <li><a href="/ro-uv-lamp-replacement-hyderabad" className="hover:text-blue-400 transition-colors">UV Lamp Replacement</a></li>
              <li><a href="/ro-water-leakage-repair-hyderabad" className="hover:text-blue-400 transition-colors">Water Leakage Repair</a></li>
              <li><a href="/kent-ro-service-repair-hyderabad" className="hover:text-blue-400 transition-colors">Kent RO Service</a></li>
              <li><a href="/aquaguard-ro-service-repair-hyderabad" className="hover:text-blue-400 transition-colors">Aquaguard RO Repair</a></li>
            </ul>
          </div>

          <div>
            <h6 className="text-white font-bold mb-3 uppercase tracking-wider text-[10px] text-sky-400">Commercial & Industrial RO</h6>
            <ul className="space-y-1.5 text-slate-400">
              <li><a href="/commercial-ro-plant-installation-hyderabad" className="hover:text-blue-400 transition-colors">Commercial RO Installation</a></li>
              <li><a href="/commercial-ro-plant-amc-maintenance-hyderabad" className="hover:text-blue-400 transition-colors">Commercial Plant AMC</a></li>
              <li><a href="/industrial-ro-plant-manufacturers-hyderabad" className="hover:text-blue-400 transition-colors">Industrial Plant Makers</a></li>
              <li><a href="/apartment-gated-community-ro-plants-hyderabad" className="hover:text-blue-400 transition-colors">Apartment RO Systems</a></li>
              <li><a href="/hospital-healthcare-ro-plants-hyderabad" className="hover:text-blue-400 transition-colors">Hospital RO Plants</a></li>
              <li><a href="/school-college-ro-water-plants-hyderabad" className="hover:text-blue-400 transition-colors">School Water Plants</a></li>
            </ul>
          </div>

          <div>
            <h6 className="text-white font-bold mb-3 uppercase tracking-wider text-[10px] text-sky-400">Water Guides & Knowledge</h6>
            <ul className="space-y-1.5 text-slate-400">
              <li><a href="/water-guide" className="hover:text-blue-400 transition-colors font-semibold text-blue-300">Complete Hyderabad Water Guide</a></li>
              <li><a href="/blog/ro-vs-uv-vs-uf-water-purifier-differences" className="hover:text-blue-400 transition-colors">RO vs UV vs UF Guide</a></li>
              <li><a href="/blog/best-water-purifier-for-hyderabad-water" className="hover:text-blue-400 transition-colors">Best Purifier for Hyderabad</a></li>
              <li><a href="/blog/how-often-should-ro-filters-be-changed" className="hover:text-blue-400 transition-colors">Filter Change Schedule</a></li>
              <li><a href="/blog/what-is-tds-in-drinking-water-hyderabad" className="hover:text-blue-400 transition-colors">Drinking Water TDS Guide</a></li>
              <li><a href="/blog/benefits-of-copper-alkaline-ro-water" className="hover:text-blue-400 transition-colors">Copper Alkaline Benefits</a></li>
              <li><a href="/blog/best-water-purifier-for-borewell-water" className="hover:text-blue-400 transition-colors">Borewell Water Solutions</a></li>
              <li><a href="/blog" className="hover:text-blue-400 transition-colors font-semibold text-blue-300">Browse All 15 Articles &rarr;</a></li>
            </ul>
          </div>
        </div>

        {/* Legal and Technical SEO status line */}
        <div className="border-t border-slate-900 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p className="text-center sm:text-left">
            © {currentYear} <strong>{CONTACT_INFO.companyName}</strong>, Malakpet. All Rights Reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[11px] font-mono">
            <span>SSL Secured</span>
            <span>•</span>
            <a href="/blog" className="hover:text-slate-400">Blog</a>
            <span>•</span>
            <button onClick={onOpenPrivacy} className="hover:text-slate-400 cursor-pointer bg-transparent border-none p-0 font-sans">Privacy Policy</button>
            <span>•</span>
            <button onClick={onOpenTerms} className="hover:text-slate-400 cursor-pointer bg-transparent border-none p-0 font-sans">Terms & Conditions</button>
            <span>•</span>
            <a href="/robots.txt" target="_blank" className="hover:text-slate-400">Robots.txt</a>
            <span>•</span>
            <a href="/sitemap.xml" target="_blank" className="hover:text-slate-400">Sitemap.xml</a>
            <span>•</span>
            <button onClick={onOpenAdmin} className="hover:text-blue-400 text-blue-500 font-bold cursor-pointer bg-transparent border-none p-0">Admin Console</button>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="text-[10px] text-zinc-650 font-normal">
            Website SEO Keywords: RO Service Hyderabad | RO Water Purifier Hyderabad | RO Repair Near Me | Commercial RO Plant Installation Hyderabad
          </p>
        </div>
      </div>
    </footer>
  );
}
