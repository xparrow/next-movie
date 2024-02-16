'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function DetailNav({id}){
	const path = usePathname();
	return (
		<nav className={styles.detailNav}>
			<ul>
				<li>
					<Link href={`/movies/${id}`}>Videos</Link> 
				</li>
				<li>
					<Link href={`/movies/${id}/credits`}>Credits</Link>
				</li>
				<li>
					<Link href={`/movies/${id}/providers`}>Providers</Link>
				</li>
				<li>
					<Link href={`/movies/${id}/similar`}>Similar</Link>
				</li>
			</ul>
		</nav>
	);
}