import React, {useEffect} from 'react';
import BlogHeader from "../../components/blog-header/blog-header";
import {useDispatch, useSelector} from "../../services/hook";
import {getBlog} from "../../services/actions/blogActions";
import BlogContent from "../../components/blog-content/blog-content";
import Footer from "../../components/footer/footer";
import FooterMobile from "../../components/footer-mobile/footer-mobile";
import {useMediaQuery} from "react-responsive";

const BlogPage = () => {
    const isMobile = useMediaQuery({
        query: "(max-width: 376px)"
    });
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
            {isMobile ? <FooterMobile/> : <Footer/>}
        </div>
    );
};

export default BlogPage;