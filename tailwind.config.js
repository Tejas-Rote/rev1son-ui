/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // reference the libraries only
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "50vh": "50vh",
      },
      fontFamily: {
        sans: ["Space Mono", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
