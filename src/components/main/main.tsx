import React, {FC} from 'react';
import Header from "../header/header";
import styles from "./main.module.css"
import MainButton from "../main-button/main-button";
import calendar from "../../images/calendar.svg"
import hat from "../../images/education_hat.svg"
import DescriptionBlock from "../description-block/description-block";

const Main: FC = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <main className={styles.slogan_wrapper}>
                <p className={styles.text_medium}>Путешествие в тысячу миль</p>
                <p className={styles.text_bold}>Начинается с первого клика</p>
                <div className={styles.main_button}>
                    <MainButton text={"Хочу нырять..."}/>
                </div>
                <div className={styles.about_us}>
                    <div className={styles.about_us_wrapper}>
                        <img src={calendar} alt={"calendar icon"}/>
                        <p className={styles.about_us_text}>Работаем с 2009 года</p>
                    </div>
                    <div className={styles.about_us_wrapper}>
                        <img src={hat} alt={"hat icon"}/>
                        <p className={styles.about_us_text}>Более 2500 учеников</p>
                    </div>
                </div>
            </main>
            <div className={styles.cards}>
                <div className={styles.description_block}>
                    <DescriptionBlock type={"diving"}
                                      title={"Доступный дайвинг"}
                                      description={"Акции и горячие предложения на курсы\n" +
                                          "обучения."}
                                      text={"Узнать больше"}/>
                    <DescriptionBlock type={"record"}
                                      title={"Онлайн запись"}
                                      description={"Оставьте свой вопрос, мы перезвоним и проконсультируем вас."}
                                      text={"Оставить вопрос"}/>
                    <DescriptionBlock type={"certificate"}
                                      title={"Сертификаты"}
                                      description={"Дайвинг в подарок для ваших друзей и знакомых."}
                                      text={"Приобрести"}/>
                </div>
            </div>
        </div>
    );
};

export default Main;