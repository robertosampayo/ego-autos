import React, { useState } from 'react'
import Link from 'next/link'
import itemStyles from './styles'

export function Item ({ href = '#', children, active = false, onlyDesktop=false }) {


    let adClass = ''
    if (onlyDesktop) {
        adClass = 'onlyDesktop'
    }


    return (

        <li className={active ? `active ${adClass}` : `${adClass}`}>

            <Link href={href}>
                <a className='semibold'>
                    {children}
                </a>
            </Link>


            <style jsx >
                {itemStyles}
            </style>
        </li>


    )



}

