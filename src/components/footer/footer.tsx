import React, {FC} from 'react';
import styles from './footer.module.css'
import {Link} from "react-router-dom";
import dot_img from "../../images/dot.svg"
import SocialButton from "../social-button/social-button";
const Footer: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wave_background}/>
            <footer className={styles.footer}>
                <div className={styles.contacts}>
                    <a className={styles.contacts_phone} href={'tel: +74955456702'}>{"+7 (495) 545 67 02"}</a>
                    <a className={styles.contacts_email} href={'mailto: emails@mail.ru'}>{"emails@mail.ru"}</a>
                </div>
                <div className={styles.links_column}>
                    <nav className={styles.navigation}>
                        <Link className={styles.nav_link} to={'/'}>О клубе</Link>
                        <img style={{marginLeft: '20px', marginRight: '40px'}} src={dot_img} alt={'dot'}/>
                        <Link className={styles.nav_link} to={'/'}>Блог</Link>
                        <img style={{marginLeft: '42px', marginRight: '15px'}} src={dot_img} alt={'dot'}/>
                        <Link className={styles.nav_link} to={'/'}>Снаряжение</Link>
                        <img style={{marginLeft: '21px', marginRight: '15px'}} src={dot_img} alt={'dot'}/>
                        <Link className={styles.nav_link} to={'/'}>Туры</Link>
                        <img style={{marginLeft: '19px', marginRight: '20px'}} src={dot_img} alt={'dot'}/>
                        <Link className={styles.nav_link} to={'/'}>Акции</Link>
                        <img style={{marginLeft: '25px', marginRight: '17px'}} src={dot_img} alt={'dot'}/>
                        <Link className={styles.nav_link} to={'/'}>Отзывы</Link>
                        <img style={{marginLeft: '21px', marginRight: '17px'}} src={dot_img} alt={'dot'}/>
                        <Link className={styles.nav_link} to={'/'}>Контакты</Link>
                    </nav>
                    <div className={styles.social_links}>
                        <SocialButton type={"default"}/>
                    </div>
                        <p className={styles.license}>{'Все права защищены © 2010-2013'}<br/>{'Обучение дайвингу в Москве'}</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;