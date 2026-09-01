"use client";

import React from "react";
import { MessageCircle, Mail, Phone, ArrowUpRight, Sparkles, Shield } from "lucide-react";
import { SITE_CONFIG, FINAL_CTA } from "@/data/content";

export default function CtaSection() {
  return (
    <section id="contato" className="py-20 md:py-28 relative scroll-mt-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-b from-surface to-slate-900 border border-slate-700/80 p-8 sm:p-12 md:p-16 text-center shadow-2xl overflow-hidden">
          {/* Top accent glow line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-cyber to-transparent" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs font-semibold text-cyan-cyber mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Vamos construir algo incrível juntos</span>
          </div>

          {/* Title (Exact prompt text) */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading max-w-3xl mx-auto leading-tight">
            {FINAL_CTA.title}
          </h2>

          {/* Subtitle (Exact prompt text) */}
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto leading-relaxed">
            {FINAL_CTA.subtitle}
          </p>

          {/* Main CTA Button (Exact prompt text) */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-white text-lg font-bold px-8 py-4 rounded-xl shadow-glow-indigo transition-all duration-300 hover:scale-105 active:scale-[0.98] border border-indigo-400/40"
            >
              <MessageCircle className="w-6 h-6 fill-white/20" />
              <span>{FINAL_CTA.buttonText}</span>
              <ArrowUpRight className="w-5 h-5 opacity-90" />
            </a>
          </div>

          {/* Direct Contact Cards */}
          <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {/* WhatsApp Card */}
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 p-4 rounded-xl flex items-center gap-3 transition-colors text-left group"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <span className="text-xs text-slate-500 block">WhatsApp Direto</span>
                <span className="text-sm font-semibold text-white truncate block">
                  {SITE_CONFIG.phone}
                </span>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 p-4 rounded-xl flex items-center gap-3 transition-colors text-left group"
            >
              <div className="w-10 h-10 rounded-lg bg-cyan-cyber/10 border border-cyan-cyber/30 flex items-center justify-center text-cyan-cyber shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <span className="text-xs text-slate-500 block">E-mail Comercial</span>
                <span className="text-sm font-semibold text-white truncate block">
                  {SITE_CONFIG.email}
                </span>
              </div>
            </a>
          </div>

          {/* Guarantee / Security footnote */}
          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-500">
            <Shield className="w-3.5 h-3.5 text-cyan-cyber" />
            <span>Atendimento direto pelo profissional responsável pelo seu projeto.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
