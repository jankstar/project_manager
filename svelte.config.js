import sveltePreprocess from "svelte-preprocess";
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
//		adapter: adapter({
//			fallback: 'index.html'
//		}),
		alias: {},
		appDir: '_app',
		outDir: '.svelte-kit',
		paths: {
			assets: '',
			base: '/project_manager'
		  }
	},



	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess(),
};

export default config;
