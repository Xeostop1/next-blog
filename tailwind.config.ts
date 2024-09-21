// tailwind.config.js
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
      extend: {
        colors: {
          primary: '#F5F5F5', //주황색 테마
                },
        fontFamily: {
          sans: ['Noto Sans', 'sans-serif'],
                },
    },
  },
  plugins: [],
}
