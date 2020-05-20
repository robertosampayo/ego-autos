import css from 'styled-jsx/css'
import { theme } from '../../styles/theme'



export default css.itemStyles`



                li {
                    margin: 0 20px 0 0;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    width: 126px;
                    justify-content: center;
                }

                li.active {
                    border-style: solid;
                    border-width: 0 0 3px;
                    border-color: ${theme.red};
                }

                li.active a {
                    color: ${theme.red};
                }

                li a{
                    display: inline-block;
                    padding: 0px 0px 10px 0;
                    position: relative;
                    transform: translateY(5px);
                    width: 100%;
                    height: 100%;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }









                `