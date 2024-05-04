import React from 'react'
import style from './Prelims.module.css'

import Navi from '../../widgets/nav.jsx'

export default function Prelims() {
  return (
    <>
        <header className={style.head}>
            <Navi/>
            <div className={style.titlecontainer}>
                <h1 className={style.title}><span className={style.titleEffect}>Preliminary</span> Term</h1>
            </div>
        </header>
        <div className={style.buttonContainer}>
            <button className={style.button}>Add</button>
            <button className={style.button}>Add</button>
            <button className={style.button}>Add</button>
        </div>
        <div className={style.lessonContainer}>
            <img src="" alt="" className={style.photo1}/>
            <div className={style.lessons}>
                <h1 className={style.lessonTitle}>Basic Number System</h1>
                <p className={style.lessonDescription}>
                    This concept deals with the set of positive whole numbers,
                    which could also be called the set of natural numbers or 
                    “higher arithmetic”. In other words, the basic number theory 
                    primarily studies integers and arithmetic functions.
                </p>
                <img src="" alt="" className={style.photo2}/>
                <button className={style.exercise}></button>
            </div>
            <div className={style.lessons}>
                <h1 className={style.lessonTitle}>Real Number System</h1>
                <p className={style.lessonDescription}>
                    Real Numbers are the combination of both rational and 
                    irrational numbers. They can be both positive and negative 
                    and is represented by the symbol “R”. Under rational number 
                    is a number that is in the form of p/q, where p and q are 
                    integers, and q is not equal to 0, while an irrational 
                    number is a any real number that cannot be expressed as the
                     quotient of two integers.
                </p>
                <img src="" alt="" className={style.photo2}/>
                <button className={style.exercise}></button>
            </div>
            <div className={style.lessons}>
                <h1 className={style.lessonTitle}>Complex Number System</h1>
                <p className={style.lessonDescription}>
                    A complex number is the combination of real numbers
                    and imaginary numbers. One part is purely real and
                    the other is purely imaginary. The backbone of this
                    number system is the number i, also known as the 
                    imaginary unit. That is why a complex number is any 
                    number that can be written as a + bi, where i is the
                     imaginary unit and a and b are real numbers.
                </p>
                <img src="" alt="" className={style.photo2}/>
                <button className={style.exercise}></button>
            </div>
        </div>
    </>
  )
}
