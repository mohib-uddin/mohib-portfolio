import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode:"class",
  theme: {
    extend: {
      screens: {
        large__mobile:"450px",
        tablet: '640px',
        laptop: '768px',
        desktop: "1024px",
        large__desktop:"1200px",
        xl__screens: '1600px',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
      backgroundColor: {
        'primary__dark':'rgb(24 24 27)',
        'color__one': '#F26725',
        'color__two': "#F4EBFF",
        'color__three': "#F0E2FF",
        'color__four':"#401E65",
        'color__five':"#EBEBEB",
        'color__six':"#3E1F62",
        'color__seven':"#F7F8F8",
        'glass': "hsla(0,0%,100%,.08)",
        'glass-light': "rgb(243 244 246)",

},
      colors: {
        'dark':'rgb(24,24,27)',
        'color__secondary':"rgb(161 161 170)",
        'color__one': "#737171",
        'color__two': "#545353",
        'color__three': "#F26725",
        'color__four': "#3C3C3C",
        'color__five': "#4B4B4B",
        'color__six': "#0D0525",
        'color__seven':"#808080",
        'color__eight':"#343434",
        'color__nine':"#ECECEC",
        'color__ten':"#6C6C6C",
        'color__eleven':"#CDCDCC",
      },
      spacing: {
        'mobile__container': "24px",
        'desktop__container': "80px",
        'large__screen_container': "110px",
      },
      gridTemplateColumns: {
        'section__columns': '1fr 2fr'
      },
    },
  },
  plugins: [],
}
export default config
