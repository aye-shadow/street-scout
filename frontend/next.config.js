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
};
