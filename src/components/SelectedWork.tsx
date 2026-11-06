import React, { useState } from 'react';
import {
  ArrowRight,
  ExternalLink,
  Layers,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Maximize2,
  Cpu,
  Globe,
  Palette,
} from 'lucide-react';
import { WORK_ITEMS, CaseStudy, DeliverableType } from '../data/work';
import { useRouter } from '../context/RouterContext';
import { CaseStudyModal } from './CaseStudyModal';

interface SelectedWorkProps {
  onOpenContact?: (interest?: string, description?: string) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onOpenContact }) => {
  const { navigate } = useRouter();
  const [filter, setFilter] = useState<string>('All');
  const [inspectCaseStudy, setInspectCaseStudy] = useState<CaseStudy | null>(null);

  const filters: (string | DeliverableType)[] = [
    'All',
    'Web Apps & AI',
    'Production Websites',
    'Brand Identity & Design',
  ];

  const displayedWork = filter === 'All'
    ? WORK_ITEMS
    : WORK_ITEMS.filter((w) => w.deliverableType === filter);

  return (
    <section className="py-16 sm:py-20 bg-white/85 backdrop-blur-xs border-b border-slate-200/80 relative overflow-hidden">
      {/* Engineered Canvas Micro-Dot Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Atmospheric Pale Blue Light Bloom */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#1442CB]/[0.06] via-[#1442CB]/[0.02] to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/90 border border-blue-200/70 text-xs font-semibold text-[#1442CB] uppercase tracking-wider mb-3 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1442CB]" />
              <span>Proven Deliverables & Commercial Systems</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-[-0.02em] text-slate-900 leading-tight">
              Featured projects built to <span className="bg-gradient-to-r from-[#1442CB] via-blue-600 to-indigo-600 bg-clip-text text-transparent">command market authority</span>.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Explore autonomous multi-agent web applications, live production websites like <span className="font-semibold text-slate-900">mist.co.zw</span>,
              and engineered corporate visual identity systems delivered with mathematical precision.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => navigate('/work')}
              className="px-4.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors inline-flex items-center gap-2 cursor-pointer shadow-2xs"
            >
              <span>Explore all case studies</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filter Bar (Segmented Controls with tactile padding) */}
        <div className="mt-8 w-full sm:w-auto flex items-center gap-1.5 p-1.5 bg-slate-100/90 border border-slate-200/90 rounded-xl overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`flex-1 sm:flex-initial text-center px-3.5 py-2.5 sm:px-4 sm:py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center justify-center gap-1.5 ${
                filter === f
                  ? 'bg-white text-slate-900 shadow-xs ring-1 border border-slate-200 font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              {f === 'Web Apps & AI' && <Cpu className="w-3.5 h-3.5 text-[#1442CB]" />}
              {f === 'Production Websites' && <Globe className="w-3.5 h-3.5 text-emerald-600" />}
              {f === 'Brand Identity & Design' && <Palette className="w-3.5 h-3.5 text-amber-600" />}
              <span>{f}</span>
            </button>
          ))}
        </div>

        {/* Selected Work Grid (Showing hiring-magnet projects first) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedWork.slice(0, 6).map((item) => (
            <div
              key={item.id}
              onClick={() => setInspectCaseStudy(item)}
              className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden hover:border-[#1442CB]/60 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)] transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between cursor-pointer relative"
            >
              {/* Subtle top indicator on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-transparent group-hover:bg-[#1442CB] transition-colors z-10" />

              {/* Verified Image Preview Banner (Frameless Flush to Rounded Corners) */}
              {item.imagePath ? (
                <div className="w-full aspect-[16/9] overflow-hidden border-b border-slate-200/80 bg-slate-950 relative">
                  <img
                    src={item.imagePath}
                    alt={item.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-white/90">
                    <span className="bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                      Verified Deliverable
                    </span>
                    {item.externalUrl && (
                      <span className="bg-[#1442CB]/80 text-white px-2 py-0.5 rounded backdrop-blur-xs font-semibold">
                        Live System
                      </span>
                    )}
                  </div>
                </div>
              ) : (
                <div className="w-full aspect-[16/9] bg-gradient-to-br from-slate-900 via-[#0A1931] to-slate-950 flex flex-col justify-between p-5 border-b border-slate-200/80 relative">
                  <div className="flex items-center justify-between text-xs text-white/70">
                    <span className="font-mono text-[10px] uppercase tracking-wider">3D Identity Specification</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#65A30D] text-white">
                      Approved Mark
                    </span>
                  </div>
                  <div>
                    <span className="text-2xl font-black text-white tracking-tight">DS</span>
                    <p className="text-xs text-white/80 font-medium mt-1">Deepstone Legacy Construction</p>
                  </div>
                  <div className="text-[10px] font-mono text-white/60">
                    Vector Brand Identity & Guidelines
                  </div>
                </div>
              )}

              {/* Padded Card Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category & Sector Header */}
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium pb-2">
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-1 font-semibold text-xs ${
                          item.deliverableType === 'Web App & AI'
                            ? 'text-[#1442CB]'
                            : item.deliverableType === 'Production Website'
                            ? 'text-emerald-700'
                            : 'text-amber-700'
                        }`}
                      >
                        {item.deliverableType === 'Web App & AI' && <Cpu className="w-3 h-3" />}
                        {item.deliverableType === 'Production Website' && <Globe className="w-3 h-3" />}
                        {item.deliverableType === 'Brand Identity & Design' && <Palette className="w-3 h-3" />}
                        {item.deliverableType}
                      </span>
                      <span aria-hidden="true" className="text-slate-300">·</span>
                      <span className="text-slate-500 text-xs truncate max-w-[140px]">{item.sector}</span>
                    </div>
                    <span className="p-1 text-slate-400 group-hover:text-[#1442CB] transition-colors" title="Quick preview">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-2 group-hover:text-[#1442CB] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Challenge -> Delivered highlights */}
                  <div className="mt-4 space-y-2 text-xs">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                        Delivered Scope:
                      </span>
                      <ul className="space-y-1.5">
                        {item.delivered.slice(0, 2).map((del, i) => (
                          <li key={i} className="text-slate-700 flex items-start gap-2 text-xs">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-5 pt-3 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#1442CB] group-hover:text-[#0D32A8] flex items-center gap-1.5">
                    <span>Inspect full case study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  {item.externalUrl && (
                    <span className="text-[11px] text-[#1442CB] font-mono bg-blue-50 px-2 py-0.5 rounded border border-blue-200/60 inline-flex items-center gap-1 font-semibold">
                      <span>{item.externalUrl.replace('https://', '').replace('/', '')}</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Case Study Inspector Modal */}
      <CaseStudyModal
        caseStudy={inspectCaseStudy}
        onClose={() => setInspectCaseStudy(null)}
        onOpenContact={(interest, desc) => {
          if (onOpenContact) {
            onOpenContact(interest, desc);
          } else {
            navigate('/contact');
          }
        }}
      />
    </section>
  );
};
