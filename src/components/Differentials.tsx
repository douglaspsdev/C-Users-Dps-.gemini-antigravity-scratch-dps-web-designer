"use client";

import React from "react";
import { Smartphone, Zap, Palette, SearchCheck, Sparkles, Check } from "lucide-react";
import { DIFFERENTIALS } from "@/data/content";

export default function Differentials() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Smartphone":
        return <Smartphone className="w-6 h-6 text-cyan-cyber" />;
      case "Zap":
        return <Zap className="w-6 h-6 text-indigo-400" />;
      case "Palette":
        return <Palette className="w-6 h-6 text-cyan-cyber" />;
      case "SearchCheck":
        return <SearchCheck className="w-6 h-6 text-indigo-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-cyber" />;
    }
  };

  return (
    <section id="beneficios" className="py-20 md:py-28 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-slate-800 text-xs font-semibold text-indigo-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Por que nos escolher?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Diferenciais que Transformam{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-cyber to-indigo-400">
              Visitantes em Clientes
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-foreground-muted">
            Cada detalhe do código e do design é pensado estrategicamente para entregar uma experiência impecável que valoriza a sua autoridade no mercado.
          </p>
        </div>

        {/* 4 Differentials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFFERENTIALS.map((item, index) => {
            const isCyan = index % 2 === 0;
            return (
              <div
                key={item.id}
                className="bg-surface rounded-2xl p-6 border border-slate-800 flex flex-col justify-between card-glow-hover relative overflow-hidden group"
              >
                {/* Top glow hover element */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                    isCyan
                      ? "from-transparent via-cyan-cyber to-transparent"
                      : "from-transparent via-primary to-transparent"
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div>
                  {/* Icon Box */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                      isCyan
                        ? "bg-cyan-cyber/10 border border-cyan-cyber/20 shadow-glow-cyan/10"
                        : "bg-primary/10 border border-primary/20 shadow-glow-indigo/10"
                    }`}
                  >
                    {getIcon(item.icon)}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 font-heading">
                    {item.title}
                  </h3>

                  {/* Description (Exact prompt text) */}
                  <p className="text-sm text-foreground-muted leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Sub-detail */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-medium text-slate-400">
                  <Check className={`w-3.5 h-3.5 ${isCyan ? "text-cyan-cyber" : "text-indigo-400"}`} />
                  <span>{item.detail}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
