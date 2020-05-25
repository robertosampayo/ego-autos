import css from 'styled-jsx/css'
import { theme } from './theme'



export default css.global`


                /* Make clicks pass-through */
                #nprogress {
                pointer-events: none;
                }

                #nprogress .bar {
                background: #29d;

                position: fixed;
                z-index: 1031;
                top: 0;
                left: 0;

                width: 100%;
                height: 2px;
                }

                /* Fancy blur effect */
                #nprogress .peg {
                display: block;
                position: absolute;
                right: 0px;
                width: 100px;
                height: 100%;
                box-shadow: 0 0 10px #29d, 0 0 5px #29d;
                opacity: 1.0;

                -webkit-transform: rotate(3deg) translate(0px, -4px);
                    -ms-transform: rotate(3deg) translate(0px, -4px);
                        transform: rotate(3deg) translate(0px, -4px);
                }

                /* Remove these to get rid of the spinner */
                #nprogress .spinner {
                display: block;
                position: fixed;
                z-index: 1031;
                top: 15px;
                right: 15px;
                }

                #nprogress .spinner-icon {
                width: 18px;
                height: 18px;
                box-sizing: border-box;

                border: solid 2px transparent;
                border-top-color: #29d;
                border-left-color: #29d;
                border-radius: 50%;

                -webkit-animation: nprogress-spinner 400ms linear infinite;
                        animation: nprogress-spinner 400ms linear infinite;
                }

                .nprogress-custom-parent {
                overflow: hidden;
                position: relative;
                }

                .nprogress-custom-parent #nprogress .spinner,
                .nprogress-custom-parent #nprogress .bar {
                position: absolute;
                }

                @-webkit-keyframes nprogress-spinner {
                0%   { -webkit-transform: rotate(0deg); }
                100% { -webkit-transform: rotate(360deg); }
                }
                @keyframes nprogress-spinner {
                0%   { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
                }

        .onlyMobile {
            display: block!important;
        }
        .onlyMobileFlex {
            display: flex!important;
        }


        .onlyDesktopFlex {
            display: none!important;
        }

        .onlyDesktopFlex {
            display: flex!important;
        }

        @media (min-width: 1650px) {

            .onlyMobile {
                display: none!important;
            }

            .onlyMobileFlex {
                display: none!important;
            }

            .onlyDesktop {
                display: block!important;
            }

            .onlyDesktopFlex {
                display: flex!important;
            }


        }

        @media (min-width: 1281px) and (max-width: 1650px) {


            .onlyMobile {
                display: none!important;
            }
            .onlyMobileFlex {
                display: none!important;
            }

            .onlyDesktop {
                display: block!important;
            }

            .onlyDesktopFlex {
                display: flex!important;
            }
        }

        /*
        ##Device = Laptops, Desktops
        ##Screen = B/w 1025px to 1280px
        */

        @media (min-width: 1025px) and (max-width: 1280px) {

            .onlyMobile {
                display: none!important;
            }

            .onlyMobileFlex {
                display: none!important;
            }

            .onlyDesktop {
                display: block!important;
            }

            .onlyDesktopFlex {
                display: flex!important;
            }
        }

        /*
        ##Device = Tablets, Ipads (portrait)
        ##Screen = B/w 768px to 1024px
        */

        @media (min-width: 768px) and (max-width: 1024px) {
            .onlyMobile {
                display: none!important;
            }
            .onlyMobileFlex {
                display: none!important;
            }

            .onlyDesktop {
                display: block!important;
            }
            .onlyDesktopFlex {
                display: flex!important;
            }

        }

        /*
        ##Device = Tablets, Ipads (landscape)
        ##Screen = B/w 768px to 1024px
        */

        @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {

            .onlyMobile {
                display: none!important;
            }

            .onlyDesktop {
                display: block!important;
            }

            .onlyMobileFlex {
                display: none!important;
            }

            .onlyDesktopFlex {
                display: flex!important;
            }

        }

        /*
        ##Device = Low Resolution Tablets, Mobiles (Landscape)
        ##Screen = B/w 481px to 767px
        */

        @media (min-width: 481px) and (max-width: 767px) {
            .onlyDesktop {
                display: none!important;
            }

            .onlyDesktopFlex {
                display: none!important;
            }

        }

        /*
        ##Device = Most of the Smartphones Mobiles (Portrait)
        ##Screen = B/w 320px to 479px
        */

        @media (min-width: 320px) and (max-width: 480px) {

            .onlyDesktop {
                display: none!important;
            }

            .onlyDesktopFlex {
                display: none!important;
            }

        }







                `