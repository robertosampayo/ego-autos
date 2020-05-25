import React, { useState, Fragment } from 'react'
import Link from 'next/link'
import styles from './styles'
import { TimelineLite, Power4, CSSPlugin, gsap } from 'gsap'
import { theme } from '../../styles/theme';
import animations  from '../../styles/animations'


export function Model ({image='', price='', year='', name='', id='', segment=null}) {

    gsap.registerPlugin(CSSPlugin)
    const [gsapTL] = useState(new TimelineLite({}));
    const [colorTL] = useState(new TimelineLite({}));

    const show = (e) => {
        let button = e.currentTarget.querySelector('button')
        let h2 = e.currentTarget.querySelector('h2')
        gsapTL.to(button, { duration: 0.1, css: { opacity: 1, transform: 'translateY(3%)' }, })
        colorTL.to(h2, { duration: 0.1, css: {  color: theme.red }, })
    }

    const hide = (e) => {
        let button = e.currentTarget.querySelector('button')
        let h2 = e.currentTarget.querySelector('h2')
        gsapTL.to(button, { duration: 0.1, css: { opacity: 0, transform: 'translateY(-3%)' }, })
        colorTL.to(h2, { duration: 0.1, css: { color: 'initial' }, })
    }

    return (

        <Fragment>


            <div className='model fade-in' onMouseEnter={(e) => { e.preventDefault(); show(e) }} onMouseLeave={(e) => { e.preventDefault(); hide(e) }}>
                <h2 className='semibold' >{name}</h2>
                <p>{year} | ${price}</p>
                <img src={'http://challenge.agenciaego.tech'+image}></img>
                <button>Ver Modelo</button>
            </div>


            <style jsx>{animations}</style>
            <style jsx>{styles}</style>
        </Fragment>

    )



}
