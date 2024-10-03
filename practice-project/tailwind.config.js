module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'homepage-primary': '#674D00',
        'homepage-secondary': '#031E00',
        'homepage-accent': '#E7D37F',
        'aboutus-primary': '#FFFFFF',
        'aboutus-secondary': '#F0F0F0',
        'aboutus-accent': '#808080',
        'aboutus-dark': '#000000',
        'contactus-primary': '#FFFFFF',
        'contactus-secondary': '#E7D37F',
        'contactus-dark': '#343434',
        'contactus-black': '#000000',
        'login-primary': '#E0DEDE',
        'login-secondary': '#FFFFFF',
        'login-accent': '#E7D37F',
        'login-black': '#000000',
        'product-primary': '#FFFFFF',
        'product-accent': '#E7D37F',
        'product-black': '#000000',
      },
      fontFamily: {
        'kaushan': ['Kaushan Script', 'cursive'],
        'inria': ['Inria Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
