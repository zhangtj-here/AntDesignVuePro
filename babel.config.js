module.exports = {
  presets: ["@vue/app"],
  plugins: [
      [
          "import",
          { libraryName : "ant-design-vue" ,libraryDirectory : 'es' , style : true }
          // 'style: true' 会加载less文件
      ]
  ]
};
