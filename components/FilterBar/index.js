import React, { useContext, useState, useEffect, Fragment, createRef } from 'react'
import Head from 'next/head'
import styles from './styles'
import { ModelContext } from '../../providers/ModelProvider'
import { SegmentContext, SegmentProvider } from '../../providers/SegmentProvider'
import animations from '../../styles/animations'
import { FiChevronDown } from 'react-icons/fi'


 export const FilterBar = () => {

  const {updateSegment, updateOrder} = useContext(ModelContext);
  const [segment, setSegment] = useState('Todos')
  const  select = createRef()

  const showSegment = (model) => {

    updateSegment(model)
    setSegment(model)
    if (model === 'Todos') {

      select.current.value = 0
    }
  }

  const orderModels = (e) => {
    updateOrder(e.target.value)
  }


  return (


    <Fragment>

            <div className='filter-bar'>
            <h3 className='semibold'>Filtrar por</h3>
            <ul>
              {segment === 'Todos'

                ? <li className='active ' onClick={(e) => { e.preventDefault(); showSegment('Todos'); }}><h3 >Todos</h3></li>
                : <li className='' onClick={(e) => { e.preventDefault(); showSegment('Todos'); }}><h3 >Todos</h3></li>

              }

              {segment === 'Autos'

                ? <li className='active ' onClick={(e) => { e.preventDefault(); showSegment('Autos'); }}><h3 >Autos</h3></li>
                : <li className='' onClick={(e) => { e.preventDefault(); showSegment('Autos'); }}><h3 >Autos</h3></li>

              }

              {segment === 'Pickups y Comerciales'

                ? <li className='active ' onClick={(e) => { e.preventDefault(); showSegment('Pickups y Comerciales'); }}><h3 >Pickups y Comerciales</h3></li>
                : <li className='' onClick={(e) => { e.preventDefault(); showSegment('Pickups y Comerciales'); }}><h3 >Pickups y Comerciales</h3></li>

              }

              {segment === 'SUVs y Crossovers'

                ? <li className='active ' onClick={(e) => { e.preventDefault(); showSegment('SUVs y Crossovers'); }}><h3 >SUVs y Crossovers</h3></li>
                : <li className='' onClick={(e) => { e.preventDefault(); showSegment('SUVs y Crossovers'); }}><h3 >SUVs y Crossovers</h3></li>

              }

              <div className='order-input'>
                <select ref={select} className='semibold' onChange={(e) => orderModels(e)}>
                    <option value='0' selected>Ordernar Por</option>
                    <option value='1'>De menor a mayor precio</option>
                    <option value='2'>De mayor a menor precio</option>
                    <option value='3'>Más nuevos primero</option>
                    <option value='4'>Más viejos primero</option>

                </select>
                <FiChevronDown />


              </div>
            </ul>
            </div>
            <style jsx>{animations}</style>
            <style jsx>{styles}</style>

    </Fragment>


  )
}
