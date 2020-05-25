import React, { useContext, useState, useEffect, Fragment, createRef } from 'react'
import { Item } from '../../components/Item'
import { theme } from '../../styles/theme'

export function NavigationItems (props) {




    return (

        <Fragment>

            <ul className='navigation-items'>
                {
                    props.items.map(function(item){

                        return <Item key={item} href='#'>{item}</Item>
                    })
                }

            </ul>
            <div className='line'></div>
            <style jsx>{`








               @media (min-width: 1650px) {

                ul {
                    background: ${ props.gray ? theme.gray : theme.whiteGray};
                    list-style: none;
                    clear: both;
                    padding: 20px;
                    height: auto;
                    padding: 20px 55px 20px 0;
                    transform: ${ props.gray ? 'translateY(-2px)' : 'translateY(0px)'};
                }

                .line{
                    border-width: ${ props.gray ? '0px' : '1px'};
                    border-style: solid;
                    width: 85%;
                    margin: 0 auto;
                    border-color: gainsboro;
                }


                ul.navigation-items :global(li) {
                        margin: 0;
                        height: auto;
                        width: 100%;
                        padding: 0 0 20px 0;

                }

                ul.navigation-items :global(li a) {

                    font-family: ${theme.dark};
                    font-size: 20px;
                    justify-content: flex-end;
                    font-family: ${theme.font_regular};
                    letter-spacing: -0.1px
                }

                }

                @media (min-width: 1281px) and (max-width: 1650px) {




                ul {
                    background: ${ props.gray ? theme.gray : theme.whiteGray};
                    list-style: none;
                    clear: both;
                    padding: 20px;
                    height: auto;
                    padding: 20px 55px 20px 0;
                    transform: ${ props.gray ? 'translateY(-2px)' : 'translateY(0px)'};
                }

                .line{
                    border-width: ${ props.gray ? '0px' : '1px'};
                    border-style: solid;
                    width: 85%;
                    margin: 0 auto;
                    border-color: gainsboro;
                }


                ul.navigation-items :global(li) {
                        margin: 0;
                        height: auto;
                        width: 100%;
                        padding: 0 0 20px 0;

                }

                ul.navigation-items :global(li a) {

                    font-family: ${theme.dark};
                    font-size: 20px;
                    justify-content: flex-end;
                    font-family: ${theme.font_regular};
                    letter-spacing: -0.1px
                }





                }

                /*
                ##Device = Laptops, Desktops
                ##Screen = B/w 1025px to 1280px
                */

                @media (min-width: 1025px) and (max-width: 1280px) {


                    ul {
                        background: ${ props.gray ? theme.gray : theme.whiteGray};
                        list-style: none;
                        clear: both;
                        padding: 20px;
                        height: auto;
                        padding: 10px 55px 10px 0;
                        transform: ${ props.gray ? 'translateY(-2px)' : 'translateY(0px)'};
                    }

                    .line{
                        border-width: ${ props.gray ? '0px' : '1px'};
                        border-style: solid;
                        width: 85%;
                        margin: 0 auto;
                        border-color: gainsboro;
                    }


                    ul.navigation-items :global(li) {
                            margin: 0;
                            height: auto;
                            width: 100%;
                            padding: 0 0 10px 0;

                    }

                    ul.navigation-items :global(li a) {

                        font-family: ${theme.dark};
                        font-size: 20px;
                        justify-content: flex-end;
                        font-family: ${theme.font_regular};
                        letter-spacing: -0.1px
                    }
                }

                /*
                ##Device = Tablets, Ipads (portrait)
                ##Screen = B/w 768px to 1024px
                */

                @media (min-width: 768px) and (max-width: 1024px) {


                    ul {
                        background: ${ props.gray ? theme.gray : theme.whiteGray};
                        list-style: none;
                        clear: both;
                        padding: 20px;
                        height: auto;
                        padding: 20px 55px 20px 0;
                        transform: ${ props.gray ? 'translateY(-2px)' : 'translateY(0px)'};
                    }

                    .line{
                        border-width: ${ props.gray ? '0px' : '1px'};
                        border-style: solid;
                        width: 85%;
                        margin: 0 auto;
                        border-color: gainsboro;
                    }


                    ul.navigation-items :global(li) {
                            margin: 0;
                            height: auto;
                            width: 100%;
                            padding: 0 0 20px 0;

                    }

                    ul.navigation-items :global(li a) {

                        font-family: ${theme.dark};
                        font-size: 20px;
                        justify-content: flex-end;
                        font-family: ${theme.font_regular};
                        letter-spacing: -0.1px
                    }

                }

                /*
                ##Device = Tablets, Ipads (landscape)
                ##Screen = B/w 768px to 1024px
                */

                @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {


                        ul {
                            background: ${ props.gray ? theme.gray : theme.whiteGray};
                            list-style: none;
                            clear: both;
                            padding: 20px;
                            height: auto;
                            padding: 20px 55px 20px 0;
                            transform: ${ props.gray ? 'translateY(-2px)' : 'translateY(0px)'};
                        }

                        .line{
                            border-width: ${ props.gray ? '0px' : '1px'};
                            border-style: solid;
                            width: 85%;
                            margin: 0 auto;
                            border-color: gainsboro;
                        }


                        ul.navigation-items :global(li) {
                                margin: 0;
                                height: auto;
                                width: 100%;
                                padding: 0 0 20px 0;

                        }

                        ul.navigation-items :global(li a) {

                            font-family: ${theme.dark};
                            font-size: 20px;
                            justify-content: flex-end;
                            font-family: ${theme.font_regular};
                            letter-spacing: -0.1px
                        }
                }

                /*
                ##Device = Low Resolution Tablets, Mobiles (Landscape)
                ##Screen = B/w 481px to 767px
                */

                @media (min-width: 481px) and (max-width: 767px) {

                        ul {
                            background: ${ props.gray ? theme.gray : theme.whiteGray};
                            list-style: none;
                            clear: both;
                            padding: 20px;
                            height: auto;
                            padding: 20px 55px 20px 0;
                            transform: ${ props.gray ? 'translateY(-2px)' : 'translateY(0px)'};
                        }

                        .line{
                            border-width: ${ props.gray ? '0px' : '1px'};
                            border-style: solid;
                            width: 85%;
                            margin: 0 auto;
                            border-color: gainsboro;
                        }


                        ul.navigation-items :global(li) {
                                margin: 0;
                                height: auto;
                                width: 100%;
                                padding: 0 0 20px 0;

                        }

                        ul.navigation-items :global(li a) {

                            font-family: ${theme.dark};
                            font-size: 20px;
                            justify-content: flex-end;
                            font-family: ${theme.font_regular};
                            letter-spacing: -0.1px
                        }

                }

                /*
                ##Device = Most of the Smartphones Mobiles (Portrait)
                ##Screen = B/w 320px to 479px
                */

                @media (min-width: 320px) and (max-width: 480px) {


                    ul {
                        background: ${ props.gray ? theme.gray : theme.whiteGray};
                        list-style: none;
                        clear: both;
                        padding: 20px;
                        height: auto;
                        padding: 20px 55px 20px 0;
                        transform: ${ props.gray ? 'translateY(-2px)' : 'translateY(0px)'};
                    }

                    .line{
                        border-width: ${ props.gray ? '0px' : '1px'};
                        border-style: solid;
                        width: 85%;
                        margin: 0 auto;
                        border-color: gainsboro;
                    }


                    ul.navigation-items :global(li) {
                            margin: 0;
                            height: auto;
                            width: 100%;
                            padding: 0 0 20px 0;

                    }

                    ul.navigation-items :global(li a) {

                        font-family: ${theme.dark};
                        font-size: 20px;
                        justify-content: flex-end;
                        font-family: ${theme.font_regular};
                        letter-spacing: -0.1px
                    }


                }










            `}</style>

        </Fragment>


    )
}
