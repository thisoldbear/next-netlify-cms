module.exports = {
  reactStrictMode: true,
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });

    cfg.module.rules.push({
      test: /\.ya?ml$/,
      use: "yaml-loader",
      type: "json",
    });

    return cfg;
  },
};
