import { useEffect, useRef, useState } from 'react';
import { Shield, Zap, Users, Award, CheckCircle } from 'lucide-react';

const About = () => {
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
    { icon: Shield, title: 'Secure', description: 'Bank-grade security' },
    { icon: Zap, title: 'Fast', description: 'Instant transfers' },
    { icon: Users, title: 'Trusted', description: '500K+ users' },
    { icon: Award, title: 'Licensed', description: 'NBE regulated' },
  ];

  return (
    <section id="features" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#f0fdf4]" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-emerald-500/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-[#6b1565]/5 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content - Green Card */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="glass-card-green p-8 lg:p-10 card-3d">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6 shadow-lg">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Licensed & Regulated
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                YaYa PII SC is fully licensed by the National Bank of Ethiopia, ensuring your funds are always secure and protected.
              </p>

              {/* Stats */}
              <div className="flex gap-6">
                <div className="bg-white/60 rounded-xl p-4 flex-1">
                  <p className="text-3xl font-bold text-emerald-600">2022</p>
                  <p className="text-sm text-gray-500">Established</p>
                </div>
                <div className="bg-white/60 rounded-xl p-4 flex-1">
                  <p className="text-3xl font-bold text-emerald-600">NBE</p>
                  <p className="text-sm text-gray-500">Licensed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className={`space-y-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Badge */}
            <span className="badge-glass">About Us</span>

            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                YaYa PII SC
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                YaYa PII SC is a Payment Instrument Issuer focusing on providing payment solutions through mobile wallet software systems.
              </p>
              <p className="text-gray-600 leading-relaxed">
                YaYa PII SC is established in 2022 and licensed in compliance with Payment Instrument Issuers Directive from National Bank of Ethiopia.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`flex items-center gap-3 p-4 glass-card hover:shadow-lg transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6b1565]/10 to-[#9d4a96]/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-[#6b1565]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{feature.title}</p>
                    <p className="text-xs text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
