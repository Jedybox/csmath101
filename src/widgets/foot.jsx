import React from "react";
import style from "./foot.module.css"

import icon from "../assets/icon.png"

function Foot() {
    
    let date = new Date()
    let year = date.getFullYear()

    return(
        <>
                <footer className={style.foot}>
                    <div className={style.topfoot}>
                        <div className={style.iconHolder}>
                            <img src={icon} alt="Icon" className={style.img}/>
                            <b className={style.name}>CSMath101</b>
                        </div>
                        <div className={style.termHolder}>
                            <h1 className={style.Term}>Terms</h1>
                            <ul className={style.termlist}>
                                <li className={style.foottermItems}>Prelim</li>
                                <li className={style.foottermItems}>Midterm</li>
                                <li className={style.foottermItems}>Semis</li>
                                <li className={style.foottermItems}>Finals</li>
                            </ul>
                        </div>
                        <div className={style.aboutUs}></div>
                    </div>
                    <div className={style.bottomfoot}><p>Copyright &copy; {year} CSMAT101 - M003</p></div>
                </footer>
        </>
    )

}

export default Foot