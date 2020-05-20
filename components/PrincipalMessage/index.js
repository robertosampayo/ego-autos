import Head from 'next/head'
import styles from './styles'
import { Fragment } from 'react'

export const PrincipalMessage = ({message}) => {
  return (
      <Fragment>

        <div className='principal-message'>

            <h1>{message}</h1>


        </div>

        <style jsx>{styles}</style>
      </Fragment>


  )
}


