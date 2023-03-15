import Head from "next/head";
// import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/pages/Home.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>RoomWork - Kwatery pracownicze w Słomnikach do wynajęcia</title>
				<meta
					name="description"
					content="RoomWork - Pokoje, Kwatery, Pomieszczenia pracownicze do wynajęcia w Słomnikach, w pobliżu miejscowości Niedźwiedź, Proszowice, Niegardów, Smroków, Prandocin-Iły"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<div className={styles.page_default}>
					<h1>RoomWork</h1>
					<h5>Go work and relax in RoomWork</h5>
					<p>
						Niezmiernie nam miło przywitać Państwa na naszej stronie
						internetowej. Mamy do zaoferowania kwatery pracownicze do wynajęcia.
					</p>
					<p style={{ textAlign: "center" }}>
						Życzymy miłego przeglądania i zapraszamy do kontaktu.
					</p>
				</div>
			</main>
		</>
	);
}
