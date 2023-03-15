import Link from "next/link";

import styles from "../styles/components/navbar.module.scss";

export default function Navbar() {
	return (
		<div className={styles.navigation_bar}>
			<div className={styles.container}>
				<Link href="/" className={styles.logo}>
					{/* <RoomWorkLogo /> */}
					<span style={{ fontSize: "2rem" }}>RoomWork.pl</span>
				</Link>

				<nav>
					<Link href="/">Home</Link>
					<Link href="/kwatery-pracownicze">Kwatery</Link>
					<Link href="/galeria">Galeria</Link>
					<Link href="/kontakt">Kontakt</Link>
				</nav>
			</div>
		</div>
	);
}
