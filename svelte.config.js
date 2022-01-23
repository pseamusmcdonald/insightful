import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'
import { resolve } from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					$components: resolve('src/components'),
					$src: resolve('src'),
					$stores: resolve('src/stores'),
				},
			},
		},
	},
	preprocess: preprocess(),
};

export default config;
