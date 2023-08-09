import styles from './Buttons.module.css';

export function Button(props: React.ComponentPropsWithoutRef<'button'>) {
	return <button className={styles.Button} {...props} />;
}

export function IconButton(props: React.ComponentPropsWithoutRef<'button'>) {
	return <button className={styles.IconButton} {...props} />;
}
