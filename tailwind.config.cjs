/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                brand: {
                    DEFAULT: 'var(--brand)',
                    light: 'var(--brand-light)',
                    dark: '#A66E61',
                },
                charcoal: 'var(--charcoal)',
                premium: {
                    light: 'var(--premium-light)',
                    white: 'var(--premium-white)',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            animation: {
                'fade-up': 'fade-up 0.8s ease-out forwards',
                'fade-in': 'fade-in 0.5s ease-out forwards',
                'glow': 'glow 2s infinite alternate',
            },
            keyframes: {
                'fade-up': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                'glow': {
                    '0%': { boxShadow: '0 0 5px rgba(44, 44, 44, 0.2)' },
                    '100%': { boxShadow: '0 0 20px rgba(44, 44, 44, 0.6)' },
                }
            }
        },
    },
    plugins: [],
}
