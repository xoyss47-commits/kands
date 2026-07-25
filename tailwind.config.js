/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        rose: {
          50: "#fff1f3",
          100: "#ffe0e6",
          200: "#ffc7d1",
          300: "#ffa0b3",
          400: "#ff6b8a",
          500: "#f93d6b",
          600: "#e71d56",
          700: "#c20f47",
          800: "#a21042",
          900: "#8a113d",
        },
        blush: {
          50: "#fef6f4",
          100: "#fdecea",
          200: "#fcd9d5",
          300: "#f9bab3",
          400: "#f49188",
          500: "#eb6a61",
          600: "#d84d45",
          700: "#b53b34",
          800: "#953430",
          900: "#7b322f",
        },
        lavender: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
        },
        cream: {
          50: "#fffbf5",
          100: "#fff3e3",
          200: "#ffe6c7",
        },
        midnight: {
          50: "#f5f3ff",
          100: "#ebe5ff",
          200: "#3a2150",
          300: "#2a1740",
          400: "#201034",
          500: "#190b2b",
          600: "#120721",
          700: "#0c0418",
          800: "#070210",
          900: "#04010a",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        script: ["'Dancing Script'", "cursive"],
        body: ["'Poppins'", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        "heart-beat": "heartBeat 1.5s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
        "shimmer": "shimmer 3s linear infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "twinkle": "twinkle 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        },
        heartBeat: {
          "0%, 100%": { transform: "scale(1)" },
          "25%": { transform: "scale(1.15)" },
          "50%": { transform: "scale(1)" },
          "75%": { transform: "scale(1.1)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "1" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.2", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
      },
      backgroundImage: {
        "gradient-romantic":
          "linear-gradient(135deg, #fff1f3 0%, #fef6f4 25%, #faf5ff 50%, #fff3e3 75%, #fff1f3 100%)",
        "gradient-romantic-dark":
          "linear-gradient(135deg, #190b2b 0%, #201034 25%, #2a1740 50%, #190b2b 75%, #0c0418 100%)",
        "gradient-blush":
          "linear-gradient(135deg, #fdecea 0%, #e9d5ff 100%)",
        "gradient-rose":
          "linear-gradient(135deg, #ffc7d1 0%, #ffa0b3 50%, #d8b4fe 100%)",
      },
    },
  },
  plugins: [],
};
