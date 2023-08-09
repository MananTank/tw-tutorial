import { baseContent } from '@/data/baseContent';
import { TutorialMeta } from '../TutorialMeta';

function Tutorial() {
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

export const WelcomeTutorial: TutorialMeta = {
	name: 'Welcome',
	component: Tutorial,
	code: baseContent,
};
