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
			<main>
				<h1>Home Page</h1>
			</main>
		</>
	);
}
