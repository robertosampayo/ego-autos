import React, { useState, useEffect, useContext, Fragment } from 'react'
import Head from 'next/head'
import homeStyle from '../styles/home.js'
import {Layout} from '../components/Layout'
import {PrincipalMessage} from '../components/PrincipalMessage'
import {FilterBar} from '../components/FilterBar'
import { theme, MessageTheme } from '../styles/theme'
import { TimelineLite, Power4, CSSPlugin, gsap } from 'gsap'

import { ModelsContainer } from '../components/ModelsContainer'


const Home = (props) => {



  return (


    <div className="container">



                <Layout title='Agencia Ego'>

                    <div className='home-container'>
                      <PrincipalMessage message='Descubrí todos los modelos' />

                      <FilterBar />
                      <ModelsContainer />



                    </div>

                </Layout>


      <style jsx>
        {`




        `}
      </style>



    </div>
  )
}

export default Home;