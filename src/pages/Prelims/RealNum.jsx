import React, {useState} from 'react'

import styles from './BasicNum.module.css'
import Navi from '../../widgets/nav.jsx'
import Foot from '../../widgets/foot.jsx'

// numbers 
import one from '../../pages/Finals/assests/nums/1.png'
import two from '../../pages/Finals/assests/nums/2.png'
import three from '../../pages/Finals/assests/nums/3.png'
import four from '../../pages/Finals/assests/nums/4.png'
import five from '../../pages/Finals/assests/nums/5.png'
import six from '../../pages/Finals/assests/nums/6.png'
import seven from '../../pages/Finals/assests/nums/7.png'
import eight from '../../pages/Finals/assests/nums/8.png'
import nine from '../../pages/Finals/assests/nums/9.png'
import ten from '../../pages/Finals/assests/nums/10.png'

// eye 
import eye from '../../pages/Finals/assests/photos/eye.png'
import closeeye from '../../pages/Finals/assests/photos/closeeye.png'

// bgs
import bg1 from './PrelimAssets/BGs/bg1.png'
import bg2 from './PrelimAssets/BGs/bg2.png'
import bg4 from './PrelimAssets/BGs/bg4.png'

import _2 from './PrelimAssets/photos/2.png'
import _3 from './PrelimAssets/photos/3.png'
import pie2 from './PrelimAssets/photos/pie2.png'

