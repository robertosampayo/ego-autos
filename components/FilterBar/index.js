import React, { useContext, useState, useEffect, Fragment, createRef } from 'react'
import Head from 'next/head'
import styles from './styles'
import { ModelContext } from '../../providers/ModelProvider'
import { SegmentContext, SegmentProvider } from '../../providers/SegmentProvider'
import animations from '../../styles/animations'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import  {Select} from '../Select'
import { theme } from '../../styles/theme'

 export const FilterBar = () => {

  const {updateSegment, updateOrder} = useContext(ModelContext);
  const [segment, setSegment] = useState('Todos')
  const [orderTitle, setOrderTitle] = useState('Ordernar por')
  const [modelsTitle, setModelsTitle] = useState('Filtrar por')
  const  select = createRef()
  const [openSelectOrder, setOpenSelectOrder] = useState(false)
  const [openSelectModels, setOpenSelectModels] = useState(false)

  const showSegment = (model) => {

    updateSegment(model)
    setSegment(model)

  }

  const orderModels = (value) => {
    updateOrder(value)
  }

  const changeTitleOrder = (e) => {
    const title = e.target.innerHTML

    console.log(title)
    if (title === 'Nada') {
      setOrderTitle('Ordernar Por')
      showSelectOrder()
    }else{

      setOrderTitle(title)
      showSelectOrder()
    }
  }

   const changeTitleModel = (e) => {
     const title = e.target.innerText
     if (title === 'Todos') {
       setModelsTitle('Ordernar Por')
       showSelectModels()
     } else {

       setModelsTitle(title)
       showSelectModels()
     }
   }


   const showSelectOrder = () => {

     setOpenSelectOrder(!openSelectOrder)

   }


   const showSelectModels = () => {

     setOpenSelectModels(!openSelectModels)

   }




  return (


    <Fragment>

            <div className='filter-bar'>
            <h3 className='semibold onlyDesktopFlex'>Filtrar por</h3>
            <ul className='models-input onlyDesktopFlex'>
              {segment === 'Todos'

                ? <li className='item active ' onClick={(e) => { e.preventDefault(); showSegment('Todos'); }}><h3 >Todos</h3></li>
                : <li className='item' onClick={(e) => { e.preventDefault(); showSegment('Todos'); }}><h3 >Todos</h3></li>

              }

              {segment === 'Autos'

                ? <li className='item active ' onClick={(e) => { e.preventDefault(); showSegment('Autos'); }}><h3 >Autos</h3></li>
                : <li className='item' onClick={(e) => { e.preventDefault(); showSegment('Autos'); }}><h3 >Autos</h3></li>

              }

              {segment === 'Pickups y Comerciales'

                ? <li className='item active ' onClick={(e) => { e.preventDefault(); showSegment('Pickups y Comerciales'); }}><h3 >Pickups y Comerciales</h3></li>
                : <li className='item' onClick={(e) => { e.preventDefault(); showSegment('Pickups y Comerciales'); }}><h3 >Pickups y Comerciales</h3></li>

              }

              {segment === 'SUVs y Crossovers'

                ? <li className='item active ' onClick={(e) => { e.preventDefault(); showSegment('SUVs y Crossovers'); }}><h3 >SUVs y Crossovers</h3></li>
                : <li className='item' onClick={(e) => { e.preventDefault(); showSegment('SUVs y Crossovers'); }}><h3 >SUVs y Crossovers</h3></li>

              }

            </ul>


            <div className='models-input onlyMobile'>
              <div className='custom-select'>

                <div className='models-button' onClick={(e) => { e.preventDefault; showSelectModels(true) }} >
                <h3>{modelsTitle} </h3> {openSelectModels ? <FiChevronUp /> : <FiChevronDown />}
                </div>
                <Select select={openSelectModels} position='left' top='38px'>
                  <li onClick={(e) => { e.preventDefault(); showSegment('Todos'); changeTitleModel(e); }} className='gray-first'><p>Todos</p></li>
                  <li onClick={(e) => { e.preventDefault(); showSegment('Autos');  changeTitleModel(e); }}><p>Autos</p></li>
                  <li onClick={(e) => { e.preventDefault(); showSegment('Pickups y Comerciales');  changeTitleModel(e); }}><p>Pickups y Comerciales</p></li>
                  <li onClick={(e) => { e.preventDefault(); showSegment('SUVs y Crossovers');  changeTitleModel(e); }}><p>SUVs y Crossovers</p></li>

                </Select>

              </div>

            </div>







            <div className='order-input'>
              <div className='custom-select'>

                <div className='order-button' onClick={(e) => { e.preventDefault; showSelectOrder(true) }} >
                <h3>{orderTitle} </h3> {openSelectOrder ? <FiChevronUp /> : <FiChevronDown />}
                </div>
                <Select select={openSelectOrder} position='right' top='30px'>
                    <li onClick={(e) => { e.preventDefault(); orderModels('0'); changeTitleOrder(e); }} className='gray-first'><p>Nada</p></li>
                    <li onClick={(e) => { e.preventDefault(); orderModels('1'); changeTitleOrder(e);} }><p>De menor a mayor precio</p></li>
                    <li onClick={(e) => { e.preventDefault(); orderModels('2'); changeTitleOrder(e);} }><p>De mayor a menor precio</p></li>
                    <li onClick={(e) => { e.preventDefault(); orderModels('3'); changeTitleOrder(e);} }><p>Más nuevos primero</p></li>
                    <li onClick={(e) => { e.preventDefault(); orderModels('4'); changeTitleOrder(e);} }><p>Más viejos primero</p></li>

                </Select>

              </div>

            </div>

            </div>
            <style jsx>{animations}</style>
            <style jsx>{styles}</style>
              <style jsx> {
 `
                .gray-first {
                    background: ${theme.gray};
                    border-radius: 5px 5px 0 0;
                }

                 .order-button{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                }
                 .models-button{
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    cursor: pointer;
                }
                 .custom-select :global(li) {
                    padding: 0 10px;
                    cursor: pointer;
                    border-style: solid;
                    border-color: ${theme.greyLight};
                    border-width: 1px 0 0px;
                    margin: 0;

                }

                .custom-select :global(li p){
                    font-family: ${theme.font_regular};
                    font-size: ${theme.psize};
                    line-height: 35px;
                    letter-spacing: -0.1px;
                    text-align: left;

                }

                .custom-select h3{
                    font-family: ${theme.font_semibold};
                    font-size: ${theme.h3size};
                    line-height: 14px;
                    letter-spacing: -0.08px;
                    text-align: left;
                    margin: 0 10px 0 0;

                }

                .models-input, .order-input {
                  width: 50%;
                }

               @media (min-width: 1650px) {

                    .custom-select :global(li) {
                        padding: 0 20px;
                    }
                }

                @media (min-width: 1281px) and (max-width: 1650px) {

                    .custom-select :global(li) {
                        padding: 0 20px;
                    }

                }

                /*
                ##Device = Laptops, Desktops
                ##Screen = B/w 1025px to 1280px
                */

                @media (min-width: 1025px) and (max-width: 1280px) {

                    .custom-select :global(li) {
                        padding: 0 20px;
                    }
                }


                @media (min-width: 320px) and (max-width: 480px) {


                    .models-input, .order-input {
                      width: 50%;
                    }

                    .models-input {
                        padding: 0 20px 0 0;
                    }


                }

 `
              }

              </style>
    </Fragment>


  )
}
