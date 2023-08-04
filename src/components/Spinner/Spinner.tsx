import styles from './Spinner.module.css';

export function Spinner() {
	return (
		<div className={styles.rippleSpinner}>
			<div></div>
			<div></div>
		</div>
	);
}
