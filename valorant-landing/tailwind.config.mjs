/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#000000",
      primaty: {
        100: "#EFFFF3",
        600: "#187F2E",
      },
      customPurple: "rgba(90, 40, 160, 0.4)",
      blackModal: "rgba(0, 0, 0, 0.3)",
      blackSelect: "rgba(0, 0, 0, 0.6)",
    },
    extend: {
      screens: {
        xs: "400px",
      },
      backgroundImage: {
        "gradient-custom":
          "linear-gradient(90deg, #BB0330 0.38%, #DE0A5C 14.4%, #E67800 28.41%, #F0B800 42.43%, #B1B814 59.45%, #0080BB 75.47%, #7A2680 100.5%)",
        "gradient-step1": "linear-gradient(90deg, #E7004C, #EC7803)",
        "gradient-step2": "linear-gradient(90deg, #0684C2, #7B2683)",
        age: "url('/img/background/bg-age.webp')",
        map: "url('/img/background/bg-map.webp')",
        valorant: "url('/img/background/bg-valorant.webp')",
      },
      fontFamily: {
        gridnik: ["FoundryGridnik-Bold", "sans-serif"],
        myriad: ["MyriadPro-Regular", "sans-serif"],
        thedus: ["ThedusStencilWide-Regular", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 1px #5A28A0, 0 0 1px #5A28A0, 0 0 1px #5A28A0, 0 0 10px #5A28A0",
        neonError:
          "0 0 1px #FF0000, 0 0 1px #FF0000, 0 0 1px #FF0000, 0 0 10px #FF0000",
        rightInset: "inset -600px 0 90px -5px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
