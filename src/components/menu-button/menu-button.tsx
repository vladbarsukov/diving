import React, {FC} from 'react';
import styles from './menu-button.module.css'
import img from '../../images/dashicons_menu-alt3.svg'
import img_dark from '../../images/dash_icon_dark.png'

interface IMenuButtonProps {
    onClick: () => void
    type: "dark" | "light"
}
const MenuButton: FC<IMenuButtonProps> = ({onClick, type}) => {
    return (
        <div onClick={onClick} className={styles.container}>
           <img src={type === "light" ? img : img_dark} alt={"dash_icon"}/>
        </div>
    );
};

export default MenuButton;