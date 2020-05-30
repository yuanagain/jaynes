const path = require('path');
const withImages = require('next-images');
const withFonts = require('next-fonts');
const images = require('remark-images');
const emoji = require('remark-emoji');
const withPlugins = require('next-compose-plugins');
const remarkMath = require('remark-math')
const rehypeKatex = require('rehype-katex')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [images, emoji, remarkMath],
    rehypePlugins: [rehypeKatex]
  }
});

const mdxConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
}

const webpack = (config, { isServer }) => {

  config.resolve.alias['@pages'] = path.join(__dirname, 'src/pages');
  config.resolve.alias['@components'] = path.join(
    __dirname,
    'src/components'
  );
  config.resolve.alias['@containers'] = path.join(
    __dirname,
    'src/containers'
  );
  config.resolve.alias['@lib'] = path.join(__dirname, 'src/lib');
  config.resolve.alias['@icons'] = path.join(__dirname, 'src/icons');
  config.resolve.alias['@images'] = path.join(__dirname, 'images');
  config.resolve.alias['@app'] = path.join(__dirname, '');
  return config;
}

const plugins = [
  withImages,
  withFonts,
  [ withMDX, mdxConfig ]
];

const nextConfig = { webpack };

module.exports = withPlugins(plugins, nextConfig);
