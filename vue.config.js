module.exports = {
  publicPath: "./",
  assetsDir: "",
  outputDir: "dist",
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~/src/assets/sass/style.scss";`
      }
    }
  }
}
