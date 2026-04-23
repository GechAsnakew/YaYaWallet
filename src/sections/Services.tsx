import { useEffect, useRef, useState } from 'react';
import { 
  Send, 
  Store, 
  Receipt, 
  Smartphone, 
  Fuel, 
  GraduationCap, 
  Users, 
  MoreHorizontal 
} from 'lucide-react';

const Services = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Send,
      title: 'Remittance',
      description: 'Send money internationally with competitive exchange rates and instant delivery to multiple countries.',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-50',
    },
    {
      icon: Store,
      title: 'Merchant Payments',
      description: 'Accept payments at your business with QR codes, POS integration, and instant settlements.',
      color: 'from-[#6b1565] to-[#9d4a96]',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Receipt,
      title: 'Bill Payments',
      description: 'Pay utility bills, subscriptions, and services all in one place with automatic reminders.',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
    },
    {
      icon: Smartphone,
      title: 'Airtime Top-ups',
      description: 'Recharge your phone or send airtime to friends and family across all major networks.',
      color: 'from-orange-500 to-amber-500',
      bgColor: 'bg-orange-50',
    },
    {
      icon: Fuel,
      title: 'Fuel Payments',
      description: 'Pay for fuel at partner stations without cash or cards. Just scan and go.',
      color: 'from-red-500 to-rose-500',
      bgColor: 'bg-red-50',
    },
    {
      icon: GraduationCap,
      title: 'School Payments',
      description: 'Pay tuition fees and school expenses securely with payment tracking and receipts.',
      color: 'from-indigo-500 to-violet-500',
      bgColor: 'bg-indigo-50',
    },
    {
      icon: Users,
      title: 'P2P Transfers',
      description: 'Send money instantly to anyone with a YaYa Wallet using just their phone number.',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
    },
    {
      icon: MoreHorizontal,
      title: 'More Services',
      description: 'Discover additional features including savings goals, investments, and insurance.',
      color: 'from-[#6b1565] to-[#9d4a96]',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg-purple-light" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#6b1565]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-[#00d4ff]/5 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="badge-glass mb-4 inline-block">Our Services</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Everything you need in <br />
            <span className="text-gradient">one wallet</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From daily transactions to special payments, YaYa Wallet handles it all with ease and security.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`glass-card p-6 card-3d group transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gray-800 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>

              {/* Hover Effect */}
              <div className="mt-4 flex items-center gap-2 text-[#6b1565] opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-medium">Learn more</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
