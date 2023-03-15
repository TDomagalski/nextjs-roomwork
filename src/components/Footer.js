import Image from "next/image";

import styles from "../styles/components/footer.module.scss";

export default function Footer() {
	return (
		<footer className={styles.footer_bar}>
			<div className={styles.container}>
				<div className={styles.footer_company}>
					<div className={styles.footer_logo}>
						{/* <RoomWorkLogo /> */}
						<span>RoomWork</span>
					</div>

					<div className={styles.Contact_info}>
						<p className={styles.info_company}>
							Family Party non-profit Sp. z o.o.
						</p>
						<p className={styles.info_adress}>ul. Krakowska 62D</p>
						<p className={styles.info_city}>32-090 Słomniki</p>
						<p className={styles.info_nip}>NIP: 682-177-77-38</p>
						<p className={styles.info_regon}>REGON: 381101585</p>
					</div>

					<div className={styles.page_link_phoneEmail}>
						<div className={styles.phone}>
							<Image
								src="/phone_call-icon.svg"
								alt="Call to Us"
								width={35}
								height={35}
								priority
							/>
							<span>664-939-711</span>
						</div>
						<div className={styles.email}>
							<Image
								src="/email-icon.svg"
								alt="Write e-mail to Us"
								width={35}
								height={35}
								priority
							/>
							<span>kwatery@roomwork.pl</span>
						</div>
					</div>

					<div className={styles.footer_map}>
						<a
							target="_blank"
							href="https://goo.gl/maps/1rLyXMZ9f5FsHLAJ8"
							rel="noreferrer"
						>
							{/* <GoogleMapImg /> */}
							<Image
								src="/map-icon.svg"
								alt="Google Maps"
								width={80}
								height={80}
								priority
							/>
							<span className={styles.title}>Google Maps</span>
							<span className={styles.subtitle}>RoomWork.pl</span>
						</a>
					</div>
				</div>
			</div>

			<div className={styles.footer_desine}>
				<span>
					Tworzenie aplikacji webowych
					<a href="/">Family Party non-profit Sp. z o.o.</a>
				</span>
			</div>
		</footer>
	);
}
