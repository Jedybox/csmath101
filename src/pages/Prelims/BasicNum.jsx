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

export default function BasicNum() {

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
                        <p className={styles.ContentOfPop}>
                            Identify: <br />
                            Number of eggs = 240 <br />
                            Eggs per cake = 3 <br /> <br />
                            Formula: <br />
                            Number of Cakes = Total Eggs ÷ Eggs per Cake <br /> <br />
                            Substitute: <br />
                            Number of Cakes = 240 ÷ 3 <br /> <br />
                            Answer: <br />
                            The baker can make 80 cakes.
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
                        <p className={styles.ContentOfPop}>
                            Identify:  <br />
                            Total number of plants = 72  <br />
                            Plants per row = 8 <br /> <br />

                            Formula:  <br />
                            Number of Rows = 
                            Total Plants ÷ Plants per Row <br /> <br />

                            Substitute:  <br />
                            Number of Rows = 72 ÷ 8 <br /> <br />

                            Answer:     <br />
                            There are 9 rows in the garden.
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
                        <p className={styles.ContentOfPop}>
                            Identify:  <br />
                            Number of apples = 35  <br />
                            Apples per basket = 5 <br /> <br />

                            Formula:  <br />
                            Number of Baskets = 
                            Total Apples ÷ Apples per Basket <br /> <br />

                            Substitute:  <br />
                            Number of Baskets = 35 ÷ 5 <br /> <br />

                            Answer:   <br />
                            The farmer needs 7 baskets.
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
                            Number of students = 30  <br />
                            Pencils per student = 4 <br /> <br />

                            Formula:  <br />
                            Total Pencils = 
                            Number of Students × Pencils per Student <br /> <br />

                            Substitute:  <br />
                            Total Pencils = 30 × 4 <br /> <br />

                            Answer:  <br />
                            The teacher needs to provide 120 pencils.
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
                            Number of cones sold per day = 144 <br />
                            Scoops per cone = 2 <br /> <br />

                            Formula:  <br />
                            Total Scoops = 
                            Cones per Day × Scoops per Cone <br /> <br />

                            Substitute:  <br />
                            Total Scoops = 144 × 2 <br /> <br />

                            Answer:      <br />
                            The shop serves 288 scoops daily.
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
                            Total number of books = 80  <br />
                            Books per shelf = 10 <br /> <br />

                            Formula:  <br />
                            Number of Shelves = 
                            Total Books ÷ Books per Shelf <br /> <br />

                            Substitute:  <br />
                            Number of Shelves = 80 ÷ 10 <br /> <br />

                            Answer:  <br />
                            The bookstore needs 8 shelves.
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
                            Total number of candies = 150 <br />
                            Number of shelves = 6 <br /> <br />

                            Formula: <br />
                            Number of candies per shelf = 
                            Total candies ÷ Number of shelves <br /> <br />

                            Substitute:  <br />
                            Number of candies per shelf = 150 ÷ 6 <br /> <br />

                            Answer:  <br />
                            Each shelf will have 25 candies
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
                            Total number of cupcakes = 120 <br />
                            Cupcakes per box = 24 <br /> <br />

                            Formula:  <br />
                            Number of boxes =
                            Total cupcakes ÷ Cupcakes per box <br /> <br />

                            Substitute:  <br /> 
                            Number of boxes = 120 ÷ 24 <br /> <br />

                            Answer:  <br />
                            The bakery will need 5 boxes.
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
                            Total number of students = 30 <br />
                            Students per study group = 6 <br /> <br />

                            Formula: 
                            Number of study groups =
                            Total students ÷ Students per study group <br /> <br />

                            Substitute: 
                            Number of study groups = 30 ÷ 6 <br /> <br />

                            Answer: 
                            Number of study groups = 30 ÷ 6 <br /> <br />
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
                            Total number of building blocks = 200 <br />
                            Total number of building blocks = 200 <br /> <br />

                            Formula:  <br />
                            Number of boxes =
                            Total building blocks ÷ Building blocks per box <br /> <br />

                            Substitute:  <br />
                            Number of boxes = 200 ÷ 25 <br /> <br />

                            Answer:     <br />
                            The toy store will need 8 boxes.
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
            <h1 className={styles.title}>Basic Number Exercises</h1>
            <img src={bg1} alt="" id={styles.bg1} className={styles.bg}/>
        </header>
        <main className={styles.taskContainer}>
            <img src={bg2} alt="" id={styles.bg2} className={styles.bg}/>
            <div className={styles.task}>
                <img src={one} alt="" className={styles.num}/>
                <p className={styles.question}>
                    A baker has 240 eggs. If each cake requires 3 eggs, 
                    how many cakes can the baker make?
                </p>
                <div className={styles.eyeContainer} onClick={handleEye}>
                    <img src={eye} alt="" className={styles.eye}/>
                </div>
                
            </div>
            <div className={styles.task}>
                <img src={two} alt="" className={styles.num}/>
                <p className={styles.question}>
                    In a garden, there are 72 plants. If each row has 8 plants, 
                    how many rows are there?
                </p>
                <div className={styles.eyeContainer} onClick={handleEye1}>
                    <img src={eye} alt="" className={styles.eye}/>
                </div>
            </div>
            <div className={styles.task}>
                <img src={three} alt="" className={styles.num}/>
                <p className={styles.question}>
                    A farmer has 35 apples. If she wants to pack 
                    them into baskets with 5 apples each, how many baskets does she need?
                </p>
                <div className={styles.eyeContainer} onClick={handleEye2}>
                    <img src={eye} alt="" className={styles.eye}/>
                </div>
            </div>
            <div className={styles.task}>
                <img src={four} alt="" className={styles.num}/>
                <p className={styles.question}>
                    A farmer has 35 apples. If she wants to pack them into baskets with 
                    5 apples each, how many baskets does she need?
                </p>
                <div className={styles.eyeContainer} onClick={handleEye3}>
                    <img src={eye} alt="" className={styles.eye}/>
                </div>
            </div>
            <div className={styles.task}>
                <img src={five} alt="" className={styles.num}/>
                <p className={styles.question}>
                    An ice cream shop sells 144 cones per day. 
                    If each cone requires 2 scoops of ice cream, 
                    how many scoops are served daily?
                </p>
                <div className={styles.eyeContainer} onClick={handleEye4}>
                    <img src={eye} alt="" className={styles.eye}/>
                </div>
            </div>
            <div className={styles.task}>
                <img src={six} alt="" className={styles.num}/>
                <p className={styles.question}>
                    A bookstore has 80 books. If each shelf holds 10 books, 
                    how many shelves are needed to display all the books?
                </p>
                <div className={styles.eyeContainer} onClick={handleEye5}>
                    <img src={eye} alt="" className={styles.eye}/>
                </div>
            </div>
            <div className={styles.task}>
                <img src={seven} alt="" className={styles.num}/>
                <p className={styles.question}>
                    A candy store has 150 candies to distribute equally among 
                    its 6 shelves. If each shelf can accommodate the same 
                    number of candies, how many candies will be on each shelf?
                </p>
                <div className={styles.eyeContainer} onClick={handleEye6}>
                    <img src={eye} alt="" className={styles.eye}/>
                </div>
            </div>
            <div className={styles.task}>
                <img src={eight} alt="" className={styles.num}/>
                <p className={styles.question}>
                    A bakery sells cakes in boxes, with each box containing 24 cupcakes. 
                    If they have 120 cupcakes to package, how many boxes will they need?
                </p>
                <div className={styles.eyeContainer} onClick={handleEye7}>
                    <img src={eye} alt="" className={styles.eye}/>
                </div>
            </div>
            <div className={styles.task}>
                <img src={nine} alt="" className={styles.num}/>
                <p className={styles.question}>
                    A classroom has 30 students and wants to form study groups 
                    of equal size. If each study group is to have 6 students, 
                    how many study groups will be formed?
                </p>
                <div className={styles.eyeContainer} onClick={handleEye8}>
                    <img src={eye} alt="" className={styles.eye}/>
                </div>
            </div>
            <div className={styles.task}>
                <img src={ten} alt="" className={styles._10}/>
                <p className={styles.question}>
                    A toy store has 200 building blocks to pack into boxes. 
                    If each box can hold 25 building blocks, 
                    how many boxes will the store need?
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
