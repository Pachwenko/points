export const load = ({ params }) => {
	return {
		// This will populate in the respective page's data
		// This runs on the server if server-side rendering, and on client during navigation
		slug: params.slug
	};
};
