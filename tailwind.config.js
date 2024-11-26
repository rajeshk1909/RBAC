/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		fontFamily: {
  			montserrat: ["Montserrat", "sans"],
  			kufam: ["Kufam"],
  			lexend: ["Lexend", "sans-serif"]
  		},
  		colors: {
  			lite: '#555555',
  			dark: '#333333'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		animation: {
  			pulse: 'pulse var(--duration) ease-out infinite'
  		},
  		keyframes: {
  			pulse: {
  				'0%, 100%': {
  					boxShadow: '0 0 0 0 var(--pulse-color)'
  				},
  				'50%': {
  					boxShadow: '0 0 0 8px var(--pulse-color)'
  				}
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
