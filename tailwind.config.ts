import type { Config } from "tailwindcss"

const config: Config = {
  // darkMode: "class", // shadcn/ui kullanıyorsanız bu satırın aktif olduğundan emin olun.
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
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
        // --- MEVCUT TEMA RENKLERİNİZ (DOKUNULMADI) ---
        // Bu yapı, CSS değişkenleri üzerinden tema (açık/koyu mod) yönetimini sağlar.
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        
        // --- YENİ EKLENEN ÖZEL RENKLER ---
        // CSS dosyasındaki özel utility sınıfları yerine buraya eklendi.
        // Artık `bg-mef-brown`, `text-mef-light` gibi sınıfları doğrudan kullanabilirsiniz.
        'mef-brown': 'hsl(var(--mef-brown))',
        'mef-dark': 'hsl(var(--mef-dark))',
        'mef-black': 'hsl(var(--mef-black))',
        'mef-light': 'hsl(var(--mef-light))',
        'mef-cream': 'hsl(var(--mef-cream))',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        // CSS'teki `.font-outfit` sınıfına artık gerek yok.
        // `className="font-outfit"` kullanarak bu fontu uygulayabilirsiniz.
        outfit: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        // DÜZELTME: "accordion-down" ve "accordion-up" kaldırıldı.
        // Bu animasyonlar `tailwindcss-animate` eklentisi tarafından zaten sağlanıyor.
        // Tekrar tanımlamaya gerek yok.
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        // Önceki adımdaki CSS'ten taşınan animasyonlar doğru şekilde burada duruyor.
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        // DÜZELTME: "accordion-down" ve "accordion-up" kaldırıldı.
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "fade-in-left": "fade-in-left 0.6s ease-out",
        "fade-in-right": "fade-in-right 0.6s ease-out",
        // Önceki adımdaki CSS'ten taşınan animasyonlar doğru şekilde burada duruyor.
        "slide-in-right": "slide-in-right 0.3s ease-out",
        "float": "float 3s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "pulse-slow": "pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config