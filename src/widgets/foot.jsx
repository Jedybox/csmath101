import React from "react";
import style from "./foot.module.css"

import icon from "../assets/icon.png"
import { Link } from "react-router-dom";

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
                                <li className={style.foottermItems}>
                                    <Link to="/prelims">Prelim</Link>
                                </li>
                                <li className={style.foottermItems}>
                                    <Link to="/midterm">Midterms</Link>
                                </li>
                                <li className={style.foottermItems}>
                                    <Link to="/semis">Semi</Link>
                                </li>
                                <li className={style.foottermItems}>
                                    <Link to="/finals">Final</Link>
                                </li>
                            </ul>
                        </div>
                        <p className={style.aboutUs}></p>
                    </div>
                    <p className={style.bottomfoot}>Copyright &copy; {year} CSMAT101 - M003</p>
                </footer>
        </>
    )

}

export default Foot