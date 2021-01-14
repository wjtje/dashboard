import styles from './index.module.scss'

interface props {
	children: JSX.Element | JSX.Element[];
}

/**
 * This is the base of every widget
 *
 * This will handle the shadow and the size
 */
export default function Widget({children}: props) {
	return (
		<div className={styles.root}>
			{children}
		</div>
	)
}
