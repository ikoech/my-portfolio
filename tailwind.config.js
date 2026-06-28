/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          400: '#94a3b8',
          300: '#cbd5e1',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to bottom right, #0f172a, #1e293b, #0f172a)',
      },
    },
  },
  plugins: [],
}
