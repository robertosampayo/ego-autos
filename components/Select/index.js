import Head from 'next/head'
import { Fragment, useEffect, useState } from 'react'
import { theme } from '../../styles/theme'


export const Select = ({ children, select=false, position='left', top='0px' }) => {







    return (
        <Fragment>


                {select &&
                    <ul>

                            {children}
                            {/* <li value='1' className='white-item'><p>De menor a mayor precio</p></li>
                            <li value='2' className='white-item'><p>De mayor a menor precio</p></li>
                            <li value='3' className='white-item'><p>Más nuevos primero</p></li>
                            <li value='4' className='white-item'><p>Más viejos primero</p></li> */}
                    </ul>

                }

            <style jsx>{`




                ul {
                    list-style: none;
                    position: absolute;
                    right: 0;
                    ${position==='left'? 'left: 0;':'right: 0;'}
                    top: ${top};
                    text-align: right;
                    width: 158px;
                    background: ${theme.background};
                    border-radius: 5px;
                    -webkit-box-shadow: 0px 5px 17px -3px rgba(0,0,0,0.4);
                    -moz-box-shadow: 0px 5px 17px -3px rgba(0,0,0,0.4);
                    box-shadow: 0px 5px 17px -3px rgba(0,0,0,0.4);
                    z-index: 99999;
                }





               @media (min-width: 1650px) {

                    ul {
                        width: 170px;
                    }
                }

                @media (min-width: 1281px) and (max-width: 1650px) {

                    ul {
                        width: 170px;
                    }

                }

                /*
                ##Device = Laptops, Desktops
                ##Screen = B/w 1025px to 1280px
                */

                @media (min-width: 1025px) and (max-width: 1280px) {

                    ul {
                        width: 170px;
                    }
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







            `}</style>
        </Fragment>


    )
}
