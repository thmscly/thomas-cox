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
          '0%, 100%': { opacity: 0.25 },
          '50%': { opacity: 1 },
        }
      },
      animation: {
        myPulse: 'myPulse 1s ease-in-out infinite',
      },
      keyframes: {
        titleAnimation: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      },
      animation: {
        titleAnimation: 'titleAnimation 1.5s ease-in',
      },
    },
  },
  plugins: [],
}

