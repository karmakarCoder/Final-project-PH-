/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: "var(--inter)",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "1rem",
        xl: "1rem",
        "2xl": "0rem",
      },
    },
    extend: {
      colors: {
        primaryWhite: "var(--primaryWhite)",
        primaryBlack: "var(--primaryBlack)",
        golden: "var(--golden)",
        dark2: "var(--dark2)",
        dark3: "var(--dark3)",
        dark4: "var(--dark4)",
        dark5: "var(--dark5)",
        dark6: "var(--dark6)",
        dark7: "var(--dark7)",
      },
    },
  },
  plugins: [],
};
