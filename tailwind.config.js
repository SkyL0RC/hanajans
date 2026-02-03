/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#111111',
                    foreground: '#ffffff',
                },
                secondary: {
                    DEFAULT: '#ffffff',
                    foreground: '#111111',
                },
                muted: {
                    DEFAULT: '#f4f4f5',
                    foreground: '#71717a',
                },
                accent: {
                    DEFAULT: '#fafafa',
                    foreground: '#18181b',
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
        },
    },
    plugins: [],
}
