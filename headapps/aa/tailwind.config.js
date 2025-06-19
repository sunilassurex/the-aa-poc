module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', 
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: ['font-newtransport'],
  theme: {
    extend: {
      fontFamily: {
        newtransport: ['NewTransport', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
