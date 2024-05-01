import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import icon from "../../assets/icon.png"

import ErrorPage from "../Error/ErrorPage";
import style from "./Semis_Problem.module.css"
import Foot from "../../widgets/foot";

function SemiProblem() {
    const topic = useParams()
    const topics = ['LinearFunction', 'FunctionsRelations', 'QuadraticFunctions']

    if (!topics.includes(topic.topic)) {
        return(<ErrorPage/>)
    } 
        
    return(
        <>
            <nav className={style.SemNav}>
                <div className={style.nameIconHolder}>
                    <img src={icon} alt="icon" className={style.Icon}/>
                    <h1 className={style.name}>CSMath101</h1>
                </div>
                <div className={style.gobackContainer}>
                    <Link to="/Semi" id={style.ID}>Back</Link>
                </div>
            </nav>
            <h1 className={style.TopicTitle}>Functions <br /> and <br /> Relations</h1>
            <div className={style.parentProblemContainer}>
                <div className={style.TryIT}>
                    <p className={style.TryITChild}>Try it yourself</p>
                </div>
                <div className={style.ProblemContainer}>
                    <div className={style.Problem}>
                        <div className={style.Question}>
                            <p></p>
                        </div>
                        <div>
                            <button></button>
                        </div>
                    </div>
                </div>
            </div>
            <Foot/>
        </>
    )
    
}

export default SemiProblem