import React from 'react'
import Foot from '../../widgets/foot.jsx'
import Navi from '../../widgets/nav.jsx'

import style from "./Finals.module.css"

import photo1 from "./assests/photos/photo1.png"
import photo2 from "./assests/photos/photo2.png"
import photo3 from "./assests/photos/photo3.png"
import photo4 from "./assests/photos/photo4.png"
import bg1 from "./assests/bg/bg1.png"
import bg2 from "./assests/bg/bg2.png"
import bg3 from "./assests/bg/bg3.png"

export default function Finals() {
  return (
    <>
        <header className={style.head}>
            <Navi/>
            <div className={style.titleContainer}>
                <h1 className={style.title}><span className={style.titleEffect}>Final</span> Term</h1>
                <p className={style.subtitle}>
                    This term include topics of transcendental functions,
                    logarithmic functions, and exponential function.
                    It also contains sample problems for each topic.
                </p>
            </div>
        </header>
        <main className={style.lessons}>
            <img src={bg1} alt="" className={style.bg1}/>
            <img src={photo1} alt="" className={style.photo1}/>
            <div className={style.lessonContainer}>
                <div className={style.lesson}>
                    <h2 className={style.lessonTitle}>Transcendental Functions</h2>
                    <p className={style.lessonDesc}>
                        are a class of functions that include trigonometric 
                        functions, inverse trigonometric functions, 
                        exponential functions, logarithmic functions, 
                        and hyperbolic functions. These functions are 
                        called "transcendental" because they cannot be 
                        expressed as finite combinations of algebraic 
                        operations such as addition, subtraction, 
                        multiplication, division, and root extraction.
                    </p>
                    <img src={bg2} alt="" className={style.bg2}/>
                    <img src={photo2} alt="" className={style.pts}/>
                </div>
                <div className={style.lesson}>
                    <h2 className={style.lessonTitle}>Logarithmic Functions </h2>
                    <p className={style.lessonDesc}>
                        are the inverse functions of exponential functions.
                        They allow us to solve equations involving exponential
                        growth or decay, such as those that arise in finance,
                        physics, and engineering. Logarithmic functions also
                        have many important applications in science and
                        technology, such as in the measurement of sound
                        intensity and pH levels.
                    </p>
                    <img src={photo3} alt="" className={style.pts}/>
                </div>
                <div className={style.lesson}>
                    <img src={bg3} alt="" className={style.bg3}/>
                    <h2 className={style.lessonTitle}>Exponential Functions</h2>
                    <p className={style.lessonDesc}>
                        are functions of the form f(x) = ax,
                        where a is a positive constant.
                        They describe phenomena that grow or decay
                        at a constant rate, such as population growth,
                        radioactive decay, and compound interest.
                        Exponential functions have many important
                        applications in science, engineering, and finance.
                    </p>
                    <img src={photo4} alt="" className={style.pts}/>
                </div>
            </div>
        </main>
        <Foot/>
    </>
  )
}
