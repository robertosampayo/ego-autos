import React, { useState, createContext, useEffect } from 'react'


const SegmentContext = React.createContext([{}, () => { }]);

const SegmentProvider = (props) => {


    const [segment, setSegment] = useState(null);


    const value = {
        segment,
        setModelSegment: () => {
            setSegment('Autos')
        },
        setTodos: () => {
            setSegment('Todos')
        }

    }

    return (

        <SegmentContext.Provider value={value}>
            {props.children}

        </SegmentContext.Provider>

    );

}

export { SegmentContext, SegmentProvider };