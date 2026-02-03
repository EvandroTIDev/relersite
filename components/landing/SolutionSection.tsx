'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Smartphone, Layers, Zap, CheckCircle2 } from 'lucide-react';
import { useRef } from 'react';
import { Card3D } from '../Card3D';

export function SolutionSection() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section ref={sectionRef} id="demo" className="py-40 relative overflow-hidden bg-black">
            {/* Dynamic Background Glow */}
            <motion.div
                style={{ y }}
                className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none"
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-32 items-center">

                    <div className="order-2 lg:order-1 space-y-12">
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="inline-block px-5 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black tracking-[0.4em] text-red-500 uppercase"
                            >
                                Hyper-Precision Core
                            </motion.div>
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
                                Inteligência <br />
                                <span className="text-red-600">Cognitiva</span>
                            </h2>
                            <p className="text-xl text-gray-400 leading-relaxed max-w-xl font-medium">
                                Reler automatiza a validação cognitiva do técnico, eliminando a ambiguidade na leitura de medidores eletromecânicos através de processamento rítmico.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-1 gap-6">
                            <FeatureItem
                                icon={<Smartphone className="w-6 h-6" />}
                                title="Engine Visual Prospectiva"
                                description="Simulação rítmica que replica dinamicamente o comportamento de engrenagens industriais."
                            />
                            <FeatureItem
                                icon={<Layers className="w-6 h-6" />}
                                title="Seamless Multitasking"
                                description="Integração nativa via overlay para operações ininterruptas em aplicativos corporativos."
                            />
                            <FeatureItem
                                icon={<Zap className="w-6 h-6" />}
                                title="High-Speed Onboarding"
                                description="Redução de 70% na curva de aprendizado de novos operadores de campo."
                            />
                        </div>
                    </div>

                    {/* Images removed as per user request */}
                    <div className="order-1 lg:order-2 space-y-12">
                    </div>

                </div>
            </div>
        </section>
    );
}

function FeatureItem({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <motion.div
            whileHover={{ x: 10 }}
            className="flex gap-6 group cursor-default"
        >
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:border-red-500/50 group-hover:bg-red-500/10 transition-all duration-300">
                <div className="text-gray-400 group-hover:text-red-500 transition-colors">
                    {icon}
                </div>
            </div>
            <div>
                <h4 className="text-lg font-black text-white group-hover:text-red-500 transition-colors tracking-tight">{title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">{description}</p>
            </div>
        </motion.div>
    );
}
