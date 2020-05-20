import Link from 'next/link'
import React, { useState, useRef } from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme'
import {Menu} from '../../components/Menu'
import { TimelineLite, Power4, CSSPlugin, gsap } from 'gsap'
import styles from './styles'
import { ModelProvider } from '../../providers/ModelProvider'
import { SegmentProvider } from '../../providers/SegmentProvider'


export const Layout = ({ title, children }) => {




    return <div>
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            {title && <title >{title}</title>}
        </Head>

        <ThemeProvider theme={theme}>


                <header>

                        <Menu />
                </header>


                <main className='main'>
                <ModelProvider>
                    <SegmentProvider>
                        {children}
                    </SegmentProvider>


                </ModelProvider>

                </main>

              <footer>

              </footer>

            <style jsx global>{styles}</style>

        </ThemeProvider>



    </div>
}

