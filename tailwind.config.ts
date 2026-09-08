import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#26C165',
          light: '#5FE08C',
        },
        navy: {
          DEFAULT: '#073042',
          deep: '#0A3D52',
        },
        blue: {
          DEFAULT: '#00A0FF',
        },
        mint: '#EEF6F2',
        paper: '#FAFAF9',
        ink: {
          DEFAULT: '#0E2430',
          soft: '#4B6472',
        },
        line: '#DCE7E3',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      maxWidth: {
        wrap: '1180px',
      },
      boxShadow: {
        cta: '0 8px 24px rgba(38,193,101,0.28)',
        'cta-hover': '0 12px 30px rgba(38,193,101,0.38)',
        'cta-dark': '0 8px 24px rgba(7,48,66,0.25)',
        ticker: '0 30px 60px -20px rgba(7,48,66,0.45)',
        mock: '0 20px 40px -18px rgba(7,48,66,0.18)',
        card: '0 20px 40px -20px rgba(7,48,66,0.2)',
      },
    },
  },
}
