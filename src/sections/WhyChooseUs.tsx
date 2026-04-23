import { useEffect, useRef, useState } from 'react';
import { Shield, Zap, Clock, Lock, Bell, Fingerprint, AlertTriangle, CreditCard } from 'lucide-react';

const WhyChooseUs = () => {
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

  const features = [
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description: '256-bit encryption and multi-factor authentication protect your money.',
    },
    {
      icon: Zap,
      title: 'Instant Transfers',
      description: 'Send and receive money in seconds, 24/7, even on weekends.',
    },
    {
      icon: Clock,
      title: 'Always Available',
      description: '99.9% uptime guarantee. Your wallet works when you need it.',
    },
    {
      icon: Lock,
      title: 'Fraud Protection',
      description: 'Advanced AI monitors transactions to keep your account safe.',
    },
    {
      icon: Bell,
      title: 'Real-time Notifications',
      description: 'Get instant alerts for every transaction on your account.',
    },
    {
      icon: Fingerprint,
      title: 'Biometric Login',
      description: 'Secure access with fingerprint or face recognition.',
    },
    {
      icon: AlertTriangle,
      title: 'Smart Alerts',
      description: 'Customizable alerts for spending limits and suspicious activity.',
    },
    {
      icon: CreditCard,
      title: 'Digital KYC',
      description: 'Robust verification processes for both individuals and businesses ensure regulatory compliance.',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#faf5fa] to-white" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#6b1565]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#00d4ff]/5 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="badge-glass mb-4 inline-block">Why Choose Us</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Built for <span className="text-gradient">Security & Speed</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your money deserves the best protection. We&apos;ve built YaYa Wallet with cutting-edge technology to keep your finances safe and accessible.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`glass-card p-6 card-3d group transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6b1565]/10 to-[#9d4a96]/10 flex items-center justify-center mb-4 group-hover:from-[#6b1565] group-hover:to-[#9d4a96] transition-all duration-300">
                <feature.icon className="w-6 h-6 text-[#6b1565] group-hover:text-white transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
