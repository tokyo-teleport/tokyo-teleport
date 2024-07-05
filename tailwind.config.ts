module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // ダークモードは無効
  theme: {
    extend: {
      width: {
        '128': '32rem', // 任意のカスタム幅（必要に応じて調整）
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
