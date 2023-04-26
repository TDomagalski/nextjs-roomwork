import Link from "next/link";
import Image from "next/image";

import KwateryParter from "./kwatery-na-parterze/index";

import styles from "../../styles/pages/Kwatery.module.scss";

export default function KwateryPracownicze() {
	return (
		<main className={styles.main}>
			<div className="page_default container page_offer">
				<h1>Kwatery pracownicze</h1>
				<p>
					Posiadamy kwatery zlokalizowane na 1 piętrze, jak i na parterze.
					Pomieszczenia na piętrze mogą pomieścić od 2 do 4 osób. Cztery z
					pięciu pokoi posiada własną łazienkę. Lokatorzy mieszkający na piętrze
					mają do dyspozycji wspólną kuchnię wyposażoną w niezbędne urządzenia,
					korytarz i pomieszczenie gospodarcze.
				</p>
				<p>
					Wszystkie kwatery na parterze są jednakowe. Pokoje mogą pomieścić 4
					osoby. Każdy z nich posiada własną łazienkę. Do dyspozycji lokatorów
					mieszkających na parterze jest wspólny korytarz, ogólnodostępna
					kuchnia na parterze wraz z niezbędnymi urządzeniami, pralnie i
					suszarnie. Z korytarza jest bezpośrednie wyjście na patio, gdzie jest
					możliwość grillowania, jak i odpoczynku na świeżym powietrzu.
				</p>

				<div className={styles.offer_nav}>
					<div className={styles.choose_room}>
						<Image
							src="/arrow-down_icon.svg"
							alt="Arrow down VV"
							width={35}
							height={35}
							priority
						/>
						<h4>Wybierz piętro</h4>
						<Image
							src="/arrow-down_icon.svg"
							alt="Arrow down VV"
							width={35}
							height={35}
							priority
						/>
					</div>
					<Link href="/kwatery-pracownicze/kwatery-na-pietrze">
						{/* <ApartStandardIcon /> */}
						<span>Kwatery parter</span>
					</Link>
					<Link href="/kwatery-pracownicze/kwatery-na-parterze">
						{/* <ApartPremiumIcon /> */}
						<span>Kwatery piętro</span>
					</Link>
				</div>

				<div id="outlet">
					<KwateryParter />
				</div>
			</div>
		</main>
	);
}
