import React, {useState, useRef, createRef} from 'react'
import Link from 'next/link'
import styles from './styles'
import { AiOutlineMenu } from 'react-icons/ai'
import { RiCloseLine } from 'react-icons/ri'
import {Item} from '../../components/Item'
import { TimelineLite, Power4, CSSPlugin, gsap } from 'gsap'
import { NavigationItems } from '../../components/NavigationItems'
import { theme } from '../../styles/theme'

export const Menu = () => {


    const [navigate, setNavigate] = useState(false)
    const [gsapTL] = useState(new TimelineLite({}))
    const navigation = createRef()

    const openNavigation = () => {
        // console.log(navigation.current)
        gsapTL.to(navigation.current, { duration: 0.6, css: { transform: 'translateX(0%)' } })
    }

    const closeNavigation = () => {
        gsapTL.to(navigation.current, { duration: 0.6, css: { transform: 'translateX(100%)' } })
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

                                    <Item href='/'>Modelos</Item>
                                    <Item active={true} href='/'>Ficha Tecnica</Item>


                                    <span className='menu-logo' onClick={(e) => { openNavigation() }}>
                                        Menú <AiOutlineMenu size='25' style={{margin :'0 0 0 20px'}} />

                                    </span>
                            </ul>

                            <div className='navigation' ref={navigation}>
                                <div className='cerrar' onClick={(e) => { closeNavigation() }}><p>Cerrar  </p><span><RiCloseLine /></span></div>
                                <NavigationItems items={menu1}  />
                                <NavigationItems items={menu2}  />
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
                background: #fff;
                height: 100vh;
                top: 0;
                display: flex;
                flex-direction: column;
                transform: translateX(100%);
                z-index: 999;
            }



            .navigation .cerrar {
                display: flex;
                justify-content: flex-end;
                flex-direction: row;
                cursor: pointer;
                padding: 20px;
            }

            .navigation .cerrar > p {
                margin: 0 10px 0 0;
                font-size: 14px;
                font-family: ${theme.font_regular};

            }

        `}</style>




            </div>



    )





}
