/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Dark mode colors
                'dark-bg': '#0a0a0a',
                'dark-surface': '#171717',
                'dark-border': '#262626',
                // Light mode colors
                'light-bg': '#ffffff',
                'light-surface': '#f5f5f5',
                'light-border': '#e5e5e5',
                // Text colors
                'dark-text': '#fafafa',
                'light-text': '#0a0a0a',
                // Accents (NO BLUE!)
                'accent-amber': '#f59e0b',
                'accent-emerald': '#10b981',
                'accent-violet': '#8b5cf6',
                'accent-crimson': '#dc2626',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                heading: ['DM Sans', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                'display': ['4.5rem', { lineHeight: '1.1', fontWeight: '700' }],
                'h1': ['3.5rem', { lineHeight: '1.2', fontWeight: '700' }],
                'h2': ['2.5rem', { lineHeight: '1.3', fontWeight: '600' }],
                'h3': ['2rem', { lineHeight: '1.4', fontWeight: '600' }],
                'h4': ['1.5rem', { lineHeight: '1.5', fontWeight: '500' }],
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '100': '25rem',
                '112': '28rem',
                '128': '32rem',
            },
        },
    },
    plugins: [],
}
