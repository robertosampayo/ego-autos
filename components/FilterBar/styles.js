import css from 'styled-jsx/css'
import { theme, MessageTheme } from '../../styles/theme'


export default css`



                .semibold {font-family: ${theme.font_semibold};}
                .bold {font-family: ${theme.font_bold};}
                .regular {font-family: ${theme.font_regular};}

                        .filter-bar{
                            width: 100%;
                            height: 50px;
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            justify-content: flex-start;
                            border-width: 0 0 1px;
                            border-style: solid;
                            border-color: ${theme.gray};
                            padding: 0 0 5px;
                            position: relative;
                        }

                        .filter-bar ul{
                            display: flex;
                            width: 85%;
                            position: relative;
                            align-items: center;
                        }

                        .filter-bar > h3 {
                            width: 180px;

                        }

                        .filter-bar .item{
                            margin: 0 0 0 40px;
                            list-style: none;
                            cursor: pointer;
                        }

                        .filter-bar li h3 {
                            font-size: ${theme.font_regular};
                        }

                        .filter-bar .select-order{
                            position: relative;
                            right: 0;
                            padding: 0;
                            margin: 0;
                            cursor: pointer;
                        }

                        .filter-bar .active {
                            background: ${theme.greyLight};
                            padding: 10px 15px;
                            border-radius: 50px;
                            color: ${theme.dark};
                        }

                        textarea, input, select {
                            outline: none; -webkit-appearance: none; border: 0; background: transparent;
                            font-family: ${theme.font_regular};

                        }

                        h3, option {
                            font-family: ${theme.font_regular};
                            font-size: ${theme.h3size};
                        }

                        .order-input{
                            position: relative;
                            width: 100%;
                            display: flex;
                            justify-content: flex-end;

                        }
                        .models-input-mobile {
                            width: 50%;
                        }





















               @media (min-width: 1650px) {


                }

                @media (min-width: 1281px) and (max-width: 1650px) {


                        .filter-bar{
                            width: 100%;
                            height: 50px;
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            justify-content: flex-start;
                            border-width: 0 0 1px;
                            border-style: solid;
                            border-color: ${theme.grey};
                            padding: 0 0 5px;
                        }

                        .filter-bar ul{
                            display: flex;
                            width: 85%;
                            position: relative;
                            align-items: center;
                        }

                        .filter-bar > h3 {
                            width: 180px;

                        }



                        .filter-bar li h3 {
                            font-size: ${theme.font_regular};
                        }

                        .filter-bar select{
                            position: absolute;
                            right: 20px;
                            padding: 0;
                            margin: 0;
                        }

                        .filter-bar .active {
                            background: ${theme.greyLight};
                            padding: 0px 20px;
                            border-radius: 50px;
                            color: ${theme.dark};
                        }

                        textarea, input, select {
                            outline: none; -webkit-appearance: none; border: 0; background: transparent;
                            font-family: ${theme.font_regular};

                        }

                        h3, option {
                            font-family: ${theme.font_regular};
                            font-size: ${theme.h3size};
                        }

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

                        .filter-bar .item {
                             text-align: center;
                        }

                        .filter-bar .item{
                            padding: 5px;
                            text-align: center;
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
                        .filter-bar .item {
                             text-align: center;
                        }

                        .filter-bar .item{
                            padding: 5px;
                            text-align: center;
                        }

                }

                /*
                ##Device = Most of the Smartphones Mobiles (Portrait)
                ##Screen = B/w 320px to 479px
                */

                @media (min-width: 320px) and (max-width: 480px) {

                        .filter-bar{
                            height: 40px;
                        }




                }


                `


