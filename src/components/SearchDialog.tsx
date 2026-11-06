import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import {
  Search,
  X,
  ArrowRight,
  Globe,
  Layers,
  Zap,
  Boxes,
  MessageSquare,
  ExternalLink,
  FileText,
  Package,
  Cpu,
  Building2,
  Palette,
} from 'lucide-react';
import { SOLUTIONS } from '../data/solutions';
import { PRODUCTS } from '../data/products';
import { WORK_ITEMS } from '../data/work';
import { RESOURCE_ARTICLES } from '../data/resources';
import { DESIGN_PACKAGES } from '../data/packages';
import { useRouter } from '../context/RouterContext';

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchItem {
  type: string;
  title: string;
  subtitle: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
  externalUrl?: string;
  externalLabel?: string;
}

export const SearchDialog: React.FC<SearchDialogProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { navigate } = useRouter();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);

      const originalOverflow = document.body.style.overflow;
      const originalTouchAction = document.body.style.touchAction;
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.touchAction = originalTouchAction;
      };
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const cleanQuery = query.toLowerCase().trim();

  const results: SearchItem[] = React.useMemo(() => {
    if (!cleanQuery) {
      // Direct, real, verified high-impact items
      return [
        {
          type: 'Live Production Website',
          title: 'Mist Corporate Services (mist.co.zw)',
          subtitle: 'Zimbabwe company registrations, PRAZ tenders, ZIMRA tax clearance & secretarial portal',
          path: '/work/mist-civic-platform',
          externalUrl: 'https://mist.co.zw/',
          externalLabel: 'mist.co.zw',
          icon: Globe,
        },
        {
          type: 'Live Web App & AI',
          title: 'Analytico AI – Multi-Agent Business Intelligence',
          subtitle: '5 collaborative AI agents forecasting Net Revenue ($4.82M), CAC trends & boardroom narratives',
          path: '/work/analytico-business-intelligence',
          externalUrl: 'https://analyze-eloquent.lovable.app',
          externalLabel: 'Live App',
          icon: Cpu,
        },
        {
          type: 'Live Web App & AI',
          title: 'CoverPilot – Workforce Shift Coverage Engine',
          subtitle: 'Automated 24h deficit heatmaps and emergency SMS/WhatsApp dispatch without 2am phone trees',
          path: '/work/coverpilot-shift-automation',
          externalUrl: 'https://coverpilot-ops.lovable.app/',
          externalLabel: 'Live App',
          icon: Zap,
        },
        {
          type: 'Live Web App & AI',
          title: 'Clarity AI – Mobile Command Center for Energy Groups',
          subtitle: '"Run your empire from your phone" · Live telemetry for Sichel Energies & SIMRAC Zimbabwe',
          path: '/work/clarity-ai-enterprise-vision',
          externalUrl: 'https://clarity-empire-vision.lovable.app/',
          externalLabel: 'Live App',
          icon: Boxes,
        },
        {
          type: 'Live Web App & AI',
          title: 'Relay AI – 24/7 AI Lead & Webhook Automation',
          subtitle: 'Captures leads, remembers conversations, and routes webhooks with human-in-the-loop review',
          path: '/work/relay-automation-engine',
          externalUrl: 'https://relay-ai-pro.lovable.app/',
          externalLabel: 'Live App',
          icon: Zap,
        },
        {
          type: 'Client Production Website',
          title: 'Multivate Construction – Civil Engineering Portfolio',
          subtitle: 'Heavy earthmoving fleet catalog, completed civil projects & direct WhatsApp tender intake',
          path: '/work/multivate-construction',
          icon: Building2,
        },
        {
          type: 'Engineering Solution',
          title: 'Digital Presence & High-Converting Websites',
          subtitle: 'Websites and catalogues engineered to get found and chosen online',
          path: '/solutions/digital-presence',
          icon: Globe,
        },
        {
          type: 'Engineering Solution',
          title: 'Operational Workflow & Data Automation',
          subtitle: 'Reduce repetitive data entry, run calculation engines & auto-generate quotes',
          path: '/solutions/workflow-automation',
          icon: Zap,
        },
        {
          type: 'Design Package',
          title: 'Monthly Presence Package ($60/mo)',
          subtitle: '31 unique promotional designs engineered for daily WhatsApp Status and social reach',
          path: '/design-packages',
          icon: Package,
        },
        {
          type: 'Engineering Resource',
          title: 'Is your business ready for automation?',
          subtitle: 'The 4 sanity checks before writing any code',
          path: '/resources/is-your-business-ready-for-automation',
          icon: FileText,
        },
      ];
    }

    const items: SearchItem[] = [];

    // 1. Search Case Studies & Real Work (Highest Priority)
    WORK_ITEMS.forEach((w) => {
      const match =
        w.title.toLowerCase().includes(cleanQuery) ||
        w.clientOrProject.toLowerCase().includes(cleanQuery) ||
        w.sector.toLowerCase().includes(cleanQuery) ||
        w.summary.toLowerCase().includes(cleanQuery) ||
        w.delivered.some((d) => d.toLowerCase().includes(cleanQuery)) ||
        (w.externalUrl && w.externalUrl.toLowerCase().includes(cleanQuery));

      if (match) {
        let iconComp = Layers;
        if (w.deliverableType === 'Production Website') iconComp = Globe;
        else if (w.deliverableType === 'Web App & AI') iconComp = Cpu;
        else if (w.deliverableType === 'Brand Identity & Design') iconComp = Palette;

        items.push({
          type: w.deliverableType,
          title: w.clientOrProject,
          subtitle: w.summary,
          path: `/work/${w.slug}`,
          icon: iconComp,
          externalUrl: w.externalUrl,
          externalLabel: w.externalUrl ? w.externalUrl.replace('https://', '').replace('/', '') : undefined,
        });
      }
    });

    // 2. Search Products
    PRODUCTS.forEach((p) => {
      const match =
        p.name.toLowerCase().includes(cleanQuery) ||
        p.tagline.toLowerCase().includes(cleanQuery) ||
        p.whatItHelpsWith.toLowerCase().includes(cleanQuery) ||
        p.whoItIsFor.toLowerCase().includes(cleanQuery) ||
        p.keyFeatures.some((k) => k.toLowerCase().includes(cleanQuery));

      if (match) {
        items.push({
          type: `Product · ${p.status}`,
          title: p.name,
          subtitle: `${p.tagline} — ${p.whatItHelpsWith}`,
          path: `/products/${p.slug}`,
          icon: Boxes,
          externalUrl: p.publicUrl,
          externalLabel: p.publicUrl ? 'Live Demo' : undefined,
        });
      }
    });

    // 3. Search Solutions
    SOLUTIONS.forEach((s) => {
      if (
        s.navTitle.toLowerCase().includes(cleanQuery) ||
        s.pageTitle.toLowerCase().includes(cleanQuery) ||
        s.shortDescription.toLowerCase().includes(cleanQuery) ||
        s.definition.toLowerCase().includes(cleanQuery)
      ) {
        items.push({
          type: 'Solution',
          title: s.pageTitle,
          subtitle: s.shortDescription,
          path: `/solutions/${s.slug}`,
          icon:
            s.iconName === 'Globe'
              ? Globe
              : s.iconName === 'Zap'
              ? Zap
              : s.iconName === 'Layers'
              ? Layers
              : MessageSquare,
        });
      }
    });

    // 4. Search Packages
    DESIGN_PACKAGES.forEach((dp) => {
      if (
        dp.name.toLowerCase().includes(cleanQuery) ||
        dp.description.toLowerCase().includes(cleanQuery) ||
        dp.bestFor.toLowerCase().includes(cleanQuery)
      ) {
        items.push({
          type: 'Design Package',
          title: `${dp.name} ($${dp.priceUSD}${dp.cadence || ''})`,
          subtitle: `${dp.designCount} unique designs · ${dp.description}`,
          path: '/design-packages',
          icon: Package,
        });
      }
    });

    // 5. Search Resources
    RESOURCE_ARTICLES.forEach((r) => {
      if (
        r.title.toLowerCase().includes(cleanQuery) ||
        r.subtitle.toLowerCase().includes(cleanQuery) ||
        r.summary.toLowerCase().includes(cleanQuery)
      ) {
        items.push({
          type: 'Resource Article',
          title: r.title,
          subtitle: `${r.readTime} · ${r.summary}`,
          path: `/resources/${r.slug}`,
          icon: FileText,
        });
      }
    });

    return items;
  }, [cleanQuery]);

  const handleSelect = (item: SearchItem) => {
    onClose();
    navigate(item.path);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, results.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + results.length) % Math.max(1, results.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[selectedIndex]) {
        handleSelect(results[selectedIndex]);
      }
    }
  };

  if (!isOpen) return null;

  const dialogElement = (
    <div
      className="fixed inset-0 z-[9999] flex items-start justify-center pt-8 sm:pt-20 p-3 sm:p-5 bg-slate-950/85 backdrop-blur-md overflow-hidden touch-none overscroll-none select-none transition-opacity duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Quick Search"
    >
      <div
        className="w-full max-w-[calc(100vw-1.5rem)] sm:max-w-2xl max-h-[82dvh] sm:max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-900 touch-auto overscroll-contain animate-in zoom-in-95 duration-150 flex flex-col"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar (Fixed / Stiff) */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-100 gap-3 shrink-0 bg-white">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search real projects, mist.co.zw, AI apps, packages, solutions..."
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded cursor-pointer"
              aria-label="Clear query"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <span className="hidden sm:inline-block text-[11px] font-mono text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
              ESC
            </span>
          )}
        </div>

        {/* Results List (Internal scroll only) */}
        <div className="flex-1 min-h-0 overflow-y-auto p-2 space-y-1 overscroll-contain [scrollbar-width:thin]">
          {results.length === 0 ? (
            <div className="py-12 text-center text-slate-500">
              <p className="text-sm font-medium">No results found for "{query}".</p>
              <p className="text-xs text-slate-400 mt-1">
                Try searching for "mist", "analytico", "coverpilot", "clarity", "website", or "packages".
              </p>
            </div>
          ) : (
            results.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={`${item.type}-${item.path}-${idx}`}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl flex items-center justify-between gap-3 transition-colors cursor-pointer group ${
                    isSelected ? 'bg-slate-100 text-slate-900' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-start gap-3 min-w-0 flex-1">
                    <div
                      className={`p-2 rounded-lg shrink-0 mt-0.5 ${
                        isSelected
                          ? 'bg-white text-[#1442CB] shadow-sm'
                          : 'bg-slate-100 text-slate-500 group-hover:text-slate-800'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-400">
                          {item.type}
                        </span>
                      </div>
                      <p className="text-sm font-bold text-slate-900 truncate mt-0.5">{item.title}</p>
                      <p className="text-xs text-slate-500 truncate mt-0.5">{item.subtitle}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {item.externalUrl && (
                      <a
                        href={item.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold text-[#1442CB] bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors"
                        title={`Open ${item.externalUrl}`}
                      >
                        <span>{item.externalLabel || 'Visit live'}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    <ArrowRight
                      className={`w-4 h-4 shrink-0 transition-transform ${
                        isSelected ? 'text-[#1442CB] translate-x-0.5' : 'text-slate-300'
                      }`}
                    />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts (Fixed / Stiff) */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4">
            <span>
              <kbd className="font-mono bg-white border border-slate-200 px-1 py-0.5 rounded shadow-2xs">↑</kbd>{' '}
              <kbd className="font-mono bg-white border border-slate-200 px-1 py-0.5 rounded shadow-2xs">↓</kbd> to navigate
            </span>
            <span>
              <kbd className="font-mono bg-white border border-slate-200 px-1 py-0.5 rounded shadow-2xs">↵</kbd> to select
            </span>
          </div>
          <span className="font-medium text-slate-600">Webspect AI & Dev</span>
        </div>
      </div>
    </div>
  );

  return typeof document !== 'undefined' ? createPortal(dialogElement, document.body) : null;
};
