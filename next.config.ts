
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.ibb.co.com",
            },
            {
                protocol: "https",
                hostname: "covers.openlibrary.org",
            },
        ],
    },

    reactCompiler: true,
};

export default nextConfig;
