import React, { useState, useEffect, useContext, Fragment } from 'react'
import { Model } from '../../components/Model'
import { ModelContext } from '../../providers/ModelProvider'
import { SegmentContext } from '../../providers/SegmentProvider'
import { Button } from '../Button'
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

                                            <Button key={model.id} href={`/${model.id}`}>

                                                <Model key={`model-${model.id}`}
                                                    name={model.name}
                                                    price={model.price}
                                                    year={model.year}
                                                    image={model.thumbnail}
                                                    />

                                            </Button>


                                        )
                                    }

                                    return (
                                        <Button key={model.id} href={`/${model.id}`}>

                                            <Model key={`model-${model.id}`}
                                                name={model.name}
                                                price={model.price}
                                                year={model.year}
                                                image={model.thumbnail}
                                            />

                                        </Button>

                                    )


                                }


                                ) }




                    </section>


                    <style jsx>
                        {`

                            .models-container{
                                padding: 75px 0 150px 0;
                                display: flex;
                                flex-direction: row;
                                flex-wrap: wrap;
                                justify-content: center;
                            }

                            @media (min-width: 320px) and (max-width: 480px) {
                                .models-container{

                                    justify-content: center;

                                }

                            }

                        `}
                    </style>




        </Fragment>




    )
}
