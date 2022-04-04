const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// Scss
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

// Tailwind css
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = nextConfig;
