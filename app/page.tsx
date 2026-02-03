import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";

import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { StatsSection } from "@/components/landing/StatsSection";
import { CTASection } from "@/components/landing/CTASection";
import ClientOnly from "@/components/ClientOnly";

export default function Home() {
  return (
    <ClientOnly>
      <div className="min-h-screen bg-[#050505] text-white selection:bg-red-500/30 bg-mesh relative selection:text-white">

        {/* Decorative Grid Background */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        {/* Navigation (Sticky) */}
        <nav className="fixed w-full z-50 backdrop-blur-xl border-b border-white/5 bg-black/40 transition-all">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center overflow-hidden border border-white/10 group-hover:border-red-500/50 transition-all duration-500 shadow-2xl">
                <Image src="/logo_white.png" alt="Reler Logo" width={32} height={32} className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <span className="text-2xl font-black tracking-tighter bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">RELER</span>
            </div>

            <div className="flex items-center gap-8">
              <Link
                href="#demo"
                className="hidden md:block text-sm font-medium text-gray-400 hover:text-white transition-all hover:translate-y-[-1px]"
              >
                Solução
              </Link>
              <Link
                href="#contact"
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-sm rounded-xl font-bold transition-all shadow-xl shadow-red-600/20 hover:shadow-red-600/40 hover:scale-105 active:scale-95"
              >
                Solicitar Demo
              </Link>
            </div>
          </div>
        </nav>

        <main className="relative z-10">
          <HeroSection />
          <div className="relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
            <ProblemSection />
          </div>
          <SolutionSection />
          <StatsSection />
          <CTASection />
        </main>

        {/* Footer */}
        <footer className="border-t border-white/5 bg-black/60 backdrop-blur-3xl py-16">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="flex flex-col items-center md:items-start gap-4">
                <div className="flex items-center gap-3">
                  <Image src="/logo_white.png" alt="Reler Logo" width={28} height={28} className="opacity-80" />
                  <span className="font-bold text-xl tracking-tight text-white/80">Reler Enterprise</span>
                </div>
                <p className="text-gray-500 text-sm max-w-xs text-center md:text-left leading-relaxed">
                  Soluções avançadas para precisão rítmica e medição de energia industrial.
                </p>
              </div>

              <div className="flex flex-col items-center md:items-end gap-6 text-sm">
                <div className="flex gap-8 text-gray-400">
                  <Link href="#" className="hover:text-red-500 transition-colors">Termos de Uso</Link>
                  <Link href="#" className="hover:text-red-500 transition-colors">Privacidade</Link>
                  <Link href="#" className="hover:text-red-500 transition-colors">Cookies</Link>
                </div>
                <p className="text-gray-600">
                  © 2026 EvandroTI Dev • Feito com precisão rítmica.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ClientOnly>
  );
}

