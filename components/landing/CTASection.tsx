'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Mail, Zap } from 'lucide-react';

export function CTASection() {
    return (
        <section id="contact" className="py-60 relative overflow-hidden">
            {/* Background Explosive Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-red-600/10 rounded-full blur-[180px] opacity-50 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="relative glass-card p-12 md:p-24 rounded-[4rem] overflow-hidden border border-white/5 bg-black/40 text-center shadow-2xl">
                        {/* Inner Decoration */}
                        <div className="absolute top-0 right-0 p-10 opacity-10">
                            <Zap className="w-40 h-40 text-red-500" />
                        </div>

                        <div className="relative z-10 space-y-12">
                            <div className="space-y-6">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    className="text-red-500 font-black tracking-[0.4em] text-xs uppercase"
                                >
                                    Ready for the next level?
                                </motion.div>
                                <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] text-white">
                                    O Futuro é <br />
                                    <span className="italic bg-gradient-to-r from-red-600 to-white bg-clip-text text-transparent">Incontestável.</span>
                                </h2>
                            </div>

                            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
                                Integre a tecnologia Reler em sua operação e elimine a ambiguidade na medição hoje mesmo.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-8">
                                <Link
                                    href="mailto:evandromarquesti@gmail.com"
                                    className="group relative px-12 py-6 bg-white text-black rounded-2xl font-black text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
                                >
                                    <span className="flex items-center gap-3">
                                        <Mail className="w-6 h-6" />
                                        FALAR COM UM EXPERT
                                    </span>
                                </Link>
                            </div>

                            <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                                <Badge text="Android 10+" />
                                <Badge text="Custom Engine" />
                                <Badge text="Enterprise Ready" />
                                <Badge text="SLA 99.9%" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function Badge({ text }: { text: string }) {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="w-1 h-1 bg-red-500 rounded-full" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">{text}</span>
        </div>
    );
}
