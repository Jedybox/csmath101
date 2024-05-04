import React from 'react'
import style from './Prelims.module.css'

import Navi from '../../widgets/nav.jsx'

export default function Prelims() {
  return (
    <>
        <header className={style.head}>
            <Navi/>
            <div className={style.container}>
                <h1 className={style.title}>Prelims </h1>
            </div>
        </header>
        <div className={style.buttonContainer}>
            <button className={style.button}>Add</button>
            <button className={style.button}>Add</button>
            <button className={style.button}>Add</button>
        </div>
        <div className={style.lessonConteiner}>
            <img src="" alt="" className={style.photo1}/>
            <div className={style.lessons}>
                <h1 className={style.lessonTitle}>Lesson 1</h1>
                <p className={style.lessonDescription}>This is the description of the lesson</p>
                <img src="" alt="" className={style.photo2}/>
            </div>
            <div className={style.lessons}>
                <h1 className={style.lessonTitle}>Lesson 1</h1>
                <p className={style.lessonDescription}>This is the description of the lesson</p>
                <img src="" alt="" className={style.photo2}/>
            </div>
            <div className={style.lessons}>
                <h1 className={style.lessonTitle}>Lesson 1</h1>
                <p className={style.lessonDescription}>This is the description of the lesson</p>
                <img src="" alt="" className={style.photo2}/>
            </div>
        </div>
    </>
  )
}
