/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack: (config, {}) => {
        config.module.rules.push({
          test: /\.(frag|vert|glsl)$/,
          use: [
            'raw-loader',
            {
              loader: 'glslify-loader',
              options: {
                // glslify options, if needed
              }
            }
          ],
          exclude: /node_modules/
        });
      return config
    }
  }
module.exports = nextConfig