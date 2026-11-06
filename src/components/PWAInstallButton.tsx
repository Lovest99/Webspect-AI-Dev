import React, { useState } from 'react';
import { Download, Smartphone, X, Share2, PlusSquare } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { createPortal } from 'react-dom';

interface PWAInstallButtonProps {
  variant?: 'navbar' | 'mobile-drawer' | 'footer' | 'pill';
  className?: string;
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  variant = 'navbar',
  className = '',
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  // If already running as an installed PWA on the phone/desktop, suppress the button
  if (isInstalled) {
    return null;
  }

  // If not installable and not iOS, allow showing an install indicator on supported browsers or hide
  const canShow = isInstallable || isIOS;
  if (!canShow) {
    return null;
  }

  const handleClick = () => {
    if (isInstallable) {
      install();
    } else if (isIOS) {
      setShowIOSGuide(true);
    }
  };

  const iosGuideModal = showIOSGuide ? (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-hidden select-none touch-none overscroll-none"
      onClick={() => setShowIOSGuide(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Install on iPhone or iPad"
    >
      <div
        className="w-full max-w-sm bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col p-5 sm:p-6 my-auto text-slate-900 animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-3">
            <img
              src="/favicon-48x48.png"
              alt="Webspect Icon"
              className="w-10 h-10 rounded-xl shadow-xs border border-slate-200"
            />
            <div>
              <h3 className="text-base font-bold text-slate-900">Install Webspect App</h3>
              <p className="text-xs text-slate-500">Add to iPhone / iPad Home Screen</p>
            </div>
          </div>
          <button
            onClick={() => setShowIOSGuide(false)}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg bg-slate-100 cursor-pointer"
            aria-label="Close guide"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="py-4 space-y-3.5 text-xs text-slate-700 leading-relaxed">
          <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200/80">
            <div className="p-2 bg-blue-50 text-[#1442CB] rounded-lg shrink-0">
              <Share2 className="w-4 h-4" />
            </div>
            <div>
              <strong className="text-slate-900 block font-semibold">1. Tap the Share button</strong>
              <span>Tap the Share icon at the bottom of your Safari browser bar.</span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200/80">
            <div className="p-2 bg-blue-50 text-[#1442CB] rounded-lg shrink-0">
              <PlusSquare className="w-4 h-4" />
            </div>
            <div>
              <strong className="text-slate-900 block font-semibold">2. Select "Add to Home Screen"</strong>
              <span>Scroll down the menu list and tap <strong className="text-slate-900">Add to Home Screen</strong>.</span>
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[11px] text-slate-400 font-mono">Webspect AI & Dev PWA</span>
          <button
            type="button"
            onClick={() => setShowIOSGuide(false)}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#1442CB] hover:bg-[#0F35A8] rounded-xl transition-colors cursor-pointer"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  ) : null;

  if (variant === 'navbar') {
    return (
      <>
        <button
          type="button"
          onClick={handleClick}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200/90 rounded-xl shadow-2xs transition-all cursor-pointer ${className}`}
          title="Install Webspect as mobile app"
        >
          <img src="/favicon-16x16.png" alt="" className="w-3.5 h-3.5 rounded" />
          <span className="hidden sm:inline">Install App</span>
          <Download className="w-3 h-3 text-[#1442CB]" />
        </button>
        {typeof document !== 'undefined' && iosGuideModal && createPortal(iosGuideModal, document.body)}
      </>
    );
  }

  if (variant === 'mobile-drawer') {
    return (
      <>
        <button
          type="button"
          onClick={handleClick}
          className={`w-full flex items-center justify-between p-3 rounded-xl bg-blue-50/70 border border-blue-200/70 text-slate-900 text-xs font-semibold transition-colors cursor-pointer ${className}`}
        >
          <div className="flex items-center gap-2.5">
            <img src="/favicon-32x32.png" alt="" className="w-5 h-5 rounded-lg shadow-2xs" />
            <span>Install Webspect on Phone</span>
          </div>
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#1442CB] text-white">
            PWA
          </span>
        </button>
        {typeof document !== 'undefined' && iosGuideModal && createPortal(iosGuideModal, document.body)}
      </>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className={`inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors cursor-pointer ${className}`}
      >
        <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
        <span>Install Web App</span>
      </button>
      {typeof document !== 'undefined' && iosGuideModal && createPortal(iosGuideModal, document.body)}
    </>
  );
};
