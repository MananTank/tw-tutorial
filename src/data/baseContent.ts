export const baseContent = `\
import styles from '../styles/Home.module.css';

export default function Home() {
  return <Example />;
}

function Example() {
  return (
    <main className={styles.container}>
      <h1> Hello thirdweb </h1>
    </main>
  );
}
`;
