module.exports = {
  rewrites: async () => {
    return {
      beforeFiles: [
        {
          source: "/vendor-view/camera",
          destination: "/camera",
        },
      ],
    };
  },
  images: {
    domains: ["street-scout-images.s3.amazonaws.com"],
  },
};
