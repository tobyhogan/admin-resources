import type { GatsbyConfig } from "gatsby"

module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {

        "icon": "src/assets/icon.png"
      }
    },

    // ...
  ],

  pathPrefix: "/admin-resources",
  

}

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://tobyhogan.github.io/admin-resources/`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [],
}

export default config
