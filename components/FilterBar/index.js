import React, { useContext, useEffect, Fragment } from 'react'
import Head from 'next/head'
import styles from './styles'
import { ModelContext } from '../../providers/ModelProvider'
import { SegmentContext } from '../../providers/SegmentProvider'


 export const FilterBar = () => {

  const {segment, updateSegment} = useContext(ModelContext);

  const showAutos = () => {

    updateSegment('Autos')
  }

  const showAll = () => {

    updateSegment('Todos')
  }

  return (


    <Fragment>

            <div className='filter-bar'>
            <h3 className='semibold'>Filtrar por</h3>
            <ul>
                <li className='active' onClick={(e) => { e.preventDefault(); showAll(); }}><h3 >Todos</h3></li>
                <li onClick={(e) => {e.preventDefault(); showAutos();}}><h3>Autos</h3></li>
                <li><h3>Pickups y Comerciales</h3></li>
                <li><h3>SUVs y Crossovers</h3></li>
                <select className='semibold'>
                    <option default='true'>Ordenar Por</option>
                </select>
            </ul>
            </div>
            <style jsx>{styles}</style>

    </Fragment>


  )
}
