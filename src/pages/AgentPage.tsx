import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  BadgePercent,
  CheckCircle2,
  ClipboardList,
  Coins,
  Handshake,
  MapPin,
  ShieldCheck,
  Store,
} from 'lucide-react';

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

const SectionHeader = ({
  badge,
  title,
  highlight,
  subtitle,
}: {
  badge: string;
  title: string;
  highlight: string;
  subtitle?: string;
}) => (
  <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
    <span className="badge-glass mb-4 inline-block">{badge}</span>
    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
      {title} <span className="text-gradient">{highlight}</span>
    </h2>
    {subtitle ? <p className="mt-4 text-lg text-gray-600">{subtitle}</p> : null}
  </div>
);

const AgentPage = () => {
  const hero = useSectionVisible(0.1);
  const benefits = useSectionVisible();
  const requirements = useSectionVisible();
  const steps = useSectionVisible();

  return (
    <main className="flex-1">
      {/* Hero */}
      <section ref={hero.ref} className="relative pt-24 lg:pt-28 pb-16 lg:pb-20 overflow-hidden">
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
            <span className="badge-glass mb-4 inline-flex items-center gap-2">
              <Handshake className="w-4 h-4 text-[#6b1565]" />
              Agent Network
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Become a <span className="text-gradient">YaYa Agent</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Serve your community, grow your business, and earn commissions by helping customers
              cash-in, cash-out, and access digital payments securely.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact-us" className="btn-primary">
                Apply / Contact us
              </Link>
              <Link to="/#download" className="btn-outline">
                Get the app
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="glass-card p-4 flex items-center gap-3">
                <div className="icon-container-purple shrink-0">
                  <Coins className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Earn more</p>
                  <p className="text-sm text-gray-600">Commission per transaction</p>
                </div>
              </div>
              <div className="glass-card p-4 flex items-center gap-3">
                <div className="icon-container-purple shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Increase foot traffic</p>
                  <p className="text-sm text-gray-600">More customers nearby</p>
                </div>
              </div>
              <div className="glass-card p-4 flex items-center gap-3">
                <div className="icon-container-purple shrink-0">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Trusted platform</p>
                  <p className="text-sm text-gray-600">Secure + compliant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section ref={benefits.ref} className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-[#faf5fa]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-700 ${benefits.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <SectionHeader
              badge="Why join"
              title="Benefits of being"
              highlight="an agent"
              subtitle="A simple way to grow income while delivering essential services in your area."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: BadgePercent,
                  title: 'Competitive commissions',
                  desc: 'Earn from cash-in, cash-out, bill pay, and digital transactions every day.',
                  badge: 'Revenue growth',
                  points: ['Daily transaction commissions', 'Clear and trackable settlement'],
                },
                {
                  icon: Store,
                  title: 'Grow your business traffic',
                  desc: 'Turn your location into a trusted financial service point for the community.',
                  badge: 'More customers',
                  points: ['Increase repeat visits', 'Cross-sell your existing products'],
                },
                {
                  icon: ClipboardList,
                  title: 'Easy onboarding support',
                  desc: 'Our team guides you from application to activation with practical training.',
                  badge: 'Fast setup',
                  points: ['Simple documentation process', 'Step-by-step onboarding'],
                },
                {
                  icon: ShieldCheck,
                  title: 'Secure operations',
                  desc: 'Operate with strong controls, transparent records, and compliance guidance.',
                  badge: 'Trusted platform',
                  points: ['KYC/AML aligned operations', 'Reliable transaction security'],
                },
              ].map((b, i) => (
                <div
                  key={b.title}
                  className={`glass-card p-6 lg:p-7 card-3d bg-white/85 border border-[#6b1565]/12 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#6b1565]/12 transition-all duration-500 ${
                    benefits.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${120 + i * 90}ms` }}
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#6b1565] flex items-center justify-center shadow-md shadow-[#6b1565]/25 ring-4 ring-[#6b1565]/10">
                      <b.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-[#6b1565] bg-[#6b1565]/8 border border-[#6b1565]/15 rounded-full px-3 py-1">
                      {b.badge}
                    </span>
                  </div>
                  <p className="font-bold text-gray-900 text-[1.05rem] leading-snug">{b.title}</p>
                  <p className="text-sm text-gray-600 mt-2.5 leading-relaxed">{b.desc}</p>
                  <div className="mt-4 space-y-2">
                    {b.points.map((p) => (
                      <div key={p} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-gray-700">{p}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section ref={requirements.ref} className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf5fa] to-white" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-700 ${requirements.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <SectionHeader
              badge="Requirements"
              title="What you need"
              highlight="to apply"
              subtitle="What you need to become a YaYa Wallet authorized agent."
            />

            <div className="relative max-w-4xl mx-auto mt-6">
              {/* vertical connector */}
              <div className="absolute left-[22px] top-2 bottom-2 w-px bg-gradient-to-b from-[#6b1565]/35 via-[#9d4a96]/25 to-[#3b82f6]/15 hidden lg:block" />

              <div className="space-y-4">
                {[
                  {
                    title: 'Valid identification documents',
                    desc: 'Bring the required ID documents for verification.',
                  },
                  {
                    title: 'Business location (shop / kiosk / office)',
                    desc: 'Provide a physical location where you can serve customers.',
                  },
                  {
                    title: 'Ability to keep float for transactions',
                    desc: 'Maintain the required cash float for cash-in/cash-out operations.',
                  },
                  {
                    title: 'Smartphone + reliable network access',
                    desc: 'You’ll need network connectivity for secure operations and updates.',
                  },
                  {
                    title: 'Commitment to customer service',
                    desc: 'Assist customers with clear guidance and reliable support.',
                  },
                  {
                    title: 'Compliance readiness (KYC/AML friendly)',
                    desc: 'Be prepared for verification steps and compliance checks.',
                  },
                  {
                    title: 'Operational record keeping',
                    desc: 'Keep simple transaction records and follow agent procedures.',
                  },
                ].map((item, i) => (
                  <div
                    key={item.title}
                    className={`relative pl-14 ${
                      requirements.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    } transition-all duration-700`}
                    style={{ transitionDelay: `${i * 90 + 120}ms` }}
                  >
                    <div className="absolute left-[2px] top-1 w-10 h-10 rounded-full bg-white border border-[#6b1565]/25 flex items-center justify-center shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-[#6b1565]" />
                    </div>
                    <div className="glass-card p-5 card-3d border border-black/5">
                      <p className="font-semibold text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-600 mt-2 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section ref={steps.ref} className="py-16 lg:py-24 relative overflow-hidden pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-[#f0fdf4]/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-700 ${steps.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <SectionHeader
              badge="How it works"
              title="How to become"
              highlight="a YaYa Agent"
              subtitle="A simple 6-step process to start your agent business with YaYa."
            />

            <div className="max-w-6xl mx-auto">
              {(() => {
                const stepsList = [
                  {
                    title: 'Apply online',
                    desc: 'Share your business details, location, and required documentation.',
                  },
                  {
                    title: 'KYC verification',
                    desc: 'Complete identity and compliance checks to keep the network secure.',
                  },
                  {
                    title: 'Background check',
                    desc: 'We verify your business information and ensure readiness to operate.',
                  },
                  {
                    title: 'Training program',
                    desc: 'Get hands-on training on operations, compliance, and customer service.',
                  },
                  {
                    title: 'Get certified',
                    desc: 'Receive your agent credentials and onboarding materials.',
                  },
                  {
                    title: 'Start processing',
                    desc: 'Begin serving customers and earning commissions immediately.',
                  },
                ];

                return (
                  <div className="relative">
                    {/* Top timeline line + circles */}
                    <div className="relative px-2 sm:px-4 lg:px-6">
                      <div
                        className={`absolute left-6 right-6 top-5 h-0.5 bg-gradient-to-r from-[#6b1565]/40 via-[#9d4a96]/30 to-blue-400/35 transition-all duration-700 ${
                          steps.visible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-90'
                        } origin-left`}
                      />
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {stepsList.map((s, i) => (
                          <div key={s.title} className="flex flex-col items-center">
                            <div
                              className={`w-10 h-10 rounded-full bg-white border-2 border-blue-500 shadow-sm flex items-center justify-center text-xs font-bold text-blue-600 transition-all duration-700 ${
                                steps.visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                              }`}
                              style={{ transitionDelay: `${i * 80}ms` }}
                            >
                              {String(i + 1).padStart(2, '0')}
                            </div>
                            <p className="text-xs font-semibold text-blue-600 mt-2">
                              Step {String(i + 1).padStart(2, '0')}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom cards */}
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                      {stepsList.map((s, i) => (
                        <div
                          key={s.title}
                          className={`glass-card p-8 pr-4 pl-5 card-3d border border-black/5 bg-white/80 hover:-translate-y-0.5 transition-all duration-700 ${
                            steps.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                          }`}
                          style={{ transitionDelay: `${120 + i * 80}ms` }}
                        >
                          <p className="font-bold text-gray-900 text-sm">{s.title}</p>
                          <p className="text-xs text-gray-600 mt-2 leading-relaxed">{s.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>

            <div className="mt-10 flex justify-center">
              <Link to="/contact-us" className="btn-primary">
                Contact us to apply
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AgentPage;

