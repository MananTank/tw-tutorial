import styles from './Alert.module.css';

export function Alert(props: { children: React.ReactNode }) {
	return <div className={styles.Alert}> {props.children} </div>;
}
