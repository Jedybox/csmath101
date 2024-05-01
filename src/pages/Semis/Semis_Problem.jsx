import React from "react";
import { useParams } from "react-router-dom";

import ErrorPage from "../Error/ErrorPage";

function SemiProblem() {
    const topic = useParams()
    const topics = ['LinearFunction', 'FunctionsRelations', 'QuadraticFunctions']

    if (!topics.includes(topic.topic)) {
        return(<ErrorPage/>)
    } 
        
    return(
        <>

        </>
    )
    
}

export default SemiProblem