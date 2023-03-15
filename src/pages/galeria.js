import styles from "../styles/pages/Galeria.module.scss";

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
				{/* <ImageGallery items={galleryImgs} /> */}
			</div>
		</main>
	);
}
