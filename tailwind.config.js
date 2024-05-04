/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundColor: {
        main: {
          DEFAULT: "var(--bg-main)",
          accent: "var(--bg-main-accent)",
        },
        surface: {
          primary: {
            DEFAULT: "var(--surface-primary)",
            accent: "var(--surface-primary-accent)",
          },
          secondary: {
            DEFAULT: "var(--surface-secondary)",
            accent: "var(--surface-secondary-accent)",
          },
          tertiary: {
            DEFAULT: "var(--surface-tertiary)",
            accent: "var(--surface-tertiary-accent)",
          },
        },
      },
      textColor: {
        primary: {
          DEFAULT: "var(--text-primary)",
          dim: "var(--text-primary-dim)",
        },
        secondary: {
          DEFAULT: "var(--text-secondary)",
          dim: "var(--text-secondary-dim)",
        },
      },
    },
  },
  plugins: [],
};
