import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

import styles from '../styles/pages/Kontakt.module.scss';

export default function ContactForm() {
	const key = '6LfxkdgkAAAAAEdSFSs_MkkFxDXkyI8xWobcRUun';

	const handleOnChange = (value) => {
		console.log('Captcha value:', value);
	};

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_l7t9zgr',
				'template_g54cqd5',
				form.current,
				'jQ43-rxA6hvEwUE-l'
			)
			.then(
				(result) => {
					console.log(result.text);
					alert(result.text);
					e.target.reset();
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<form className={styles.form_contact} ref={form} onSubmit={sendEmail}>
			<label htmlFor="name">
				Nazwa Firmy / Imię
				<input
					type="text"
					name="user_name"
					placeholder="wpisz nazwę firmy oraz swoje imię"
				/>
			</label>
			<label htmlFor="email">
				Twój e-mail
				<input type="email" name="user_email" placeholder="wpisz swój e-mail" />
			</label>
			<label htmlFor="message">
				Treść wiadomości
				<textarea name="message" placeholder="O co chciałbyś nas zapytać?" />
			</label>
			<ReCAPTCHA sitekey={key} theme="dark" onChange={handleOnChange} />
			<input className={styles.form_field_btn} type="submit" value="Wyślij" />
		</form>
	);
}
