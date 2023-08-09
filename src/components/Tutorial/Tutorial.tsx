import { Drawer } from '@/components/Drawer/Drawer';
import styles from './Tutorial.module.css';
import { DoubleArrowRightIcon } from '@radix-ui/react-icons';
import { useEditorContext } from '@/contexts/EditorContext';
import { useEffect, useRef } from 'react';
import { tutorials } from './tutorials';
import { IconButton } from '../Elements/Buttons';

export function Tutorial(props: { index: number; onSelect: (index: number) => void }) {
	const editiorContext = useEditorContext();
	const nextTutorial = tutorials[props.index + 1];
	const tutorial = tutorials[props.index];

	const goNext = () => {
		props.onSelect(props.index + 1);
	};

	useEffect(() => {
		if (tutorial.code) {
			editiorContext.updateFile('pages/index.tsx', () => tutorial.code);
			editiorContext.openFile('pages/index.tsx');
		}
	}, [editiorContext, tutorial.code]);

	if (tutorial) {
		return (
			<div className={styles.tutorialContainer}>
				<div className={styles.tutorialSelector}>
					<Drawer onSelect={props.onSelect} />
					<span> {tutorial.name} </span>
					<div
						style={{
							marginLeft: 'auto',
						}}
					>
						{nextTutorial && (
							<IconButton onClick={goNext}>
								<DoubleArrowRightIcon width={20} height={20} />
							</IconButton>
						)}
					</div>
				</div>

				<tutorial.component />

				{nextTutorial && (
					<button className={styles.nextBtn} onClick={goNext}>
						NEXT <DoubleArrowRightIcon width={20} height={20} />{' '}
					</button>
				)}
			</div>
		);
	}
	return <p> no tutorial found </p>;
}
