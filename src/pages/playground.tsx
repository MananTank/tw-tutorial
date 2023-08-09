import { Button } from '@/components/Elements/Buttons';
import { RepoMeta, exampleRepos } from '@/data/exampleRepos';
import { useEditor } from '@/hooks/useEditor';
import { useRef, useState } from 'react';
import styles from '@/styles/playground.module.css';
import { CRAIcon } from '@/icons/React';
import { ViteIcon } from '@/icons/Vite';
import { TypeScript } from '@/icons/TypeScript';
import { Next } from '@/icons/Next';

const iconSize = 30;

export default function Playground() {
	const [repo, setRepo] = useState<RepoMeta | undefined>();
	const ref = useRef<HTMLDivElement>(null);

	const { initialize } = useEditor();

	return (
		<div className={styles.playgroundPage}>
			{!repo && (
				<div className={styles.templateSelector}>
					<h1 className={styles.heading}> Choose a template to get started </h1>
					<div className={styles.templateButtons}>
						{exampleRepos.map(repo => {
							return (
								<button
									key={repo.name}
									className={styles.template}
									onClick={() => {
										setRepo(repo);
										initialize({
											element: ref.current!,
											github: repo.githubPath,
										});
									}}
								>
									<div className={styles.templateIcons}>
										{repo.type === 'vite' && <ViteIcon width={iconSize} height={iconSize} />}
										{repo.type === 'cra' && <CRAIcon width={iconSize} height={iconSize} />}
										{repo.type === 'next' && <Next width={iconSize} height={iconSize} />}
										{repo.ts && <TypeScript width={iconSize} height={iconSize} />}
									</div>

									<span>{repo.name}</span>
								</button>
							);
						})}
					</div>
				</div>
			)}

			<div className={styles.embedContainer}>
				<div ref={ref}>{repo && <> Loading .... </>}</div>
			</div>
		</div>
	);
}
