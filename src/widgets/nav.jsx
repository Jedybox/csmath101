import React from "react";
import style from "./nav.module.css"

function Navi(){

    return(
        <>
            <header className={style.headero}>
                <div className={style.iconNameHolder}>
                    <img src="src/assets/icon.png" alt="icon" width={48} height={48}/>
                    <h1 className={style.name}>CSMATH101</h1>
                </div>
                <nav className={style.navigation}>
                    <ul className={style.list}>
                        <li className={style.item}>Prelim</li>
                        <li className={style.item}>Midterm</li>
                        <li className={style.item}>Semi</li>
                        <li className={style.item}>Final</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navi