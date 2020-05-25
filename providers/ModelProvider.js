import React, { useState, createContext, useEffect } from 'react'
const axios = require('axios');

const ModelContext = React.createContext([{}, () => { }]);

const ModelProvider = (props) => {

    // const [models, setModels] = useState([])

    const [models, setModels] = useState(null);
    const [segment, setSegment] = useState(null);
    const [data, setData] = useState(null);
    const [order, setOrder] = useState(null)


    const AUTOS = 'Autos'
    const PICKUPS = 'Pickups y Comerciales'
    const SUVS = 'SUVs y Crossovers'
    const TODOS = 'Todos'

    const getModels = async () => {


        const res = await axios(
              'https://challenge.agenciaego.tech/models',
              {
                headers: {
                  'Content-Type': 'application/json; charset=utf-8',

                },
              }
        )

        .then(function(response){

           if (response.status == 200) {

               const models = response.data
               setData(models)
               setModels(models)
           }

            if (response.status !== 200) {
                console.error(response)
                throw new Error('Error al conectarse con el API')
            }

        })

        .catch(function (error) {
            console.log('error')
            console.log(error)

        })






    }


    useEffect(() => { getModels(); }, []);

    const value = {
        models,
        segment,
        updateModels: (models) => {
            setModels(models)
        },
        updateSegment: (segment) => {
            setSegment(segment)

            if (segment === AUTOS) {

                var modelsFiltered = data.filter(function (model) { return model.segment === AUTOS })
                setModels(modelsFiltered)
            }

            if (segment === PICKUPS) {

                var modelsFiltered = data.filter(function (model) { return model.segment === PICKUPS })
                setModels(modelsFiltered)
            }

            if (segment === SUVS) {

                var modelsFiltered = data.filter(function (model) { return model.segment === SUVS })
                setModels(modelsFiltered)
            }

            if (segment === TODOS) {


                setModels(data)

            }
        },
        updateOrder: (order) => {
            console.log(order)

            if (order == 0) {
                var modelsFiltered = [...models].sort((a, b) => a['id'] - b['id'])
                setModels(modelsFiltered)

            }
            if (order == 1) {

                var modelsFiltered = [...models].sort((a, b) => a['price'] - b['price'])
                setModels(modelsFiltered)
            }
            if (order == 2) {

                var modelsFiltered = [...models].sort((a, b) =>  b['price'] - a['price'])
                setModels(modelsFiltered)
            }
            if (order == 3) {

                var modelsFiltered = [...models].sort((a, b) =>  b['year'] - a['year'])
                setModels(modelsFiltered)
            }

            if (order == 4) {

                var modelsFiltered = [...models].sort((a, b) =>  a['year'] - b['year'])
                setModels(modelsFiltered)
            }
        }

    }



    return (

        <ModelContext.Provider value={value}>
            {props.children}

        </ModelContext.Provider>

    );

}

export { ModelContext, ModelProvider };

