module.exports = {
  presets: [['@babel/react', { runtime: 'automatic' }], '@babel/env', '@babel/preset-typescript'],
  plugins: ['@babel/plugin-proposal-class-properties'],
};
