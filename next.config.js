module.exports = {
  reactStrictMode: true,
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    });

    cfg.module.rules.push({
      test: /\.ya?ml$/,
      use: 'yaml-loader',
      type: 'json',
    });

    return cfg;
  },
};
