import React from "react";

import style from './TaskCon.module.css'

function MidTask(prop) {

    var down = false
    const qs = "qts1" + prop.num
    const ids = "qts" + prop.num
    
    const moveIt = () => {
        if (!down) {
            document.getElementById(qs).style.top = "270px";
            document.getElementById(ids).innerHTML = "Close"
            down = true
        } else {
            document.getElementById(qs).style.top = "50px";
            document.getElementById(ids).innerHTML = "Reveal answer"
            down = false
        }
    }
    return (
        <>
            <div className={style.container}>
                <div className={style.questionContainer}>
                    <h1 className={style.ProbNum}>Problem {prop.num}</h1>
                    <p className={style.quest} dangerouslySetInnerHTML={{__html:prop.qts}}/>
                </div>
                <div className={style.solutionContainer} id={qs}>
                    <p className={style.ansHead}>Solution</p>
                    <p className={style.solAns} dangerouslySetInnerHTML={{__html:prop.solu}}/>
                    <p className={style.ansHead}>Answer</p>
                    <p className={style.solAns} dangerouslySetInnerHTML={{__html:prop.ans}}/>
                    <div className={style.btnContainer}>
                        <button className={style.btn} onClick={moveIt}>
                            <span className={style.inbtn} id={ids}>Reveal answer</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MidTask