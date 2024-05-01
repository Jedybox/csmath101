import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import icon from "../../assets/icon.png"

import ErrorPage from "../Error/ErrorPage";
import style from "./Semis_Problem.module.css"
import Foot from "../../widgets/foot";
import Task from "../../widgets/task";

function SemiProblem() {
    const topic = useParams()
    const topics = ['LinearFunction', 'FunctionsRelations', 'QuadraticFunctions']

    if (!topics.includes(topic.topic)) {
        return(<ErrorPage/>)
    } 
    
    const question = "A car travels at a constant speed of 120 miles per hour. Write a linear function to represent the distance traveled by the car after x hours. Find the distance traveled by the car in 7 hours. "
    
    const solution = "𝒇(𝒙) = 𝟏𝟐𝟎(𝒙) , where f(x) is distance in miles and t are the hours. <br />𝒇(𝟕) = 𝟏𝟐𝟎(𝟕) <br />𝒇(𝟕) = 𝟖𝟒𝟎 𝒎𝒑�"

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
                    <Task qts={question} ans={solution} num={1}/>
                    <Task qts={question} ans={solution} num={2}/>
                    <Task qts={question} ans={solution} num={3}/>
                    <Task qts={question} ans={solution} num={4}/>
                    <Task qts={question} ans={solution} num={5}/>
                    <Task qts={question} ans={solution} num={6}/>
                    <Task qts={question} ans={solution} num={7}/>
                    <Task qts={question} ans={solution} num={8}/>
                    <Task qts={question} ans={solution} num={9}/>
                    <Task qts={question} ans={solution} num={10}/>
                </div>
            </div>
            <Foot/>
        </>
    )
    
}

export default SemiProblem