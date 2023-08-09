import { TutorialMeta } from '../TutorialMeta';
import styles from '../Tutorial.module.css';
import buttonStyles from '@/styles/buttons.module.css';
import { useEditorContext } from '@/contexts/EditorContext';
import { DoubleArrowRightIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/Elements/Buttons';

const codeBase = `\
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

const codeThemeLight = `\
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

const codeBtnTitle = `\
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

const connectWalletInlineCode = <code data-inline> ConnectWallet </code>;

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
						return codeThemeLight;
					});
				}}
			>
				Change theme <DoubleArrowRightIcon />
			</Button>
		</div>
	);

	const btnTitleConfig = (
		<div>
			<h3>btnTitle</h3>

			<p>
				Change the text the button displays while in the disconnected state. The default value is{' '}
				<code data-inline> {`"Connect Wallet"`} </code>.
			</p>

			<Button
				onClick={() => {
					editiorContext.updateFile('pages/index.tsx', prev => {
						return codeBtnTitle;
					});
				}}
			>
				Change btnTitle <DoubleArrowRightIcon />
			</Button>
		</div>
	);

	return (
		<div>
			<p>
				{connectWalletInlineCode} component allows you to connect to wallets that are specified in{' '}
				<code data-inline> ThirdwebProvider </code> {`'s`}{' '}
				<a
					href='https://portal.thirdweb.com/react/react.thirdwebprovider#supportedwallets-optional'
					target='_blank'
				>
					{' '}
					supportedWallets
				</a>{' '}
				prop
			</p>

			<p>Clicking on the {connectWalletInlineCode} button shows a modal with a list of wallets.</p>

			<p>Try clicking on the button and connecting to a wallet.</p>

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
	code: codeBase,
};
