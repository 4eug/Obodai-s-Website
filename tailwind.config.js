/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontSize: {
      'obodai-header-h1': '64px',
      'obodai-header-h2': '48px',
      'obodai-header-h3': '36px',
      'obodai-header-h4': '24px',
      'obodai-header-h5': '20px',
      'obodai-header-h6': '16px',
      },
      fontFamily: {
        'obodai-mont': 'Montserrat'
      },
    },
    
  },
  plugins: [],
}