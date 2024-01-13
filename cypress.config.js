import { defineConfig } from 'cypress';
import dotenvPlugin from 'cypress-dotenv'; // See this issue https://github.com/morficus/cypress-dotenv/issues/29

export default defineConfig({
	e2e: {
		baseUrl: 'http://localhost:4173',
		setupNodeEvents(on, config) {
			return dotenvPlugin(config);
		}
	}
});
