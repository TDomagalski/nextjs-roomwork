import Link from "next/link";
import Image from "next/image";

// import ApartRoomIcon from '../../assets/ApartRoomIcon';
// import ArrowDownIcon from '../../assets/ArrowDownIcon';

export default function KwateryParter() {
	const handleClickScroll = () => {
		const element = document.getElementById("outlet2");

		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className="page_outlet">
			<h3>Pokój na parterze</h3>
			<p>
				Kliknij w pokój, a wyświetlą się niezbędne informacje o pomieszczeniu,
				wraz ze zdjęciami.
			</p>

			<div className="offer_nav">
				<div className="choose_room">
					<Image
						src="/arrow-down_icon.svg"
						alt="Arrow down VV"
						width={35}
						height={35}
						priority
					/>
					<h4>Wybierz pokój</h4>
					<Image
						src="/arrow-down_icon.svg"
						alt="Arrow down VV"
						width={35}
						height={35}
						priority
					/>
				</div>
				<Link href="/kwatery/kwatery-parter/pokoj1">
					<Image
						src="/rooms-icons/enter_room.svg"
						alt="Wejdź do pokoju"
						width={35}
						height={35}
						priority
					/>
					<span className="span-mobile">1</span>
					<span className="span-desktop">Pokój 1</span>
				</Link>
				<Link href="/kwatery/kwatery-parter/pokoj2">
					<Image
						src="/rooms-icons/enter_room.svg"
						alt="Wejdź do pokoju"
						width={35}
						height={35}
						priority
					/>
					<span className="span-mobile">2</span>
					<span className="span-desktop">Pokój 2</span>
				</Link>
				<Link href="/kwatery/kwatery-parter/pokoj3">
					<Image
						src="/rooms-icons/enter_room.svg"
						alt="Wejdź do pokoju"
						width={35}
						height={35}
						priority
					/>
					<span className="span-mobile">3</span>
					<span className="span-desktop">Pokój 3</span>
				</Link>
				<Link href="/kwatery/kwatery-parter/pokoj4">
					<Image
						src="/rooms-icons/enter_room.svg"
						alt="Wejdź do pokoju"
						width={35}
						height={35}
						priority
					/>
					<span className="span-mobile">4</span>
					<span className="span-desktop">Pokój 4</span>
				</Link>
				<Link href="/kwatery/kwatery-parter/pokoj5">
					<Image
						src="/rooms-icons/enter_room.svg"
						alt="Wejdź do pokoju"
						width={35}
						height={35}
						priority
					/>
					<span className="span-mobile">5</span>
					<span className="span-desktop">Pokój 5</span>
				</Link>
			</div>
			<div id="outlet2">{/* <Outlet /> */}</div>
		</div>
	);
}
