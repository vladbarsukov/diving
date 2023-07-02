import React, {useEffect} from 'react';
import BlogHeader from "../../components/blog-header/blog-header";
import {useDispatch, useSelector} from "../../services/hook";
import {getBlog} from "../../services/actions/blogActions";
import BlogContent from "../../components/blog-content/blog-content";
import Footer from "../../components/footer/footer";

const BlogPage = () => {
    const dispatch = useDispatch()
    const { blog } = useSelector(
        state => state.blogReducer
    );

    useEffect(() => {
        dispatch(getBlog())
    }, [])
    return (
        <div>
            <BlogHeader/>
            {blog ? <BlogContent/> : <></>}
            <Footer/>
        </div>
    );
};

export default BlogPage;