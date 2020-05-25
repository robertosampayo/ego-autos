import React, {useState, useRef, createRef, useEffect} from 'react'
import Link from 'next/link'
import styles from './styles'
import { AiOutlineMenu } from 'react-icons/ai'
import { RiCloseLine } from 'react-icons/ri'
import {Item} from '../../components/Item'
import { timeline, Power4, CSSPlugin, gsap } from 'gsap'
import { NavigationItems } from '../../components/NavigationItems'
import { theme } from '../../styles/theme'
import { useRouter, withRouter } from 'next/router';


export const Menu = () => {

    gsap.registerPlugin(CSSPlugin)
    const { query: { id } } = useRouter();
    const [navigate, setNavigate] = useState(false)
    const [gsapTL] = useState(gsap.timeline({}))
    const navigation = createRef()
    const navigationMob = createRef()

    const openNavigation = () => {
        // console.log(navigation.current)
        gsapTL.to(navigation.current, { duration: 0.1, css: { display: 'block' } })
        gsapTL.to(navigation.current, { duration: 0.6, css: { transform: 'translateX(0%)' } })
    }

    const closeNavigation = () => {
        gsapTL.to(navigation.current, { duration: 0.6, css: { transform: 'translateX(110%)' } })
        gsapTL.to(navigation.current, { duration: 0.1, css: { display: 'block' } })

    }

    const openNavigationMob = () => {
        // console.log(navigation.current)
        gsapTL.to(navigationMob.current, { duration: 0.1, css: { display: 'block' } })
        gsapTL.to(navigationMob.current, { duration: 0.6, css: { transform: 'translate(0, 60px)' } })
    }

    const closeNavigationMob = () => {
        gsapTL.to(navigationMob.current, { duration: 0.6, css: { transform: 'translate(110%, 60px)' } })
        gsapTL.to(navigationMob.current, { duration: 0.1, css: { display: 'none' } })
    }

    const menu1 = ['Modelos', 'Servicios y Accesorios', 'Financiación','Reviews y Comunidad']
    const menu2 = ['Toyota Mobility Service', 'Toyota Gazoo Racing', 'Toyota Híbridos']
    const menu3 = ['Concesionarios', 'Test Drive', 'Contacto']
    const menu4 = ['Actividades', 'Servicios al Cliente', 'Ventas Especiales', 'Innovación']



    return (



        <div className='menu-container'>


                        <nav>

                            <div className='logo'><Link href='/'><a ><img src='/imgs/logo.svg' className='logo' alt='logo-institutotomas' /></a></Link></div>
                            <ul className='menu'>

                                    <Item onlyDesktop={true} active={id ? false : true} href='/'>Modelos</Item>
                                    <Item onlyDesktop={true} active={id ? true : false}  href='/'>Ficha Tecnica</Item>


                                    <span className='menu-logo onlyDesktopFlex' onClick={(e) => { openNavigation() }}>
                                        <p>Menú</p>  <AiOutlineMenu size='25' style={{margin :'0 0 0 20px'}} />

                                    </span>

                                    <span className='menu-logo onlyMobileFlex' onClick={(e) => { openNavigationMob() }}>
                                        Menú <AiOutlineMenu size='25' style={{ margin: '0 0 0 20px' }} />

                                    </span>
                            </ul>

                            <div className='navigation onlyDesktop' ref={navigation}>
                                <div className='cerrar' onClick={(e) => { closeNavigation() }}><p>Cerrar  </p><span><RiCloseLine /></span></div>
                                <NavigationItems items={menu1}  />
                                <NavigationItems items={menu2}  />
                                <NavigationItems items={menu3} />
                                <NavigationItems items={menu4} gray />
                            </div>

                            <div className='navigation' ref={navigationMob}>
                                <div className='cerrar' onClick={(e) => { closeNavigationMob() }}><p>Cerrar  </p><span><RiCloseLine /></span></div>
                                <NavigationItems items={menu1} />
                                <NavigationItems items={menu2} />
                                <NavigationItems items={menu3} />
                                <NavigationItems items={menu4} gray />
                            </div>


                        </nav>
                <style jsx>{styles}</style>

        <style jsx>{`

            .navigation {
                position: absolute;
                right: 0;
                width: 390px;
                background: ${theme.whiteGray};
                height: auto;
                top: 0;
                display: flex;
                flex-direction: column;
                transform: translateX(110%);
                z-index: 999;
                -webkit-box-shadow: 0px 1px 10px -1px rgba(0,0,0,0.75);
                -moz-box-shadow: 0px 1px 10px -1px rgba(0,0,0,0.75);
                box-shadow: 0px 1px 10px -1px rgba(0,0,0,0.75);
                display: none;

            }



            .navigation .cerrar {
                display: flex;
                justify-content: flex-end;
                flex-direction: row;
                cursor: pointer;
                padding: 20px;
                background: ${theme.whiteGray};
            }

            .navigation .cerrar > p {
                margin: 0 10px 0 0;
                font-size: 14px;
                font-family: ${theme.font_regular};

            }

            @media (min-width: 481px) and (max-width: 767px) {

                .navigation {
                    transform: translate(110%, 60px);
                }


            }


            @media (min-width: 320px) and (max-width: 480px) {

                .navigation {
                    transform: translate(110%, 60px);
                    box-shadow: none;
                    border-style: solid;
                    border-width: 1px 0 0 0;
                    border-color: ${theme.greyLight};
                    display: none;

                }


            }



        `}</style>




            </div>



    )





}

