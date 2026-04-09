/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // Esta é a nova forma de chamar o plugin
  },
};

export default config;