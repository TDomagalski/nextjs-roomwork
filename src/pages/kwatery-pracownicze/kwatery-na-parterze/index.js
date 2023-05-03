import Image from "next/image";
import Link from "next/link";

import styles from '../../../styles/pages/Kwatery-version.module.scss';

export default function KwateryParter() {

	return (
		<div className={styles.main}>
      <div className={styles.page_outlet}>
        <h3>Pokój na parterze</h3>
        <p>
          Kliknij w pokój, a wyświetlą się niezbędne informacje o pomieszczeniu,
          wraz ze zdjęciami.
        </p>

        <div className={styles.offer_nav}>
          <div className={styles.choose_room}>
            <Image
              src="/arrow-down_icon.svg"
              alt="Arrow Down"
              width={35}
              height={35}
              priority
            />
            <h4>Wybierz pokój</h4>
            <Image
              src="/arrow-down_icon.svg"
              alt="Arrow Down"
              width={35}
              height={35}
              priority
            />
          </div>
          
          <div className={styles.room_version}>
            <Link href="/kwatery/kwatery-parter/pokoj1">
              <Image
                src="/rooms-icons/enter_room.svg"
                alt="Arrow Down"
                width={35}
                height={35}
                priority
              />
              <span className={styles.span_mobile}>1</span>
              <span className={styles.span_desktop}>Pokój 1</span>
            </Link>
            <Link href="/kwatery/kwatery-parter/pokoj2">
              <Image
                src="/rooms-icons/enter_room.svg"
                alt="Arrow Down"
                width={35}
                height={35}
                priority
              />
              <span className={styles.span_mobile}>2</span>
              <span className={styles.span_desktop}>Pokój 2</span>
            </Link>
            <Link href="/kwatery/kwatery-parter/pokoj3">
              <Image
                src="/rooms-icons/enter_room.svg"
                alt="Arrow Down"
                width={35}
                height={35}
                priority
              />
              <span className={styles.span_mobile}>3</span>
              <span className={styles.span_desktop}>Pokój 3</span>
            </Link>
            <Link href="/kwatery/kwatery-parter/pokoj4">
              <Image
                src="/rooms-icons/enter_room.svg"
                alt="Arrow Down"
                width={35}
                height={35}
                priority
              />
              <span className={styles.span_mobile}>4</span>
              <span className={styles.span_desktop}>Pokój 4</span>
            </Link>
            <Link href="/kwatery/kwatery-parter/pokoj5">
              <Image
                src="/rooms-icons/enter_room.svg"
                alt="Arrow Down"
                width={35}
                height={35}
                priority
              />
              <span className={styles.span_mobile}>5</span>
              <span className={styles.span_desktop}>Pokój 5</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
	);
}
