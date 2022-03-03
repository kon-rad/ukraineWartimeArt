import Header from './header';
import Footer from './footer';
import { Box, Container } from '@chakra-ui/react';
import React from 'react';

type Props = {
    children: React.ReactNode
}

const Layout = (props: Props) => {
    return (
        <Box>
            <Header />
            <Box mb={48}>
                {props.children}
            </Box>
            <Footer/>
            {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
            {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XLJX89QQMY"></script>
            <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-XLJX89QQMY');
            </script> */}
        </Box>
    )
}

export default Layout;