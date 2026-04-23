import { useEffect, useRef, useState } from 'react';
import { 
  TrendingUp, 
  Shield, 
  Zap, 
  BarChart3, 
  Check,
  Store
} from 'lucide-react';

const Business = () => {
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
      icon: TrendingUp,
      title: 'Grow Your Revenue',
      description: 'Accept payments from anyone, anywhere. Expand your customer base.',
    },
    {
      icon: Shield,
      title: 'Secure Transactions',
      description: 'Bank-grade security with NBE compliance for peace of mind.',
    },
    {
      icon: Zap,
      title: 'Instant Settlements',
      description: 'Get your money instantly. No more waiting for bank transfers.',
    },
    {
      icon: BarChart3,
      title: 'Business Analytics',
      description: 'Track sales, monitor trends, and make data-driven decisions.',
    },
  ];

  const chartData = [
    { day: 'Mon', value: 40 },
    { day: 'Tue', value: 65 },
    { day: 'Wed', value: 45 },
    { day: 'Thu', value: 80 },
    { day: 'Fri', value: 55 },
    { day: 'Sat', value: 90 },
    { day: 'Sun', value: 70 },
  ];

  const getWeeklyLinePath = () => {
    const width = 320;
    const height = 96;
    const maxY = 100;
    return chartData
      .map((point, index) => {
        const x = (index / (chartData.length - 1)) * width;
        const y = height - (point.value / maxY) * height;
        return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
      })
      .join(' ');
  };

  return (
    <section id="business" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#faf5fa] to-white" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#6b1565]/5 to-transparent rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Badge */}
            <span className="badge-glass">For Business</span>

            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
                Built for <span className="text-gradient">business</span>
              </h2>
              <p className="text-lg text-gray-600">
                Accept payments, track sales, and settle fast; right from your business or on the go.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`flex items-start gap-4 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6b1565] to-[#9d4a96] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="https://dashboard.yayawallet.com/" target='_blank' className="btn-primary flex items-center gap-2">
                <Store className="w-4 h-4" />
                Become a Merchant
              </a>
              {/* <a href="#" className="btn-outline">
                Learn More
              </a> */}
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Check className="w-4 h-4 text-green-500" />
                NBE Licensed
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Check className="w-4 h-4 text-green-500" />
                24/7 Support
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Check className="w-4 h-4 text-green-500" />
                Zero Setup Fee
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="glass-card p-6 lg:p-8 card-3d">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-gray-500">Today&apos;s Sales</p>
                  <p className="text-3xl font-bold text-gray-900">ETB 45,280</p>
                  <p className="text-xs text-emerald-600 mt-1">+24% vs last week</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-purple-50 rounded-xl p-3">
                  <p className="text-xs text-gray-500 mb-1">Transactions</p>
                  <p className="text-xl font-bold text-[#6b1565]">128</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-3">
                  <p className="text-xs text-gray-500 mb-1">Customers</p>
                  <p className="text-xl font-bold text-blue-600">89</p>
                </div>
                <div className="bg-green-50 rounded-xl p-3">
                  <p className="text-xs text-gray-500 mb-1">Growth</p>
                  <p className="text-xl font-bold text-green-600">+24%</p>
                </div>
              </div>

              {/* Weekly Line Chart */}
              <div className="mb-6">
                <p className="text-sm font-medium text-gray-700 mb-4">Weekly Performance</p>
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-4">
                  <svg viewBox="0 0 320 96" className="w-full h-24">
                    <defs>
                      <linearGradient id="weeklyLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6b1565" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>
                    <path
                      d={getWeeklyLinePath()}
                      fill="none"
                      stroke="url(#weeklyLineGradient)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                      style={{
                        transitionDelay: '300ms',
                        strokeDasharray: 400,
                        strokeDashoffset: isVisible ? 0 : 400,
                      }}
                    />
                    {chartData.map((item, index) => {
                      const x = (index / (chartData.length - 1)) * 320;
                      const y = 96 - (item.value / 100) * 96;
                      return (
                        <circle
                          key={item.day}
                          cx={x}
                          cy={y}
                          r="4"
                          fill="white"
                          stroke="#6b1565"
                          strokeWidth="2"
                          className={`transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                          style={{ transitionDelay: `${450 + index * 70}ms` }}
                        />
                      );
                    })}
                  </svg>
                  <div className="mt-3 grid grid-cols-7 gap-1">
                    {chartData.map((item) => (
                      <span key={item.day} className="text-[11px] text-gray-500 text-center">
                        {item.day}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent Transactions */}
              <div>
                <p className="text-sm font-medium text-gray-700 mb-4">Recent Transactions</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#6b1565] flex items-center justify-center">
                        <span className="text-white font-medium text-sm">A</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Abebe Kebede</p>
                        <p className="text-xs text-gray-500">2 min ago</p>
                      </div>
                    </div>
                    <p className="font-semibold text-gray-900">ETB 1,200</p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
