module.exports = {
  rewrites: async () => {
    return {
      beforeFiles: [
        {
          source: "/signin",
          destination: "/camera",
        },
      ],
    };
  },
};
