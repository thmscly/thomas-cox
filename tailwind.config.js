/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        myPulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        }
      },
      animation: {
        myPulse: 'myPulse 1.25s ease-in-out infinite',
      },
      keyframes: {
        titleAnimation: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      },
      animation: {
        titleAnimation: 'titleAnimation .5s ease-in',
      },
    },
  },
  plugins: [],
}

