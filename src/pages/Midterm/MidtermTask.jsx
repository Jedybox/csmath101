import React from "react";
import Navi from "../../widgets/nav";
import Foot from "../../widgets/foot";
import { useParams } from "react-router-dom";

import style from "./MidtermTask.module.css"
import ErrorPage from "../Error/ErrorPage";
import MidTask from "./TaskCon";

function Tasks() {
    const topic = new useParams()

    var lesson = ""

    const testqt = "Imagine youre planning a garden with a rectangular hape. You have a total of 9 plants to arrange along one side of the garden. However, you want to sure that the arrangement allow each plant to have enough space to grow properly. To do this, you decided to calculate the width of the garden (represented by x) where the area of each plant's allocated space is greater than zero. If we denote the width of the garden as x, and the area of each plant's space as x<sup>2</sup>-6x+9, we want to find the values of x that ensure each plant has enough space to grow without overlapping? Determine the values of x that satisfy x<sup>2</sup>-6x+9"

    const sol = "This is a quadratic, inequality, and its solution lie outside the roots. First, find the roots: <br /> x<sup>2</sup> - 6x + 9 = (x - 3)<sup>2</sup> <br/> The only root is x = 3. Therefore, the inequality is true for x<3 and x>3 but not at x=3. So, the solution is x<3 or x>3."

    const wer = "x<3 or x>3"

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
            <header className={style.head}>
                <Navi/>
                <div className={style.TitleContainer}>
                    <h1 className={style.topicTitle}>{lesson}<br /> Problem</h1>
                </div>
            </header>
            <div className={style.taskContainer}>
                <MidTask num={1} qts={testqt} solu={sol} ans={wer}/>
            </div>
            <Foot/>
        </>
    )
}

export default Tasks