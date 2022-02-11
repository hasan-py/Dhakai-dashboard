module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          950: "#00775c",
          900: "#01896a",
          300: "#d1ffd0",
        },
        white: {
          0: "#ffffff",
          50: "#f2f2f2",
        },
        gray: {
          0: "#2a2a2e",
          10: "#63636a",
        },
      },
      boxShadow: {
        sm: "0 1px 4px 0 rgba(0, 0, 0, 0.08);",
      },
    },
  },
  plugins: [],
};
