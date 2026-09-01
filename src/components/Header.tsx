"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/data/content";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/85 backdrop-blur-md border-b border-slate-800/90 py-3 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#"
            className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-primary rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-cyan-cyber flex items-center justify-center shadow-glow-indigo text-white font-bold text-lg group-hover:scale-105 transition-transform">
              D
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5 font-heading">
                DPS <span className="text-cyan-cyber">Web Designer</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-foreground-muted font-medium -mt-1">
                Alta Performance
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-surface/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-800/80 shadow-inner">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground-muted hover:text-white px-3 py-1.5 rounded-full transition-colors hover:bg-slate-800/60"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all duration-300 shadow-glow-indigo hover:scale-[1.02] active:scale-[0.98] border border-indigo-400/30"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Falar no WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir WhatsApp"
              className="p-2 rounded-lg bg-primary/20 border border-primary/40 text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-surface text-foreground-muted hover:text-white border border-slate-800 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Abrir menu de navegação"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-4 pb-6 mt-2 shadow-2xl transition-all animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-foreground-muted hover:text-white hover:bg-slate-800/80 px-4 py-3 rounded-xl transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-cyan-cyber">→</span>
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-slate-800">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white text-base font-semibold py-3.5 px-4 rounded-xl shadow-glow-indigo transition-all border border-indigo-400/30"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Falar no WhatsApp</span>
              </a>

              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-foreground-muted">
                <Sparkles className="w-3.5 h-3.5 text-cyan-cyber" />
                <span>Atendimento rápido e personalizado</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
