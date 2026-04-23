import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: 'Services', href: '/services', router: true },
      { name: 'Business', href: '/business', router: true },
      { name: 'Download', href: '/#download', router: true },
    ],
    Company: [
      { name: 'About Us', href: '/about-us', router: true },
      { name: 'Agent', href: '/agent', router: true },
      { name: 'Contact Us', href: '/contact-us', router: true },
      { name: 'Careers', href: 'https://erp.yayawallet.com/jobs' },
    ],
    Support: [
      { name: 'Help Center', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Security', href: '#' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Licenses', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img 
                src="/YaYaWallet-WhiteLogo.svg" 
                alt="YaYa Wallet" 
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm mb-6 max-w-xs">
              A simple, secure mobile wallet built for everyday life in Ethiopia.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#6b1565] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    {'router' in link && link.router ? (
                      <Link
                        to={link.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} YaYa Wallet. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            Licensed by the National Bank of Ethiopia
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
