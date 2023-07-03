import React, {FC, useState} from 'react';
import styles from './header.module.css'
import {Link} from "react-router-dom";
import Button from "../button/button";
import SocialButton from "../social-button/social-button";
import { useMediaQuery } from "react-responsive";
import MenuButton from "../menu-button/menu-button";
import MobileMenu from "../mobile-menu/mobile-menu";

const Header: FC = () => {
    const isMobile = useMediaQuery({
        query: "(max-width: 376px)"
    });
    const [menuIsVisible, setMenuIsVisible] = useState(false)
    const onMenuButtonClick = () => {
        setMenuIsVisible(!menuIsVisible)
    }

    return (
        <div className={isMobile ? styles.container_mobile : styles.container}>
            {isMobile ?
                <nav className={isMobile ? styles.menu_mobile : styles.menu}>
                    {isMobile && menuIsVisible ?
                        <div className={styles.menu_mobile}>
                            <MobileMenu onClick={onMenuButtonClick}/>
                        </div>
                        : <></>}
                    <div className={isMobile ? styles.buttons_mobile : styles.buttons}>
                        <MenuButton type={"light"} onClick={onMenuButtonClick}/>
                        <Button color={"light"} text={"Обратный звонок"}/>
                    </div>
                </nav>
                :
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
                        <Button color={"light"} text={"Обратный звонок"}/>
                        <SocialButton type={"default"}/>
                    </div>
        </nav>
            }
        </div>
    );
};

export default Header;