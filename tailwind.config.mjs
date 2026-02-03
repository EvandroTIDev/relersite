/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    red: '#ef4444',
                    orange: '#f59e0b',
                },
            },
            animation: {
                'spin-slow': 'spin 10s linear infinite',
                'spin-reverse-slow': 'spin 15s linear infinite reverse',
                'float': 'float 6s ease-in-out infinite',
                'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                pulseGlow: {
                    '0%, 100%': { opacity: '1', filter: 'drop-shadow(0 0 10px rgba(239, 68, 68, 0.5))' },
                    '50%': { opacity: '0.8', filter: 'drop-shadow(0 0 20px rgba(239, 68, 68, 0.8))' },
                },
            },
        },
    },
    plugins: [],
}
