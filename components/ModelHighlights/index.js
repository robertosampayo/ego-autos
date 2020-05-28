import React, { useState, useRef, createRef, useEffect, Fragment } from 'react'
import { TimelineLite, Power4, CSSPlugin, gsap } from 'gsap'
import { theme } from '../../styles/theme'
import { API_URL } from '../../lib/constants'

export const ModelHighlights = ({  title = '', content = '', image = '', imagePosition = 'left'}) => {

    const [gsapTL] = useState(new TimelineLite({}))

    // const openNavigation = () => {
    //     // console.log(navigation.current)
    //     gsapTL.to(navigation.current, { duration: 0.6, css: { transform: 'translateX(0%)' } })
    // }




    return (


        <Fragment>


            <section
                className={imagePosition === 'right' ? 'highlights-detail left' : 'highlights-detail right'}
            >

                <div className='content'>
                    <h3>{title}</h3>
                    <p>{content}</p>
                </div>
                <div className='image'>
                    <img src={`${API_URL}${image}`} />
                </div>

            </section>

            <style jsx>{`

                .highlights-detail {

                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 55px 0 0;
                    width: 100%;
                }

                .highlights-detail p{

                    width: 60%;
                    margin: 0 auto;
                    font-size: 16px;
                    line-height: 27px;
                    letter-spacing: -0.1px;
                }

                .highlights-detail h3{

                    width: 60%;
                    padding: 0 0 20px;
                    margin: 0 auto;
                    font-size: 20px;
                    line-height: 27px;
                    letter-spacing: -0.4px;
                }

                .highlights-detail .image img {

                    height: auto;
                    width: 100%;
                    border-radius: 5px;
                }

                .highlights-detail .content {
                    width: 50%;
                }

                .highlights-detail .image {
                    width: 50%;
                    text-align: right;
                }

                .left { flex-direction: row; }

                .right { flex-direction: row-reverse; }

                @media (min-width: 1025px) and (max-width: 1280px) {
                    .highlights-detail p{

                        width: 80%;

                    }

                    .highlights-detail h3{

                        width: 80%;

                    }

                }

                @media (min-width: 768px) and (max-width: 1024px) {


                    .highlights-detail p{

                        width: 80%;

                    }

                    .highlights-detail h3{

                        width: 80%;

                    }


                }

                @media (min-width: 481px) and (max-width: 767px) {

                    .left, .right{
                        flex-direction: column;
                    }

                    .highlights .left,
                    .highlights .right,
                    .highlights-detail .content,
                    .highlights-detail h3,
                    .highlights-detail p,
                    .highlights-detail .image {
                        width: 100%;
                    }

                    .highlights-detail .image img{
                        height: auto;
                        width: 100%;
                        margin: 39px 0 0 0;
                    }


                }

                @media (min-width: 320px) and (max-width: 480px) {
                    .left, .right{
                        flex-direction: column;
                    }

                    .highlights .left,
                    .highlights .right,
                    .highlights-detail .content,
                    .highlights-detail h3,
                    .highlights-detail p,
                    .highlights-detail .image {
                        width: 100%;
                    }

                    .highlights-detail .image img{
                        height: auto;
                        width: 100%;
                        margin: 39px 0 0 0;
                    }





                }




            `}</style>

        </Fragment>



    )





}

