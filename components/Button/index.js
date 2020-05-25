import React from 'react'
import Link from 'next/link'

export const Button = ({ href = '#', children }) => (



        <Link href={href}>
            <a>
                {children}
            </a>
        </Link>



)
