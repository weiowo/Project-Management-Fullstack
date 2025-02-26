const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "project-management-s3-assets.s3.us-east-1.amazonaws.com",
        port: "",
        pathname: "/**",
      }
    ]
  }
};

export default nextConfig;
