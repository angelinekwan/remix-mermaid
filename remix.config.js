/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  cacheDirectory: "./node_modules/.cache/remix",
  ignoredRouteFiles: ["**/.*", "**/*.css", "**/*.test.{js,jsx,ts,tsx}"],
  serverDependenciesToBundle: [
		/^mermaid.*/,
		/^khroma*/,
		/^d3*/,
		/^lodash-es*/,
		/^dagre-d3-es.*/,
		/^robust-predicates*/,
		/^internmap.*/,
	],
};