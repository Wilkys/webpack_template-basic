module.exports = {
  presets: ['@babel/preset-env'], // 한번에 명시
  plugins: [
      ['@babel/plugin-transform-runtime'] //비동기 처리
  ]
}