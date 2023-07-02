import React from 'react';
import styles from './blog-header.module.css'
import Button from "../button/button";
import SocialButton from "../social-button/social-button";
import {Link} from "react-router-dom";

const BlogHeader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header_background}>
                <div className={styles.button}>
                    <Button text={"Обратный звонок"}/>
                </div>
            </div>
            <div className={styles.navigation}>
                <nav className={styles.list}>
                    <Link className={styles.list_item} to={'/'}>Главная</Link>
                    <Link style={{width: '107px', marginLeft: "23px"}} className={styles.list_item} to={'/blog'}>Блог</Link>
                    <Link style={{marginLeft: '4px'}} className={styles.list_item} to={'/'}>Обучение</Link>
                    <Link className={styles.list_item} to={'/'}>Снаряжение</Link>
                    <Link style={{marginLeft: '-3px'}} className={styles.list_item} to={'/'}>Туры</Link>
                    <Link style={{marginLeft: '4px'}} className={styles.list_item} to={'/'}>Акции</Link>
                    <Link style={{marginLeft: '4px'}} className={styles.list_item} to={'/'}>Отзывы</Link>
                    <Link className={styles.list_item} to={'/'}>Контакты</Link>
                </nav>
                <SocialButton type={"dark"}/>
            </div>
        </div>
    );
};

export default BlogHeader;