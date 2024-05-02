import React from "react";
import Navi from "../../widgets/nav";
import { useParams } from "react-router-dom";

import style from "./MidtermTask.module.css"
import ErrorPage from "../Error/ErrorPage";

function Tasks() {
    const topic = new useParams()

    var lesson = ""

    if (topic.topic === "Equations-and-Inequalities") {
        var lesson = "Equations and Inequalities"
    } else if (topic.topic === "Basic-Algebraic-Concepts") {
        var lesson = "Basic Algebraic Concepts"
    } else if (topic.topic === "Systems-of-Linear-Equations-and-Matrices") {
        var lesson = "Systems of Linear Equations and Matrices"
    } else {
        return(<ErrorPage/>)
    }

    return (
        <>
            <header>
                <Navi/>
                <div className={style.TitleContainer}>
                    <h1 className={style.topicTitle}>{lesson}<br /> Problem</h1>
                </div>
            </header>
        </>
    )
}

export default Tasks