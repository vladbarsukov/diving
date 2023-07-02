import React from 'react';
import styles from './header.module.css'
import {Link} from "react-router-dom";
import Button from "../button/button";
import SocialButton from "../social-button/social-button";
const Header = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.menu}>
                <div className={styles.list}>
                    <Link className={styles.list_item} to={'/'}>О клубе</Link>
                    <Link style={{width: '66px'}} className={styles.list_item} to={'/blog'}>Блог</Link>
                    <Link style={{marginLeft: '14px'}} className={styles.list_item} to={'/'}>Снаряжение</Link>
                    <Link className={styles.list_item} to={'/'}>Туры</Link>
                    <Link className={styles.list_item} to={'/'}>Акции</Link>
                    <Link style={{marginLeft: '4px'}} className={styles.list_item} to={'/'}>Отзывы</Link>
                    <Link className={styles.list_item} to={'/'}>Контакты</Link>
                </div>
                <div className={styles.buttons}>
                    <Button text={"Обратный звонок"}/>
                    <SocialButton type={"default"}/>
                </div>
            </nav>
        </div>
    );
};

export default Header;