'use client';

import { useEffect, useState } from 'react';

interface ClockProps {
    value?: number;
    size?: 'small' | 'large';
    label?: string;
    interactive?: boolean;
}

export function Clock3D({ value = 0, size = 'large', label, interactive = false }: ClockProps) {
    const [angle, setAngle] = useState((value / 10) * 360);
    const [isHovered, setIsHovered] = useState(false);

    const isLarge = size === 'large';
    const diameter = isLarge ? 320 : 80;

    // Criar os números 0-9 ao redor do relógio
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <div className="flex flex-col items-center gap-3">
            <div
                className={`relative ${isLarge ? 'w-80 h-80' : 'w-20 h-20'} transition-transform duration-300 ${isHovered ? 'scale-105' : ''
                    }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Sombra do relógio */}
                <div
                    className={`absolute inset-0 rounded-full blur-2xl ${isLarge ? 'bg-black/40' : 'bg-black/30'
                        }`}
                    style={{ transform: 'translateY(8px)' }}
                />

                {/* Base do relógio - gradiente radial */}
                <div
                    className={`absolute inset-0 rounded-full ${isLarge
                            ? 'bg-gradient-radial from-white via-gray-100 to-gray-300'
                            : 'bg-gradient-radial from-white via-gray-50 to-gray-200'
                        } border-4 ${isLarge ? 'border-black' : 'border-gray-800'} shadow-2xl`}
                />

                {/* Marcações de fração (100 linhas sutis) */}
                {isLarge &&
                    Array.from({ length: 100 }).map((_, i) => {
                        const fractionAngle = (i / 100) * 360;
                        return (
                            <div
                                key={`fraction-${i}`}
                                className="absolute top-1/2 left-1/2 origin-bottom"
                                style={{
                                    width: '1px',
                                    height: diameter / 2,
                                    transform: `translate(-50%, -100%) rotate(${fractionAngle}deg)`,
                                }}
                            >
                                <div className="w-full h-[5%] bg-black/20" />
                            </div>
                        );
                    })}

                {/* Marcações principais (10 linhas grossas) e números */}
                {numbers.map((num) => {
                    const numAngle = (num / 10) * 360;
                    const radius = diameter / 2;
                    const textRadius = radius * 0.75;

                    // Calcular posição para o número
                    const radian = ((numAngle - 90) * Math.PI) / 180;
                    const x = textRadius * Math.cos(radian);
                    const y = textRadius * Math.sin(radian);

                    return (
                        <div key={`num-${num}`}>
                            {/* Linha principal */}
                            <div
                                className="absolute top-1/2 left-1/2 origin-bottom"
                                style={{
                                    width: isLarge ? '3px' : '2px',
                                    height: radius,
                                    transform: `translate(-50%, -100%) rotate(${numAngle}deg)`,
                                }}
                            >
                                <div className={`w-full ${isLarge ? 'h-[15%]' : 'h-[20%]'} bg-black`} />
                            </div>

                            {/* Número */}
                            {isLarge && (
                                <div
                                    className="absolute top-1/2 left-1/2 font-bold text-black select-none"
                                    style={{
                                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                                        fontSize: `${diameter * 0.12}px`,
                                    }}
                                >
                                    {num}
                                </div>
                            )}
                        </div>
                    );
                })}

                {/* Ponteiro vermelho */}
                <div
                    className="absolute top-1/2 left-1/2 origin-bottom transition-transform duration-700 ease-out"
                    style={{
                        width: isLarge ? '6px' : '3px',
                        height: diameter * 0.42,
                        transform: `translate(-50%, -100%) rotate(${angle}deg)`,
                    }}
                >
                    {/* Sombra do ponteiro */}
                    <div
                        className="absolute inset-0 bg-black/30 blur-sm"
                        style={{ transform: 'translateX(2px) translateY(2px)' }}
                    />
                    {/* Ponteiro */}
                    <div className="absolute inset-0 bg-gradient-to-b from-red-600 to-red-500 rounded-full" />
                </div>

                {/* Centro do ponteiro - círculo pequeno */}
                <div
                    className={`absolute top-1/2 left-1/2 ${isLarge ? 'w-5 h-5' : 'w-2 h-2'
                        } bg-gradient-to-br from-gray-800 to-black rounded-full shadow-lg`}
                    style={{ transform: 'translate(-50%, -50%)' }}
                />

                {/* Brilho realista */}
                <div
                    className="absolute inset-0 rounded-full"
                    style={{
                        background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, transparent 60%)',
                    }}
                />
            </div>

            {/* Label abaixo do relógio */}
            {label && (
                <div className={`${isLarge ? 'text-lg' : 'text-xs'} font-bold text-white`}>{label}</div>
            )}
        </div>
    );
}
