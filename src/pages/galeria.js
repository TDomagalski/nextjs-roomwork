import styles from "../styles/pages/Galeria.module.scss";

import Gallery from "react-photo-gallery";

// const photos = [
// 	{
// 		src: "https://picsum.photos/200/300",
// 		width: 4,
// 		height: 3,
// 	},
// 	{
// 		src: "https://picsum.photos/id/237/200/300",
// 		width: 1,
// 		height: 1,
// 	},
// ];

const galleryImgs = [
	// ~~ front img
	{
		src: "./gallery/ContactRow.webp",
		width: 4,
		height: 3,
	},
	// Stairs / hall and kitchen
	{
		src: "./gallery/RoomWork-klatka_schodowa-img1.webp",
		width: 1,
		height: 1,
	},
	{
		src: "./gallery/RoomWork-korytarz-img1.webp",
		width: 4,
		height: 3,
	},
	{
		src: "./gallery/RoomWork-korytarz-img2.webp",
		width: 4,
		height: 3,
	},
	{
		src: "./gallery/RoomWork-korytarz-img3.webp",
		width: 4,
		height: 3,
	},
	{
		src: "./gallery/RoomWork-kuchnia1.webp",
		width: 4,
		height: 3,
	},
	// piętro1
	{
		src: "./gallery/kwatery/kwatery-premium/premium1/Pokój1-kwatera_pracownicza-img1.webp",
		width: 4,
		height: 3,
	},
	{
		src: "./gallery/kwatery/kwatery-premium/premium1/Pokój1-kwatera_pracownicza-img2.webp",
		width: 1,
		height: 1,
	},
	{
		src: "./gallery/kwatery/kwatery-premium/premium1/Pokój1-kwatera_pracownicza-img3.webp",
		width: 4,
		height: 3,
	},
	{
		src: "./gallery/kwatery/kwatery-premium/premium1/Pokój1-kwatera_pracownicza-img4.webp",
		width: 4,
		height: 3,
	},
	// piętro2
	{
		src: "./gallery/kwatery/kwatery-premium/premium2/Pokój2-kwatera_pracownicza-img1.webp",
		width: 4,
		height: 3,
	},
	{
		src: "./gallery/kwatery/kwatery-premium/premium2/Pokój2-kwatera_pracownicza-img2.webp",
		width: 4,
		height: 3,
	},
	{
		src: "./gallery/kwatery/kwatery-premium/premium2/Pokój2-kwatera_pracownicza-img3.webp",
		width: 4,
		height: 3,
	},
	// piętro3
	{
		src: "./gallery/kwatery/kwatery-premium/premium3/Pokój3-kwatera_pracownicza-img1.webp",
		width: 4,
		height: 3,
	},
	{
		src: "./gallery/kwatery/kwatery-premium/premium3/Pokój3-kwatera_pracownicza-img2.webp",
		width: 4,
		height: 3,
	},
	{
		src: "./gallery/kwatery/kwatery-premium/premium3/Pokój3-kwatera_pracownicza-img3.webp",
		width: 4,
		height: 3,
	},
	{
		src: "./gallery/kwatery/kwatery-premium/premium3/Pokój3-kwatera_pracownicza-img4.webp",
		width: 4,
		height: 3,
	},
	{
		src: "./gallery/kwatery/kwatery-premium/premium3/Pokój3-kwatera_pracownicza-img5.webp",
		width: 4,
		height: 3,
	},
	// piętro4
	{
		src: "./gallery/kwatery/kwatery-premium/premium4/Pokój4-kwatera_pracownicza-img1.webp",
		width: 4,
		height: 3,
	},
	{
		src: "./gallery/kwatery/kwatery-premium/premium4/Pokój4-kwatera_pracownicza-img2.webp",
		width: 4,
		height: 3,
	},
	{
		src: "./gallery/kwatery/kwatery-premium/premium4/Pokój4-kwatera_pracownicza-img3.webp",
		width: 4,
		height: 3,
	},
	{
		src: "./gallery/kwatery/kwatery-premium/premium4/Pokój4-kwatera_pracownicza-img4.webp",
		width: 4,
		height: 3,
	},
	// piętro5
	{
		src: "./gallery/kwatery/kwatery-premium/premium5/Pokój5-kwatera_pracownicza-img1.webp",
		width: 4,
		height: 3,
	},
];

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
