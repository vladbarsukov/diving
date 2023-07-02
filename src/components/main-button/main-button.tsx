import React, {FC} from 'react';
import styles from "./main-button.module.css"
import {useNavigate} from "react-router-dom";

interface IMainButtonProps {
    text: string
}
const MainButton: FC<IMainButtonProps> = ({text}) => {
    const navigate = useNavigate()
    const onClick = () => {
        navigate('/')
    }
    return (
        <div onClick={onClick} className={styles.button}>
           <a className={styles.text}>{text}</a>
        </div>
    );
};

export default MainButton;