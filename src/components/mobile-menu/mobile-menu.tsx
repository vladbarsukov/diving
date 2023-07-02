import React, {FC} from 'react';
import styles from './mobile-menu.module.css'
import SocialButton from "../social-button/social-button";
import close_button from "../../images/close_icon.svg"
import {Link} from "react-router-dom";

interface IMobileMenuProps {
    onClick: ()=> void
}

const MobileMenu: FC<IMobileMenuProps> = ({onClick}) => {
    return (
        <div className={styles.container}>
            <div className={styles.buttons}>
                <div className={styles.close_button} onClick={onClick}>
                    <img src={close_button} alt={"close icon"}/>
                </div>
                <SocialButton type={"dark"}/>
            </div>
            <nav className={styles.nav_list}>
                <Link className={styles.list_item} to={'/'}>Главная</Link>
                <Link className={styles.list_item} to={'/blog'}>Блог</Link>
                <Link className={styles.list_item} to={'/blog'}>Обучение</Link>
                <Link className={styles.list_item} to={'/'}>Снаряжение</Link>
                <Link className={styles.list_item} to={'/'}>Туры</Link>
                <Link className={styles.list_item} to={'/'}>Акции</Link>
                <Link className={styles.list_item} to={'/'}>Отзывы</Link>
                <Link className={styles.list_item} to={'/'}>Контакты</Link>
            </nav>
            <div className={styles.wave_background} ></div>
            <div className={styles.background}></div>


        </div>
    );
};

export default MobileMenu;