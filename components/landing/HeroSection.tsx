'use client';

import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, CheckCircle2, ShieldCheck, Zap, Activity } from 'lucide-react';
import Link from 'next/link';
import { SmartphoneSlider } from '../SmartphoneSlider';

export function HeroSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } } // easeOutCubic approximation
    };

    return (
        <section className="relative pt-10 pb-10 md:pt-20 md:pb-24 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center gap-12">

                {/* Top: Smartphone Slider (Primary Focus) */}
                <motion.div
                    className="relative w-full flex justify-center py-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <div className="relative transform scale-90 md:scale-100">
                        {/* Main Smartphone */}
                        <SmartphoneSlider />

                        {/* Floating Badges (Black Glass) */}

                        {/* 1. Right Top Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: [0.42, 0, 0.58, 1] }}
                            className="absolute top-16 -left-4 md:-left-24 z-50 pointer-events-none"
                        >
                            <FloatingBadge
                                icon={<CheckCircle2 className="w-5 h-5 text-red-500" />}
                                text="100% Validado"
                                subtext="Algoritmo de Precisão"
                            />
                        </motion.div>

                        {/* 2. Left Middle Badge (NEW) */}
                        <motion.div
                            animate={{ x: [0, -5, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: [0.42, 0, 0.58, 1], delay: 1.5 }}
                            className="absolute top-1/2 -left-8 md:-left-32 z-40 pointer-events-none hidden md:block" // Hidden on mobile to avoid clutter
                        >
                            <div className="glass-card p-3 rounded-2xl flex items-center gap-3 border-white/5 bg-black/20 shadow-xl backdrop-blur-md">
                                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                                    <Activity className="w-4 h-4 text-red-500" />
                                </div>
                                <div className="pr-2">
                                    <div className="text-[10px] text-gray-400 font-bold uppercase">Uptime</div>
                                    <div className="text-sm font-black text-white">99.98%</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* 3. Right Bottom Badge (Latência) */}
                        <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: [0.42, 0, 0.58, 1], delay: 0.5 }}
                            className="absolute bottom-32 -right-6 md:-right-28 z-40 pointer-events-none hidden md:block"
                        >
                            <div className="glass-card p-3 rounded-2xl flex items-center gap-3 border-white/5 bg-black/20 shadow-xl backdrop-blur-md">
                                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                                    <Zap className="w-4 h-4 text-red-500" />
                                </div>
                                <div>
                                    <div className="text-[10px] text-gray-400 font-bold uppercase">Latência</div>
                                    <div className="text-sm font-black text-white">{'<'} 10ms</div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </motion.div>

                {/* Bottom: Text Content */}
                <motion.div
                    className="text-center space-y-8 max-w-4xl"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full backdrop-blur-md shadow-[0_0_20px_rgba(239,68,68,0.1)] mx-auto"
                    >
                        <span className="flex h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-xs text-red-400 font-black uppercase tracking-[0.2em]">
                            Enterprise v1.4.0
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-white"
                    >
                        Precisão <span className="bg-gradient-to-r from-red-500 via-white to-red-600 bg-clip-text text-transparent italic">Radical</span> <br />
                        em Campo.
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto font-medium"
                    >
                        Transforme a medição analógica em um processo digital infalível.
                        Aumente a produtividade em até 3x.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                        <Link
                            href="#contact"
                            className="group relative px-8 py-5 bg-red-600 text-white rounded-2xl font-black transition-all overflow-hidden hover:scale-105 active:scale-95 shadow-xl shadow-red-600/20"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 transition-transform duration-500" />
                            <span className="relative flex items-center justify-center gap-3">
                                SOLICITAR ACESSO
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                        <Link
                            href="#demo"
                            className="group px-8 py-5 bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 text-white backdrop-blur-xl hover:bg-white/10 hover:-translate-y-1"
                        >
                            <PlayCircle className="w-5 h-5 text-red-500" />
                            PROVA DE CONCEITO
                        </Link>
                    </motion.div>
                </motion.div>

            </div>

            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
}

function FloatingBadge({ icon, text, subtext }: { icon: React.ReactNode, text: string, subtext: string }) {
    return (
        <div className="glass-card p-4 rounded-2xl flex items-center gap-4 shadow-2xl border-white/20 backdrop-blur-xl bg-black/20 min-w-[200px] transform hover:scale-105 transition-transform duration-300">
            <div className="w-10 h-10 rounded-xl bg-red-500/30 flex items-center justify-center border border-red-500/40">
                {icon}
            </div>
            <div>
                <div className="text-sm font-black text-white leading-tight drop-shadow-lg">{text}</div>
                <div className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">{subtext}</div>
            </div>
        </div>
    );
}
