const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    // Add your config options here
    reactStrictMode: true,
    swcMinify: true,
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: isProd ? '/shiny-tracker' : '',
    assetPrefix: isProd ? '/shiny-tracker' : '',
};

module.exports = nextConfig;