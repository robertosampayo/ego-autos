import React, { useState, useEffect, useContext, Fragment } from 'react'
import { Model } from '../../components/Model'
import { ModelContext } from '../../providers/ModelProvider'
import { SegmentContext } from '../../providers/SegmentProvider'

export const ModelsContainer = (props) => {

    const {models, updateModels} = useContext(ModelContext);
    const [segment, setSegment] = useContext(SegmentContext);

    useEffect(() => {

        updateModels(models)


    }, [models, segment])




    return (


        <Fragment>

                    <section className='models-container'>

                {models && models.map(model => {



                    if (model.segment === segment) {

                        return (

                            <Model key={model.id}
                                name={model.name}
                                price={model.price}
                                year={model.year}
                                image={model.thumbnail}
                                />

                        )
                    }

                    return (

                        <Model key={model.id}
                            name={model.name}
                            price={model.price}
                            year={model.year}
                            image={model.thumbnail}
                        />

                    )


                }


                ) }
{/*
{models && models.map(function (val, i, model) {

    // console.log(val.id);
    <Model key={val.id}
        name={val.name}
        price={val.year}
        year={val.year}
        image={val.thumbnail}
    />

})

}*/}



                    </section>


                    <style jsx>
                        {`

                            .models-container{
                                padding: 75px 0 150px 0;
                                display: flex;
                                flex-direction: row;
                                flex-wrap: wrap;
                                justify-content: stretch;
                            }


                        `}
                    </style>




        </Fragment>




    )
}
