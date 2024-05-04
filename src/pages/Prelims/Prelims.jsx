import React from 'react'
import style from './Prelims.module.css'
import { Link } from 'react-router-dom'

import pt1 from './PrelimAssets/photos/pt1.png'
import pt2 from './PrelimAssets/photos/pt2.png'
import pt3 from './PrelimAssets/photos/pt3.png'
import pt4 from './PrelimAssets/photos/pt4.png'

import bg1 from './PrelimAssets/BGs/bg1.png'
import bg2 from './PrelimAssets/BGs/bg2.png'
import bg3 from './PrelimAssets/BGs/bg3.png'
import bg4 from './PrelimAssets/BGs/bg4.png'
import bg5 from './PrelimAssets/BGs/bg5.png'

import Navi from '../../widgets/nav.jsx'
import Foot from '../../widgets/foot.jsx'

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
            <button className={style.button}>
                <Link to="/Prelims/Basic-Number" className={style.exercise}>Basic Number</Link>
            </button>
            <button className={style.button}>
                <Link to="/Prelims/Real-Number" className={style.exercise}>Real Number</Link>
            </button>
            <button className={style.button}>
                <Link to="/Prelims/Complex-Number" className={style.exercise}>Complex Number</Link>
            </button>
        </div>
        <div className={style.lessonContainer}>
            <img src={bg1} alt="" className={style.bg} id={style.bg1}/>
            <div className={style.photo1Continer}>
                <img src={pt1} alt="" className={style.photo1}/>
            </div>
            <div className={style.lessons}>
                <h1 className={style.lessonTitle}>Basic Number System</h1>
                <img src={bg3} alt="" className={style.bg} id={style.bg3}/>
                <p className={style.lessonDescription}>
                    This concept deals with the set of positive whole numbers,
                    which could also be called the set of natural numbers or 
                    “higher arithmetic”. In other words, the basic number theory 
                    primarily studies integers and arithmetic functions.
                </p>
                <div className={style.photo2Continer}>
                    <img src={pt2} alt="" className={style.photo2}/>
                </div>
                <div className={style.exerContainer}>
                    <button className={style.button} id={style.pts}>
                        <Link to="/Prelims/Basic-Number" className={style.exercise}>Exercise</Link>
                    </button>
                </div>
            </div>
            <img src={bg2} alt="" className={style.bg} id={style.bg2}/>
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
                <div className={style.photo2Continer}>
                    <img src={pt3} alt="" className={style.photo3}/>
                </div>
                <div className={style.exerContainer}>
                    <button className={style.button} id={style.pts}>
                        <Link   Link to="/Prelims/Real-Number" className={style.exercise}>Exercise</Link>
                    </button>
                </div>
            </div>
            <img src={bg4} alt="" className={style.bg} id={style.bg4}/>
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
                <div className={style.photo2Continer}>
                    <img src={pt4} alt=""className={style.photo4} />
                </div>
                <div className={style.exerContainer}>
                    <button className={style.button} id={style.pts}>
                        <Link to="/Prelims/Real-Number" className={style.exercise}>Exercise</Link>
                    </button>
                </div>
                <img src={bg5} alt="" className={style.bg} id={style.bg5}/>
            </div>
        </div>
        <Foot/>
    </>
  )
}
