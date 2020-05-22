
import React, { useState, useEffect, useContext, Fragment } from 'react'


export const  getModelData = async (id) => {

    const [model, setModel] = useState(null)

    const res = await axios(
        'https://challenge.agenciaego.tech/models/'+id,
        {
            headers: {
                'Content-Type': 'application/json; charset=utf-8',

            },
        }
    )

        .then(function (response) {

            if (response.status == 200) {

                const model = response.data
                console.log(model)
                setModel(model)
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

        console.log(res)

    // Combine the data with the id
    return {
        id,
        ...model
    }
}