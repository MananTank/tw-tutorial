import { Alert } from '@/components/Elements/Alert';
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

const ThirdwebCodeInline = <code data-inline> {'<ThirdwebProvider />'} </code>;

function Component() {
	return (
		<div>
			<p>
				The {ThirdwebCodeInline} component provides access to all of the SDK{`'s`}s hooks and UI
				components.
			</p>

			<p>Wrap your application in the {ThirdwebCodeInline} component to start using the SDK.</p>

			<Alert>
				To use the React SDK, you need to first create an API key from the{' '}
				<a href='https://thirdweb.com/create-api-key' target='_blank'>
					{' '}
					Dashboard{' '}
				</a>{' '}
				and then copy the clientId to pass as a prop to the{' '}
				<code data-inline> {'<ThirdwebProvider />'} </code>
			</Alert>

			<p>In this Tutorial, we will use a demo API key which only works on code playground.</p>
		</div>
	);
}

export const ThirdwebProviderTutorial: TutorialMeta = {
	name: 'ThirdwebProvider',
	component: Component,
	code,
};
