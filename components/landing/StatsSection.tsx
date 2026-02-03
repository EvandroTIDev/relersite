'use client';

import { motion } from 'framer-motion';
import { Card3D } from '../Card3D';

export function StatsSection() {
    const stats = [
        { value: "-35%", label: "Média de Erros", sub: "Redução comprovada em campo", color: "text-red-500", progress: 0.35 },
        { value: "3x", label: "Aceleração", sub: "Treinamento de novos técnicos", color: "text-white", progress: 0.8 },
        { value: "100%", label: "Disponibilidade", sub: "Operação total em modo offline", color: "text-red-600", progress: 1.0 },
        { value: "ROI+", label: "Eficácia", sub: "Retorno em menos de 1 trimestre", color: "text-red-400", progress: 0.9 }
    ];

    return (
        <section className="py-40 relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-32 space-y-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-red-500 font-black tracking-[0.5em] text-[10px] uppercase"
                    >
                        Metrics & Impact
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-5xl md:text-7xl font-black tracking-tighter"
                    >
                        A Matemática do <br />
                        <span className="italic text-red-600">Sucesso Operacional</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative group"
                        >
                            <div className="absolute -inset-4 bg-red-600/5 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative text-center space-y-8">
                                <div className="relative w-40 h-40 mx-auto">
                                    <svg className="w-full h-full transform -rotate-90">
                                        <circle
                                            cx="80"
                                            cy="80"
                                            r="70"
                                            stroke="rgba(255,255,255,0.03)"
                                            strokeWidth="4"
                                            fill="none"
                                        />
                                        <motion.circle
                                            cx="80"
                                            cy="80"
                                            r="70"
                                            stroke="currentColor"
                                            strokeWidth="6"
                                            fill="none"
                                            strokeLinecap="round"
                                            className={stat.color}
                                            initial={{ strokeDasharray: "440", strokeDashoffset: "440" }}
                                            whileInView={{ strokeDashoffset: (440 - (440 * stat.progress)).toString() }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 2, ease: "easeOut" as any }}
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className={`text-4xl font-black tracking-tighter ${stat.color}`}>
                                            {stat.value}
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-xl font-black text-white">{stat.label}</h3>
                                    <p className="text-gray-500 text-sm font-medium">{stat.sub}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
