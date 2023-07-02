import React, {FC} from 'react';
import {useSelector} from "../../services/hook";
import styles from "./blog-content.module.css"
import BlogItem from "../blog-item/blog-item";
import {useMediaQuery} from "react-responsive";

const BlogContent: FC = () => {
    const isMobile = useMediaQuery({
        query: "(max-width: 376px)"
    });
    const { blog} = useSelector(
        state => state.blogReducer
    );

    return (
        <div className={isMobile ? styles.container_mobile : styles.container}>
            {blog.map((item: any) => <BlogItem item={item} key={item.id}/>)}
        </div>
    );
};

export default BlogContent;