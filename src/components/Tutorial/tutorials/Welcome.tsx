import { baseContent } from '@/data/baseContent';
import { TutorialMeta } from '../TutorialMeta';

function Tutorial() {
	return (
		<div>
			<p>
				Welcome to the thirdweb React SDK tutorial! In this tutorial you will learn everything you
				need to know to easily build web3 applications.
			</p>

			<p>
				In this Tutorial, we will use a code playground to show you how to use thirdweb React SDK.
				If you want to Setup the project locally, you can follow the instructions in the{' '}
				<a href='https://portal.thirdweb.com/react/getting-started' target='_blank'>
					Get Started Guide
				</a>
			</p>

			<h2> What is thirdweb ? </h2>

			<p>
				thirdweb is a complete web3 development framework that provides everything you need to
				connect your apps and games to decentralized networks.
			</p>

			<h2> thirdweb React SDK </h2>

			<p>
				thirdweb React SDK is a collection of <em> 100+ React hooks</em> and{' '}
				<em> UI components </em> for your web3 apps, for <em> Any EVM-compatible blockchain. </em>
			</p>

			<p>
				Using thirdweb React SDK, you can Connect to user{`'`}s wallets, interact with smart
				contracts, sign messages, and utilize common standards such as tokens, NFTs, marketplaces;
				all with built-in caching, RPC URLs, IPFS gateways, and more.
			</p>

			<hr />
		</div>
	);
}

export const WelcomeTutorial: TutorialMeta = {
	name: 'Welcome',
	component: Tutorial,
	code: baseContent,
};
