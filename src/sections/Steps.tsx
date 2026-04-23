import { useEffect, useRef, useState } from 'react';
import { Download, UserPlus, Wallet } from 'lucide-react';

const Steps = () => {
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

  const steps = [
    {
      number: '01',
      icon: Download,
      title: 'Download the App',
      description: 'Get YaYa Wallet from Google Play or App Store. It takes less than a minute.',
    },
    {
      number: '02',
      icon: UserPlus,
      title: 'Create Account',
      description: 'Sign up with your phone number and verify your identity in simple steps.',
    },
    {
      number: '03',
      icon: Wallet,
      title: 'Start Transacting',
      description: 'Add money to your wallet and start sending, paying, and shopping instantly.',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#faf5fa]" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#6b1565]/5 to-transparent rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-[#00d4ff]/5 to-transparent rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="badge-glass mb-4 inline-block">Get Started</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Three Steps to <br />
            <span className="text-gradient">Financial Freedom</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting started with YaYa Wallet is quick and easy. Join millions of Ethiopians already enjoying digital financial services.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#6b1565]/20 to-[#6b1565]/5 z-0" />
              )}

              <div className="glass-card p-8 relative z-10 card-3d h-full">
                {/* Step Number */}
                <div className="text-5xl font-bold text-[#6b1565]/10 mb-4">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#6b1565] to-[#9d4a96] flex items-center justify-center mb-6 shadow-lg">
                  <step.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>  
      </div>
    </section>
  );
};

export default Steps;
