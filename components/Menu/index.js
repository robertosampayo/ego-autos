import React from 'react'
import Link from 'next/link'
import styles from './styles'
import { AiOutlineMenu } from 'react-icons/ai'
import {Item} from '../../components/Item'

export const Menu = () => (
    <div className='menu-container'>


                    <nav>

                        <div className='logo'><Link href='/'><a ><img src='/imgs/logo.svg' className='logo' alt='logo-institutotomas' /></a></Link></div>
                        <ul className='menu'>

                                <Item href='/'>Modelos</Item>
                                <Item active={true} href='/'>Ficha Tecnica</Item>


                                <span className='menu-logo' onClick={(e) => {  }}>
                                    Menú <AiOutlineMenu size='25' style={{margin :'0 0 0 20px'}} />

                                </span>
                        </ul>



                    </nav>



        <style jsx>{styles}</style>
    </div>


)
