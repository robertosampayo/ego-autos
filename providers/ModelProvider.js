import React, { useState, createContext, useEffect } from 'react'


const ModelContext = React.createContext([{}, () => { }]);

const ModelProvider = (props) => {

    // const [models, setModels] = useState([])

    const [models, setModels] = useState(null);
    const [segment, setSegment] = useState(null);
    const [data, setData] = useState(null);

    const getModels = async () => {

        const res = await fetch('http://challenge.agenciaego.tech/models', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })

        const models = await res.json()
        // var modelsFiltered = models.filter(function(model) { return model.segment === 'Autos' })
        // setModels(modelsFiltered)
        setData(models)
        setModels(models)
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

            if (segment === 'Autos') {

                var modelsFiltered = data.filter(function (model) { return model.segment === 'Autos' })
                setModels(modelsFiltered)
            }

            if (segment === 'Todos') {


                setModels(data)

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