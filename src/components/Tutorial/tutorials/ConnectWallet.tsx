import { TutorialMeta } from '../TutorialMeta';
import styles from '../Tutorial.module.css';
import buttonStyles from '@/styles/buttons.module.css';
import { useEditorContext } from '@/contexts/EditorContext';
import { DoubleArrowRightIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/Elements/Buttons';

const ConnectWalletCode = `\
import { ThirdwebProvider, ConnectWallet } from '@thirdweb-dev/react';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <ThirdwebProvider clientId={'fb057bd91dae8be178d04d292a38a690'}>
      <Example />
    </ThirdwebProvider>
  );
}

function Example() {
  return (
    <main className={styles.container}>
      <ConnectWallet />
    </main>
  );
}
`;

const ConnectWalletCodeThemeLight = `\
import { ThirdwebProvider, ConnectWallet } from '@thirdweb-dev/react';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <ThirdwebProvider clientId={'fb057bd91dae8be178d04d292a38a690'}>
      <Example />
    </ThirdwebProvider>
  );
}

function Example() {
  return (
    <main className={styles.container}>
      <ConnectWallet theme="light" />
    </main>
  );
}
`;

const ConnectWalletCodeBtnTitle = `\
import { ThirdwebProvider, ConnectWallet } from '@thirdweb-dev/react';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <ThirdwebProvider clientId={'fb057bd91dae8be178d04d292a38a690'}>
      <Example />
    </ThirdwebProvider>
  );
}

function Example() {
  return (
    <main className={styles.container}>
      <ConnectWallet btnTitle="Login" />
    </main>
  );
}
`;

function Tutorial() {
	const editiorContext = useEditorContext();

	const themeConfig = (
		<div>
			<h3>theme</h3>

			<p>
				Change the theme of Connect Wallet UI to <code data-inline> {`"light"`} </code> or{' '}
				<code data-inline> {`"dark"`} </code> mode, to match the color theme of your app. The
				default value is <code data-inline> {`"dark"`} </code>.
			</p>

			<Button
				onClick={() => {
					editiorContext.updateFile('pages/index.tsx', prev => {
						return ConnectWalletCodeThemeLight;
					});
				}}
			>
				Show Me <DoubleArrowRightIcon />
			</Button>
		</div>
	);

	const btnTitleConfig = (
		<div>
			<h3>btnTitle</h3>

			<p>
				Change the theme of Connect Wallet UI to <code data-inline> {`"light"`} </code> or{' '}
				<code data-inline> {`"dark"`} </code> mode, to match the color theme of your app. The
				default value is <code data-inline> {`"dark"`} </code>.
			</p>

			<Button
				onClick={() => {
					editiorContext.updateFile('pages/index.tsx', prev => {
						return ConnectWalletCodeBtnTitle;
					});
				}}
			>
				Show Me <DoubleArrowRightIcon />
			</Button>
		</div>
	);

	return (
		<div>
			<p>
				<code data-inline> ConnectWallet </code> component allows you to connect to wallets that are
				specified in <code data-inline> ThirdwebProvider </code>
			</p>

			<p>
				Clicking on the <code data-inline> ConnectWallet </code> button shows wallets in a Modal and
				shows wallet-specific UI for connecting the wallet when it is selected
			</p>

			<h2>Configuration</h2>

			{themeConfig}
			<hr className={styles.hr} />
			{btnTitleConfig}
		</div>
	);
}

export const ConnectWalletTutorial: TutorialMeta = {
	name: 'ConnectWallet',
	component: Tutorial,
	code: ConnectWalletCode,
};
