import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BadgeDollarSign,
  Bell,
  Building2,
  CheckCircle2,
  Cloud,
  CreditCard,
  Lock,
  ShieldCheck,
  Smartphone,
  UserCheck,
  Workflow,
  Zap,
} from 'lucide-react';
import Services from '../sections/Services';

const ServicesPage = () => {
  const servicePillars = [
    {
      icon: CreditCard,
      title: 'Daily Payments',
      desc: 'Accept QR and wallet payments instantly at checkout with real-time confirmation.',
    },
    {
      icon: Smartphone,
      title: 'Utility + Airtime',
      desc: 'Bundle recurring bills and top-ups in one place with quick repeat actions.',
    },
    {
      icon: BadgeDollarSign,
      title: 'Transfers + Remittance',
      desc: 'Move money fast with transparent rates and trusted partner channels.',
    },
    {
      icon: ShieldCheck,
      title: 'Security + Compliance',
      desc: 'Strong account protection, verification, and auditable transaction records.',
    },
  ];

  const securityModules = [
    {
      id: 'cloud',
      icon: Cloud,
      tab: 'Cloud Infrastructure',
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure cloud-based systems ensuring 99.9% uptime and disaster recovery readiness.',
      checks: ['99.9% uptime guarantee', 'Auto-scaling infrastructure', 'Disaster recovery ready'],
    },
    {
      id: 'api',
      icon: Workflow,
      tab: 'API Integration',
      title: 'API Integration',
      description: 'Modern, versioned APIs with robust webhooks and controls for enterprise-grade integrations.',
      checks: ['Stable API versioning', 'Webhook event reliability', 'Secure tokenized access'],
    },
    {
      id: 'kyc',
      icon: UserCheck,
      tab: 'KYC/AML Compliance',
      title: 'KYC/AML Compliance',
      description: 'Compliance-first architecture with verification flows and monitoring for risk mitigation.',
      checks: ['Identity verification workflows', 'AML-ready rule controls', 'Audit trail and reporting'],
    },
    {
      id: 'data',
      icon: Lock,
      tab: 'Data Security',
      title: 'Data Security',
      description: 'Strong encryption, access controls, and operational safeguards to protect customer data.',
      checks: ['Encryption in transit and at rest', 'Role-based access controls', 'Continuous security monitoring'],
    },
  ];
  const [activeSecurity, setActiveSecurity] = useState('cloud');
  const activeModule = securityModules.find((item) => item.id === activeSecurity) ?? securityModules[0];

  return (
    <main className="flex-1">
      <section className="relative pt-24 lg:pt-28 pb-14 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-bg-light" />
        <div className="absolute top-20 right-0 w-[520px] h-[520px] bg-gradient-to-br from-[#6b1565]/12 to-transparent rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="badge-glass mb-4 inline-block">Services</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Powerful services for <span className="text-gradient">everyday payments</span>
          </h1>
          <p className="mt-5 text-lg text-gray-600 max-w-3xl">
            From personal transfers to merchant collections, YaYa gives you reliable payment tools
            with a smooth customer experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact-us" className="btn-primary flex items-center gap-2">
              Talk to sales
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/business" className="btn-outline">
              Explore business tools
            </Link>
          </div>
        </div>
      </section>

      <Services />

      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-[#f7f2f8]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-glass mb-4 inline-block">Technology & Security</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Built for <span className="text-gradient">security and scale</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade infrastructure with compliance at the core.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {securityModules.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveSecurity(item.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-semibold transition-all ${
                  activeModule.id === item.id
                    ? 'border-[#374151] text-[#111827] bg-white shadow-sm'
                    : 'border-gray-200 text-gray-500 hover:text-[#111827] hover:border-gray-300'
                }`}
              >
                <item.icon className={`w-4 h-4 ${activeModule.id === item.id ? 'text-[#374151]' : 'text-gray-400'}`} />
                {item.tab}
              </button>
            ))}
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <div className="rounded-3xl bg-[#eef1f8] border border-[#d9deea] p-8 h-[300px] flex items-center justify-center">
              <activeModule.icon className="w-28 h-28 text-[#6477a8]" />
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gray-900">{activeModule.title}</h3>
              <p className="mt-4 text-gray-600 text-lg leading-relaxed">{activeModule.description}</p>
              <div className="mt-6 space-y-3">
                {activeModule.checks.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#eef1f8] flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-[#6b1565]" />
                    </div>
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf5fa] to-white" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-glass mb-4 inline-block">Why teams choose YaYa</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Built for speed, trust, and <span className="text-gradient">scale</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicePillars.map((item) => (
              <div key={item.title} className="glass-card p-6 card-3d hover:-translate-y-0.5 transition-transform">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#6b1565]/6 via-white to-cyan-500/6" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-7 lg:p-10">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900">Operational service highlights</h3>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                Reliable operational controls for transaction speed, visibility, and scaling.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  icon: Zap,
                  t: 'Fast transaction processing',
                  d: 'Low-latency confirmations and smooth settlement flow.',
                },
                {
                  icon: Bell,
                  t: 'Real-time notifications',
                  d: 'Alerts for incoming payments, reversals, and settlements.',
                },
                {
                  icon: Building2,
                  t: 'Merchant-ready APIs',
                  d: 'Integrate online/offline channels with one payments backend.',
                },
              ].map((h) => (
                <div key={h.t} className="bg-white/80 border border-[#6b1565]/10 rounded-2xl p-5 hover:shadow-lg transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center shrink-0 mb-3">
                    <h.icon className="w-4 h-4 text-white" />
                  </div>
                  <p className="font-semibold text-gray-900">{h.t}</p>
                  <p className="text-sm text-gray-600 mt-2">{h.d}</p>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              {[
                '99.9% platform uptime',
                '24/7 monitoring and incident response',
                'Enterprise-grade service continuity',
              ].map((item) => (
                <div key={item} className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700 text-center">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;

