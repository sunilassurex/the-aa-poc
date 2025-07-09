module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', 
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      fontFamily: {
        newtransport: ['NewTransport', 'sans-serif'],
        aasans: ['AA-Sans', 'sans-serif'],
        Arials: ['NewTransport-Bold', 'Arial', 'Helvetica', 'Verdana', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
