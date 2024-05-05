import React from 'react'
import Foot from '../../widgets/foot.jsx'
import Navi from '../../widgets/nav.jsx'

import style from "./Finals.module.css"

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
            <div className={style.pt1Holder}>
                <img src="" alt="" className={style.pt1}/>
            </div>
            <div className={style.lessonCootainer}>
                <div className={style.lesson}>
                    <div className={style.imgHolder}>
                        <img src="" alt="" className={style.img}/>
                    </div>
                    <h1 className={style.lessonTitle}></h1>
                    <p className={style.lessonDesc}></p>
                </div>
                <div className={style.lesson}>
                    <div className={style.imgHolder}>
                        <img src="" alt="" className={style.img}/>
                    </div>
                    <h1 className={style.lessonTitle}></h1>
                    <p className={style.lessonDesc}></p>
                </div>
                <div className={style.lesson}>
                    <div className={style.imgHolder}>
                        <img src="" alt="" className={style.img}/>
                    </div>
                    <h1 className={style.lessonTitle}></h1>
                    <p className={style.lessonDesc}></p>
                </div>
            </div>
        </main>
        <Foot/>
    </>
  )
}
