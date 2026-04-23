import { useEffect, useRef, useState } from 'react';
import { Star, Quote, CheckCircle, Shield, Award } from 'lucide-react';

const Testimonials = () => {
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

  const testimonials = [
    {
      quote: "I send money to family in minutes. The rates are clear, and the app just works. No hidden fees, no surprises.",
      author: 'Surafel A.',
      role: 'Business owner',
      image:'/surafel.png',
      rating: 5,
    },
    {
      quote: "Cashback on groceries adds up fast. YaYa feels like it's on my side, not trying to take advantage of me.",
      author: 'Tewobsta T.',
      role: 'Designer',
      image:'/tewobsta.png',
      rating: 5,
    },
    {
      quote: "Customer support actually solved my issue in one chat. No bots, no runaround. Real humans who care.",
      author: 'Getachew A.',
      role: 'Engineer',
      image:'/getachew.png',
      rating: 5,
    },
  ];

  const badges = [
    { icon: CheckCircle, label: 'NBE Licensed', value: 'Licensed' },
    { icon: Shield, label: 'AES-256', value: 'Encryption' },
    { icon: Award, label: 'App Rating', value: '4.8★' },
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#faf5fa] to-[#faf5fa]" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#6b1565]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Loved by <span className="text-gradient">thousands</span>
          </h2>
          <p className="text-lg text-gray-600">
            Real people, real payouts, real peace of mind.
          </p>
        </div>

        {/* Badges */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {badges.map((badge, index) => (
            <div
              key={badge.label}
              className="flex items-center gap-3 px-5 py-3 glass-card-purple rounded-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-2 h-2 rounded-full bg-[#40e042]" />
              <span className="text-sm text-gray-600">{badge.label}</span>
              <span className="text-sm font-bold text-gray-900">{badge.value}</span>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={`glass-card-purple p-6 lg:p-8 card-3d relative transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 2) * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-12 h-12 text-[#6b1565]" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#AA5BD8] text-[#AA5BD8]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
              <img
                    src={testimonial.image}
                    className="w-14 h-14 rounded-full object-cover border-2 border-yaya-primary/20"
                  />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
