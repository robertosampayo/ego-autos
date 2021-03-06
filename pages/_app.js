import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import 'swiper/css/swiper.css'
import global from '../styles/global'
import { CSSPlugin, gsap } from 'gsap'
// import { ModelProvider } from '../providers/ModelProvider'


class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        gsap.registerPlugin(CSSPlugin)
        return (

                // <ModelProvider>
                <div>
                {/* <ModelProvider> */}

                    <Component {...pageProps} />
                {/* </ModelProvider > */}
                    <style global jsx>
                        {global}
                    </style>
                </div>
                // </ModelProvider>
        )
    }
}
export default MyApp