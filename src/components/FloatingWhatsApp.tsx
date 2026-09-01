"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { SITE_CONFIG } from "@/data/content";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Interactive Speech bubble notification tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-surface border border-slate-700 shadow-2xl text-white text-xs py-2 px-3.5 rounded-2xl relative">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Precisa de um orçamento? <strong>Fale comigo!</strong></span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white ml-1 p-0.5"
            aria-label="Fechar dica"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-surface border-t border-r border-slate-700 rotate-45" />
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={SITE_CONFIG.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com DPS Web Designer no WhatsApp"
        className="relative group w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-500/40"
      >
        {/* Continuous Pulse Ping */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping -z-10" />

        <MessageCircle className="w-7 h-7 fill-white" />

        {/* Online Status Dot */}
        <span className="absolute top-0 right-0 w-4 h-4 bg-cyan-cyber border-2 border-slate-900 rounded-full" />
      </a>
    </div>
  );
}
