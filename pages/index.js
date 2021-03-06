import React, { useState, useEffect, useContext, Fragment } from 'react'
import Head from 'next/head'
import {Layout} from '../components/Layout'
import {PrincipalMessage} from '../components/PrincipalMessage'
import {FilterBar} from '../components/FilterBar'
import { theme, MessageTheme } from '../styles/theme'
import { TimelineLite, Power4, CSSPlugin, gsap } from 'gsap'
import Router from 'next/router'
import { ModelsContainer } from '../components/ModelsContainer'
import NProgress from 'nprogress'

const Home = (props) => {


  Router.onRouteChangeStart = (url) => {
    NProgress.start()
  }
  Router.onRouteChangeComplete = () => NProgress.done()
  Router.onRouteChangeError = () => NProgress.done()


  return (


    <div className="container">



                <Layout title='Agencia Ego'>



                    <div className='home-container'>
                      <PrincipalMessage message='Descubrí todos los modelos' />

                      <FilterBar />
                      <ModelsContainer />



                    </div>

                </Layout>




    </div>
  )
}



export default Home;