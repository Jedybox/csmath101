import React from "react";
import style from "./nav.module.css"

import icon from "../assets/icon.png"

function Navi(){

    return(
        <>
            <nav className={style.navi}>
                <div className={style.iconHolder}>
                    <img src={icon} alt="Icon" className={style.img}/>
                    <b className={style.name}>CSMath101</b>
                </div>
                <ul className={style.list}>
                    <li className={style.listItem}>Prelim</li>
                    <li className={style.listItem}>Midterm</li>
                    <li className={style.listItem}>Semi</li>
                    <li className={style.listItem}>Final</li>
                </ul>
            </nav>
        </>
    )
}

export default Navi