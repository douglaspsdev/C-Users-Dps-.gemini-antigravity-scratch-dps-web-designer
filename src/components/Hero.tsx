"use client";

import React from "react";
import {
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Zap,
  Smartphone,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  Lock,
} from "lucide-react";
import { SITE_CONFIG, HERO_CONTENT } from "@/data/content";

export default function Hero() {
  const nichesList = [
    "Nutricionistas",
    "Advogados",
    "Psicólogos",
    "Contadores",
    "Autônomos & Clínicas",
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-grid-pattern">
      {/* Background glow halos */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[750px] md:h-[750px] bg-primary/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-cyan-cyber/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-slate-700/80 shadow-md mb-6 animate-pulse-slow">
            <span className="flex h-2 w-2 rounded-full bg-cyan-cyber animate-ping" />
            <span className="text-xs font-semibold text-cyan-cyber tracking-wide">
              {HERO_CONTENT.badge}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading max-w-4xl leading-[1.15] sm:leading-[1.15]">
            Sua Presença Digital com a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-cyber to-cyan-glow">
              Autoridade
            </span>{" "}
            que seu Trabalho Merece
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-foreground-muted max-w-3xl leading-relaxed">
            Desenvolvemos{" "}
            <strong className="text-white font-semibold">Landing Pages de Alta Conversão</strong> e{" "}
            <strong className="text-white font-semibold">Sites Institucionais</strong> sob medida para{" "}
            <span className="text-cyan-cyber font-medium">nutricionistas</span>,{" "}
            <span className="text-cyan-cyber font-medium">advogados</span>,{" "}
            <span className="text-cyan-cyber font-medium">psicólogos</span>,{" "}
            <span className="text-cyan-cyber font-medium">contadores</span> e{" "}
            <span className="text-cyan-cyber font-medium">profissionais autônomos</span> que desejam atrair mais clientes.
          </p>

          {/* Niche Pills (Mobile-friendly) */}
          <div className="flex flex-wrap justify-center items-center gap-2 mt-6 max-w-2xl">
            <span className="text-xs text-foreground-subtle mr-1 hidden sm:inline">Especializado em:</span>
            {nichesList.map((niche) => (
              <span
                key={niche}
                className="text-xs font-medium px-2.5 py-1 rounded-md bg-surface/80 border border-slate-800 text-slate-300 hover:border-slate-700 transition-colors"
              >
                {niche}
              </span>
            ))}
          </div>

          {/* Call to Actions */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-white text-base font-bold px-7 py-4 rounded-xl shadow-glow-indigo transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] border border-indigo-400/40 group"
            >
              <MessageCircle className="w-5 h-5 fill-white/20 text-white group-hover:scale-110 transition-transform" />
              <span>{HERO_CONTENT.primaryCta}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 bg-surface hover:bg-surface-light text-white text-base font-semibold px-6 py-4 rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-200"
            >
              <span>{HERO_CONTENT.secondaryCta}</span>
            </a>
          </div>

          {/* Micro trust indicators */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-foreground-muted">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-cyber" />
              <span>Código 100% Otimizado</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-indigo-400" />
              <span>Garantia & Suporte Direto</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Smartphone className="w-4 h-4 text-cyan-cyber" />
              <span>Mobile-First Impecável</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive Tech Mockup Showcase */}
        <div className="mt-14 lg:mt-20 max-w-5xl mx-auto">
          <div className="relative rounded-2xl bg-surface border border-slate-800 p-2 sm:p-4 shadow-2xl shadow-black/80">
            {/* Window bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800/80 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                <span className="ml-2 text-xs text-slate-500 font-mono hidden sm:inline">dpswebdesigner.com.br/preview</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono bg-slate-900/90 px-3 py-1 rounded-md border border-slate-800">
                <Lock className="w-3 h-3 text-cyan-cyber" />
                <span>SSL Seguro 256-bit</span>
              </div>
            </div>

            {/* Inner Dashboard / Mockup Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-2 sm:p-4">
              {/* Left Column: Metrics & Performance */}
              <div className="md:col-span-4 flex flex-col gap-3">
                <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800/80">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Google PageSpeed
                    </span>
                    <Zap className="w-4 h-4 text-cyan-cyber" />
                  </div>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-cyan-cyber font-mono">99</span>
                    <span className="text-xs text-slate-400">/ 100 Mobile Score</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5 mt-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-cyber to-primary h-1.5 rounded-full w-[99%]" />
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2">
                    Carregamento instantâneo para não perder clientes de anúncios.
                  </p>
                </div>

                <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800/80">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Taxa de Conversão
                    </span>
                    <TrendingUp className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-indigo-400 font-mono">+340%</span>
                    <span className="text-xs text-slate-400">em contatos</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2">
                    Arquitetura persuasiva focada em agendamento direto no WhatsApp.
                  </p>
                </div>
              </div>

              {/* Center/Right Column: Website Live Preview Representation */}
              <div className="md:col-span-8 bg-slate-900/95 rounded-xl border border-slate-800/80 p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase font-mono tracking-wider px-2.5 py-1 rounded bg-primary/20 text-indigo-300 border border-primary/30">
                      Experiência Premium
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-cyber" /> Layout sob medida
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    Transforme visitantes em clientes pagantes
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                    Seu site é o seu cartão de visitas 24 horas por dia. Desenvolvemos com estrutura focada em gerar confiança imediata, explicar seus diferenciais e direcionar o cliente com apenas 1 clique para o seu WhatsApp comercial.
                  </p>
                </div>

                {/* Simulated WhatsApp Notification Card */}
                <div className="mt-6 bg-surface/90 rounded-xl p-3 sm:p-4 border border-cyan-cyber/30 shadow-lg flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                        <span>Novo Lead no WhatsApp</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                      </div>
                      <p className="text-[11px] text-slate-400 line-clamp-1">
                        &quot;Olá, vi seu site e gostaria de agendar uma consulta/orçamento!&quot;
                      </p>
                    </div>
                  </div>
                  <a
                    href={SITE_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-cyan-cyber hover:underline shrink-0"
                  >
                    Simular →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
