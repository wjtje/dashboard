import React from 'react'
import Head from 'next/head'
import styles from './index.module.scss'
import Masonry from 'react-masonry-css'

interface props {
	children?: JSX.Element | JSX.Element[];
	title?: string;
	columns?: number;
}

/**
 * The start of every dashboard
 *
 * Here you can change the title that is shown and
 * the number of columns
 */
export default function Dashboard({
	children,
	title = 'Dashboard',
	columns = 3
}: props) {
	return (
		<main className={styles.root}>
			<Head>
				<title>{title}</title>
			</Head>
			<header className={styles.header}>
				<span className={styles.title}>{title}</span>
			</header>
			<Masonry
				breakpointCols={columns}
				className={styles.grid}
				columnClassName={styles.grid_column}>
				{children}
			</Masonry>
		</main>
	)
}
