import React, {FC} from 'react';
import diving_icon from "../../images/icon_diving.svg"
import massage_icon from "../../images/massage_icon.svg"
import cert_icon from "../../images/cert_icon.svg"
import styles from "./description-block.module.css"
import {Link} from "react-router-dom";
import {useMediaQuery} from "react-responsive";

interface IDescriptionBlockProps {
    type: "diving" | "record" | "certificate"
    title: string,
    description: string,
    text: string,
}
const DescriptionBlock: FC<IDescriptionBlockProps> = ({type, title,description, text}) => {
    const isMobile = useMediaQuery({
        query: "(max-width: 375px)"
    });

    const iconSelector = (type: string): string => {
        switch (type) {
            case "diving":
                return diving_icon
            case "record":
                return massage_icon
            case "certificate":
                return cert_icon
            default:
                return diving_icon
        }
    }

    return (
        <div className={isMobile ? styles.container_mobile : styles.container}>
           <div className={isMobile ? styles.title_wrapper_mobile : styles.title_wrapper}>
               <img src={iconSelector(type)} alt={"icon"}/>
               <h2 className={isMobile ? styles.title_mobile : styles.title}>{title}</h2>
           </div>
           <p className={isMobile ? styles.description_mobile : styles.description}>{description}</p>
           <Link className={isMobile ? styles.link_mobile : styles.link} to={"/"}>
               <p>{text}</p>
           </Link>
        </div>
    );
};

export default DescriptionBlock;