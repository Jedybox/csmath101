import React from 'react'

import Navi from '../../widgets/nav.jsx'
import Foot from '../../widgets/foot.jsx'

import style from './BAC.module.css'


import bg1 from "../../assets/bgGradients/bg1.png"
import bg2 from "../../assets/bgGradients/bg2.png"
import bg3 from "../../assets/bgGradients/bg3.png"


export default function SLEM() {

    var down1 = false;

    const reveal1 = () => {
        if (down1) {
            document.getElementById('1').style.height = '250px';
            document.getElementById('btn1').innerHTML = 'Reveal answer';
            down1 = false;
        } else {
            document.getElementById('1').style.height = '422px';
            document.getElementById('btn1').innerHTML = 'Hide answer';
            down1 = true;
        }
    }

    var down2 = false;

    const reveal2 = () => {
        if (down2) {
            document.getElementById('2').style.height = '250px';
            document.getElementById('btn2').innerHTML = 'Reveal answer';
            down2 = false;
        } else {
            document.getElementById('2').style.height = '422px';
            document.getElementById('btn2').innerHTML = 'Hide answer';
            down2 = true;
        }
    }

    var down3 = false;

    const reveal3 = () => {
        if (down3) {
            document.getElementById('3').style.height = '250px';
            document.getElementById('btn3').innerHTML = 'Reveal answer';
            down3 = false;
        } else {
            document.getElementById('3').style.height = '422px';
            document.getElementById('btn3').innerHTML = 'Hide answer';
            down3 = true;
        }
    }

    var down4 = false;

    const reveal4 = () => {
        if (down4) {
            document.getElementById('4').style.height = '250px';
            document.getElementById('btn4').innerHTML = 'Reveal answer';
            down4 = false;
        } else {
            document.getElementById('4').style.height = '422px';
            document.getElementById('btn4').innerHTML = 'Hide answer';
            down4 = true;
        }
    }

    var down5 = false;

    const reveal5 = () => {
        if (down5) {
            document.getElementById('5').style.height = '250px';
            document.getElementById('btn5').innerHTML = 'Reveal answer';
            down5 = false;
        } else {
            document.getElementById('5').style.height = '422px';
            document.getElementById('btn5').innerHTML = 'Hide answer';
            down5 = true;
        }
    }

    var down6 = false;

    const reveal6 = () => {
        if (down6) {
            document.getElementById('6').style.height = '250px';
            document.getElementById('btn6').innerHTML = 'Reveal answer';
            down6 = false;
        } else {
            document.getElementById('6').style.height = '422px';
            document.getElementById('btn6').innerHTML = 'Hide answer';
            down6 = true;
        }
    }

    var down7 = false;

    const reveal7 = () => {
        if (down7) {
            document.getElementById('7').style.height = '250px';
            document.getElementById('btn7').innerHTML = 'Reveal answer';
            down7 = false;
        } else {
            document.getElementById('7').style.height = '422px';
            document.getElementById('btn7').innerHTML = 'Hide answer';
            down7 = true;
        }
    }

    var down8 = false;

    const reveal8 = () => {
        if (down8) {
            document.getElementById('8').style.height = '250px';
            document.getElementById('btn8').innerHTML = 'Reveal answer';
            down8 = false;
        } else {
            document.getElementById('8').style.height = '422px';
            document.getElementById('btn8').innerHTML = 'Hide answer';
            down8 = true;
        }
    }

    var down9 = false;

    const reveal9 = () => {
        if (down9) {
            document.getElementById('9').style.height = '250px';
            document.getElementById('btn9').innerHTML = 'Reveal answer';
            down9 = false;
        } else {
            document.getElementById('9').style.height = '422px';
            document.getElementById('btn9').innerHTML = 'Hide answer';
            down9 = true;
        }
    }

    var down10 = false;

    const reveal10 = () => {
        if (down10) {
            document.getElementById('10').style.height = '250px';
            document.getElementById('btn10').innerHTML = 'Reveal answer';
            down10 = false;
        } else {
            document.getElementById('10').style.height = '422px';
            document.getElementById('btn10').innerHTML = 'Hide answer';
            down10 = true;
        }
    }

    return (
        <>  
            <img src={bg2} alt="" className={style.bg} id={style.bg1}/>
            <img src={bg1} alt="" className={style.bg} id={style.bg2}/>
            <img src={bg3} alt="" className={style.bg} id={style.bg3}/>
            <img src={bg3} alt="" className={style.bg} id={style.bg4}/>
            <img src={bg1} alt="" className={style.bg} id={style.bg5}/>
            <img src={bg2} alt="" className={style.bg} id={style.bg6}/>
            <img src={bg2} alt="" className={style.bg} id={style.bg7}/>
            <img src={bg1} alt="" className={style.bg} id={style.bg8}/>
            <img src={bg3} alt="" className={style.bg} id={style.bg9}/>
            <header className={style.header}>
                <Navi/>
                <h1 className={style.title}>Equations and Inequalities <br /> Problems</h1>
            </header>
            <main className={style.TaskContainer}>
                <div className={style.prob} id='1'>
                    <div className={style.question}>
                        <h3 className={style.probNum}>Problem 1</h3>
                        <p className={style.questionContent}>
                            Use the Method of Substitution to find the solution to the given system <br />
                            x – 7y = -11 <br />
                            5x + 2y = -18 <br />
                        </p>
                    </div>
                    <div className={style.answer}>
                        <div className={style.con}>
                            <p className={style.answerContent}>
                                Solution <br />
                                x – 7y = -11 <br />
                                x = 7y – 11 <br />
                                5x + 2y = -18 <br />
                                5(7y – 11) + 2y = -18 <br />
                                35y – 55 + 2y = -18 <br />
                                35y + 2y = 55 – 18  <br />
                                37y = 37 <br />
                                y = 1 <br />
                                x = 7(1) – 11 <br />
                                x = -4
                            </p>
                        </div>
                    </div>
                    <button className={style.btn} onClick={reveal1} id='btn1'>Reveal answer</button>
                </div>
                <div className={style.prob} id='2'>
                    <div className={style.question}>
                        <h3 className={style.probNum}>Problem 2</h3>
                        <p className={style.questionContent}>
                            Use the Method of Substitution to find the solution to the given system <br />
                            14x – 8y = -12  <br />
                            -4x + 2y = 4 <br />
                        </p>
                    </div>
                    <div className={style.answer}>
                        <div className={style.con}>
                            <p className={style.answerContent}>
                                Solution: <br />
	                            - 4x + 2y = 4 <br />
                                2y = 4x + 4 <br />
                                y = 2x + 2 <br />
                                14x – 8y = -12 <br />
                                14x – 8(2x + 2) = -12 <br />
                                14х - 8(2х + 2) = 14x - 16x - 16 <br />
                                14x - 16x - 16 = - 2x - 16 <br />
                                -2x - 16 + 16 = -12 + 16 <br />
                                -2x = 4 <br />
                                x = -2 <br />
                                y= 2(-2)+2 <br />
                                y= -4 + 2 <br />
                                y= -2
                            </p>
                        </div>
                    </div>
                    <button className={style.btn} onClick={reveal2} id='btn2'>Reveal answer</button>
                </div>
                <div className={style.prob} id='3'>
                    <div className={style.question}>
                        <h3 className={style.probNum}>Problem 3</h3>
                        <p className={style.questionContent}>
                            Use the Method of Substitution to find the solution to the given system <br />
                            3x + 9y = -6 <br />
                            -4x – 12y = 8
                        </p>
                    </div>
                    <div className={style.answer}>
                        <div className={style.con}>
                            <p className={style.answerContent}>
                                Solution: <br />
                                -4x – 12y = 8 <br />
                                -4x = 12y + 8 <br />
                                x = -3y – 2  <br />
                                3x + 9y = -6 <br />
                                3 (-3y - 2) + 9y = -6 <br />
                                9y — 6 + 9y = -6 <br />
                                -6 = -6 <br />
                                x = -3t - 2 <br />
                                y=t <br />
                                t is any number
                            </p>
                        </div>
                    </div>
                    <button className={style.btn} onClick={reveal3} id='btn3'>Reveal answer</button>
                </div>
                <div className={style.prob} id='4'>
                    <div className={style.question}>
                        <h3 className={style.probNum}>Problem 4</h3>
                        <p className={style.questionContent}>
                            Use the Method of Substitution to find the solution to the given system <br />
                            x – 2y = 10 <br />
                            x + 4y = 22
                        </p>
                    </div>
                    <div className={style.answer}>
                        <div className={style.con}>
                            <p className={style.answerContent}>
                                Solution: <br />
                                x – 2y = 10 <br />
                                x = 2y + 10 <br />
                                x + 4y = 22 <br />
                                (2y + 10) + 4y = 22 <br />
                                6y = 22 – 10 <br />
                                6y = 12 <br />
                                y = 2
                            </p>
                        </div>
                    </div>
                    <button className={style.btn} onClick={reveal4} id='btn4'>Reveal answer</button>
                </div>
                <div className={style.prob} id='5'>
                    <div className={style.question}>
                        <h3 className={style.probNum}>Problem 5</h3>
                        <p className={style.questionContent}>
                            Use the Method of Elimination to find the solution to the given system <br />
                            6x – 5y = 8 <br />
                            -12x + 2y = 0

                        </p>
                    </div>
                    <div className={style.answer}>
                        <div className={style.con}>
                            <p className={style.answerContent}>
                                Solution: <br />
                                (6x – 5y = 8)(2)12x – 10y = 16 <br />
                                12x + 2y = 012x + 2y = 0 <br />
                                -8y = 16 <br />
                                y = -2 <br />
                                6x — 5 (-2) = 8 <br />
                                6x + 10 = 8 <br />
                                6х = -2 <br />
                                x = -0.333333
                            </p>
                        </div>
                    </div>
                    <button className={style.btn} onClick={reveal5} id='btn5'>Reveal answer</button>
                </div>
                <div className={style.prob} id='6'>
                    <div className={style.question}>
                        <h3 className={style.probNum}>Problem 6</h3>
                        <p className={style.questionContent}>
                            Use the Method of Elimination to find the solution to the given system <br />
                            -2x + 10y = 2 <br />
                            5x – 25y = 3
                        </p>
                    </div>
                    <div className={style.answer}>
                        <div className={style.con}>
                            <p className={style.answerContent}>
                                Solution <br />
                                (-2x + 10y = 2)(5)-10x + 50y = 10 <br />
                                (5x – 25y = 3)(2)10х – 50y = 6 <br />
                                0 = 16 <br />
                                The result above is clearly not true and so this system if inconsistent and has no solution.
                            </p>
                        </div>
                    </div>
                    <button className={style.btn} onClick={reveal6} id='btn6'>Reveal answer</button>
                </div>
                <div className={style.prob} id='7'>
                    <div className={style.question}>
                        <h3 className={style.probNum}>Problem 7</h3>
                        <p className={style.questionContent}>
                            Use the Method of Elimination to find the solution to the given system <br />
                            2x + 3y = 20 <br />
                            7x + 2y = 53
                        </p>
                    </div>
                    <div className={style.answer}>
                        <div className={style.con}>
                            <p className={style.answerContent}>
                                Solution <br />
                                (2x + 3y = 20)(2)&ensp;&ensp;&ensp;&ensp;&ensp;4x+ 64 = 40 <br />
                                (7x + 2y = 53)(-3)  21x-6v = -159 <br />
                                17x = -119
                            </p>
                        </div>
                    </div>
                    <button className={style.btn} onClick={reveal7} id='btn7'>Reveal answer</button>
                </div>
                <div className={style.prob} id='8'>
                    <div className={style.question}>
                        <h3 className={style.probNum}>Problem 8</h3>
                        <p className={style.questionContent}>
                            Ms. Cathy opens a retirement account and is starting with $100. She plans to add $50 each month to the account. Make an equation that describes the amount of money in the account each month. How much money does Ms. Cathy have after 6 months? 
                        </p>
                    </div>
                    <div className={style.answer}>
                        <div className={style.con}>
                            <p className={style.answerContent}>
                                Solution <br />
                                ×= number of months y= amount of money in the account  <br />
                                y= 50X +100 <br />
                                × = 6 <br />
                                y = 50(6)+100 <br />
                                y = 300+100 <br />
                                y = 400 <br />
                                After 6 months,Ms.Cathy has $400.

                            </p>
                        </div>
                    </div>
                    <button className={style.btn} onClick={reveal8} id='btn8'>Reveal answer</button>
                </div>
                <div className={style.prob} id='9'>
                    <div className={style.question}>
                        <h3 className={style.probNum}>Problem 9</h3>
                        <p className={style.questionContent}>
                            Mr. Garcia wants to create a library of books in his classroom. He is starting with 12 books. He plans to buy 3 new books each week. Create an equation that describes the number of books Mr. Garcia has each week. How many books does Mr. Lam have after 5 weeks? 
                        </p>
                    </div>
                    <div className={style.answer}>
                        <div className={style.con}>
                            <p className={style.answerContent}>
                                Solution <br />
                                x= number of weeks y= total books <br />
                                y = 3x + 12 <br />
                                x = 5 <br />
                                × = 10 <br />
                                y = 3(5)+12 <br />
                                y =27 <br />
                                After 5 weeks,Mr Lam has 27 books.
                            </p>
                        </div>
                    </div>
                    <button className={style.btn} onClick={reveal9} id='btn9'>Reveal answer</button>
                </div>
                <div className={style.prob} id='10'>
                    <div className={style.question}>
                        <h3 className={style.probNum}>Problem 10</h3>
                        <p className={style.questionContent}>
                            Ms. Mavie created an Instagram account and started with three followers (her mom, her dad, and her sister). She plans to find 7 new followers each day. Create an equation that describes how many followers she has each day. How many followers will she have after 10 days?
                        </p>
                    </div>
                    <div className={style.answer}>
                        <div className={style.con}>
                            <p className={style.answerContent}>
                                Solution <br />
                                x = number of days y = number of followers <br />
                                y = 7(x)+3 <br />
                                x = 10 <br />
                                y = 7(10)+3 <br />
                                y = 70+3 <br />
                                y = 73 <br />
                                After 10 days,Ms,Mavie has 73 followers.
                            </p>
                        </div>
                    </div>
                    <button className={style.btn} onClick={reveal10} id='btn10'>Reveal answer</button>
                </div>
            </main>
            <Foot/>
        </>
    ) 
}
