import React from 'react';
import Main from "../../components/main/main";
import Footer from "../../components/footer/footer";
import {useMediaQuery} from "react-responsive";
import FooterMobile from "../../components/footer-mobile/footer-mobile";

const Home = () => {
    const isMobile = useMediaQuery({
        query: "(max-width: 375px)"
    });
    return (
        <div>
            <Main/>
            {isMobile ? <FooterMobile/> : <Footer/>}
        </div>
    );
};

export default Home;