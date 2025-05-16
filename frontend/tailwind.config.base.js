/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#0C0C0C',
      gray: {
        100: '#F8FAFC',
        150: '#F2F2F4',
        200: '#ECEFF4',
        250: '#E5E7EB',
        300: '#E4E6ED',
        400: '#BFC4D2',
        500: '#959BAC',
        600: '#767C85',
        700: '#545A65',
        800: '#30343D',
        900: '#0C0C0C',
      },
      'gray-dark': {
        100: '#CBCBD1',
        200: '#ADADB9',
        300: '#8E8E98',
        400: '#56565B',
        500: '#4D4D50',
        600: '#3C3C3F',
        700: '#2C2C32',
        800: '#202024',
        900: '#1C1C1F',
      },
      purple: {
        100: '#EAC7FF',
        200: '#E0ACFF',
        300: '#D388FF',
        400: '#BC59F4',
        500: '#9D33DA',
        600: '#8B1FC9',
        700: '#7910B5',
        800: '#5D0092',
        900: '#410067',
      },
      orange: {
        100: '#FFD89C',
        200: '#FFC368',
        300: '#FFB74A',
        400: '#FFAE33',
        500: '#E98C00',
        600: '#CE7C00',
        700: '#A36200',
        800: '#7C4B00',
        900: '#5C3700',
      },
      green: {
        100: '#9FF7E2',
        200: '#6EE6C9',
        300: '#54D2B3',
        400: '#22BD97',
        500: '#00A47C',
        600: '#008967',
        700: '#007458',
        800: '#005C46',
        900: '#004131',
      },
      blue: {
        100: '#C5E0FF',
        200: '#9FCCFF',
        300: '#73B4FF',
        400: '#3190FF',
        500: '#0068E1',
        600: '#005DCA',
        700: '#0050AD',
        800: '#00428F',
        900: '#002E63',
      },
      red: {
        100: '#FFD7E5',
        200: '#FFBBD3',
        300: '#FF91B8',
        400: '#F14180',
        500: '#BB0043',
        600: '#A1003A',
        700: '#80002E',
        800: '#6F0028',
        900: '#4B001B',
      },
    },
    fontSize: {
      xs: ['0.75rem', '1rem'], //12px - 16px
      sm: ['0.875rem', '1.25rem'], //14px - 20px
      base: ['1rem', '1.5rem'], //16px - 24px
      lg: ['1.125rem', '1.75rem'], //18px - 28px
      xl: ['1.25rem', '1.75rem'], //20px - 28px
      '2xl': ['1.5rem', '2rem'], //24px - 32px
      '3xl': ['1.875rem', '2.25rem'], //30px - 36px
      '4xl': ['2.25rem', '2.5rem'], //36px - 40px
      '5xl': ['3rem', '1'], //48px - 64px
    },
    boxShadow: {
      sm: ['0px 1px 2px 0px rgba(0, 0, 0, 0.05)'],
      base: [
        '0px 1px 2px 0px rgba(0, 0, 0, 0.06)',
        '0px 1px 3px 0px rgba(0, 0, 0, 0.10)',
      ],
      md: [
        '0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
        '0px 4px 6px -1px rgba(0, 0, 0, 0.10)',
      ],
      lg: [
        '0px 4px 6px -2px rgba(0, 0, 0, 0.05)',
        '0px 10px 15px -3px rgba(0, 0, 0, 0.10)',
      ],
      xl: [
        '0px 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '0px 20px 25px -5px rgba(0, 0, 0, 0.10)',
      ],
      '2xl': ['0px 25px 50px -12px rgba(0, 0, 0, 0.25)'],
      inner: ['0px 2px 4px 0px rgba(0, 0, 0, 0.06) inset'],
      none: '0 0 #0000',
    },
    // dropShadow: {
    //   sm: ['0px 1px 2px rgba(0, 0, 0, 0.05)'],
    //   base: [
    //     '0px 1px 2px rgba(0, 0, 0, 0.06)',
    //     '0px 1px 3px rgba(0, 0, 0, 0.10)',
    //   ],
    //   md: [
    //     '0px 2px 4px rgba(0, 0, 0, 0.06)',
    //     '0px 4px 6px rgba(0, 0, 0, 0.10)',
    //   ],
    //   lg: [
    //     '0px 4px 6px rgba(0, 0, 0, 0.05)',
    //     '0px 10px 15px rgba(0, 0, 0, 0.10)',
    //   ],
    //   xl: [
    //     '0px 10px 10px rgba(0, 0, 0, 0.04)',
    //     '0px 20px 25px rgba(0, 0, 0, 0.10)',
    //   ],
    //   '2xl': ['0px 25px 20px rgba(0, 0, 0, 0.25)'],
    //   inner: ['0px 2px 4px rgba(0, 0, 0, 0.06) inset'],
    //   none: '0 0 #0000',
    // },
    extend: {
      spacing: {
        15: '3.75rem',
      },
      keyframes: {
        orbit: {
          from: { transform: 'rotate(0deg) translateX(15px) rotate(0deg)' },
          to: { transform: 'rotate(360deg) translateX(15px) rotate(-360deg)' },
        },
        dash: {
          from: { 'stroke-dashoffset': 1000 },
          to: { 'stroke-dashoffset': 0 },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        randomMove: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(60deg)' },
          '25%': { transform: 'translate(120px, -150px) rotate(65deg)' },
          '50%': { transform: 'translate(-10px, 95px) rotate(55deg)' },
          '75%': { transform: 'translate(15px, 100px) rotate(62deg)' },
        },
      },
      transitionProperty: {
        'max-width': 'max-width',
        'max-height': 'max-height',
        'grid-template-rows': 'grid-template-rows',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'random-move': 'randomMove 20s ease-in-out infinite',
        dash: 'dash 15s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/container-queries'),
  ],
};
