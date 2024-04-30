import React from "react";
import style from "./ErrorPage.module.css";
import { Link } from "react-router-dom";

function ErrorPage() {
    return(
    <>
        <div className={style.mid}>
            <h1 className={style._404}>404</h1>
            <p className={style.message}>
                Page is not found
            </p>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </div>
    </>
    )
}

export default ErrorPage