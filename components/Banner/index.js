import React, { useState, useRef, createRef, useEffect, Fragment } from 'react'
import { TimelineLite, Power4, CSSPlugin, gsap } from 'gsap'
import { theme } from '../../styles/theme'
import { API_URL } from '../../lib/constants'

export const Banner = ({name='', title='', description='', image=''}) => {

    const [gsapTL] = useState(new TimelineLite({}))

    // const openNavigation = () => {
    //     // console.log(navigation.current)
    //     gsapTL.to(navigation.current, { duration: 0.6, css: { transform: 'translateX(0%)' } })
    // }




    return (


        <Fragment>

            <section className='banner'>

                <img src={`${API_URL}${image}`} />
                <div className='car-details'>

                    <h3>{name}</h3>
                    <h1>{title}</h1>
                    <p>{description}</p>

                </div>

            </section>

            <style jsx>{`

                h3{
                    font-size: 20px;
                    font-family: ${theme.font_semibold};
                    letter-spacing: 0;
                    line-height: 27px;
                }

                h1 {
                    font-size: 50px;
                    font-family: ${theme.font_semibold};
                    letter-spacing: -1px;
                    line-height: 57px;
                    padding: 8px 0 0 0;

                }
                p {
                    font-size: 16px;
                    font-family: ${theme.font_regular};
                    line-height: 27px;
                    letter-spacing: -0.1px;
                    padding: 37px 0 0 0;
                }

                .banner {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    padding: 80px 0;
                    width: 80%;
                    margin: 0 auto;
                }

                .banner img{
                    width: auto;
                    height: auto;
                }

                .car-detail {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 475px;
                }

                @media (min-width: 481px) and (max-width: 767px) {
                    .banner{
                        display: flex;
                        flex-direction: column;
                    }

                    .banner img {
                        width: 120%;
                    }

                    h1 {
                        font-size: ${theme.h1mobile};
                    }

                    .car-details {
                        margin: 42px 0 0 0;
                    }
                }

                @media (min-width: 320px) and (max-width: 480px) {
                    .banner{
                        display: flex;
                        flex-direction: column;
                    }

                    .banner img {
                        width: 120%;
                    }

                    h1 {
                        font-size: ${theme.h1mobile};
                    }

                    .car-details {
                        margin: 42px 0 0 0;
                    }

                }


            `}</style>

        </Fragment>



    )





}

