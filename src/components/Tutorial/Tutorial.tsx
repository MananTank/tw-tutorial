import { Drawer } from '@/components/Drawer/Drawer';
import styles from './Tutorial.module.css';
import buttonStyles from '@/styles/buttons.module.css';
import { DoubleArrowRightIcon } from '@radix-ui/react-icons';
import { useEditorContext } from '@/contexts/EditorContext';
import { useEffect, useRef } from 'react';
import { baseContent } from '@/data/baseContent';

function WelcomeTutorial() {
	return (
		<div>
			<p>
				Welcome to the thirdweb React SDK tutorial! This will teach you everything you need to know
				to easily build web3 applications.
			</p>

			<p>
				You can also consult the{' '}
				<a target='_blank' href='https://portal.thirdweb.com/react'>
					API docs
				</a>
			</p>

			<h2> What is thirdweb React SDK? </h2>

			<p>
				A collection of <em> 100+ React hooks</em> and <em> UI components </em> for your web3 apps,
				for <em> Any EVM-compatible blockchain. </em>
			</p>

			<p>
				Connect to user{`'`}s wallets, interact with smart contracts, sign messages, and utilize
				common standards such as tokens, NFTs, marketplaces; all with built-in caching, RPC URLs,
				IPFS gateways, and more.
			</p>

			<h2>Getting Started</h2>

			<p>To get started, install the required dependencies into your React project.</p>

			<code>npm install @thirdweb-dev/react @thirdweb-dev/sdk ethers@^5</code>
		</div>
	);
}

const ThirdwebProviderCode = `\
import { ThirdwebProvider } from '@thirdweb-dev/react';
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
      <h1> Hello thirdweb </h1>
    </main>
  );
}
`;

function ThirdwebProviderTutorial() {
	return (
		<div>
			<p>
				Wrap your application in the <code data-inline> {'<ThirdwebProvider />'} </code> component
				to start using the SDK.
			</p>

			<p>
				With the provider set up, all of the SDK{`'s`}s hooks and components work out of the box!
			</p>

			<p>
				To use the React SDK, you need to first create an API key from the{' '}
				<a href='https://thirdweb.com/create-api-key' target='_blank'>
					{' '}
					Dashboard{' '}
				</a>{' '}
				and then copy the clientId to pass as a prop to the{' '}
				<code data-inline> {'<ThirdwebProvider />'} </code>
			</p>
		</div>
	);
}

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

function ConnectWalletTutorial() {
	const editiorContext = useEditorContext();

	const themeConfig = (
		<div>
			<h3>theme</h3>

			<p>
				Change the theme of Connect Wallet UI to <code data-inline> {`"light"`} </code> or{' '}
				<code data-inline> {`"dark"`} </code> mode, to match the color theme of your app. The
				default value is <code data-inline> {`"dark"`} </code>.
			</p>

			<button
				className={buttonStyles.Button}
				onClick={() => {
					editiorContext.updateFile('pages/index.tsx', prev => {
						return ConnectWalletCodeThemeLight;
					});
				}}
			>
				Show Me <DoubleArrowRightIcon />
			</button>
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

			<button
				className={buttonStyles.Button}
				onClick={() => {
					editiorContext.updateFile('pages/index.tsx', prev => {
						return ConnectWalletCodeBtnTitle;
					});
				}}
			>
				Show Me <DoubleArrowRightIcon />
			</button>
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

export const tutorials = [
	{
		name: 'Welcome',
		component: WelcomeTutorial,
		code: baseContent,
	},
	{
		name: 'ThirdwebProvider',
		component: ThirdwebProviderTutorial,
		code: ThirdwebProviderCode,
	},
	{
		name: 'ConnectWallet',
		component: ConnectWalletTutorial,
		code: ConnectWalletCode,
	},
];

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
							<button className={buttonStyles.IconButton} onClick={goNext}>
								<DoubleArrowRightIcon width={20} height={20} />
							</button>
						)}
					</div>
				</div>

				<tutorial.component />

				{nextTutorial && (
					<button className={styles.nextBtn} onClick={goNext}>
						Next: {nextTutorial.name} <DoubleArrowRightIcon width={20} height={20} />{' '}
					</button>
				)}
			</div>
		);
	}
	return <p> no tutorial found </p>;
}
