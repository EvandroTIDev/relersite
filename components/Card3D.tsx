'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface Card3DProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    interactive?: boolean; // New prop for interactive cursor effect
}

export function Card3D({ children, className = '', delay = 0, interactive = false }: Card3DProps) {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    // Motion values for tilt effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring animation
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 20 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 20 });

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!interactive || !cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);

        // Set CSS variables for gradient spotlight
        cardRef.current.style.setProperty('--mouse-x', `${mouseX}px`);
        cardRef.current.style.setProperty('--mouse-y', `${mouseY}px`);
    };

    const handleMouseLeave = () => {
        if (!interactive) return;
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ delay: delay / 1000, duration: 0.8 }}
            style={{
                rotateX: interactive ? rotateX : 0,
                rotateY: interactive ? rotateY : 0,
                transformStyle: 'preserve-3d',
            }}
            className={`
        relative group
        ${className}
      `}
        >
            {/* Sombra externa realista (Fixed in 3D space) */}
            <div
                className="absolute inset-0 bg-red-500/10 blur-3xl rounded-3xl transform translate-y-8 translate-z-[-20px] transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />

            {/* Cartão principal */}
            <div className="relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-black/80 via-gray-900/90 to-black/80 backdrop-blur-xl shadow-2xl overflow-hidden h-full">
                {/* Brilho superior */}
                <div
                    className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />

                {/* Gradiente de brilho interativo */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background:
                            'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.06), transparent 40%)',
                    }}
                />

                {/* Conteúdo */}
                <div className="relative z-10" style={{ transform: 'translateZ(20px)' }}>{children}</div>

                {/* Borda interna luminosa */}
                <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none" />
            </div>
        </motion.div>
    );
}
