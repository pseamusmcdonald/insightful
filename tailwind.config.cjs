module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        custom: {
          background: 'var(--background)',
					modal: 'var(--modal)',
					button: 'var(--button)',
					search: 'var(--search-background)',
					text: 'var(--text)',
					menu: 'var(--menu)',
					hover: 'var(--hover)',
					selected: 'var(--selected)',
        },
      },
    },
  },
  plugins: [],
	purge: [
    './src/**/*.html',
    './src/**/*.svelte'
  ],
}
