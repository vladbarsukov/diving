import React, {useState} from 'react';
import styles from './blog-header.module.css'
import Button from "../button/button";
import SocialButton from "../social-button/social-button";
import {Link} from "react-router-dom";
import {useMediaQuery} from "react-responsive";
import MenuButton from "../menu-button/menu-button";
import MobileMenu from "../mobile-menu/mobile-menu";

const BlogHeader = () => {
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
                <div>
                    <div className={styles.header_background_mobile}></div>
                    {isMobile && menuIsVisible ?
                        <div className={styles.menu_mobile}>
                            <MobileMenu onClick={onMenuButtonClick}/>
                        </div>
                        :
                        <div className={isMobile ? styles.buttons_mobile : styles.button}>
                            <MenuButton type={"dark"} onClick={onMenuButtonClick}/>
                            <Button color={"dark"} text={"Обратный звонок"}/>
                        </div>
                    }

                </div>

                :
                <div className={styles.header_background}>
                    <div className={styles.button}>
                        <Button color={'light'} text={"Обратный звонок"}/>
                    </div>
                </div>
            }

            {isMobile ?
                <></>
                :
                <div className={styles.navigation}>
                    <nav className={styles.list}>
                        <Link className={styles.list_item} to={'/'}>Главная</Link>
                        {/*<Link style={{width: '107px', marginLeft: "23px"}} className={styles.current_link} to={'/blog'}>Блог</Link>*/}
                        <Link className={styles.current_link} to={'/blog'}>Блог</Link>
                        <Link style={{marginLeft: '-20px'}} className={styles.list_item} to={'/'}>Обучение</Link>
                        <Link style={{marginLeft: '10px'}} className={styles.list_item} to={'/'}>Снаряжение</Link>
                        <Link  style={{marginLeft: '8px'}} className={styles.list_item} to={'/'}>Туры</Link>
                        <Link style={{marginLeft: '12px'}} className={styles.list_item} to={'/'}>Акции</Link>
                        <Link style={{marginLeft: '13px'}} className={styles.list_item} to={'/'}>Отзывы</Link>
                        <Link style={{marginLeft: '12px'}} className={styles.list_item} to={'/'}>Контакты</Link>
                    </nav>
                    <SocialButton type={"dark"}/>
                </div>
            }

        </div>
    );
};

export default BlogHeader;