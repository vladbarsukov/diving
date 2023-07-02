import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import styles from "./button.module.css"

interface IButtonProps {
    text: string
}

const Button: FC<IButtonProps> = ({text}) => {
    const navigate = useNavigate()

    const onClick = () => {
        navigate('/')
    }
    return (
        <div className={styles.button} onClick={onClick}>
           <p className={styles.text}>{text}</p>
        </div>
    );
};

export default Button;