type RepoInfo = {
	githubPath: string;
	openFile: string;
};

export const exampleRepos: RepoInfo[] = [
	{
		githubPath: 'thirdweb-example/vite-typescript-starter',
		openFile: 'src/App.tsx',
	},
	{
		githubPath: 'thirdweb-example/vite-javascript-starter',
		openFile: 'src/App.jsx',
	},
	{
		githubPath: 'thirdweb-example/cra-typescript-starter',
		openFile: 'src/App.tsx',
	},
	{
		githubPath: 'thirdweb-example/cra-javascript-starter',
		openFile: 'src/App.jsx',
	},
	{
		githubPath: '/thirdweb-example/next-javascript-starter',
		openFile: 'pages/index.js',
	},
	{
		githubPath: '/thirdweb-example/next-typescript-starter',
		openFile: 'pages/index.tsx',
	},
];
