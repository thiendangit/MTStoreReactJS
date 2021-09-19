module.exports = {
  plugins: [
    'postcss-preset-env',
    require('tailwindcss'),
    require('autoprefixer'),
    require('tailwindcss/nesting'),
  ],
};
