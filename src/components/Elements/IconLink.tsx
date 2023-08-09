import styles from './IconLink.module.css';

export function IconLink(props: React.ComponentPropsWithoutRef<'a'>) {
	return <a className={styles.iconLink} {...props} />;
}
