import { useEffect, useRef, useState } from 'react';
import { Apple, Play, Smartphone } from 'lucide-react';

const Download = () => {
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

  return (
    <section id="download" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#faf5fa] to-white" />
      <div className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-[#6b1565]/5 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`glass-card-purple p-8 lg:p-16 card-3d transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
                Ready to move money <br />
                <span className="text-gradient">differently?</span>
              </h2>
              <p className="text-lg text-gray-600">
              Download YaYa Wallet, register with your Fayda ID, and start sending and receiving instant payments. Enjoy remittances, airtime purchases, and more all on the go.
              </p>

              {/* App Store Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://apps.apple.com/it/app/yaya-wallet/id1550292816"
                  className="flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors"
                >
                  <img src="/apple-icon.svg" alt="Apple" className="w-9 h-9 fill-current" />
                  <div className="text-left">
                    <p className="text-xs opacity-80">Download on the</p>
                    <p className="text-sm font-semibold">App Store</p>
                  </div>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.yaya.wallet"
                  className="flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors"
                >
                  <img src="/PlayStore-icon.svg" alt="Play" className="w-7 h-7 fill-current" />
                  <div className="text-left">
                    <p className="text-xs opacity-80">Get it on</p>
                    <p className="text-sm font-semibold">Google Play</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Content - QR Code */}
            <div className="flex flex-col items-center">
              <div className="glass-card p-6 mb-4">
                {/* QR Code Pattern */}
                <div className="w-48 h-48 relative">
                  {/* QR Code Background */}
                  <div className="absolute inset-0 bg-white rounded-lg" />
                  
                  {/* QR Pattern - Simulated with CSS */}
                  <div className="absolute inset-1 grid grid-cols-1 grid-rows1 gap-0.5">
                    {/* Corner markers */}
                    
                    
                    {/* Center logo area */}
                    <div className="col-start-3 col-span-3 row-start-3 row-span-3 flex items-center justify-center">
                      <div className="w-50 h-50 flex items-center justify-center">
                      <img src="/Install-QR.svg" alt="YaYa Wallet" className="w-full h-full object-contain" />
                      </div>
                    </div>
                    
                    
                
                  </div>
                  
                  {/* Corner brackets */}
                 
                </div>
                
                {/* Logo below QR */}
                <div className="mt-4 flex items-center justify-center">
                  <div className="items-center justify-center">
                  
                  </div>
                
                </div>
                <p className="text-xs text-center text-gray-500 mt-1">Scan to Download</p>
              </div>
              
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className={`mt-16 text-center transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Subscribe to our newsletter
          </h3>
          <p className="text-gray-600 mb-6">
            Get the latest updates, news, and exclusive offers delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="input-glass flex-1"
            />
            <button className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
