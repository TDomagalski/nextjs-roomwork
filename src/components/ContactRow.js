import Image from "next/image";

import FrontImg from "../../public/front_img.webp";

import styles from "@/styles/components/ContactRow.module.scss";

export default function ContactRow() {
  return (
    <div className={styles.contactRow}>
      <div className={styles.contactRow_contactUs}>
        <h2>Skontaktuj się z nami</h2>
        <div className={styles.contactRow_info_links}>
          <div className={styles.contactRow_link_mail}>
            <a href="mailto:kwatery@roomwork.pl">
              <Image
                src="/email-icon.svg"
                alt="Write e-mail to Us"
                width={50}
                height={50}
                priority
              />
            </a>
            <span>kwatery@roomwork.pl</span>
          </div>
          <div className={styles.contactRow_link_phone}>
            <a href="tel:+48664939711">
              <Image
                src="/phone_call-icon.svg"
                alt="Write e-mail to Us"
                width={50}
                height={50}
                priority
              />
            </a>
            <span>+48 664-939-711</span>
          </div>
        </div>
      </div>

      <div className={styles.contactRow_img}>
        <Image
          className={styles.contactRow_img}
          src={FrontImg}
          alt="RoomWork front img"
          priority
        />
        <div className={styles.contactRow_img_overflow} />
      </div>
    </div>
  );
}
