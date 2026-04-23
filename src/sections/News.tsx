import { useEffect, useRef, useState } from 'react';
import { ArrowRight, TrendingUp, Bell, FileText, Calendar } from 'lucide-react';

const News = () => {
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

  const newsItems = [
    {
      icon: TrendingUp,
      category: 'Company News',
      date: 'Mar 20, 2026',
      title: 'YaYa Wallet Reaches 500,000 Users Milestone',
      description: 'We are thrilled to announce that YaYa Wallet has officially surpassed half a million active users...',
      color: 'from-[#6b1565] to-[#9d4a96]',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Bell,
      category: 'Product Update',
      date: 'Mar 15, 2026',
      title: 'New Feature: Instant Bank Transfers',
      description: 'Transfer money directly to any bank account in Ethiopia instantly with our latest update.',
      color: 'from-[#6b1565] to-[#9d4a96]',
      bgColor: 'bg-purple-50',
    },
    {
      icon: FileText,
      category: 'Press Release',
      date: 'Mar 10, 2026',
      title: 'Partnership with Ethiopian Airlines',
      description: 'YaYa Wallet partners with Ethiopian Airlines to enable seamless ticket purchases.',
      color: 'from-[#6b1565] to-[#9d4a96]',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f0fdf4] to-white" />
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#6b1565]/3 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <span className="badge-glass mb-4 inline-block">News & Updates</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
              Latest from <span className="text-gradient">YaYa</span>
            </h2>
          </div>
          <a
            href="#"
            className="btn-outline inline-flex items-center gap-2 self-start lg:self-auto"
          >
            View All News
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <article
              key={item.title}
              className={`glass-card overflow-hidden card-3d group transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Card Header with Icon */}
              <div className={`h-32 bg-gradient-to-br ${item.color} flex items-center justify-center relative overflow-hidden`}>
                {/* Decorative Circles */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${item.bgColor} text-[#6b1565]`}>
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#6b1565] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Read More Link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#6b1565] group/link"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