export default function RealNum() {

    const [eyeState, setEyeState] = useState(false)

    const handleEye = () => {
        setEyeState(!eyeState)
    }
    
    if (eyeState) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    }

    const [eyeState1, setEyeState1] = useState(false)

    const handleEye1 = () => {
        setEyeState1(!eyeState1)
    }

    if (eyeState1) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    }

    const [eyeState2, setEyeState2] = useState(false)

    const handleEye2 = () => {
        setEyeState2(!eyeState2)
    }

    if (eyeState2) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    }

    const [eyeState3, setEyeState3] = useState(false)

    const handleEye3 = () => {
        setEyeState3(!eyeState3)
    }

    if (eyeState3) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    }

    const [eyeState4, setEyeState4] = useState(false)

    const handleEye4 = () => {
        setEyeState4(!eyeState4)
    }

    if (eyeState4) {
        document.body.style.overflow = 'hidden'
    }   else {
        document.body.style.overflow = 'auto'
    }

    const [eyeState5, setEyeState5] = useState(false)

    const handleEye5 = () => {
        setEyeState5(!eyeState5)
    }

    if (eyeState5) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    }

    const [eyeState6, setEyeState6] = useState(false)

    const handleEye6 = () => {
        setEyeState6(!eyeState6)
    }

    if (eyeState6) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    }

    const [eyeState7, setEyeState7] = useState(false)

    const handleEye7 = () => {
        setEyeState7(!eyeState7)
    }

    if (eyeState7) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    }

    const [eyeState8, setEyeState8] = useState(false)

    const handleEye8 = () => {
        setEyeState8(!eyeState8)
    }

    if (eyeState8) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    }

    const [eyeState9, setEyeState9] = useState(false)

    const handleEye9 = () => {
        setEyeState9(!eyeState9)
    }

    if (eyeState9) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    }

  return (
    <> 
        {eyeState && (
            <div className={styles.pop}>
                <div className={styles.popContent}>
                    <div className={styles.cover}>
                        <img src={_2} alt="" id={styles._2}/>
                        <p className={styles.ContentOfPop}>
                            2222222222222222222222222222222222222222222222222222222222222222222<br />
                            2222222222222222222222222222222222222222222222222222222222222222222<br />
                            2222222222222222222222222222222222222222222222222222222222222222222<br />
                            2222222222222222222222222222222222222222222222222222222222222222222<br />
                            2222222222222222222222222222222222222222222222222222222222222222222<br />
                            2222222222222222222222222222222222222222222222222222222222222222222<br />
                            2222222222222222222222222222222222222222222222222222222222222222222<br />
                            2222222222222222222222222222222222222222222222222222222222222222222<br />
                            2222222222222222222222222222222222222222222222222222222222222222222<br />
                            2222222222222222222222222222222222222222222222222222222222222222222<br />
                            2222222222222222222222222222222222222222222222222222222222222222222<br />
                            2222222222222222222222222222222222222222222222222222222222222222222<br />
                            2222222222222222222222222222222222222222222222222222222222222222222<br />
                            2222222222222222222222222222222222222222222222222222222222222222222<br />
                            2222222222222222222222222222222222222222222222222222222222222222222<br />
                            2222222222222222222222222222222222222222222222222222222222222222222<br />
                            2222222222222222222222222222222222222222222222222222222222222222222<br />
                            2222222222222222222222222222222222222222222222222222222222222222222<br />
                            2222222222222222222222222222222222222222222222222222222222222222222<br />
                        </p>
                    </div>
                </div>
                <div className={styles.eyeContainer} onClick={handleEye}>
                    <img src={closeeye} alt="" className={styles.eye}/>
                </div>
            </div>
        )}
        {eyeState1 && (
            <div className={styles.pop}>
                <div className={styles.popContent}>
                    <div className={styles.cover}>
                        <img src={pie2} alt="" id={styles.pie2}/>
                        <p className={styles.ContentOfPop}>
                            π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²<br />
                            π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²<br />
                            π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²<br />
                            π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²<br />
                            π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²<br />
                            π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²<br />
                            π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²<br />
                            π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²<br />
                            π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²<br />
                            π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²<br />
                            π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²<br />
                            π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²<br />
                            π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²<br />
                            π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²<br />
                            π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²<br />
                            π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²<br />
                            π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²<br />
                            π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²<br />
                            π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²π²<br />
                        </p>
                    </div>
                </div>
                <div className={styles.eyeContainer} onClick={handleEye1}>
                    <img src={closeeye} alt="" className={styles.eye}/>
                </div>
            </div>
        )}
        {eyeState2 && (
            <div className={styles.pop}>
                <div className={styles.popContent}>
                    <div className={styles.cover}>
                        <img src={_3} alt="" id={styles._3}/>
                        <p className={styles.ContentOfPop}>
                            3333333333333333333333333333333333333333333333333333333333333333333<br />
                            3333333333333333333333333333333333333333333333333333333333333333333<br />
                            3333333333333333333333333333333333333333333333333333333333333333333<br />
                            3333333333333333333333333333333333333333333333333333333333333333333<br />
                            3333333333333333333333333333333333333333333333333333333333333333333<br />
                            3333333333333333333333333333333333333333333333333333333333333333333<br />
                            3333333333333333333333333333333333333333333333333333333333333333333<br />
                            3333333333333333333333333333333333333333333333333333333333333333333<br />
                            3333333333333333333333333333333333333333333333333333333333333333333<br />
                            3333333333333333333333333333333333333333333333333333333333333333333<br />
                            3333333333333333333333333333333333333333333333333333333333333333333<br />
                            3333333333333333333333333333333333333333333333333333333333333333333<br />
                            3333333333333333333333333333333333333333333333333333333333333333333<br />
                            3333333333333333333333333333333333333333333333333333333333333333333<br />
                            3333333333333333333333333333333333333333333333333333333333333333333<br />
                            3333333333333333333333333333333333333333333333333333333333333333333<br />
                            3333333333333333333333333333333333333333333333333333333333333333333<br />
                            3333333333333333333333333333333333333333333333333333333333333333333<br />
                            3333333333333333333333333333333333333333333333333333333333333333333<br />
                        </p>
                    </div>
                </div>
                <div className={styles.eyeContainer} onClick={handleEye2}>
                    <img src={closeeye}
                    alt="" className={styles.eye}/>
                </div>
            </div>
        )}
        {eyeState3 && (
            <div className={styles.pop}>
                <div className={styles.popContent}>
                    <div className={styles.cover}>
                        <p className={styles.ContentOfPop}>
                            Identify:  <br />
                            The electricity consumption = 150 kilowatt-hour <br />
                            Cost per kilowatt-hour = 12 pesos <br /> <br />

                            Formula:  <br />
                            Monthly Bill = Consumption × Cost per kilowatt-hour<br /> <br />

                            Substitute:  <br />
                            Monthly Bill = 150 × 12
                            <br /> <br />

                            Answer:  <br />
                            The monthly electricity bill of the household would be 1800 pesos
                        </p>
                    </div>
                </div>
                <div className={styles.eyeContainer} onClick={handleEye3}>
                    <img src={closeeye}
                    alt="" className={styles.eye}/>
                </div>
            </div>
        )}
        {eyeState4 && (
            <div className={styles.pop}>
                <div className={styles.popContent}>
                    <div className={styles.cover}>
                        <p className={styles.ContentOfPop}>
                            Identify:  <br />
                            The total budget of the year = 4.5 trillion pesos <br />
                            Allocation percentage for education = 25% <br /> <br />

                            Formula:  <br />
                            The amount allocated to education = 
                            Total Budget × Allocation Percentage<br /> <br />

                            Substitute:  <br />
                            The amount allocated to education = 4.5 trillion × 0.25 <br />
                            (25% is multiplied by 100 is equivalent to 0.25)<br /> <br />

                            Answer:      <br />
                            The amount allocated to education is 1.125 trillion pesos.
                        </p>
                    </div>
                </div>
                <div className={styles.eyeContainer} onClick={handleEye4}>
                    <img src={closeeye}
                    alt="" className={styles.eye}/>
                </div>
            </div>
        )}
        {eyeState5 && (
            <div className={styles.pop}>
                <div className={styles.popContent}>
                    <div className={styles.cover}>
                        <p className={styles.ContentOfPop}>
                            Identify:  <br />
                            The unemployment rate in the Philippines = 8.7%  <br />
                            Total workforce = 45 million <br /> <br />

                            Formula:  <br />
                            Number of Unemployed = Unemployment Rate × Total Workforce <br /> <br />

                            Substitute:  <br />
                            Number of Unemployed = 0.087 × 45 million <br />
                            (8.7& is multiplied by 100 is equivalent to 0.087) <br /> <br />

                            Answer:  <br />
                            There are approximately 3,915,000 unemployed people in the Philippines.
                        </p>
                    </div>
                </div>
                <div className={styles.eyeContainer} onClick={handleEye5}>
                    <img src={closeeye} alt="" className={styles.eye}/>
                </div>
            </div>
        )}
        {eyeState6 && (
            <div className={styles.pop}>
                <div className={styles.popContent}>
                    <div className={styles.cover}>
                        <p className={styles.ContentOfPop}>
                            Identify:  <br />
                            The population of a city in the Philippines that received
                            their 1st dose = ⅗ <br />
                            The total population = 1.2 million <br /> <br />

                            Formula: <br />
                            TThe number of people who received the first dose = Total Population × ⅗ <br /> <br />

                            Substitute:  <br />
                            The number of people who received the first dose = 1.2 million × 0.6<br /> <br />

                            Answer:  <br />
                            720,000 people received their first COVID-19 Vaccine in the city.
                        </p>
                    </div>
                </div>
                <div className={styles.eyeContainer} onClick={handleEye6}>
                    <img src={closeeye} alt="" className={styles.eye}/>
                </div>
            </div>
        )}
        {eyeState7 && (
            <div className={styles.pop}>
                <div className={styles.popContent}>
                    <div className={styles.cover}>
                        <p className={styles.ContentOfPop}>
                            Identify:  <br />
                            Total length of highway = 150 kilometers <br />
                            Fraction passing through rural areas = ⅔ <br />
                            Fraction passing through urban areas = 1 -  ⅔ = ⅓ <br /> <br />

                            Formula:  <br />
                            Number of boxes =
                            Length passing through urban areas = 
                            Fraction passing through urban areas × Total length of highway<br /> <br />

                            Substitute:  <br /> 
                            Length passing through urban areas = ⅓ × 150 <br /> <br />

                            Answer:  <br />
                            50 kilometers of the new highway will pass through urban areas.
                        </p>
                    </div>
                </div>
                <div className={styles.eyeContainer} onClick={handleEye7}>
                    <img src={closeeye} alt="" className={styles.eye}/>
                </div>
            </div>
        )}
        {eyeState8 && (
            <div className={styles.pop}>
                <div className={styles.popContent}>
                    <div className={styles.cover}>
                        <p className={styles.ContentOfPop}>
                            Identify:  <br />
                            Length of one side of the rectangular field = 10 meters <br />
                            Length of the other side of the rectangular field = 15 meters <br /> <br />

                            Formula: 
                            Diagonal fence length = √(side₁² + side₂²)<br /> <br />

                            Substitute: 
                            Diagonal fence length = √(10² + 15²)<br /> <br />

                            Answer: 
                            The length of the diagonal fence is √325 meters. <br /> <br />
                        </p>
                    </div>
                </div>
                <div className={styles.eyeContainer} onClick={handleEye8}>
                    <img src={closeeye} alt="" className={styles.eye}/>
                </div>
            </div>
        )}
        {eyeState9 && (
            <div className={styles.pop}>
                <div className={styles.popContent}>
                    <div className={styles.cover}>
                        <p className={styles.ContentOfPop}>
                            Identify:  <br />
                            Number to find square root of = 12 <br /> <br />

                            Formula:  <br />
                            √(a * b) = √a * √b<br /> <br />

                            Substitute:  <br />
                            √12 = √(4 * 3) = √4 * √3 = 2 * √3 <br /> <br />

                            Answer:     <br />
                            The square root of 12 as an irrational number is 2√3.
                        </p>
                    </div>
                </div>
                <div className={styles.eyeContainer} onClick={handleEye9}>
                    <img src={closeeye} alt="" className={styles.eye}/>
                </div>
            </div>
        )}
        <header className={styles.header}>
            <Navi />
            <h1 className={styles.title}>Real Number Exercises</h1>
            <img src={bg1} alt="" id={styles.bg1} className={styles.bg}/>
        </header>
        <main className={styles.taskContainer}>
            <img src={bg2} alt="" id={styles.bg2} className={styles.bg}/>
            <div className={styles.task}>
                <img src={one} alt="" className={styles.num}/>
                <p className={styles.question}>
                    √2 x √2 =
                </p>
                <div className={styles.eyeContainer} onClick={handleEye}>
                    <img src={eye} alt="" className={styles.eye}/>
                </div>
            </div>
            <div className={styles.task}>
                <img src={two} alt="" className={styles.num}/>
                <p className={styles.question}>
                    π x π =
                </p>
                <div className={styles.eyeContainer} onClick={handleEye1}>
                    <img src={eye} alt="" className={styles.eye}/>
                </div>
            </div>
            <div className={styles.task}>
                <img src={three} alt="" className={styles.num}/>
                <p className={styles.question}>
                    (3+4√2) + (-4√2) =
                </p>
                <div className={styles.eyeContainer} onClick={handleEye2}>
                    <img src={eye} alt="" className={styles.eye}/>
                </div>
            </div>
            <div className={styles.task}>
                <img src={four} alt="" className={styles.num}/>
                <p className={styles.question}>
                    If a household in the Philippines consumes 150 kilowatt-hours 
                    of electricity per month, and the cost per kilowatt-hour is 
                    12 pesos, what is their monthly electricity bill?
                </p>
                <div className={styles.eyeContainer} onClick={handleEye3}>
                    <img src={eye} alt="" className={styles.eye}/>
                </div>
            </div>
            <div className={styles.task}>
                <img src={five} alt="" className={styles.num}/>
                <p className={styles.question}>
                    If the Philippine government allocated 25% of its annual budget 
                    to education, which represents a rational number, 
                    and the total budget for the year is 4.5 trillion pesos, 
                    how much money is allocated to education?
                </p>
                <div className={styles.eyeContainer} onClick={handleEye4}>
                    <img src={eye} alt="" className={styles.eye}/>
                </div>
            </div>
            <div className={styles.task}>
                <img src={six} alt="" className={styles.num}/>
                <p className={styles.question}>
                    If the unemployment rate in the Philippines is 8.7%, 
                    and the total workforce is 45 million, 
                    how many people are unemployed?
                </p>
                <div className={styles.eyeContainer} onClick={handleEye5}>
                    <img src={eye} alt="" className={styles.eye}/>
                </div>
            </div>
            <div className={styles.task}>
                <img src={seven} alt="" className={styles.num}/>
                <p className={styles.question}>
                    If ⅗ of the population of a city in the Philippines 
                    received their first dose of a COVID-19 vaccine, 
                    and the total population is 1.2 million, 
                    how many people received the first dose?
                </p>
                <div className={styles.eyeContainer} onClick={handleEye6}>
                    <img src={eye} alt="" className={styles.eye}/>
                </div>
            </div>
            <div className={styles.task}>
                <img src={eight} alt="" className={styles.num}/>
                <p className={styles.question}>
                    The Philippine government plans to construct a new highway 
                    that will span 150 kilometers. If ⅔ of the highway will 
                    pass through rural areas and the rest through urban areas, 
                    how many kilometers will pass through urban areas?
                </p>
                <div className={styles.eyeContainer} onClick={handleEye7}>
                    <img src={eye} alt="" className={styles.eye}/>
                </div>
            </div>
            <div className={styles.task}>
                <img src={nine} alt="" className={styles.num}/>
                <p className={styles.question}>
                    A farmer has a rectangular field with dimensions 10 meters 
                    by 15 meters. He wants to build a diagonal fence across 
                    the field from one corner to the opposite corner to divide 
                    it into two equal triangular plots. 
                    What is the length of the diagonal fence?
                </p>
                <div className={styles.eyeContainer} onClick={handleEye8}>
                    <img src={eye} alt="" className={styles.eye}/>
                </div>
            </div>
            <div className={styles.task}>
                <img src={ten} alt="" className={styles._10}/>
                <p className={styles.question}>
                    Jane needs to find the square root of 12. 
                    How can she represent this as an irrational number?
                </p>
                <div className={styles.eyeContainer} onClick={handleEye9}>
                    <img src={eye} alt="" className={styles.eye}/>
                </div>
            </div>
        </main>
        <img src={bg4} alt="" id={styles.bg3} className={styles.bg}/>
        <Foot />
    </>
  )
}
