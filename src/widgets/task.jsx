import React from "react";
import style from "./task.module.css";

function Task(props) {

    let down = false;
    const inbtn = "inbtn" + props.num
    const answer = "answer" + props.num

    const move = () => {
        if (!down) {
            document.getElementById(answer).style.top = "225px";
            document.getElementById(inbtn).innerHTML = "Close"
            down = true
        } else {
            document.getElementById(answer).style.top = "30px";
            document.getElementById(inbtn).innerHTML = "Reveal answer"
            down = false
        }
    }



    return(
        <>
            <div className={style.container}>
                <div className={style.questionContainer}>
                    <h2 className={style.probNum}>Problem {props.num}</h2>
                    <p className={style.p} className={style.question} dangerouslySetInnerHTML={{__html:props.qts}}/>
                </div>
                <div className={style.answerContainer} id={answer}>
                    <p className={style.p} className={style.answer} dangerouslySetInnerHTML={{__html:props.ans}}/>
                    <button id="btn" className={style.button} onClick={move}><span className={style.inbtn} id={inbtn}>Reveal answer</span></button>
                </div>
            </div>
        </>
    )

}

export default Task