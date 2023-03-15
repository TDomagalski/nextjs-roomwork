import styles from "../styles/pages/Galeria.module.scss";

export default function Galeria() {
	return (
		<main className={styles.main}>
			<div className={styles.page_gallery}>
				<h1>Galeria</h1>
				<p>
					Z przyjemnością przedstawiamy Państwu zdjęcia wszystkich kwater,
					wspólnych pomieszczeń, dwóch kuchni, patio jak i również budynku z
					zewnątrz.
				</p>
				<p>
					Serdecznie zapraszamy do przeglądania zdjęć, oraz kontaktu
					zainteresowane osoby.
				</p>
				{/* <ImageGallery items={galleryImgs} /> */}
			</div>
		</main>
	);
}
