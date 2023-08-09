import { TutorialMeta } from '../TutorialMeta';

const code = `\
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

function Component() {
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

export const ThirdwebProviderTutorial: TutorialMeta = {
	name: 'ThirdwebProvider',
	component: Component,
	code,
};
