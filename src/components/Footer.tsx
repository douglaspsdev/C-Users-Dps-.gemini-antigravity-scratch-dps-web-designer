"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, ArrowUp, MessageCircle, Heart } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/data/content";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-surface border-t border-slate-800/80 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <Link href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-cyan-cyber flex items-center justify-center text-white font-bold text-base">
                D
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-heading">
                {SITE_CONFIG.name}
              </span>
            </Link>
            <p className="text-sm text-foreground-muted max-w-md leading-relaxed">
              Desenvolvimento de Landing Pages de Alta Conversão e Sites Institucionais sob medida para nutricionistas, advogados, psicólogos, contadores e profissionais autônomos que buscam autoridade e novos clientes.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Disponível para novos projetos</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 font-heading">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-foreground-muted hover:text-cyan-cyber transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (Requested in prompt) */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 font-heading">
              Contato & Orçamentos
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground-muted hover:text-white transition-colors group"
                >
                  <Phone className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span>WhatsApp: {SITE_CONFIG.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2 text-foreground-muted hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 text-cyan-cyber group-hover:scale-110 transition-transform" />
                  <span className="truncate">{SITE_CONFIG.email}</span>
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-primary/20 text-indigo-300 border border-primary/40 hover:bg-primary hover:text-white transition-all text-xs font-semibold"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Iniciar conversa no WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground-muted">
          <p>{SITE_CONFIG.copyright}</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            aria-label="Voltar ao topo"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
