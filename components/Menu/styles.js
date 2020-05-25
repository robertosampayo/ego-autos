import css from 'styled-jsx/css'
import { theme } from '../../styles/theme'



export default css`

                .logo {
                    width: 38px;
                    height: 39px;
                    object-fit: contain;
                }

                .menu-container{
                    border-style: solid;
                    border-width: 0 0 1px;
                    border-color: ${theme.gray};
                }

                .menu-logo{
                    cursor: pointer;
                }



               @media (min-width: 1650px) {

                        ul.menu{
                            position: relative;
                            display: flex;
                            order: 1;
                            justify-content: center;
                            flex-direction: row;
                            color: ${theme.texto};
                            padding: 0;
                            list-style: none;
                            justify-content: flex-start;
                            font-family: 'Lora', serif;
                            width: 90%;
                            margin: 0 0 0 auto;
                            height: ${theme.navSize};
                            align-items: center;
                        }
                        nav{
                                display: flex;
                                justify-content: flex-start;
                                background: ${theme.background};
                                flex-direction: row;
                                flex-wrap: wrap;
                                min-height: ${theme.navSize};
                                align-items: center;
                                padding: 0 40px;
                        }



                        nav ul span {
                            position: absolute;
                            display: flex;
                            align-self: center;
                            justify-self: center;
                            right: 0;
                            color: ${theme.dark};
                            display: flex;
                            align-items: center;
                        }

                }

                @media (min-width: 1281px) and (max-width: 1650px) {


                        ul.menu{
                            position: relative;
                            display: flex;
                            order: 1;
                            justify-content: center;
                            flex-direction: row;
                            color: ${theme.texto};
                            padding: 0;
                            list-style: none;
                            justify-content: flex-start;
                            font-family: 'Lora', serif;
                            width: 90%;
                            margin: 0 0 0 auto;
                            height: ${theme.navSize};
                            align-items: center;
                        }
                        nav{
                                display: flex;
                                justify-content: flex-start;
                                background: ${theme.background};
                                flex-direction: row;
                                flex-wrap: wrap;
                                min-height: ${theme.navSize};
                                align-items: center;
                                padding: 0 40px;
                        }



                        nav ul span {
                            position: absolute;
                            display: flex;
                            align-self: center;
                            justify-self: center;
                            right: 0;
                            color: ${theme.dark};
                            display: flex;
                            align-items: center;
                        }








                }

                /*
                ##Device = Laptops, Desktops
                ##Screen = B/w 1025px to 1280px
                */

                @media (min-width: 1025px) and (max-width: 1280px) {
                        ul.menu{
                            position: relative;
                            display: flex;
                            order: 1;
                            justify-content: center;
                            flex-direction: row;
                            color: ${theme.texto};
                            padding: 0;
                            list-style: none;
                            justify-content: flex-start;
                            font-family: 'Lora', serif;
                            width: 90%;
                            margin: 0 0 0 auto;
                            height: ${theme.navSize};
                            align-items: center;
                        }
                        nav{
                                display: flex;
                                justify-content: flex-start;
                                background: ${theme.background};
                                flex-direction: row;
                                flex-wrap: wrap;
                                min-height: ${theme.navSize};
                                align-items: center;
                                padding: 0 40px;
                        }



                        nav ul span {
                            position: absolute;
                            display: flex;
                            align-self: center;
                            justify-self: center;
                            right: 0;
                            color: ${theme.dark};
                            display: flex;
                            align-items: center;
                        }


                }

                /*
                ##Device = Tablets, Ipads (portrait)
                ##Screen = B/w 768px to 1024px
                */

                @media (min-width: 768px) and (max-width: 1024px) {
                        ul.menu{
                            position: relative;
                            display: flex;
                            order: 1;
                            justify-content: center;
                            flex-direction: row;
                            color: ${theme.texto};
                            padding: 0;
                            list-style: none;
                            justify-content: flex-start;
                            font-family: 'Lora', serif;
                            width: 90%;
                            margin: 0 0 0 auto;
                            height: ${theme.navSize};
                            align-items: center;
                        }
                        nav{
                                display: flex;
                                justify-content: flex-start;
                                background: ${theme.background};
                                flex-direction: row;
                                flex-wrap: wrap;
                                min-height: ${theme.navSize};
                                align-items: center;
                                padding: 0 40px;
                        }



                        nav ul span {
                            position: absolute;
                            display: flex;
                            align-self: center;
                            justify-self: center;
                            right: 0;
                            color: ${theme.dark};
                            display: flex;
                            align-items: center;
                        }


                }

                /*
                ##Device = Tablets, Ipads (landscape)
                ##Screen = B/w 768px to 1024px
                */

                @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {

                        ul.menu{
                            position: relative;
                            display: flex;
                            order: 1;
                            justify-content: center;
                            flex-direction: row;
                            color: ${theme.texto};
                            padding: 0;
                            list-style: none;
                            justify-content: flex-start;
                            font-family: 'Lora', serif;
                            width: 90%;
                            margin: 0 0 0 auto;
                            height: ${theme.navSize};
                            align-items: center;
                        }
                        nav{
                                display: flex;
                                justify-content: flex-start;
                                background: ${theme.background};
                                flex-direction: row;
                                flex-wrap: wrap;
                                min-height: ${theme.navSize};
                                align-items: center;
                                padding: 0 40px;
                        }



                        nav ul span {
                            position: absolute;
                            display: flex;
                            align-self: center;
                            justify-self: center;
                            right: 0;
                            color: ${theme.dark};
                            display: flex;
                            align-items: center;
                        }

                }

                /*
                ##Device = Low Resolution Tablets, Mobiles (Landscape)
                ##Screen = B/w 481px to 767px
                */

                @media (min-width: 481px) and (max-width: 767px) {

                        ul.menu{
                            position: relative;
                            display: flex;
                            order: 1;
                            justify-content: center;
                            flex-direction: row;
                            color: ${theme.texto};
                            padding: 0;
                            list-style: none;
                            justify-content: flex-start;
                            font-family: 'Lora', serif;
                            width: 90%;
                            margin: 0 0 0 auto;
                            height: ${theme.navSize};
                            align-items: center;
                        }
                        nav{
                                display: flex;
                                justify-content: flex-start;
                                background: ${theme.background};
                                flex-direction: row;
                                flex-wrap: wrap;
                                min-height: ${theme.navSize};
                                align-items: center;
                                padding: 0 40px;
                        }



                        nav ul span {
                            position: absolute;
                            display: flex;
                            align-self: center;
                            justify-self: center;
                            right: 0;
                            color: ${theme.dark};
                            display: flex;
                            align-items: center;
                        }

                }

                /*
                ##Device = Most of the Smartphones Mobiles (Portrait)
                ##Screen = B/w 320px to 479px
                */

                @media (min-width: 320px) and (max-width: 480px) {


                        ul.menu{
                            position: relative;
                            display: flex;
                            order: 1;
                            justify-content: center;
                            flex-direction: row;
                            color: ${theme.texto};
                            padding: 0;
                            list-style: none;
                            justify-content: flex-start;
                            font-family: 'Lora', serif;
                            width: auto;
                            margin: 0 0 0 auto;
                            height: ${theme.navSize};
                            align-items: center;
                        }
                        nav{
                                display: flex;
                                justify-content: flex-start;
                                background: ${theme.background};
                                flex-direction: row;
                                flex-wrap: wrap;
                                min-height: ${theme.navSize};
                                align-items: center;
                                padding: 0 40px;
                        }



                        nav ul span {
                            position: absolute;
                            display: flex;
                            align-self: center;
                            justify-self: center;
                            right: 0;
                            color: ${theme.dark};
                            display: flex;
                            align-items: center;
                        }


                }







                `