import React, {FC} from 'react';
import {useSelector} from "../../services/hook";
import styles from "./blog-content.module.css"
import BlogItem from "../blog-item/blog-item";

const BlogContent: FC = () => {
    const { blog} = useSelector(
        state => state.blogReducer
    );

    console.log(blog)

    return (
        <div className={styles.container}>
            {blog.map((item: any) => <BlogItem item={item} key={item.id}/>)}
        </div>
    );
};

export default BlogContent;