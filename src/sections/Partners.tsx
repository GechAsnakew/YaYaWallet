import { useEffect, useRef, useState } from 'react';
import { Building2, Shield } from 'lucide-react';

const Partners = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const partners = [
    { name: 'Mastercard', icon: '/mastercard.svg' },
    { name: 'Ethswitch', icon: '/ethswitch.svg' },
    { name: 'Zemen Bank', icon: "/zemen-bank.svg"},
    { name: 'Commercial Bank', icon: "/cbe-bank.svg" },
    { name: 'Dashen Bank', icon: "/dashen-bank.svg" },
    { name: 'Awash Bank', icon: "/awash-bank.svg" },
    { name: 'Bank of Abyssinia', icon: "/boa-bank.svg" },
    { name: 'Amhara Bank', icon: '/amhara-bank.svg' },
    { name: 'Bunna Bank', icon: '/bunna-bank.svg' },
    { name: 'Abay Bank', icon: '/abay-bank.svg' },
    { name: 'Tsedey Bank', icon: '/tsedey-bank.svg' },
  ];
  const marqueePartners = [...partners, ...partners];

  return (
    <section id="partners" ref={sectionRef} className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#faf5fa]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="badge-glass mb-4 inline-block">Trusted Partners</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Backed by Strategic <span className="text-gradient">Partners</span>
          </h2>
        </div>

        {/* Partners Carousel */}
        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative overflow-hidden">
            <div className="partners-marquee">
              {marqueePartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="bg-transparent border border-gray-200 rounded-xl p-5 min-w-[180px] flex flex-col items-center justify-center gap-3 hover:scale-105 transition-transform"
                >
                  <img
                    src={partner.icon}
                    alt={partner.name}
                    className="w-20 h-20 object-contain"
                  />
                  <span className="text-xs font-medium text-gray-700 text-center">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className={`mt-12 flex flex-wrap justify-center gap-6 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-sm font-medium text-green-700">NBE Licensed</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200">
            <Building2 className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">38+ Institutions Integrated</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200">
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-purple-700">Digital KYC</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
