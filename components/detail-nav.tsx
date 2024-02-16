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
					<Link href={`/movies/${id}`}>Videos {path === `/movies/${id}` ? "✅" : ""}</Link> 
				</li>
				<li>
					<Link href={`/movies/${id}/credits`}>Credits {path === `/movies/${id}/credits` ? "✅" : ""}</Link>
				</li>
				<li>
					<Link href={`/movies/${id}/providers`}>Providers {path === `/movies/${id}/providers` ? "✅" : ""}</Link>
				</li>
				<li>
					<Link href={`/movies/${id}/similar`}>Similar {path === `/movies/${id}/similar` ? "✅" : ""}</Link>
				</li>
			</ul>
		</nav>
	);
}