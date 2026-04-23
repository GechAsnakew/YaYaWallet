import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Target,
  Compass,
  Sparkles,
} from 'lucide-react';

const milestones = [
  {
    year: '2022',
    title: 'Company founded',
    description: 'YaYa Wallet was established with a mission to simplify payments for Ethiopians.',
  },
  {
    year: '2023',
    title: 'NBE licensing',
    description: 'Secured regulatory approval and launched core wallet services nationwide.',
  },
  {
    year: '2024',
    title: 'Partner ecosystem',
    description: 'Expanded integrations with leading banks, merchants, and agent networks.',
  },
  {
    year: '2025',
    title: 'Product innovation',
    description: 'Rolled out new savings, bill pay, and business tools for modern money management.',
  },
];

const founders = [
  {
    name: 'Anteneh Gebeyaw',
    position: 'Co-Founder',
    initials: 'AG',
    photoSrc: "/anteneh-gebeyaw.png",
  },
  {
    name: 'Workineh Kassa',
    position: 'Co-Founder',
    initials: 'WK',
    photoSrc: "/workineh-kassa.png",
  },
];

const boardMembers = [
  { name: 'Anteneh Gebeyaw', position: 'Board Chairman', initials: 'HB', photoSrc: "/anteneh-gebeyaw.png" },
  { name: 'Professor Enyew Adgo', position: 'V/Chairman', initials: 'EA', photoSrc: "/professor-enyew.png" },
  { name: 'Workineh Kassa', position: 'Director & Secretary', initials: 'WK', photoSrc: "/workineh-kassa.png" },
  { name: 'Seyoum Bemelaku', position: 'Director', initials: 'SB', photoSrc: "/seyoum.png" },
  { name: 'Architect Abebe Yimenu', position: 'Director', initials: 'AY', photoSrc: "/abebe.png" },
  { name: 'Tegegn Gessesse', position: 'Director', initials: 'TG', photoSrc: "/tegegn.png" },
];

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
  <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
    <span className="badge-glass mb-4 inline-block">{badge}</span>
    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
      {title} <span className="text-gradient">{highlight}</span>
    </h2>
    {subtitle ? <p className="mt-4 text-lg text-gray-600">{subtitle}</p> : null}
  </div>
);

const LeaderCard = ({
  name,
  position,
  initials,
  photoSrc,
}: {
  name: string;
  position: string;
  initials: string;
  photoSrc?: string;
}) => (
  <div className="glass-card w-[8cm] h-[10cm] p-3 card-3d flex flex-col gap-2 hover:scale-[1.02] transition-transform duration-300 group">
    <div className="rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 border border-black/5 flex-1 min-h-0">
        {photoSrc ? (
          <img
            src={photoSrc}
            alt={name}
            className="w-full h-full object-contain bg-white grayscale group-hover:grayscale-0 group-hover:saturate-110 transition-[filter] duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#6b1565] to-[#9d4a96] flex items-center justify-center text-lg font-bold text-white shadow-md ring-2 ring-white/70">
              {initials}
            </div>
          </div>
        )}
    </div>
    <div className="px-0.5 text-center">
      <p className="text-base font-semibold text-gray-900 leading-snug">{name}</p>
      <p className="text-xs font-semibold text-[#2f3a67] mt-1">{position}</p>
    </div>
  </div>
);

