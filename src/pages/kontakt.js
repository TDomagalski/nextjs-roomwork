import Link from "next/link";

import ContactForm from "@/components/ContactForm";

import styles from "@/styles/pages/Kontakt.module.scss";

export default function Kontakt() {
	return (
		<main className={styles.main}>
			<div className={styles.page_Contact}>
				<div className={styles.Contact_info}>
					<h1>Kontakt</h1>
					<p className={styles.info_company}>
						Family Party non-profit Sp. z o.o.
					</p>
					<p className={styles.info_adress}>ul. Krakowska 62D</p>
					<p className={styles.info_adress}>32-090 Słomniki</p>
					<p className={styles.info_nip}>NIP: 682-177-77-38</p>
					<p className={styles.info_regon}>REGON: 381101585</p>
					<Link href="/">www.RoomWork.pl</Link>
					<div className={styles.page_link_phoneEmail}>
						<div className={styles.phone}>
							{/* <PhoneIcon /> */}
							<span>664-939-711</span>
						</div>
						<div className={styles.email}>
							{/* <EmailIcon /> */}
							<span>kwatery@roomwork.pl</span>
						</div>
					</div>
				</div>
				<div className={styles.page_Contact_form}>
					<h2>Czekamy na wiadomość</h2>
					<ContactForm />
				</div>
			</div>
		</main>
	);
}
