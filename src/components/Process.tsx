"use client";

import React from "react";
import { Sparkles, ArrowRight, MessageCircle } from "lucide-react";
import { PROCESS_STEPS, SITE_CONFIG } from "@/data/content";

export default function Process() {
  return (
    <section id="processo" className="py-20 md:py-28 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-slate-800 text-xs font-semibold text-indigo-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Processo Transparente</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Como Funciona a Criação do{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-cyber to-indigo-400">
              Seu Novo Site
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-foreground-muted">
            Sem complicação, sem termos técnicos confusos. Um fluxo claro do primeiro contato até o site no ar gerando contatos.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, index) => {
            const isLast = index === PROCESS_STEPS.length - 1;
            return (
              <div
                key={step.step}
                className="bg-surface rounded-2xl p-6 border border-slate-800 flex flex-col justify-between relative group hover:border-slate-700 transition-all duration-300"
              >
                <div>
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-mono text-cyan-cyber/80 group-hover:text-cyan-cyber transition-colors">
                      {step.step}
                    </span>
                    {!isLast && (
                      <span className="hidden lg:inline text-slate-600 font-bold text-lg">
                        →
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 font-heading">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-cyber" />
                  <span>Etapa essencial</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action call beneath steps */}
        <div className="mt-12 text-center">
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-cyan-cyber hover:text-cyan-glow transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Tire suas dúvidas ou inicie seu projeto hoje mesmo no WhatsApp →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
