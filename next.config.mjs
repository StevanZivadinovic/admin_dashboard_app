/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost', 'res.cloudinary.com'], // Allow images from any local source
      },
};

export default nextConfig;
