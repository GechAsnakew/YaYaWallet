import { useState, useEffect } from 'react';
import { ArrowRight, Play, Users, Star, MapPin, Check, Building2 } from 'lucide-react';

const Hero = () => {
  const [amount, setAmount] = useState('4745');
  const [isVisible, setIsVisible] = useState(false);
  const exchangeRate = 153.1403;
  const bonusRate = 0.06;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const numericAmount = parseFloat(amount || '0');
  const baseAmount = numericAmount * exchangeRate;
  const bonusAmount = baseAmount * bonusRate;
  const totalAmount = baseAmount + bonusAmount;

  return (
    <section className="relative min-h-screen pt-20 lg:pt-24 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 gradient-bg-light" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#6b1565]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#00d4ff]/10 to-transparent rounded-full blur-3xl" />
      
      {/* Floating Elements */}
      

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 lg:py-2">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-purple">
              <div className="w-2 h-2 rounded-full bg-[#6b1565] animate-pulse" />
              <span className="text-sm font-medium text-[#6b1565]">Trusted by 60K+ users</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Unlock the power of </span>
                <br />
                <span className="text-gradient">mobile money</span>
              
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                A simple, secure mobile wallet built for everyday life in Ethiopia. Send money, pay bills, and shop with confidence.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#download" className="btn-primary flex items-center gap-2">
                Get the app
                <ArrowRight className="w-4 h-4" />
              </a>
              <button className="btn-outline flex items-center gap-2">
                <Play className="w-4 h-4" />
                See how it works
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="icon-container-purple">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">60K+</p>
                  <p className="text-sm text-gray-500">Active users</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="icon-container-purple">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">38+</p>
                  <p className="text-sm text-gray-500">Bank Integrated</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="icon-container-purple">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">500M+</p>
                  <p className="text-sm text-gray-500">Monthly Transactions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Money Transfer Card */}
          <div className={`transition-all mt-12 duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="glass-card p-6 lg:p-8 card-3d bg-white/90">
              {/* Card Header */}
              <div className="text-center mb-6">
              
                <p className="text-sm text-gray-500">Send money home with attractive exchange rate</p>
              </div>

              {/* Exchange Rate Box */}
              <div className="bg-blue-50/80 rounded-xl p-4 mb-6">
                <p className="text-xs text-gray-500 mb-2">Exchange Rate</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-gray-900">1 USD =</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-[#6b46c1]">{exchangeRate}</span>
                    <span className="text-lg font-semibold text-gray-600">ETB</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-2">Source: Zemen Bank</p>
              </div>

              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* You Send */}
                <div>
                  <label className="text-sm font-medium text-gray-600 mb-2 block">You send</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium text-lg">$</span>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full pl-10 pr-20 py-4 rounded-xl border-2 border-[#6b46c1] outline-none text-lg font-semibold text-gray-900 bg-white"
                      placeholder="0"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-gray-100 rounded-lg text-sm font-medium text-gray-600">USD</span>
                  </div>
                </div>

                {/* They Get */}
                <div>
                  <label className="text-sm font-medium text-gray-600 mb-2 block">They get</label>
                  <div className="relative bg-emerald-50 rounded-xl border border-emerald-200">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-600 font-bold text-lg">ETB</span>
                    <input
                      type="text"
                      value={totalAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      readOnly
                      className="w-full pl-16 py-4 bg-transparent text-lg font-bold text-emerald-600 outline-none"
                    />
                    {/* <span className="absolute right-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-emerald-100 rounded-lg text-sm font-medium text-emerald-600">+6% Bonus</span> */}
                  </div>
                </div>
              </div>

              {/* Bonus Banner */}
              <div className="flex items-center gap-2 p-3 bg-emerald-50 rounded-xl mb-6 border border-emerald-100">
                <Check className="w-5 h-5 text-emerald-600" />
                <span className="text-sm text-emerald-700">
                  6% Bonus: <span className="font-semibold">+ETB {bonusAmount.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span> applied to your transfer
                </span>
              </div>

              {/* CTA Button */}
              <a href="https://yayawallet.com/en/login" target='_blank'>
              <button className="w-full py-4 rounded-xl font-semibold text-white text-lg transition-all duration-300 bg-gradient-to-r from-[#82378C] to-[#878787] hover:shadow-lg hover:shadow-purple-500/30">
               Make Transfer
              </button>
</a>
              {/* Success Indicator */}
              {/* <div className="mt-4 flex items-center justify-center gap-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-600 rounded text-xs font-medium">Instant</span>
              </div> */}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
