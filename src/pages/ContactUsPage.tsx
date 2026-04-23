import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react';

const useSectionVisible = (threshold = 0.15) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
};

const ContactUsPage = () => {
  const hero = useSectionVisible(0.1);
  const content = useSectionVisible();

  return (
    <main className="flex-1">
      {/* Hero */}
      <section ref={hero.ref} className="relative pt-24 lg:pt-28 pb-10 lg:pb-14 overflow-hidden">
        <div className="absolute inset-0 gradient-bg-light" />
        <div className="absolute top-20 right-0 w-[520px] h-[520px] bg-gradient-to-br from-[#6b1565]/12 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[480px] h-[480px] bg-gradient-to-tr from-[#00d4ff]/10 to-transparent rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className={`inline-flex items-center gap-2 text-sm font-medium text-[#6b1565] hover:text-[#4a0e46] transition-colors mb-8 ${
              hero.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            } transition-all duration-700`}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <div
            className={`max-w-3xl transition-all duration-700 delay-100 ${
              hero.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="badge-glass mb-4 inline-block">Contact</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Questions, partnerships, or agent onboarding send us a message and we’ll get back to you.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section ref={content.ref} className="py-14 lg:py-20 relative overflow-hidden pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-[#faf5fa]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-700 ${content.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
              <div>
                <h2 className="text-5xl font-light text-gray-900">Contact Us</h2>
                <div className="w-24 h-1 bg-[#6b1565] rounded-full mt-3 mb-7" />
                <p className="text-gray-600 max-w-lg text-lg">
                  Have questions about our services? We are here to help. Reach out through any of the channels.
                </p>

                <div className="mt-8 rounded-2xl bg-gradient-to-br from-[#6b1565] to-[#9d4a96] p-8 text-white shadow-xl">
                  <h3 className="text-3xl font-bold">Ready to get started?</h3>
                  <p className="mt-3 text-white/90">
                    Send money to Ethiopia instantly, securely, and at competitive rates.
                  </p>
                  <p className="mt-6 text-sm font-semibold text-white/80">Download Our App</p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <a href="#download" className="px-4 py-2 rounded-lg border border-white/30 bg-white/10 hover:bg-white/20 transition-colors">
                      App Store
                    </a>
                    <a href="#download" className="px-4 py-2 rounded-lg border border-white/30 bg-white/10 hover:bg-white/20 transition-colors">
                      Google Play
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: Phone,
                    title: 'Phone',
                    lines: ['Customer Support: +251 957', 'Office: +251 115 571 308'],
                  },
                  {
                    icon: Mail,
                    title: 'Email',
                    lines: ['contact@yayawallet.com', 'info@yayawallet.com'],
                  },
                  {
                    icon: MapPin,
                    title: 'Office',
                    lines: ['Olympia Heights Building, 3rd Floor, Addis Abeba, Ethiopia'],
                  },
                ].map((item) => (
                  <div key={item.title} className="glass-card p-6 border border-gray-200/80">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#6b1565]/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-[#6b1565]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold tracking-wide text-gray-500 uppercase">{item.title}</p>
                        {item.lines.map((line) => (
                          <p key={line} className="mt-2 text-gray-800 font-medium">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUsPage;

