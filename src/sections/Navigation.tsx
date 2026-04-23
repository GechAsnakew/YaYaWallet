import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', to: '/about-us' },
    { name: 'Services', to: '/services' },
    { name: 'Business', to: '/business' },
    { name: 'Agent', to: '/agent' },
    { name: 'Contact Us', to: '/contact-us' },
  ];

  const isLinkActive = (to: string) => {
    if (to === '/about-us') return location.pathname === '/about-us';
    if (to === '/services') return location.pathname === '/services';
    if (to === '/business') return location.pathname === '/business';
    if (to === '/agent') return location.pathname === '/agent';
    if (to === '/contact-us') return location.pathname === '/contact-us';
    if (to.startsWith('/#')) {
      const hash = to.slice(1); // '#features'
      return location.pathname === '/' && location.hash === hash;
    }
    return false;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-[#6b1565]/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="/yaya-logo.png" 
              alt="YaYa Wallet" 
              className="h-10 lg:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div
              className={`inline-flex items-center gap-1 p-1 rounded-full border transition-all ${
                isScrolled
                  ? 'bg-white/70 backdrop-blur border-[#6b1565]/10 shadow-sm'
                  : 'bg-white/40 backdrop-blur border-white/40'
              }`}
            >
              {navLinks.map((link) => {
                const isActive = isLinkActive(link.to);
                return (
                  <Link
                    key={link.name}
                    to={link.to}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                      isActive
                        ? 'text-white bg-gradient-to-r from-[#6b1565] to-[#9d4a96] shadow-md shadow-[#6b1565]/20'
                        : 'text-gray-700 hover:text-[#6b1565] hover:bg-[#6b1565]/7'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="https://dashboard.yayawallet.com/" className="btn-primary text-sm">
            Access Dashboard
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-[#6b1565]/10 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#6b1565]" />
            ) : (
              <Menu className="w-6 h-6 text-[#6b1565]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-2 pt-4 border-t border-[#6b1565]/10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isLinkActive(link.to)
                    ? 'text-[#6b1565] bg-[#6b1565]/10'
                    : 'text-gray-600 hover:text-[#6b1565] hover:bg-[#6b1565]/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/#download"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary text-sm text-center mt-2"
            >
              Get the app
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
