/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* darkseagreen */
        input: "var(--color-input)", /* white */
        ring: "var(--color-ring)", /* darkseagreen */
        background: "var(--color-background)", /* beige */
        foreground: "var(--color-foreground)", /* gray-900 */
        primary: {
          DEFAULT: "var(--color-primary)", /* gray-900 */
          foreground: "var(--color-primary-foreground)", /* white */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* darkseagreen */
          foreground: "var(--color-secondary-foreground)", /* gray-900 */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* red-600 */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* beige */
          foreground: "var(--color-muted-foreground)", /* gray-600 */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* tan */
          foreground: "var(--color-accent-foreground)", /* gray-900 */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* white */
          foreground: "var(--color-popover-foreground)", /* gray-900 */
        },
        card: {
          DEFAULT: "var(--color-card)", /* white */
          foreground: "var(--color-card-foreground)", /* gray-900 */
        },
        success: {
          DEFAULT: "var(--color-success)", /* darkseagreen */
          foreground: "var(--color-success-foreground)", /* gray-900 */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* yellow-600 */
          foreground: "var(--color-warning-foreground)", /* gray-900 */
        },
        error: {
          DEFAULT: "var(--color-error)", /* red-600 */
          foreground: "var(--color-error-foreground)", /* white */
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        'consultation': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'testimonial': '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        'smooth': '250ms',
      },
      transitionTimingFunction: {
        'smooth': 'ease-in-out',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}