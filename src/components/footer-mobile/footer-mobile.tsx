import React from 'react';
import styles from "./footer-mobile.module.css"

const FooterMobile = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wave_background} ></div>
            <div className={styles.footer}>
                <div className={styles.contacts}>
                    <a className={styles.contacts_phone} href={'tel: +2751470047'}>{"+7 (275) 147 00 47"}</a>
                    <a className={styles.contacts_email} href={'mailto: emails@mail.ru'}>{"emails@mail.ru"}</a>
                    <p className={styles.license}>{'Все права защищены © 2010-2013'}<br/>{'Обучение дайвингу в твоем городе'}</p>
                    <a className={styles.link} href="#">Вернуться наверх</a>
                </div>
            </div>
        </div>
    );
};

export default FooterMobile;