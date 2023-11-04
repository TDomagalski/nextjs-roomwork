import Image from "next/image";

import styles from "@/styles/components/infobar.module.scss";

const Infobar = () => {
  return (
    <div className={styles.infobar}>
      <div className={styles.container}>
        <div className={styles.infobar_socials}>
          <a
            href="https://goo.gl/maps/1rLyXMZ9f5FsHLAJ8"
            className={styles.google}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/google-icon.svg"
              alt="Google Business card"
              width={35}
              height={35}
              priority
            />
          </a>
        </div>

        <div className={styles.infobar_contact}>
          <a href="mailto:kwatery@roomwork.pl" className={styles.email}>
            <Image
              src="/email-icon.svg"
              alt="Email"
              width={35}
              height={35}
              priority
            />
            <span>kwatery@roomwork.pl</span>
          </a>
          <a href="tel:+48664939711" className={styles.phone}>
            <Image
              src="/phone_call-icon.svg"
              alt="Email"
              width={35}
              height={35}
              priority
            />
            <span>664-939-711</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Infobar;
