import css from 'styled-jsx/css'
import { theme, MessageTheme } from '../../styles/theme'


export default css`




                        p{
                        font-family: ${theme.font_regular};
                        }

                        .model img {
                            width: 250px;
                            height: auto;
                            padding: 0 10px;
                        }


                        .model{
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            align-items: center;
                            padding: 5px 5px 50px;
                            cursor: pointer;
                            width: auto;
                        }

                        .model p, .model h2 {
                            padding: 0 0 10px;
                        }

                        .model button {

                            background: #000;
                            color: #fff;
                            border: 0;
                            height: 34px;
                            // padding: 10px;
                            border-radius: 200px;
                            width: 80%;
                            position: relative;
                            top: 10px;
                            line-height: 1.77;
                            letter-spacing: 0.07px;
                            text-align: center;
                            font-family: ${theme.font_regular};
                            opacity: 0;
                            cursor: pointer;

                        }


                        .hide-button {
                                opacity:0;
                                animation-name: hide-down;
                                animation-duration: 0.1s;
                                animation-fill-mode: forwards;
                        }

                        .show-button {
                                animation-name: show-up;
                                animation-duration: 0.1s;
                                animation-fill-mode: forwards;
                        }







                @keyframes show-up {
                    from {
                        top: 5px;
                        opacity: 0;

                    }
                    to {
                        top: 0px;
                        opacity:1
                    }
                }

                @keyframes hide-down {
                    from {
                        top: 0px;
                        opacity: 1;
                    }
                    to {
                        top: 5px;
                        opacity: 0;
                    }
                }

                .scale-up-top {
                    -webkit-animation: scale-up-top 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
                    animation: scale-up-top 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
                }

                .fade-in {
	                -webkit-animation: fade-in 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	                animation: fade-in 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
                }

                @-webkit-keyframes scale-up-top {
                0% {
                    -webkit-transform: scale(0.5);
                            transform: scale(0.5);
                    -webkit-transform-origin: 50% 0%;
                            transform-origin: 50% 0%;
                }
                100% {
                    -webkit-transform: scale(1);
                            transform: scale(1);
                    -webkit-transform-origin: 50% 0%;
                            transform-origin: 50% 0%;
                }
                }
                @keyframes scale-up-top {
                0% {
                    -webkit-transform: scale(0.5);
                            transform: scale(0.5);
                    -webkit-transform-origin: 50% 0%;
                            transform-origin: 50% 0%;
                }
                100% {
                    -webkit-transform: scale(1);
                            transform: scale(1);
                    -webkit-transform-origin: 50% 0%;
                            transform-origin: 50% 0%;
                }
                }

                @-webkit-keyframes fade-in {
                0% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
                }
                @keyframes fade-in {
                0% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
                }


               @media (min-width: 1650px) {


                }

                @media (min-width: 1281px) and (max-width: 1650px) {







                }

                /*
                ##Device = Laptops, Desktops
                ##Screen = B/w 1025px to 1280px
                */

                @media (min-width: 1025px) and (max-width: 1280px) {


                }

                /*
                ##Device = Tablets, Ipads (portrait)
                ##Screen = B/w 768px to 1024px
                */

                @media (min-width: 768px) and (max-width: 1024px) {


                }

                /*
                ##Device = Tablets, Ipads (landscape)
                ##Screen = B/w 768px to 1024px
                */

                @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {


                }

                /*
                ##Device = Low Resolution Tablets, Mobiles (Landscape)
                ##Screen = B/w 481px to 767px
                */

                @media (min-width: 481px) and (max-width: 767px) {


                }

                /*
                ##Device = Most of the Smartphones Mobiles (Portrait)
                ##Screen = B/w 320px to 479px
                */

                @media (min-width: 320px) and (max-width: 480px) {




                }







                `