import React from "react";
import style from "./nav.module.css"

import icon from "../assets/icon.png"
import { Link } from "react-router-dom";

function Navi(){

    return(
        <>
            <nav className={style.navi}>
                <Link to="/" className={style.iconHolder}>
                    <img src={icon} alt="Icon" className={style.img}/>
                    <b className={style.name}>CSMath101</b>
                </Link>
                <ul className={style.list}>
                    <li className={style.listItem}>
                        <Link to="/Prelims">Prelim</Link>
                    </li>
                    <li className={style.listItem}>
                        <Link to="/Midterm">Midterms</Link>
                    </li>
                    <li className={style.listItem}>
                        <Link to="/Semi">Semi</Link>
                    </li>
                    <li className={style.listItem}>
                        <Link to="/finals">Final</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navi