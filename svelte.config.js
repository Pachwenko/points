import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
	kit: {
		adapter: adapter(),
		prerender: {
			entries: []
		}
	},
	preprocess: vitePreprocess()
};
