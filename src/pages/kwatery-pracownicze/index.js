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

				{/* <div className="offer_nav">
          <div className="choose_room">
            <ArrowDownIcon />
            <h4>Wybierz piętro</h4>
            <ArrowDownIcon />
          </div>
          <NavLink to="/kwatery/kwatery-parter" onClick={handleClickScroll}>
            <ApartStandardIcon />
            <span>Kwatery parter</span>
          </NavLink>
          <NavLink to="/kwatery/kwatery-pietro" onClick={handleClickScroll}>
            <ApartPremiumIcon />
            <span>Kwatery piętro</span>
          </NavLink>
        </div> */}

				{/* <div id="outlet">
          <Outlet />
        </div> */}
			</div>
		</main>
	);
}
