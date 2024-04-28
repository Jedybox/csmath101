import React from "react";
import "./ErrorPage.css"
import { Link } from "react-router-dom";

function ErrorPage() {
    return(
    <>
        <div className="mid">
            <h1 className="_404">404</h1>
            <p className="message">
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