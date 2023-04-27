import styles from "../../styles/pages/Galeria.module.scss";
import { galleryImgs } from "./galleryImgs";

import Gallery from "react-photo-gallery";

export default function Galeria() {
	return (
		<main className={styles.main}>
			<div className={styles.page_gallery}>
				<h1>Galeria</h1>
				<p>
					Poniżej prezentują się zdjęcia wszystkich kwater, wspólnych
					pomieszczeń, dwóch kuchni, patio jak i również budynku z zewnątrz.
				</p>
				<p>Miłego oglądania.</p>
				<div className={styles.img_container}>
					<Gallery photos={galleryImgs} />
				</div>
			</div>
		</main>
	);
}
