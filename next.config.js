/** @type {import('next').NextConfig} */
const nextConfig = {
    outputFileTracingRoot: __dirname,
    experimental: {
        serverActions: true,
        serverActionsBodySizeLimit: "100mb",
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.pixabay.com",
            },
            {
                protocol: "https",
                hostname: "img.freepik.com",
            },
            {
                protocol: "https",
                hostname: "sgp.cloud.appwrite.io",
            },
        ],
    },
};

module.exports = nextConfig;
