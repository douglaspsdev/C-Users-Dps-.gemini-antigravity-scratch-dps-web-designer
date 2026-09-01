"use client";

import React, { useState } from "react";
import {
  Calculator,
  Check,
  MessageCircle,
  Sparkles,
  ArrowRight,
  Send,
} from "lucide-react";

export default function InteractiveBudgetCalculator() {
  const [profession, setProfession] = useState("Nutricionista");
  const [projectType, setProjectType] = useState("Landing Page de Alta Conversão");
  const [features, setFeatures] = useState<string[]>([
    "Botão WhatsApp Inteligente",
    "Design 100% Mobile-First",
  ]);

  const professionOptions = [
    "Nutricionista",
    "Advogado",
    "Psicólogo / Terapeuta",
    "Contador",
    "Profissional Autônomo",
    "Clínica / Consultório",
    "Outro Ramo",
  ];

  const projectTypes = [
    {
      id: "landing-page",
      name: "Landing Page de Alta Conversão",
      badge: "Mais Procurado",
      desc: "Página única e persuasiva, direta para WhatsApp.",
    },
    {
      id: "site-institucional",
      name: "Site Institucional Otimizado",
      badge: "Completo",
      desc: "Múltiplas seções para autoridade e credibilidade.",
    },
  ];

  const featureOptions = [
    "Botão WhatsApp Inteligente",
    "Design 100% Mobile-First",
    "Otimização SEO para Google",
    "Pronto para Anúncios (Google/Meta Ads)",
    "Formulário de Contato & E-mail",
    "Carregamento Ultrarrápido (< 2s)",
  ];

  const toggleFeature = (featureName: string) => {
    if (features.includes(featureName)) {
      setFeatures(features.filter((f) => f !== featureName));
    } else {
      setFeatures([...features, featureName]);
    }
  };

  const generateWhatsAppUrl = () => {
    const featureListText =
      features.length > 0 ? features.join(", ") : "Estrutura Padrão";
    const text = `Olá DPS Web Designer! Meu ramo é *${profession}* e tenho interesse em um(a) *${projectType}*.\n\nRecursos desejados: ${featureListText}.\n\nPoderia me passar uma proposta e prazo?`;
    return `https://wa.me/5519994493257?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="py-20 relative bg-surface/40 border-y border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-slate-800 text-xs font-semibold text-cyan-cyber mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Simulador Rápido de Projeto</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-heading">
            Monte a Estrutura Ideal para o Seu Negócio
          </h2>
          <p className="mt-2 text-sm text-foreground-muted">
            Selecione seu perfil e envie diretamente para nosso WhatsApp para receber uma proposta personalizada sem compromisso.
          </p>
        </div>

        {/* Simulator Box */}
        <div className="bg-surface rounded-2xl border border-slate-700/80 p-6 sm:p-8 shadow-2xl relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column: Selections */}
            <div className="space-y-6">
              {/* Step 1: Profession */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-cyan-cyber mb-3">
                  1. Sua Profissão / Ramo
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {professionOptions.map((prof) => (
                    <button
                      key={prof}
                      type="button"
                      onClick={() => setProfession(prof)}
                      className={`text-xs font-medium px-3 py-2 rounded-xl text-left transition-all border ${
                        profession === prof
                          ? "bg-primary text-white border-indigo-400 shadow-glow-indigo"
                          : "bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700"
                      }`}
                    >
                      {prof}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Project Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-cyan-cyber mb-3">
                  2. Tipo de Projeto
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {projectTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setProjectType(type.name)}
                      className={`p-3.5 rounded-xl text-left transition-all border flex flex-col justify-between ${
                        projectType === type.name
                          ? "bg-indigo-950/60 border-primary shadow-glow-indigo text-white"
                          : "bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-white">
                          {type.name}
                        </span>
                        <span className="text-[10px] bg-cyan-cyber/20 text-cyan-cyber px-1.5 py-0.5 rounded font-mono">
                          {type.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400">{type.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Features */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-cyan-cyber mb-3">
                  3. Funcionalidades Desejadas
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {featureOptions.map((feat) => {
                    const isSelected = features.includes(feat);
                    return (
                      <button
                        key={feat}
                        type="button"
                        onClick={() => toggleFeature(feat)}
                        className={`text-xs px-3 py-2 rounded-lg text-left flex items-center gap-2 transition-all border ${
                          isSelected
                            ? "bg-slate-800 border-cyan-cyber/50 text-white font-medium"
                            : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700"
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center text-[10px] shrink-0 ${
                            isSelected
                              ? "bg-cyan-cyber text-slate-950 font-bold"
                              : "border border-slate-700"
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="truncate">{feat}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Summary & Instant WhatsApp Send */}
            <div className="bg-slate-900/90 rounded-xl p-5 sm:p-6 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Resumo do Seu Pedido
                  </span>
                  <span className="text-xs text-emerald-400 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Resposta Imediata
                  </span>
                </div>

                <div className="mt-4 space-y-3 text-sm">
                  <div>
                    <span className="text-xs text-slate-500 block">Profissão / Ramo:</span>
                    <span className="font-semibold text-white">{profession}</span>
                  </div>

                  <div>
                    <span className="text-xs text-slate-500 block">Tipo de Estrutura:</span>
                    <span className="font-semibold text-cyan-cyber">{projectType}</span>
                  </div>

                  <div>
                    <span className="text-xs text-slate-500 block">Recursos Selecionados ({features.length}):</span>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {features.length > 0 ? (
                        features.map((f) => (
                          <span
                            key={f}
                            className="text-[11px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700"
                          >
                            {f}
                          </span>
                        ))
                      ) : (
                        <span className="text-xs text-slate-500">Nenhum adicional selecionado</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Trigger Button */}
              <div className="mt-6 pt-4 border-t border-slate-800">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold py-3.5 px-4 rounded-xl shadow-glow-indigo transition-all duration-200 border border-indigo-400/40 text-sm group"
                >
                  <MessageCircle className="w-5 h-5 fill-white/20 group-hover:scale-110 transition-transform" />
                  <span>Enviar Simulação no WhatsApp</span>
                  <Send className="w-4 h-4" />
                </a>
                <p className="text-[11px] text-center text-slate-500 mt-2">
                  Você será direcionado diretamente para conversar com a DPS Web Designer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
