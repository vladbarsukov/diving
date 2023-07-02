import React, {FC} from 'react';
import diving_icon from "../../images/icon_diving.svg"
import massage_icon from "../../images/massage_icon.svg"
import cert_icon from "../../images/cert_icon.svg"
import styles from "./description-block.module.css"
import {Link} from "react-router-dom";

interface IDescriptionBlockProps {
    type: "diving" | "record" | "certificate"
    title: string,
    description: string,
    text: string,
}
const DescriptionBlock: FC<IDescriptionBlockProps> = ({type, title,description, text}) => {

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
        <div className={styles.container}>
           <div className={styles.title_wrapper}>
               <img src={iconSelector(type)} alt={"icon"}/>
               <h2 className={styles.title}>{title}</h2>
           </div>
           <p className={styles.description}>{description}</p>
           <Link className={styles.link} to={"/"}>
               <p>{text}</p>
           </Link>
        </div>
    );
};

export default DescriptionBlock;