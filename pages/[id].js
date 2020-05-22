import React, { useState, useEffect, useContext, Fragment } from 'react'
import Head from 'next/head'
import { Layout } from '../components/Layout'
import { getModelData } from '../lib/models'
import fetch from 'node-fetch'
const https = require("https");


function Detail  ({model}) {

    useEffect(() => {
        console.log(model)
    }, [])

    return (


        <div className="container">



            <Layout title='Agencia Ego'>



                <div className='home-container'>
                    <h1>Modelo</h1>
                    <h3>{model.name}</h3>
                    {/* {query.map(home => <div>{home.name}</div>)} */}

                </div>

            </Layout>


            <style jsx>
                {`




        `}
            </style>



        </div>
    )
}

export async function getStaticPaths() {


    const agent = new https.Agent({
        rejectUnauthorized: false
    })

  // Call an external API endpoint to get posts
  const res = await fetch('https://challenge.agenciaego.tech/models',
              {
                headers: {
                  'Content-Type': 'application/json; charset=utf-8',

                },
                agent: agent,
            })
  const cars = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = cars.map(car => `/${car.id}`)

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export const getStaticProps = async ({params}) => {

    const agent = new https.Agent({
        rejectUnauthorized: false
    })
    const res = await fetch(`https://challenge.agenciaego.tech/models/${params.id}`,
            {
                headers: {
                  'Content-Type': 'application/json; charset=utf-8',

                },
                agent: agent,
            })
    const model = await res.json()


  return {
            props: { model }
        }
}

export default Detail