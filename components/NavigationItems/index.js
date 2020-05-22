import React, { useContext, useState, useEffect, Fragment, createRef } from 'react'
import { Item } from '../../components/Item'
import { theme } from '../../styles/theme'

export function NavigationItems (props) {




    return (

        <Fragment>

            <ul className='navigation-items'>
                {
                    props.items.map(function(item){

                        return <Item active='false' href='#'>{item}</Item>
                    })
                }

            </ul>
            <div className='line'></div>
            <style jsx>{`


                ul {
                    background: ${ props.gray ? theme.gray : theme.white};
                    list-style: none;
                    clear: both;
                    padding: 20px;
                    height: auto;
                    padding: 20px 55px 20px 0;
                    transform: ${ props.gray ? 'translateY(-2px)' : 'translateY(0px)'};
                }

                .line{
                    border-width: ${ props.gray ? '0px' : '1px'};
                    border-style: solid;
                    width: 85%;
                    margin: 0 auto;
                    border-color: gainsboro;
                }


                ul.navigation-items :global(li) {
                        margin: 0;
                        height: auto;
                        width: 100%;
                        padding: 0 0 20px 0;

                }

                ul.navigation-items :global(li a) {

                    font-family: ${theme.dark};
                    font-size: 20px;
                    justify-content: flex-end;
                    font-family: ${theme.font_regular};
                    letter-spacing: -0.1px
                }

            `}</style>

        </Fragment>


    )
}