const AboutUsPage = () => {
  const hero = useSectionVisible(0.1);
  const who = useSectionVisible();
  const visionMission = useSectionVisible();
  const milestonesVis = useSectionVisible(0.08);
  const leadership = useSectionVisible(0.08);

  return (
    <main className="flex-1">
      {/* Hero */}
      <section
        ref={hero.ref}
        className="relative pt-24 lg:pt-28 pb-16 lg:pb-24 overflow-hidden"
      >
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
              <Sparkles className="w-4 h-4 text-[#6b1565]" />
              Company
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              About <span className="text-gradient">YaYa Wallet</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We are building inclusive, secure financial tools for people and businesses across
              Ethiopia, backed by strong governance and partnerships with trusted institutions.
            </p>
          </div>
        </div>
      </section> 

      {/* Vision & Mission */}
      <section ref={visionMission.ref} className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf5fa] to-white" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-700 ${visionMission.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <SectionHeader
              badge="Direction"
              title="Why"
              highlight="we exist"
              subtitle="A clear north star keeps our product, partnerships, and culture aligned."
            />
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-5 lg:gap-6">
              <div className="glass-card p-6 lg:p-7 card-3d border border-gray-300/40 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gray-900/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center shadow-sm">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Our vision</h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  To help the economy perform better and improve lives through smart, secure, and
                  user-friendly mobile solutions.
                </p>
              </div>
              <div className="glass-card p-6 lg:p-7 card-3d border border-gray-300/40 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gray-900/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center shadow-sm">
                    <Compass className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Our mission</h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  To be Ethiopia's first choice for digital financial services by 2030.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section ref={milestonesVis.ref} className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-[#f0fdf4]/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-700 ${milestonesVis.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <SectionHeader
              badge="Journey"
              title="Our key"
              highlight="milestones"
              subtitle="Key moments that shaped how we serve customers and partners today."
            />
            <div className="relative max-w-6xl mx-auto">
              {/* Top timeline: line + numbers */}
              <div className="relative px-2 sm:px-6">
                <div
                  className={`absolute left-6 right-6 top-5 h-0.5 bg-gradient-to-r from-[#6b1565]/40 via-[#9d4a96]/35 to-emerald-400/40 transition-all duration-700 ${
                    milestonesVis.visible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-90'
                  } origin-left`}
                />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {milestones.map((m, i) => (
                    <div key={m.year} className="flex justify-center">
                      <div
                        className={`w-10 h-10 rounded-full bg-white border-2 border-[#6b1565] flex items-center justify-center text-sm font-bold text-[#6b1565] shadow-md transition-all duration-700 ${
                          milestonesVis.visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                        }`}
                        style={{ transitionDelay: `${i * 90}ms` }}
                        aria-label={`Milestone ${i + 1}`}
                      >
                        {i + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom cards */}
              <div className="mt-6 lg:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5">
                {milestones.map((m, i) => (
                  <div
                    key={m.year}
                    className={`glass-card p-5 card-3d transition-all duration-700 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#6b1565]/10 ${
                      milestonesVis.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
                    style={{ transitionDelay: `${120 + i * 90}ms` }}
                  >
                    <span className="text-sm font-semibold text-[#6b1565]">{m.year}</span>
                    <h3 className="text-lg font-bold text-gray-900 mt-1">{m.title}</h3>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">{m.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section ref={leadership.ref} className="py-16 lg:py-28 relative overflow-hidden pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf5fa] to-white" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-700 ${leadership.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <SectionHeader
              badge="Leadership"
              title="Who's"
              highlight="leading us"
              subtitle="The people guiding strategy, governance, and long-term responsibility to customers."
            />

            <div className="mb-10">
              <div className="flex items-center justify-center mb-5">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur border border-[#6b1565]/15 shadow-sm">
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
                    Founders
                  </h3>
                  
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-[1cm]">
                {founders.map((p) => (
                  <LeaderCard key={p.name} {...p} />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-center mb-8">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur border border-emerald-500/15 shadow-sm">
          
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
                    Board of directors
                  </h3>
                  
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-[1cm]">
                {boardMembers.map((p) => (
                  <LeaderCard key={p.name} {...p} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA strip */}
      <section className="relative py-12 border-t border-[#6b1565]/10 bg-gradient-to-r from-[#6b1565]/5 via-white to-[#00d4ff]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-center sm:text-left text-gray-700 font-medium">
            Ready to see what we are building?
          </p>
          <Link to="/#download" className="btn-primary shrink-0">
            Get the app
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutUsPage;
