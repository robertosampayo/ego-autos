import css from 'styled-jsx/css'
import { theme, MessageTheme } from '../../styles/theme'


export default css.global`

                * {
                padding: 0;
                margin: 0;
                box-sizing: border-box;
                }

                html { background: ${theme.background};     min-width: 320px;}

                body {
                    margin:0px;
                    padding:0px;
                    overflow-x: hidden !important;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    background: ${theme.background};
                    width: 100vw;
                    min-width: 320px;
                }

                .main{
                    flex: 1 0 auto;
                    min-height: 100vh;
                    padding: 0px;
                    width: 100vw;
                    height: auto;
                    overflow: hidden;
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;

                }

                .home-container {

                    width: 75.5%;
                    height: auto;
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    flex-direction: column;

                }




                .principal-message{
                    height: 40vh;
                    width: 100%;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                }

                .principal-message h1{
                    font-size: 50px;
                }

                .italic{
                    font-family: ${theme.font_italic};
                }

                .regular{
                    font-family: ${theme.font_regular_important};
                }

                .strong {
                    font-weight: 600;
                }

                *:focus { outline:none}

                a{
                    text-decoration: none;
                    color: ${theme.dark};
                }



                @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');


                h1{font-family: ${theme.font_bold};}
                h3{font-family: ${theme.font_semibold};}
                p, span, a {font-family: ${theme.font_regular}; color: ${theme.dark};}

                .active {
                    color: ${theme.red};
                }

                .semibold {font-family: ${theme.font_semibold};}
                .bold {font-family: ${theme.font_bold};}
                .regular {font-family: ${theme.font_regular};}



                footer {
                    height: 50px;
                    width: 10ovw;
                    background: ${theme.dark};
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

                    .home-container {
                        width: 90%;
                    }
                }

                /*
                ##Device = Tablets, Ipads (portrait)
                ##Screen = B/w 768px to 1024px
                */

                @media (min-width: 768px) and (max-width: 1024px) {

                    .home-container {
                        width: 90%;
                    }
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

                        .home-container {
                            width: 90%;
                        }


                }







                `