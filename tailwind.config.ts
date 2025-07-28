
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				surface: {
					primary: 'rgba(0, 0, 0, 1)',
					secondary: 'rgba(17, 17, 17, 1)',
					elevated: 'rgba(34, 34, 34, 1)'
				}
			},
			fontFamily: {
				sans: ['Space Grotesk', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
				mono: ['Space Grotesk', 'Monaco', 'monospace']
			},
			fontSize: {
				'display-2xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
				'display-xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
				'display-lg': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
				'display-md': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
				'display-sm': ['1.875rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
				'headline': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
				'body-lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '0' }],
				'body': ['1rem', { lineHeight: '1.6', letterSpacing: '0' }],
				'body-sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0' }],
				'caption': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.02em' }]
			},
			spacing: {
				'18': '4.5rem',
				'22': '5.5rem',
				'26': '6.5rem',
				'30': '7.5rem',
				'34': '8.5rem',
				'38': '9.5rem',
				'42': '10.5rem',
				'46': '11.5rem',
				'50': '12.5rem',
				'54': '13.5rem',
				'58': '14.5rem',
				'62': '15.5rem',
				'66': '16.5rem',
				'70': '17.5rem',
				'74': '18.5rem',
				'78': '19.5rem',
				'82': '20.5rem',
				'86': '21.5rem',
				'90': '22.5rem',
				'94': '23.5rem',
				'98': '24.5rem'
			},
			backgroundImage: {
				'openai-gradient': 'linear-gradient(135deg, rgba(16, 163, 127, 0.1) 0%, rgba(0, 0, 0, 0.95) 100%)',
				'subtle-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(17, 17, 17, 1) 100%)',
				'card-gradient': 'linear-gradient(145deg, rgba(34, 34, 34, 0.8) 0%, rgba(17, 17, 17, 0.9) 100%)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(236, 72, 153, 0.5)' },
					'50%': { boxShadow: '0 0 40px rgba(236, 72, 153, 0.8)' }
				},
				'rotate-slow': {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(360deg)' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 5px rgba(236, 72, 153, 0.5), 0 0 10px rgba(30, 58, 138, 0.5)' 
					},
					'50%': { 
						boxShadow: '0 0 20px rgba(236, 72, 153, 0.8), 0 0 30px rgba(30, 58, 138, 0.8)' 
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 10s linear infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
