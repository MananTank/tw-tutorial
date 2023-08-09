export type RepoMeta = {
	name: string;
	githubPath: string;
	openFile: string;
	type: 'vite' | 'cra' | 'next';
	ts: boolean;
};

export const exampleRepos: RepoMeta[] = [
	{
		name: 'Vite + TypeScript',
		githubPath: 'thirdweb-example/vite-typescript-starter',
		openFile: 'src/App.tsx',
		type: 'vite',
		ts: true,
	},
	{
		name: 'Vite + JavaScript',
		githubPath: 'thirdweb-example/vite-javascript-starter',
		openFile: 'src/App.jsx',
		type: 'vite',
		ts: false,
	},
	{
		name: 'CRA + TypeScript',
		githubPath: 'thirdweb-example/cra-typescript-starter',
		openFile: 'src/App.tsx',
		type: 'cra',
		ts: true,
	},
	{
		name: 'CRA + JavaScript',
		githubPath: 'thirdweb-example/cra-javascript-starter',
		openFile: 'src/App.jsx',
		type: 'cra',
		ts: false,
	},
	{
		name: 'Next.js + JavaScript',
		githubPath: '/thirdweb-example/next-javascript-starter',
		openFile: 'pages/index.js',
		type: 'next',
		ts: false,
	},
	{
		name: 'Next.js + TypeScript',
		githubPath: '/thirdweb-example/next-typescript-starter',
		openFile: 'pages/index.tsx',
		type: 'next',
		ts: true,
	},
];
