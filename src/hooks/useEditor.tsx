import sdk, { Project, VM, EmbedOptions } from '@stackblitz/sdk';
import { useState, useRef, useCallback } from 'react';

type Updator = (prevContent: string) => string;

type InitOptions = EmbedOptions & {
	element: HTMLElement;
} & (
		| {
				projectId: string;
		  }
		| {
				github: string;
		  }
	);

const defaultOptions = {
	forceEmbedLayout: true,
	height: 800,
	hideExplorer: false,
	showSidebar: false,
	hideNavigation: false,
	sidebarView: 'default',
	theme: 'dark',
	view: 'default',
} as const;

export type EditiorActions = {
	initialize: (options: InitOptions) => Promise<void>;
	vm: VM | null;
	updateFile: (fileName: string, updator: Updator) => Promise<void>;
	status: 'notReady' | 'ready' | 'loading';
	openFile: (fileName: string) => void;
};

export function useEditor(): EditiorActions {
	const [vm, setVm] = useState<VM | null>(null);
	const [status, setStatus] = useState<'notReady' | 'ready' | 'loading'>('notReady');

	const initialize = useCallback(async (options: InitOptions) => {
		setStatus('loading');

		let vm: VM | null = null;

		if ('github' in options) {
			vm = await sdk.embedGithubProject(options.element, options.github, {
				...defaultOptions,
				...options,
			});
		} else {
			vm = await sdk.embedProjectId(options.element, options.projectId, {
				...defaultOptions,
				...options,
			});
		}

		setStatus('ready');
		setVm(vm);
	}, []);

	const updateFile = useCallback(
		async (fileName: string, updator: Updator) => {
			if (!vm) {
				console.error('SDK vm is not available');
				return;
			}

			const files = await vm.getFsSnapshot();
			if (!files) {
				console.error('SDK files is not available');
				return;
			}
			const fileContent = files[fileName];

			await vm.applyFsDiff({
				create: {
					[fileName]: updator(fileContent),
				},
				destroy: [],
			});
		},
		[vm]
	);

	const openFile = useCallback(
		(filePath: string) => {
			vm?.editor.openFile(filePath);
		},
		[vm]
	);

	return {
		initialize,
		vm,
		updateFile,
		status,
		openFile,
	};
}
