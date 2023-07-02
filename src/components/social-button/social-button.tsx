import React, {FC} from 'react';
import vkIcon from '../../images/simple-icons_vk.svg'
import vkIcon_dark from '../../images/simple-icons_vk_dark.svg'
import instagramIcon from '../../images/ant-design_instagram-fill.svg'
import instagramIcon_dark from '../../images/ant-design_instagram-fill_dark.svg'
import faceBookIcon from '../../images/fa-facebook-square.svg'
import faceBookIcon_dark from '../../images/fa-facebook-square_dark.svg'
import {Link} from "react-router-dom";
import styles from './social-button.module.css'
interface ISocialButtonProps {
    type: "default" | "dark"
}
const SocialButton: FC<ISocialButtonProps> = ({type}) => {

    return (
        <div className={styles.container}>
            <Link to={"/"}><img alt={'vk'} src={type === "default" ? vkIcon: vkIcon_dark}/></Link>
            <Link to={"/"}><img alt={'inst'} src={type === "default" ? instagramIcon : instagramIcon_dark}/></Link>
            <Link to={"/"}><img alt={'fb'} src={type === "default" ? faceBookIcon : faceBookIcon_dark}/></Link>
        </div>
    );
};

export default SocialButton;