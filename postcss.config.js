import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// This is not working at the moment
const isTailwindEnabled = process.env.BUILD_TAILWIND === 'true';

export default {
  plugins: [isTailwindEnabled ? tailwindcss() : null, autoprefixer()].filter(Boolean),
};
