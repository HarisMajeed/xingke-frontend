/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./features/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fbe9f6",
          100: "#f7d3ed",
          200: "#eea7db",
          300: "#e67ac8",
          400: "#dd4eb6",
          500: "#d522a4",
          600: "#a81b82",
          700: "#7b145f",
          800: "#4e0d3d",
          900: "#21061b",
        },
      },
      backgroundImage: {
        "world-map": "url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'800\\' height=\\'400\\' viewBox=\\'0 0 800 400\\'%3E%3Ccircle cx=\\'120\\' cy=\\'180\\' r=\\'6\\' fill=\\'%23555555\\'/%3E%3Ccircle cx=\\'170\\' cy=\\'160\\' r=\\'5\\' fill=\\'%23555555\\'/%3E%3Ccircle cx=\\'250\\' cy=\\'120\\' r=\\'7\\' fill=\\'%23555555\\'/%3E%3Ccircle cx=\\'280\\' cy=\\'200\\' r=\\'5\\' fill=\\'%23555555\\'/%3E%3Ccircle cx=\\'360\\' cy=\\'150\\' r=\\'6\\' fill=\\'%23555555\\'/%3E%3Ccircle cx=\\'430\\' cy=\\'160\\' r=\\'5\\' fill=\\'%23555555\\'/%3E%3Ccircle cx=\\'470\\' cy=\\'200\\' r=\\'4\\' fill=\\'%23555555\\'/%3E%3Ccircle cx=\\'540\\' cy=\\'170\\' r=\\'6\\' fill=\\'%23555555\\'/%3E%3Ccircle cx=\\'600\\' cy=\\'190\\' r=\\'5\\' fill=\\'%23555555\\'/%3E%3Ccircle cx=\\'650\\' cy=\\'160\\' r=\\'4\\' fill=\\'%23555555\\'/%3E%3Ccircle cx=\\'700\\' cy=\\'210\\' r=\\'5\\' fill=\\'%23555555\\'/%3E%3C/svg%3E')",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
};
