import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { useEditor } from '@/hooks/useEditor';
import { useEffect, useRef, useState } from 'react';
import { exampleRepos } from '@/data/exampleRepos';
import { Spinner } from '@/components/Spinner/Spinner';
import { FileTextIcon } from '@radix-ui/react-icons';
import { Tutorial } from '@/components/Tutorial/Tutorial';
import { EditiorContext } from '@/contexts/EditorContext';

const PROJECT_ID = 'stackblitz-starters-nwqbvy';

const inter = Inter({ subsets: ['latin'] });

const header = (
	<Head>
		<title>Thirweb Tutorial</title>
		<meta name='description' content='thirdweb Tutorial' />
		<meta name='viewport' content='width=device-width, initial-scale=1' />
		<link rel='icon' href='/favicon.ico' />
	</Head>
);

export default function Home() {
	const [tutorialIndex, setTutorialIndex] = useState(0);
	const editior = useEditor();
	const { status, initialize, updateFile, openFile } = editior;
	const embedRef = useRef<HTMLDivElement>(null);

	const initialized = useRef(false);
	useEffect(() => {
		if (initialized.current) {
			return;
		}
		const embedEl = embedRef.current;
		console.log({
			status,
			el: embedEl,
		});
		if (status === 'notReady' && embedEl) {
			initialized.current = true;
			initialize({
				element: embedEl,
				projectId: PROJECT_ID,
				openFile: 'pages/index.tsx',
			});

			// initialize({
			// 	github: exampleRepos[0].githubPath,
			// 	element: embedEl,
			// 	openFile: exampleRepos[0].openFile,
			// });
		}
	}, [status, initialize]);

	return (
		<EditiorContext.Provider value={editior}>
			{header}

			<main className={`${styles.main} ${inter.className}`}>
				<div className={styles.grid}>
					<div className={styles.explainerContainer}>
						<nav className={styles.nav}>
							thirdweb React SDK Tutorial
							<a
								className={styles.iconLink}
								href='https://portal.thirdweb.com/react'
								target='_blank'
							>
								<FileTextIcon width={16} height={16} />
								Docs
							</a>
						</nav>

						<Tutorial index={tutorialIndex} onSelect={setTutorialIndex} />
					</div>
					<div className={styles.embedContainer}>
						<div
							ref={embedRef}
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								height: '100vh',
								background: `var(--bg-elevated)`,
							}}
						>
							<div>
								<Spinner />
							</div>
						</div>
					</div>
				</div>
			</main>
		</EditiorContext.Provider>
	);
}
