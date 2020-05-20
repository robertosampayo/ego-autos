import React from 'react'
import Link from 'next/link'
import itemStyles from './styles'

export const Item = ({ href = '#', children, active = false }) => (

   <li className={active ? '':'active'}>

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
