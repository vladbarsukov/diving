import React, {FC} from 'react';
import Header from "../header/header";
import styles from "./main.module.css"
import MainButton from "../main-button/main-button";
import calendar from "../../images/calendar.svg"
import hat from "../../images/education_hat.svg"
import DescriptionBlock from "../description-block/description-block";
import {useMediaQuery} from "react-responsive";
import Slider from "../slider/slider";
import dot_active from "../../images/dot_active.svg";
import dot_inactive from "../../images/dot_non-active.svg";
import {useSelector} from "../../services/hook";

const Main: FC = () => {
    const isMobile = useMediaQuery({
        query: "(max-width: 375px)"
    });
    const { currentDot} = useSelector(
        state => state.sliderReducer
    );

    return (
        <div className={isMobile ? styles.container_mobile: styles.container }>
            <Header/>
            <main className={isMobile ? styles.slogan_wrapper_mobile : styles.slogan_wrapper }>
                <p className={isMobile ? styles.text_mobile : styles.text_medium }>Путешествие в тысячу миль</p>
                <p className={isMobile ? styles.text_mobile: styles.text_bold}>Начинается с первого клика</p>
                <div className={isMobile ? styles.main_button_mobile : styles.main_button}>
                    <MainButton text={"Хочу нырять..."}/>
                </div>
                {isMobile ?
                    <></>
                    :
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
                    }
            </main>
            {isMobile ?
                <div className={styles.slider_container}><Slider/></div>
                :
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
                }
            {isMobile ?
                <div className={styles.dots_container}>
                    <img src={currentDot === 1 ? dot_active: dot_inactive} alt={"dot"}/>
                    <img src={currentDot === 2 ? dot_active: dot_inactive} alt={"dot"}/>
                    <img src={currentDot === 3 ? dot_active: dot_inactive} alt={"dot"}/>
                </div>
            :
                <></>
            }


        </div>
    );
};

export default Main;