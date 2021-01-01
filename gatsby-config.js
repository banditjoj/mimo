module.exports = {
  pathPrefix: "/mimo",
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/foam`,
        rootNote: `/0INDEX`,
		ignore: [
          "**/_layouts/**",
          "**/.git/**",
          "**/.github/**",
          "**/.vscode/**"
		  ]
      },
    },
  ],
  siteMetadata: {
    title: `mimo`,
  },
}
