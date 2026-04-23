import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  LayoutDashboard,
  ScanLine,
  ShoppingCart,
  TrendingUp,
  Wallet,
  BellRing,
  ShieldCheck,
} from 'lucide-react';
import Business from '../sections/Business';

const BusinessPage = () => {
  const kpis = [
    { label: 'Today Revenue', value: 'ETB 84,520', delta: '+18.4%' },
    { label: 'Transactions', value: '1,248', delta: '+12.1%' },
    { label: 'Checkout Success', value: '98.9%', delta: '+1.9%' },
    { label: 'Avg Ticket Size', value: 'ETB 1,320', delta: '+6.3%' },
  ];

  const weeklyLineValues = [36, 48, 52, 67, 71, 84, 78];
  const weeklyDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const checkoutSteps = [
    { icon: ScanLine, title: 'Scan / Enter', desc: 'Scan QR or enter merchant code.' },
    { icon: ShoppingCart, title: 'Review cart', desc: 'Customer sees order and total amount.' },
    { icon: CreditCard, title: 'Authorize payment', desc: 'Confirm with secure PIN/biometric.' },
    { icon: CheckCircle2, title: 'Instant receipt', desc: 'Merchant + customer get real-time confirmation.' },
    { icon: BellRing, title: 'Auto notifications', desc: 'Payment alerts are sent to both merchant and customer.' },
    { icon: ShieldCheck, title: 'Fraud checks', desc: 'Risk rules run in real time before settlement.' },
  ];

  const getLinePath = () => {
    const width = 420;
    const height = 180;
    const maxY = 100;
    return weeklyLineValues
      .map((point, index) => {
        const x = (index / (weeklyLineValues.length - 1)) * width;
        const y = height - (point / maxY) * height;
        return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
      })
      .join(' ');
  };

  return (
    <main className="flex-1">
      <section className="relative pt-24 lg:pt-28 pb-14 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-bg-light" />
        <div className="absolute top-20 right-0 w-[520px] h-[520px] bg-gradient-to-br from-[#6b1565]/12 to-transparent rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="badge-glass mb-4 inline-block">Business</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Business tools for <span className="text-gradient">modern commerce</span>
          </h1>
          <p className="mt-5 text-lg text-gray-600 max-w-3xl">
            Unified merchant payments, dashboard analytics, and checkout flow simulation to help you
            grow operations confidently.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact-us" className="btn-primary flex items-center gap-2">
              Request demo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="https://dashboard.yayawallet.com/" target="_blank" className="btn-outline">
              Merchant dashboard
            </a>
          </div>
        </div>
      </section>

      <Business />

      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-[#faf5fa]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-glass mb-4 inline-block">Merchant Dashboard</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Business <span className="text-gradient">dashboard overview</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Monitor revenue, transaction health, checkout success, and customer behavior in one
              unified merchant workspace.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {kpis.map((k) => (
              <div key={k.label} className="glass-card p-5 card-3d">
                <p className="text-sm text-gray-500">{k.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{k.value}</p>
                <p className="text-sm text-emerald-600 mt-2">{k.delta}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 glass-card p-6 lg:p-7 card-3d">
              <div className="flex items-center gap-2 mb-5">
                <LayoutDashboard className="w-5 h-5 text-[#6b1565]" />
                <p className="font-semibold text-gray-900">Weekly Performance (line graph)</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-4">
                <svg viewBox="0 0 420 180" className="w-full h-48">
                  <defs>
                    <linearGradient id="bizWeeklyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#6b1565" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                  <path
                    d={getLinePath()}
                    fill="none"
                    stroke="url(#bizWeeklyGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {weeklyLineValues.map((v, i) => {
                    const x = (i / (weeklyLineValues.length - 1)) * 420;
                    const y = 180 - (v / 100) * 180;
                    return (
                      <circle
                        key={i}
                        cx={x}
                        cy={y}
                        r="5"
                        fill="white"
                        stroke="#6b1565"
                        strokeWidth="2.5"
                      />
                    );
                  })}
                </svg>
                <div className="mt-2 grid grid-cols-7 text-xs text-gray-500">
                  {weeklyDays.map((d) => (
                    <span key={d} className="text-center">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass-card p-6 card-3d">
              <div className="flex items-center gap-2 mb-5">
                <TrendingUp className="w-5 h-5 text-[#6b1565]" />
                <p className="font-semibold text-gray-900">Revenue trend</p>
              </div>
              <div className="space-y-3">
                {[72, 76, 80, 84, 88].map((v, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                      <span>Month {idx + 1}</span>
                      <span>{v}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#6b1565] to-[#9d4a96]" style={{ width: `${v}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-gray-100">
                <p className="text-xs uppercase tracking-wide text-gray-500">Dashboard feature highlights</p>
                <div className="mt-2 space-y-2">
                  {[
                    'Live settlement tracking by branch and cashier',
                    'Top-selling products and peak-hour insights',
                    'Dispute, refund, and reversal management',
                  ].map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <p className="text-sm text-gray-700">{f}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf5fa] to-white" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-glass mb-4 inline-block">Checkout system</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Smart checkout <span className="text-gradient">for every transaction</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Designed for speed at the counter, strong fraud control, and clear post-payment
              operations for your teams.
            </p>
          </div>

          <div className="p-0">
            <h3 className="text-xl font-bold text-gray-900 mb-5">Checkout flow features</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {checkoutSteps.map((s, idx) => (
                  <div
                    key={s.title}
                    className="bg-transparent border border-[#6b1565]/12 rounded-2xl p-4 hover:bg-white/40 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative w-10 flex-shrink-0">
                        <div className="absolute left-1/2 -translate-x-1/2 top-0 h-6 w-px bg-gradient-to-b from-[#6b1565]/40 to-transparent" />
                        <div className="w-10 h-10 rounded-full border-2 border-[#6b1565]/40 flex items-center justify-center bg-white/70 backdrop-blur">
                          <s.icon className="w-5 h-5 text-[#6b1565]" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 text-sm">{s.title}</p>
                        <p className="text-sm text-gray-600 mt-2 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                </div>
              ))}
            </div>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {[
                { icon: Wallet, t: 'Multi-wallet support', d: 'Accept multiple customer wallet sources.' },
                { icon: ShieldCheck, t: 'Chargeback shielding', d: 'Rule-based validation before settlement.' },
              ].map((item) => (
                <div key={item.t} className="bg-gray-50 border border-gray-200 rounded-xl p-3">
                  <div className="flex items-center gap-2">
                    <item.icon className="w-4 h-4 text-gray-700" />
                    <p className="font-semibold text-gray-900 text-sm">{item.t}</p>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BusinessPage;

