import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'glass-bg': 'rgba(255, 255, 255, 0.1)',  // ガラス効果の背景色
        'miglass-bg': 'rgba(255, 255, 255, 0.3)',  // ガラス効果の背景色
        'stglass-bg': 'rgba(255, 255, 255, 0.4)',  // ガラス効果の背景色
      },
      backdropFilter: {
        'blur': 'blur(1px)',  // ぼかし効果
      },
      boxShadow: {
        'neumo': '20px 20px 60px #bcbcbc, -20px -20px 60px #ffffff',
        'glass': '0 4px 16px rgba(31, 38, 135, 0.37)',  // ガラス効果のシャドウ
        'inset-neumo': 'inset 0 2px 8px rgba(31, 38, 135, 0.37)',
      },

      borderRadius: {
        'xl': '1.1rem',
      },
      borderColor: {
        'neumo-border': 'rgba(255, 255, 255, 0.18)',
      },
      borderWidth: {
        DEFAULT: '1.5px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },


      textColor: {
        white: '#ffffff',
      },
      fontFamily: {
        dot: ['DotGothic16', 'sans-serif'],
        shippori: ['Shippori Mincho', 'serif'],
        sans: ['Noto Sans JP', 'sans-serif'],
        serif: ['Noto Serif JP', 'serif'],
        zenKurenaido: ['Zen Kurenaido', 'sans-serif']
      },


    },
  },
  variants: {},
  plugins: [
    function({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        '.text-shadow': {
          'text-shadow': '2px 2px 2px rgba(0, 0, 0, 0.2)', // ここをカスタマイズして、希望のシャドウを設定
        },
        '.text-shadow-md': {
          'text-shadow': '4px 4px 4px rgba(0, 0, 0, 0.2)',
        },
        // 他のサイズや色のシャドウもここに追加できます
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}
export default config
