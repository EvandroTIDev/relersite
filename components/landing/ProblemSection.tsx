'use client';

import { AlertTriangle, TrendingDown, XCircle, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card3D } from '../Card3D';

export function ProblemSection() {
    const problems = [
        {
            icon: <AlertTriangle className="w-10 h-10 text-orange-500" />,
            title: "Erros de Parallax",
            description: "Leituras incorretas devido ao ângulo de visão do técnico em relação ao medidor analógico.",
            color: "from-orange-500/20"
        },
        {
            icon: <XCircle className="w-10 h-10 text-red-500" />,
            title: "Inconsistência",
            description: "Divergência crítica entre o consumo real e o faturado, gerando contestações jurídicas.",
            color: "from-red-500/20"
        },
        {
            icon: <TrendingDown className="w-10 h-10 text-yellow-500" />,
            title: "Revisitas Técnicas",
            description: "Custos operacionais elevados com o envio de novas equipes para corrigir erros evitáveis.",
            color: "from-yellow-500/20"
        },
        {
            icon: <Clock className="w-10 h-10 text-white" />,
            title: "Ineficiência",
            description: "Processos de conferência obsoletos que drenam a produtividade média diária das equipes.",
            color: "from-white/10"
        }
    ];

    return (
        <section className="py-40 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-10">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-red-500 font-black tracking-[0.3em] text-xs mb-6 uppercase"
                        >
                            The Business Challenge
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-black tracking-tighter leading-none"
                        >
                            O Custo Invisível da <br />
                            <span className="text-gray-500 italic">Negligência Analógica</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-gray-400 text-lg max-w-sm leading-relaxed"
                    >
                        Empresas do setor de energia perdem milhões anualmente com falhas de interpretação humana. O Reler soluciona este gap.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {problems.map((prob, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.8 }}
                        >
                            <Card3D delay={0} className="h-full">
                                <div className="flex flex-col gap-8">
                                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${prob.color} to-transparent border border-white/5 flex items-center justify-center`}>
                                        {prob.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black mb-4 tracking-tight">{prob.title}</h3>
                                        <p className="text-gray-400 leading-relaxed text-sm font-medium">{prob.description}</p>
                                    </div>
                                    <div className="pt-4 mt-auto">
                                        <div className="w-10 h-1 bg-gradient-to-r from-red-600 to-transparent rounded-full" />
                                    </div>
                                </div>
                            </Card3D>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
