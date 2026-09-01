"use client";

import React from "react";
import {
  Sparkles,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  MousePointerClick,
  Building2,
} from "lucide-react";
import { SERVICES } from "@/data/content";

export default function Services() {
  const getCustomWhatsAppUrl = (serviceTitle: string) => {
    const encoded = encodeURIComponent(
      `Olá, tenho interesse no serviço de ${serviceTitle} da DPS Web Designer. Poderia me enviar um orçamento?`
    );
    return `https://wa.me/5519994493257?text=${encoded}`;
  };

  return (
    <section id="servicos" className="py-20 md:py-28 relative scroll-mt-16 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-slate-800 text-xs font-semibold text-cyan-cyber mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nossas Soluções Digitais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Serviços Projetados para{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-cyber">
              Gerar Resultados
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-foreground-muted">
            Desenvolvimento sob medida com arquitetura moderna, design refinado e foco absoluto na experiência do usuário e na conversão em vendas.
          </p>
        </div>

        {/* Services Grid (2 Main Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => {
            const isFirst = index === 0;
            return (
              <div
                key={service.id}
                className={`relative rounded-2xl bg-surface border transition-all duration-300 flex flex-col justify-between p-6 sm:p-8 card-glow-hover ${
                  isFirst
                    ? "border-cyan-cyber/40 shadow-glow-cyan/10"
                    : "border-primary/40 shadow-glow-indigo/10"
                }`}
              >
                {/* Highlight Tag */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        isFirst
                          ? "bg-cyan-cyber/20 text-cyan-cyber border border-cyan-cyber/30"
                          : "bg-primary/20 text-primary-light border border-primary/30"
                      }`}
                    >
                      {isFirst ? (
                        <MousePointerClick className="w-6 h-6" />
                      ) : (
                        <Building2 className="w-6 h-6" />
                      )}
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-foreground-muted">
                        {service.highlight}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Description (Exact prompt text) */}
                <p className="text-foreground-muted text-sm sm:text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 pt-4 border-t border-slate-800/80 mb-8 flex-grow">
                  <h4 className="text-xs font-semibold uppercase text-slate-400 tracking-wider">
                    O que está incluso:
                  </h4>
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          isFirst ? "text-cyan-cyber" : "text-indigo-400"
                        }`}
                      />
                      <span className="text-xs sm:text-sm text-slate-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA for this card */}
                <a
                  href={getCustomWhatsAppUrl(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 ${
                    isFirst
                      ? "bg-cyan-cyber hover:bg-cyan-glow text-slate-950 shadow-glow-cyan/50"
                      : "bg-primary hover:bg-primary-hover text-white shadow-glow-indigo"
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
