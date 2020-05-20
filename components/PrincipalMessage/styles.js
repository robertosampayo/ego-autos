
import css from 'styled-jsx/css'
import { theme, MessageTheme } from '../../styles/theme'


export default css`




                .principal-message{
                    height: 40vh;
                    width: 100%;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                }

                .principal-message h1{
                    font-size: ${MessageTheme.h1size};
                    color: ${theme.darkLight};
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

