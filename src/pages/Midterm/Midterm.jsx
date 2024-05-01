import React from "react";
import Navi from "../../widgets/nav";

impot

import style from "./midterm.module.css"

function Midterm() {
    return(
        <>
            <header className={style.head}>
                <Navi/>
                <div className={style.TermTitle}>
                    <h1 className={style.Title}>Midterm</h1>
                    <p className={style.midsub}>
                        ·Basic Algebraic Concepts <br />
                        ·Equations and Inequalities <br />
                        ·Systems of Linear Equations and Matrices
                    </p>
                </div>
            </header>
            <div className={style.lessonsContainer}>
                <div className={style.lesson}>
                    <img src="" alt="" />
                </div>
            </div>
        </>
    )
}

export default Midterm