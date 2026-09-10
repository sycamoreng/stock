import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0E1218',
          soft: '#161C24',
        },
        navy: {
          DEFAULT: '#153455',
          light: '#1E4570',
        },
        sage: {
          DEFAULT: '#4F9A63',
          light: '#8CC79B',
          deep: '#2C5A38',
        },
        gold: {
          DEFAULT: '#D3A24E',
          light: '#EAC276',
        },
        paper: {
          DEFAULT: '#F4F5F7',
          dim: '#EAECEF',
        },
        card: '#EDEFF2',
        'on-ink': {
          DEFAULT: '#F4F6F8',
          muted: '#9BA6B4',
        },
        'on-paper': {
          DEFAULT: '#152030',
          muted: '#5C6672',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        wrap: '1180px',
      },
      borderRadius: {
        sm: '6px',
        md: '14px',
        lg: '22px',
      },
      boxShadow: {
        cta: '0 8px 24px rgba(21,52,85,0.25)',
        'cta-hover': '0 12px 30px rgba(21,52,85,0.35)',
        gold: '0 10px 28px rgba(211,162,78,0.35)',
        card: '0 20px 40px -20px rgba(14,18,24,0.22)',
        mock: '0 24px 50px -20px rgba(14,18,24,0.28)',
        hero: '0 40px 80px -30px rgba(14,18,24,0.5)',
      },
    },
  },
}
