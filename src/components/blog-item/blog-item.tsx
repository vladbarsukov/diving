import React, {FC} from 'react';
import img from "../../images/blog_image.png"
import styles from "./blog-item.module.css"
import {IBlog} from "../../services/types/data";

interface IBlogItemProps {
    item: IBlog
}

const BlogItem: FC<IBlogItemProps> = ({item}) => {
    return (
        <div className={styles.container}>
            <img src={img} alt={"img"}/>
            <div className={styles.description}>
                <p className={styles.text}>{`"id":${item.id},`}</p>
                <p className={styles.text}>{`"name":"${item.name}",`}</p>
                <p className={styles.text}>{`"year":"${item.year}",`}</p>
                <p className={styles.text}>{`"color":"${item.color}",`}</p>
                <p className={styles.text}>{`"pantone_value":"${item.pantone_value}",`}</p>
                <p className={styles.text}></p>
            </div>
        </div>
    );
};

export default BlogItem;