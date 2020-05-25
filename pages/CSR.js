import React, { useState, useEffect, useContext, Fragment } from 'react'
import Head from 'next/head'
import { Layout } from '../components/Layout'
// import fetch from 'node-fetch'
import {Banner} from '../components/Banner'
import { ModelHighlights } from '../components/ModelHighlights'
import { API_URL } from '../lib/constants'
import Swiper from 'react-id-swiper'
import { theme } from '../styles/theme'

const https = require("https");


function Detail  ({id}) {

    const [swiper, updateSwiper] = useState(null);
    const isOdd = (num) => { return num % 2; }
    const [model, setModel] =   useState(null)

    useEffect(() => {

        getModels()

    }, [])

    const getModels = async () => {

        const agent = new https.Agent({
            rejectUnauthorized: false
        })
        const res = await fetch(`https://challenge.agenciaego.tech/models/${id}`,
            {
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',

                },
                agent: agent,
            })
        const model = await res.json()
        setModel(model)
    }


    const params = {
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
        },
        slidesPerView: 'auto',
        loop: true,
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        speed: 900,
        parallax: true,
    }

    return (


        <div className="container">



            <Layout title='Agencia Ego'>



                <div className='home-container'>
                {model &&

                        <Banner image={model.photo} name={model.name} title={model.title} description={model.description} />

                }

                    <section className='gallery'>


                        {model &&
                            <Swiper {...params}>


                                {model.model_features &&


                                        model.model_features.map(function (features, i) {

                                            return (

                                                <section className='item'>
                                                            <img src={`${API_URL}${features.photo}`} />
                                                            <h3>{features.name}</h3>
                                                            <p>{features.description}</p>
                                                </section>

                                            )

                                        })
                                }
                            </Swiper>
                        }





                    </section>

                    <section className='highlights'>


                        {model &&
                            model.model_highlights &&
                                model.model_highlights.map(function (highlight, i) {


                                    if (isOdd(i) === 0) {

                                        return (

                                            <ModelHighlights
                                                title={highlight.title}
                                                content={highlight.content}
                                                image={highlight.image}
                                                imagePosition='right'
                                            />

                                        )
                                    }

                                    if (isOdd(i) === 1) {
                                        return (

                                            <ModelHighlights
                                                title={highlight.title}
                                                content={highlight.content}
                                                image={highlight.image}
                                                imagePosition='left'
                                            />

                                        )
                                    }

                                })



                        }



                    </section>
                </div>

            </Layout>


            <style jsx>
                {`

                    .home-container {
                        width: 100%;
                    }
                    .features{
                        width: 100%;
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                    }
                    .highlights {
                        padding: 0 0 117px;
                        width: 80%;
                        margin: 0 auto;
                    }

                    .gallery {
                        display: flex;
                        justify-content: center;
                        flex-direction: row;
                        background: ${theme.greyLight};
                        height: auto;
                        align-items: center;
                        width: 100%;
                        align-items: center;
                        padding: 43px 0 49px;
                    }

                    .item {
                        display: flex;
                        flex-direction: column;
                        padding: 0 20px;
                        text-align: left;
                        width: 270px;
                        height: auto;
                    }

                    .item img{
                        border-radius: 5px;
                    }

                    .item h3{
                        margin: 20px 0;
                        font-family: ${theme.font_semibold};
                        font-size: 20px;
                        line-height: 27px;
                        letter-spacing: -0.4px
                    }

                    .item p {
                        font-family: ${theme.font_regular};
                        font-size: 16px;
                        line-height: 27px;
                        letter-spacing: -0.1px
                    }



        `}
            </style>

            <style jsx global >
                {`
                    .gallery .swiper-container {
                        height: 400px;
                    }
                    .gallery .swiper-pagination {
                        position: absolute!important;
                    }

                `}
            </style>



        </div>
    )
}

// export async function getStaticPaths() {


//     const agent = new https.Agent({
//         rejectUnauthorized: false
//     })

//   // Call an external API endpoint to get posts
//   const res = await fetch('https://challenge.agenciaego.tech/models',
//               {
//                 headers: {
//                   'Content-Type': 'application/json; charset=utf-8',

//                 },
//                 agent: agent,
//             })
//   const cars = await res.json()

//   // Get the paths we want to pre-render based on posts
//   const paths = cars.map(car => `/${car.id}`)

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false }
// }

export const getStaticProps = async ({params : {id}}) => {

    // const agent = new https.Agent({
    //     rejectUnauthorized: false
    // })
    // const res = await fetch(`https://challenge.agenciaego.tech/models/${params.id}`,
    //         {
    //             headers: {
    //               'Content-Type': 'application/json; charset=utf-8',

    //             },
    //             agent: agent,
    //         })
    // const model = await res.json()


  return {
            // props: { model }
            props: { id }
        }
}

export default Detail