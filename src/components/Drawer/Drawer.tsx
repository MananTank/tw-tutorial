import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import styles from './Drawer.module.css';
import { tutorials } from '../Tutorial/tutorials';
import { IconButton } from '../Elements/Buttons';

export const Drawer = (props: { onSelect: (index: number) => void }) => (
	<Dialog.Root>
		<Dialog.Trigger asChild>
			<IconButton>
				<HamburgerMenuIcon width={24} height={24} />
			</IconButton>
		</Dialog.Trigger>
		<Dialog.Portal>
			<Dialog.Overlay className={styles.DialogOverlay} />
			<Dialog.Content className={styles.DialogContent}>
				<Dialog.Title className={styles.DialogTitle}>Tutorials</Dialog.Title>

				{tutorials.map((tutorial, i) => {
					return (
						<Dialog.Close asChild key={tutorial.name}>
							<li
								className={styles.DialogListItem}
								onClick={() => {
									props.onSelect(i);
								}}
							>
								{tutorial.name}
							</li>
						</Dialog.Close>
					);
				})}
			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>
);
