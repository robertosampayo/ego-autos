import css from 'styled-jsx/css'
import { theme } from './theme'



export default css.global`


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