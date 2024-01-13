// src/routes/+layout.server.js

export const load = async ({ locals: { getSession } }) => {
	return {
		// This will populate in every page's data
		session: await getSession()
	};
};
