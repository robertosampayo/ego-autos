import React from 'react'
import App from 'next/app'
import Head from 'next/head'
// import { ModelProvider } from '../providers/ModelProvider'


class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (

                // <ModelProvider>
                <div>
                {/* <ModelProvider> */}

                    <Component {...pageProps} />
                {/* </ModelProvider > */}

                </div>
                // </ModelProvider>
        )
    }
}
export default MyApp