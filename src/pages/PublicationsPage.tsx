import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Calendar, FileText, Newspaper, ShieldCheck, TrendingUp } from 'lucide-react';

const PublicationsPage = () => {
  const publications = [
    {
      type: 'Report',
      title: 'Digital Payments Outlook 2026',
      date: 'Jan 2026',
      summary: 'A strategic view of adoption trends, transaction behavior, and growth opportunities.',
    },
    {
      type: 'Whitepaper',
      title: 'Secure Wallet Infrastructure',
      date: 'Nov 2025',
      summary: 'Technical principles for resilient fintech architecture and fraud prevention.',
    },
    {
      type: 'Case Study',
      title: 'Merchant Scale Program',
      date: 'Sep 2025',
      summary: 'How partner merchants improved settlement speed and customer conversion.',
    },
    {
      type: 'Insights',
      title: 'Cross-border Experience Design',
      date: 'Aug 2025',
      summary: 'Design methods for reducing friction in remittance and multi-channel payments.',
    },
    {
      type: 'Research',
      title: 'Financial Inclusion Signals',
      date: 'Jun 2025',
      summary: 'Behavioral insights from emerging users in digital financial services.',
    },
    {
      type: 'Policy Brief',
      title: 'Compliance by Design',
      date: 'Apr 2025',
      summary: 'Operational framework aligning growth with regulatory and risk controls.',
    },
  ];

  return (
    <main className="flex-1">
      <section className="relative pt-24 lg:pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 gradient-bg-light" />
        <div className="absolute top-16 right-0 w-[520px] h-[520px] bg-gradient-to-br from-[#6b1565]/10 to-transparent rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="badge-glass mb-4 inline-flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#6b1565]" />
            Publications
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Insights, reports, and <span className="text-gradient">industry knowledge</span>
          </h1>
          <p className="mt-5 text-lg text-gray-600 max-w-3xl">
            Explore our latest publications on fintech innovation, security, compliance, and market growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact-us" className="btn-primary flex items-center gap-2">
              Request full report
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/services" className="btn-outline">Explore services</Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-[#faf5fa]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {[
              { icon: Newspaper, label: 'Total publications', value: '120+' },
              { icon: TrendingUp, label: 'Market briefings', value: '48' },
              { icon: ShieldCheck, label: 'Security papers', value: '22' },
            ].map((s) => (
              <div key={s.label} className="glass-card p-5">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mb-3">
                  <s.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-sm text-gray-500">{s.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{s.value}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publications.map((p) => (
              <article key={p.title} className="glass-card p-6 card-3d bg-white/90 border border-[#6b1565]/12 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-[#6b1565] bg-[#6b1565]/8 border border-[#6b1565]/15 px-2.5 py-1 rounded-full">
                    {p.type}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                    <Calendar className="w-3.5 h-3.5" />
                    {p.date}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">{p.title}</h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">{p.summary}</p>
                <button className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#6b1565]">
                  Read publication
                  <FileText className="w-4 h-4" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default PublicationsPage;

