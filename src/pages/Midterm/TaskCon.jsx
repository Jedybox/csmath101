import React from "react";

import style from './TaskCon.module.css'

function MidTask(prop) {

    const question = prop.qts
    const answer = prop.ans
    const num = prop.num

    return (
        <>
            <div className={style.continer}>
                <div className={style.questionContainer}></div>
                <div className={style.solutuionContiner}></div>
            </div>
        </>
    )
}

export default MidTask