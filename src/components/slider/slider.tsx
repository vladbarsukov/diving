import React, {FC, useEffect, useState} from 'react';
import DescriptionBlock from "../description-block/description-block";
import styles from './slider.module.css'
import {useDispatch, useSelector} from "../../services/hook";
import {SET_CURRENT_DOT} from "../../services/actions/sliderActions";

const Slider: FC = () => {
    const [touchPosition, setTouchPosition] = useState<number | null>(null)
    const [offset, setOffset] = useState<number>(0)

    const dispatch = useDispatch()
    const handleTouchStart = (e: any) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e: any) => {
        const touchDown = touchPosition

        if(touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 5) {
            setOffset((currentOffset: number) => {
                const maxOffset = -674
                const newOffset = currentOffset - 337
                console.log(offset)
                return Math.max(newOffset, maxOffset)
            })
        }

        if (diff < -5) {
            setOffset((currentOffset: number) => {
                const newOffset = currentOffset + 337
                findCurrentDot()
                return Math.min(newOffset, 0)
            })
        }

        setTouchPosition(null)
    }

 const findCurrentDot = () => {
        if(offset <= 0 && offset > -337) {
            return 1
        }
        else if(offset < 337 && offset > -674) {
            return 2
        }
        else if(offset === -674) {
            dispatch({
                type: SET_CURRENT_DOT,
                currentDot: 3
            });
            return 3
        } else {
            return 1
        }

    }

    useEffect(()=>{
        dispatch({
            type: SET_CURRENT_DOT,
            currentDot: findCurrentDot()
        });
    },[offset])

    return (
        <div className={styles.window}>
            <div style={{transform: `translateX(${offset}px)`}} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} className={styles.all_pages_container}>
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
    );
};

export default Slider;