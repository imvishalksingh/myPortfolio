// const path = require('path')
 
// module.exports = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
//   images: {
//     domains: ['res.cloudinary.com', 'media.dev.to']
//   }
// }

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export", // Enables static export
  basePath: isProd ? "/your-repo-name" : "", // Set GitHub Pages base path
  images: {
    unoptimized: true, // Disables Next.js Image Optimization
  },
};
