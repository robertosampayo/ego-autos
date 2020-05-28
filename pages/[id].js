import React, { useState, useEffect, useContext, Fragment } from 'react'
import Head from 'next/head'
import { Layout } from '../components/Layout'
// import fetch from 'node-fetch'
import {Banner} from '../components/Banner'
import { ModelHighlights } from '../components/ModelHighlights'
import { API_URL } from '../lib/constants'
import Swiper from 'react-id-swiper'
import { theme } from '../styles/theme'
import { useRouter } from 'next/router';
import Error from 'next/error';

const https = require("https");


function Detail  ({model}) {


    const [swiper, updateSwiper] = useState(null);
    const [statusCode, setStatusCode] = useState(200);
    const isOdd = (num) => { return num % 2; }

    useEffect(() => {
        if (!model) {
           setStatusCode(404)
        }else{
            setStatusCode(200)
        }
    }, [])

    const params = {
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
        },
        slidesPerView: 5,
        spaceBetween: 10,
        centeredSlides: true,
        breakpoints: {
            1024: {
                slidesPerView: 5,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        },
        loop: true,
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        speed: 900,
        parallax: true,



    }



    // if (statusCode !== 200) {
    //     return <Error statusCode={statusCode} title="Este modelo no existe" />
    // }

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

                                                <section key={`${features.name}-${features.id}`} className='item'>
                                                            <img src={`${API_URL}${features.photo}`} />
                                                            <h3>{features.name}</h3>
                                                            <p>{features.description}</p>
                                                </section>

                                            )

                                        })
                                }
                            </Swiper>
                        }

                        <div className='shadow-prev'>

                        </div>

                        <div className='shadow-next'>

                        </div>



                    </section>

                    <section className='highlights'>


                        {model &&
                            model.model_highlights &&
                                model.model_highlights.map(function (highlight, i) {


                                    if (isOdd(i) === 0) {

                                        return (

                                            <ModelHighlights key={`${highlight.title}-${i}`}
                                                title={highlight.title}
                                                content={highlight.content}
                                                image={highlight.image}
                                                imagePosition='right'
                                            />

                                        )
                                    }

                                    if (isOdd(i) === 1) {
                                        return (

                                            <ModelHighlights key={`${highlight.title}-${i}`}
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
                        position: relative;
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
                        height: 150px;
                        width: auto;
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

                    .gallery .shadow-prev {
                        top: 0;
                        left: 0;
                        width: 300px;
                        position: absolute;
                        height: 100%;
                        background: #fff;
                        z-index: 999;
                        opacity: 0.6;
                        background: rgb(255,255,255);
                        background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6255544454109769) 32%, rgba(255,255,255,0.586338759136467) 42%, rgba(255,255,255,0) 65%);
                    }

                    .gallery .shadow-next {
                        top: 0;
                        right: 0;
                        width: 300px;
                        position: absolute;
                        height: 100%;
                        background: #fff;
                        z-index: 999;
                        opacity: 0.6;
                        background: rgb(255,255,255);
                        background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.771212708716299) 32%, rgba(255,255,255,1) 42%, rgba(255,255,255,1) 65%);

                    }


                @media (min-width: 481px) and (max-width: 767px) {
                    .item {
                        width: 80%;
                        padding: 20px;
                        transform: translateX(20px);
                    }

                    .gallery .shadow-next {
                        visibility: hidden;
                    }

                    .gallery .shadow-prev {
                         visibility: hidden;
                    }
                    .gallery .item img {
                        width: auto;
                        height: auto;
                        margin: 0 auto
                    }

                    .gallery h3 {
                        width: 80%;
                        margin: 0 auto;
                        margin-top: 22px;
                    }

                    .gallery p{
                        width: 80%;
                        margin: 0 auto;

                    }
                }

                @media (min-width: 320px) and (max-width: 480px) {
                    .item {
                        width: 200px;
                        padding: 20px;
                    }

                    .gallery .shadow-next {
                        visibility: hidden;
                    }

                    .gallery .shadow-prev {
                         visibility: hidden;
                    }



                    .gallery .item img {
                        width: auto;
                        height: auto;
                        margin: 0 auto
                    }

                    .gallery h3 {
                        width: 80%;
                        margin: 0 auto;
                        margin-top: 22px;
                    }

                    .gallery p{
                        width: 80%;
                        margin: 0 auto;

                    }
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

                    .gallery .swiper-button-prev, .gallery .swiper-container-rtl .swiper-button-next {
                        left: 0px;
                        right: auto;
                        background: #fff;
                        height: 154px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 50px;
                        top: 18px;
                        opacity: 0.7;
                        z-index: 99999;
                    }

                    .gallery .swiper-button-next, .gallery .swiper-container-rtl .swiper-button-prev {
                        right: 10px;
                        left: auto;
                        background: #fff;
                        height: 154px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 50px;
                        top:18px;
                        opacity: 0.7;
                        z-index: 99999;
                    }

                    .swiper-button-next, .swiper-button-prev {
                        color: #000;
                    }

                    .gallery .swiper-container {
                        z-index: auto;
                    }

                    .swiper-pagination-bullet {
                        width: 39px;
                        height: 8px;
                        border-radius: 50px;
                        background: ${theme.textoGray};
                    }

                    @media (min-width: 481px) and (max-width: 767px) {

                        .swiper-button-next, .swiper-button-prev {
                            visibility: hidden;
                        }

                    }

                    @media (min-width: 320px) and (max-width: 480px) {

                        .swiper-button-next, .swiper-button-prev {
                            visibility: hidden;
                        }

                    }


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



// export async function getStaticPaths() {
//     return { paths: [], fallback: true };
// }

export const getStaticProps = async ({params : {id}}) => {

    try {

        const agent = new https.Agent({
            rejectUnauthorized: false
        })
        const response = await fetch(`https://challenge.agenciaego.tech/models/${id}`,
                {
                    headers: {
                    'Content-Type': 'application/json; charset=utf-8',

                    },
                    agent: agent,
                })



            const model = await response.json()


            return {
                props: { model, unstable_revalidate: 1 }
            }



    } catch (error) {
        // The Twitter API most likely died
        console.error(error);
        return { props: { } };
    }


}

export default Detail