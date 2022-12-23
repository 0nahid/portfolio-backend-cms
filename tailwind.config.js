/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      "emerald",
      "dracula"
    ]
  },
  plugins: [require("daisyui")],
}