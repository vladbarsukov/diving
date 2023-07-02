import React, {FC} from 'react';
import styles from "./main-button.module.css"
import {useNavigate} from "react-router-dom";
import {useMediaQuery} from "react-responsive";

interface IMainButtonProps {
    text: string
}
const MainButton: FC<IMainButtonProps> = ({text}) => {
    const navigate = useNavigate()

    const isMobile = useMediaQuery({
        query: "(max-width: 375px)"
    });

    const onClick = () => {
        navigate('/')
    }
    return (
        <div onClick={onClick} className={isMobile ? styles.button_mobile : styles.button}>
           <a className={isMobile ? styles.text_mobile : styles.text}>{text}</a>
        </div>
    );
};

export default MainButton;