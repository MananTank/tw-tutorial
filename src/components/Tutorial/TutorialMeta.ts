import React from 'react';

export type TutorialMeta = {
	name: string;
	component: () => JSX.Element;
	code: string;
};
