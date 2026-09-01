"use client";

import React from "react";
import {
  Salad,
  Scale,
  HeartHandshake,
  Calculator,
  Briefcase,
  Stethoscope,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { NICHES, SITE_CONFIG } from "@/data/content";

export default function TargetAudience() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Salad":
        return <Salad className="w-5 h-5 text-emerald-400" />;
      case "Scale":
        return <Scale className="w-5 h-5 text-amber-400" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-5 h-5 text-pink-400" />;
      case "Calculator":
        return <Calculator className="w-5 h-5 text-cyan-cyber" />;
      case "Briefcase":
        return <Briefcase className="w-5 h-5 text-indigo-400" />;
      case "Stethoscope":
        return <Stethoscope className="w-5 h-5 text-sky-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-cyber" />;
    }
  };

  const getNicheWhatsAppUrl = (nicheTitle: string) => {
    const encoded = encodeURIComponent(
      `Olá! Sou ${nicheTitle} e gostaria de um site/landing page profissional para atrair mais clientes.`
    );
    return `https://wa.me/5519994493257?text=${encoded}`;
  };

  return (
    <section id="especialidades" className="py-20 md:py-28 relative scroll-mt-16 bg-surface/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-slate-800 text-xs font-semibold text-cyan-cyber mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Feito Sob Medida para Você</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Especialistas em Estruturas para{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-cyber">
              Sua Área de Atuação
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-foreground-muted">
            Cada profissão exige uma comunicação visual e gatilhos específicos. Alinhamos design, tom de voz e facilidade de agendamento ao perfil exato do seu cliente.
          </p>
        </div>

        {/* Niches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NICHES.map((niche) => (
            <div
              key={niche.title}
              className="bg-surface rounded-2xl p-6 border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(niche.icon)}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded">
                    Especialidade
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 font-heading group-hover:text-cyan-cyber transition-colors">
                  {niche.title}
                </h3>
                <p className="text-sm text-foreground-muted leading-relaxed mb-6">
                  {niche.description}
                </p>
              </div>

              <a
                href={getNicheWhatsAppUrl(niche.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 group-hover:translate-x-1 transition-all"
              >
                <span>Solicitar proposta para {niche.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
