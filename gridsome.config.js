// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "LoreNetwork Lore Cards",
  plugins: [
    {
      use: "gridsome-source-google-sheets",
      options: {
        sheetId: process.env.ELDERSCROLS_SHEET_ID,
        apiKey: process.env.GOOGLE_API_KEY,
        type: "ES_Lore", //Optional - default is googleSheet. Used for graphql queries.
      },
    },
    {
      use: "gridsome-source-google-sheets",
      options: {
        sheetId: process.env.HALO_SHEET_ID,
        apiKey: process.env.GOOGLE_API_KEY,
        type: "Halo_Lore", //Optional - default is googleSheet. Used for graphql queries.
      },
    },
  ],
};
