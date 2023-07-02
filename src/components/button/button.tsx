import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import styles from "./button.module.css"
import {useMediaQuery} from "react-responsive";

interface IButtonProps {
    text: string
    color: "dark" | "light"
}

const Button: FC<IButtonProps> = ({text, color}) => {
    const navigate = useNavigate()
    const isMobile = useMediaQuery({
        query: "(max-width: 376px)"
    });
    const onClick = () => {
        navigate('/')
    }
    return (
        <div className={isMobile ? styles.button_mobile : styles.button} style={color === "dark" ? {background: "#103A58", color: "#FFFFFF"} : {background: "#FFFFFF"}} onClick={onClick}>
           <p className={styles.text}>{text}</p>
        </div>
    );
};

export default Button;