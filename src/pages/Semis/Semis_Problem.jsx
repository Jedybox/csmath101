import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import icon from "../../assets/icon.png"
import bg1 from "../../assets/bgGradients/bg1.png";
import bg2 from "../../assets/bgGradients/bg2.png";
import bg3 from "../../assets/bgGradients/bg3.png";

import ErrorPage from "../Error/ErrorPage";
import style_ from "./Semis_Problem.module.css"
import Foot from "../../widgets/foot";
import Task from "../../widgets/task";

function SemiProblem() {
    const topic = useParams()
    const topics = ['LinearFunction', 'FunctionsRelations', 'QuadraticFunctions']

    if (!topics.includes(topic.topic)) {
        return(<ErrorPage/>)
    } 
    
    const LF = [
        "A car travels at a constant speed of 120 miles per hour. Write a linear function to representthe distance traveled by the car after <b>x</b> hours. Find the distance traveled by the car in 7hours.",
        "John Paul is saving money to buy a new phone. She currently has 500 pesos and saves 100 pesos each week. How much his savings after 24 weeks?",
        "A tricycle driver charges 20 pesos for the first kilometer and 12 pesos for an additional kilometer. Write a linear function to represent the total cost of the ride and how much the ride is in 5 kilometers?",
        "The population in a city is currently 10,000 people and 500 increase per year. Calculate the population after 10 years",
        "A bakery sells cookies for 30 pesos each. If they earn 6,090 pesos, how many cookies did they sell?",
        "An organization membership costs 150 pesos per month with no additional fees. Using linear functions, calculate the cost of membership for 16 months. ",
        "Gabriel score increases by 3 points for every hour of studying. If he currently has 50 points, what is his final score after 5 hours?",
        "CS group offers 500 pesos per hour of service with an installation fee of 120 pesos. Using linear function, calculate the overall cost of service after 4 hours",
        "CS corporation charges 300 pesos for every product and 80 pesos for shipping fee. Calculate the overall charges for buying 17 products.",
        "Math club sells ballpens for 9 pesos each, if they earn 504 pesos, how many ballpens did they sell?"
    ]
    const ansLF = [
        "𝒇(𝒙) = 𝟏𝟐𝟎(𝒙) , where <b>f(x)<b/> is distance in miles and t are the hours. <br/>𝒇(𝟕) = 𝟏𝟐𝟎(𝟕) <br/>𝒇(𝟕) = 𝟖𝟒𝟎 𝒎𝒑𝒉",
        "𝒇(𝒙) = 𝟏𝟎𝟎𝒙 + 𝟓𝟎𝟎 , where f(x) is the savings and x are the weeks. <br/>𝒇(𝟐𝟒) = 𝟏00(𝟐𝟒) + 𝟓𝟎𝟎 <br/>𝒇(𝟐𝟒) = 𝟐, 𝟗𝟎𝟎 𝒑𝒆𝒔𝒐𝒔",
        "𝒇(𝒙) = 𝟏𝟐(𝒙 − 𝟏) + 𝟐𝟎 , where f(x) is the total cost and x is the kilometer. <br/>𝒇(𝟓) = 𝟏𝟐(𝟓 − 𝟏) + 𝟐𝟎 <br/>𝒇(𝟓) = 𝟏𝟐(𝟒) + 𝟐𝟎 <br/>𝒇(𝟓) = 𝟔𝟖 𝒑𝒆𝒔𝒐𝒔",
        "𝒇(𝒙) = 𝟓𝟎𝟎(𝒙) + 𝟏𝟎𝟎𝟎𝟎 , where f(x) is the total population and x is the years. <br/>𝒇(𝟏𝟎) = 𝟓𝟎𝟎(𝟏𝟎) + 𝟏𝟎𝟎𝟎𝟎 <br/>𝒇(𝟏𝟎) = 𝟓𝟎𝟎𝟎 + 𝟏𝟎𝟎𝟎𝟎 <br/>𝒇(𝟏𝟎) = 𝟏𝟓, 𝟎𝟎𝟎 total population after 10 years",
        "𝒇(𝒙) = 𝟑𝟎𝒙 , where f(x) is the total cost of cookies and x is the number of cookies. <br/>𝟔𝟎𝟗𝟎 = 𝟑𝟎𝒙 <br/> <div style='display:flex; flex-direction: row;'><span style='display: flex; flex-direction: column; font-size: 10px; height: 10px'><div style='border-bottom:solid #fff 2px; display:inline-block; width: fit-content;'>𝟔𝟎𝟗𝟎</div><div style='display:inline-block; clear:left;'>𝟑𝟎</div></span> = <span style='display: flex; flex-direction: column; font-size: 10px; height: 10px'><div style='border-bottom:solid #fff 2px; display:inline-block; width: fit-content;'>𝟑𝟎𝒙</div><div style='display:inline-block; clear:left;'>𝟑𝟎</div></span></div> <br/>𝒙 = 𝟐𝟎𝟑 cookies",
        "𝒇(𝒙) = 𝟏𝟓𝟎(𝒙) , where f(x) is the total cost and x is the number of months. <br/> 𝒇(𝟏𝟔) = 𝟏𝟓𝟎(𝟏𝟔) <br/>𝒇(𝟏𝟔) = 𝟐, 𝟒𝟎𝟎 pesos",
        "𝒇(𝒙) = 𝟑𝒙 + 𝟓𝟎 , where f(x) is the total score, and x is the number of hours. <br />𝒇(𝟓) = 𝟑(𝟓) + 𝟓𝟎 <br />𝒇(𝟓) = 𝟔𝟓 points",
        "𝒇(𝒙) = 𝟓𝟎𝟎𝒙 + 𝟏𝟐𝟎 , where f(x) is the overall cost of service and x is the number of hours. <br />𝒇(𝟒) = 𝟓𝟎𝟎(𝟒) + 𝟏𝟐𝟎 <br />𝒇(𝟒) = 𝟐, 𝟏𝟐𝟎 pesos",
        "𝒇(𝒙) = 𝟑𝟎𝟎𝒙 + 𝟖𝟎 , where f(x) is the overall charges and x is the number of products. <br />𝒇(𝟏𝟕) = 𝟑𝟎𝟎(𝟏𝟕) + 𝟖𝟎 <br />𝒇(𝟏𝟕) = 𝟓, 𝟏𝟖𝟎 pesos",
        "𝒇(𝒙) = 𝟗𝒙 , where f(x) is the overall cost and x is the number of ballpens.<br />𝟓𝟎𝟒 = 𝟗𝒙 <br/> <div style='display:flex; flex-direction: row;'><span style='display: flex; flex-direction: column; font-size: 10px; height: 10px'><div style='border-bottom:solid #fff 2px; display:inline-block; width: fit-content;'>𝟓𝟎𝟒</div><div style='display:inline-block; clear:left;'>𝟗𝒙</div></span> = <span style='display: flex; flex-direction: column; font-size: 10px; height: 10px'><div style='border-bottom:solid #fff 2px; display:inline-block; width: fit-content;'>𝟗</div><div style='display:inline-block; clear:left;'>𝟗</div></span></div> <br/> 𝒙 = 𝟓𝟔 ballpens"
    ]

    const QF = [
        "𝑓(𝑥) = 2𝑥<sup>2</sup> − 4𝑥 − 6",
        "𝑓(𝑥) = 𝑥<sup>2</sup> + 9𝑥 + 2",
        "𝑓(𝑥) = 5𝑥<sup>2</sup> − 6𝑥 + 25",
        "𝑓(𝑥) = 𝑥<sup>2</sup> − 1.25𝑥 − 5",
        "𝑓(𝑥) = 10𝑥<sup>2</sup> − 56𝑥 − 92",
        "A rectangular garden has a length 3 meters longer than its width. If the area of the garden is 28 square meters, find the dimensions of the garden.",
        "The sum of two numbers is 18, and the product of these two numbers is 56. What are the numbers?",
        "The sum of the two numbers is 14. Find the maximum possible product of the two numbers.",
        "In the previous problem, identify the two numbers with the sum of 14.",
        "Identify if the given is quadratic or not: <br />a. 3x + 5 = 15 <br />b. 𝒙<sup>2</sup> − 𝒙<sup>3</sup> = 𝟕 <br />c. (𝒙 − 𝟑)<sup>𝟐</sup>= 𝟎 <br />d. <span style='display: flex; flex-direction: column; font-size: 10px; height: 10px'><div style='border-bottom:solid #fff 2px; display:inline-block; width: fit-content;'>𝟑</div><div style='display:inline-block; clear:left;'>𝒙<sup>𝟐</sup></div></span> − 𝟐𝒙 = 𝟗"
    ]

    const ansQF = [
        "• Discriminant: <br/> &ensp;• 𝑏<sup>𝟐</sup> − 4𝑎𝑐 = (−4) 2 − 4(2)(−6) = 64 (𝑝𝑜𝑠𝑖𝑡𝑖𝑣𝑒,𝑡𝑤𝑜 𝑟𝑒𝑎𝑙 𝑟𝑜𝑜𝑡𝑠) <br/>• Vertex <br /><div style='display:flex; flx-direction: row;'>&ensp;• 𝑥 = &ensp;<span style='display: flex; flex-direction: column; font-size: 10px; height: 10px'><div style='border-bottom:solid #fff 2px; display:inline-block; width: fit-content;'>−𝑏</div><div style='display:inline-block; clear:left;'>2𝑎</div></span></div> <br /> <div style='display:flex; flx-direction: row;'>&ensp;• 𝑥 = &ensp;<span style='display: flex; flex-direction: column; font-size: 10px; height: 10px'><div style='border-bottom:solid #fff 2px; display:inline-block; width: fit-content;'>−(−4)</div><div style='display:inline-block; clear:left;'>2(2)</div></span> &ensp;= 1 </div><br />&ensp;• (1, -8) <br />• Y-intercept <br />&ensp;• (0, -6)",
        "• Discriminant:<br />&ensp;• 𝑏<sup>𝟐</sup> − 4𝑎𝑐 = (9)<sup>𝟐</sup> − 4(1)(2) = 73 (𝑝𝑜𝑠𝑖𝑡𝑖𝑣𝑒,𝑡𝑤𝑜 𝑟𝑒𝑎𝑙 𝑟𝑜𝑜𝑡𝑠) <br />• Vertex <br /><div style='display:flex; flx-direction: row;'>&ensp;• 𝑥 = &ensp;<span style='display: flex; flex-direction: column; font-size: 10px; height: 10px'><div style='border-bottom:solid #fff 2px; display:inline-block; width: fit-content;'>−𝑏</div><div style='display:inline-block; clear:left;'>2𝑎</div></span></div> <br /><div style='display:flex; flx-direction: row;'>&ensp;• 𝑥 = <span style='display: flex; flex-direction: column; font-size: 10px; height: 10px'><div style='border-bottom:solid #fff 2px; display:inline-block; width: fit-content;'>−(9)</div><div style='display:inline-block; clear:left;'>2(1)</div></span> = − <span style='display: flex; flex-direction: column; font-size: 10px; height: 10px'><div style='border-bottom:solid #fff 2px; display:inline-block; width: fit-content;'>9</div><div style='display:inline-block; clear:left;'>2</div></span></div>  <br />&ensp;• (-4.5, -18.25)<br/>• Y-intercept <br />&ensp;• (0, 2)",
        "• Discriminant:<br />&ensp;• 𝑏<sup>𝟐</sup> − 4𝑎𝑐 = (−6)<sup>𝟐</sup> − 4(5)(25) = −464 (𝑛𝑒𝑔𝑎𝑡𝑖𝑣𝑒, 𝑛𝑜 𝑟𝑒𝑎𝑙 𝑟𝑜𝑜𝑡𝑠)<br/>• Vertex <br /><div style='display:flex; flx-direction: row;'>&ensp;• 𝑥 = &ensp;<span style='display: flex; flex-direction: column; font-size: 10px; height: 10px'><div style='border-bottom:solid #fff 2px; display:inline-block; width: fit-content;'>−𝑏</div><div style='display:inline-block; clear:left;'>2𝑎</div></span></div> <br /><div style='display:flex; flx-direction: row;'>&ensp;• 𝑥 = &ensp;<span style='display: flex; flex-direction: column; font-size: 10px; height: 10px'><div style='border-bottom:solid #fff 2px; display:inline-block; width: fit-content;'>−(−6)</div><div style='display:inline-block; clear:left;'>2(5)</div></span>&ensp; = &ensp;<span style='display: flex; flex-direction: column; font-size: 10px; height: 10px'><div style='border-bottom:solid #fff 2px; display:inline-block; width: fit-content;'>3</div><div style='display:inline-block; clear:left;'>3</div></span></div> <br />&ensp;• (0.6, 23.2) <br/>• Y-intercept<br />&ensp;1. (0, 25)",
        "• Discriminant:<br />&ensp;• 𝑏<sup>𝟐</sup> − 4𝑎𝑐 = (−1.25)<sup>𝟐</sup> − 4(1)(−5) = 21.5625 (𝑝𝑜𝑠𝑖𝑡𝑖𝑣𝑒,𝑡𝑤𝑜 𝑟𝑒𝑎𝑙 𝑟𝑜𝑜𝑡𝑠) <br />• Vertex <br /><div style='display:flex; flx-direction: row;'>&ensp;• 𝑥 = &ensp;<span style='display: flex; flex-direction: column; font-size: 10px; height: 10px'><div style='border-bottom:solid #fff 2px; display:inline-block; width: fit-content;'>−𝑏</div><div style='display:inline-block; clear:left;'>2𝑎</div></span></div> <br /><div style='display:flex; flx-direction: row;'>&ensp;• 𝑥 = &ensp;<span style='display: flex; flex-direction: column; font-size: 10px; height: 10px'><div style='border-bottom:solid #fff 2px; display:inline-block; width: fit-content;'>−(−1.25)</div><div style='display:inline-block; clear:left;'>2(1)</div></span>&ensp; = &ensp;<span style='display: flex; flex-direction: column; font-size: 10px; height: 10px'><div style='border-bottom:solid #fff 2px; display:inline-block; width: fit-content;'>1.25</div><div style='display:inline-block; clear:left;'>2</div></span></div> <br/>&ensp;• (0.625, -5.39) <br/>• Y-intercept<br />&ensp;• (0, -5)",
        "• Discriminant: <br />&ensp;• 𝑏<sup>2</sup> − 4𝑎𝑐 = (−56)<sup>2</sup> − 4(10)(−92) = 6816 (𝑝𝑜𝑠𝑖𝑡𝑖𝑣𝑒,𝑡𝑤𝑜 𝑟𝑒𝑎𝑙 𝑟𝑜𝑜𝑡𝑠) <br/>• Vertex <br /><div style='display:flex; flx-direction: row;'>&ensp;• 𝑥 = &ensp;<span style='display: flex; flex-direction: column; font-size: 10px; height: 10px'><div style='border-bottom:solid #fff 2px; display:inline-block; width: fit-content;'>−𝑏</div><div style='display:inline-block; clear:left;'>2𝑎</div></span></div> <br /><div style='display:flex; flx-direction: row;'>&ensp;• 𝑥 = &ensp;<span style='display: flex; flex-direction: column; font-size: 10px; height: 10px'><div style='border-bottom:solid #fff 2px; display:inline-block; width: fit-content;'>−(−56)</div><div style='display:inline-block; clear:left;'>2(10)</div></span>&ensp; = 2.8</div> <br />&ensp;• (2.8, -170.4) <br/> Y-intercept <br />&ensp;• (0, -92) ",
        "Length = x + 3<br />Width = x<br />𝑥(𝑥 + 3) = 28<br />x² + 3x = 28<br />x² + 3x – 28 = 0<br />(x+7) (x-4) = 0<br />x = -7 , x = 4<br />disregard the -7 thus, the width is 4 meters and length is 7 meters. ",
        "x + y = 18 <br />xy = 56 <br />x = 18 – y <br />(18-y) y = 56 <br />y² - 18y + 56 = 0 <br />(y-14) (y-4) = 0 <br />y=14 , y=4 <br />Thus, the two numbers are 14 and 4.",
        "x = first number<br />14 – x = second number<br />Y = maximum possible product<br />y = x (14-x)<br />y = x² - 14x<br />a = -1, b=14, c=0<br /><div style='display:flex; flx-direction: row; '>k = &ensp;<span style='display: flex; flex-direction: column; font-size: 10px; height: 10px'><div style='border-bottom:solid #fff 2px; display:inline-block; width: fit-content;'>4𝑎𝑐−𝑏²</div><div style='display:inline-block; clear:left;'>4𝑎</div></span></div><br /><div style='display:flex; flx-direction: row; '>k = &ensp;<span style='display: flex; flex-direction: column; font-size: 10px; height: 10px'><div style='border-bottom:solid #fff 2px; display:inline-block; width: fit-content;'>4(−1)(0)−14²</div><div style='display:inline-block; clear:left;'>4(−1)</div></span></div> <br />k = 49, therefore the maximum possible product of the two numbers is 49",
        "Solution: <br />&ensp;y = x² - 14x <br />&ensp;a = -1, b=14, c=0 <br />Formula: <br/><div style='display:flex; flx-direction: row; '>&ensp;h = &ensp;<span style='display: flex; flex-direction: column; font-size: 10px; height: 10px'><div style='border-bottom:solid #fff 2px; display:inline-block; width: fit-content;'>−𝑏</div><div style='display:inline-block; clear:left;'>2𝑎</div></span>&ensp;&ensp;&ensp;&ensp;h = <span style='display: flex; flex-direction: column; font-size: 10px; height: 10px'><div style='border-bottom:solid #fff 2px; display:inline-block; width: fit-content;'>−14</div><div style='display:inline-block; clear:left;'>2(−1)</div></span><br/><br/></div> <div style='display:flex; flx-direction: row; '> h = 7 14 – 7 = 7, thus the two numbers are 7 and 7</div>",
        "a. No, because it is linear and not quadratic. <br />b. No, because the highest degree is 3. <br />c. Yes <br />d. No, because it doesn't follow the standard form of a quadratic equation, which is ax²+bx+c=0, where a, b, and c are constants and x is the variable raised to the power of 2."
    ]

    const FR = [
        "The height of a ball thrown upward from the ground at time t (in seconds) is given by ℎ(t)=20t−4.9t². Is this a function?",
        "JP’s store sells oranges for 25 pesos each and bananas for 45 pesos each. Write a function to represent the total cost C and calculate the total cost of buying 10 oranges and 12 bananas.",
        "The temperature C (in degree Celsius) outside a house depends on the time-of-day x (in hours). If C(x) = 0.5x² + 10, find the temperature at x = 5 hours.",
        "The cost G of manufacturing a product depends on the number of units x produced. If G(x) = 1000 + 3x², find the cost of producing 75 units.",
        "Determine whether the following set of points represents a relation or a function: {(1, 2), (2, 3), (3, 4), (1, 5)}.",
        "Determine whether the following set of points represents a relation or a function: {(1, 3), (2, 4), (3, 5), (4, 6)}.",
        "Determine whether the following set of points represents a relation or a function: {(1, 8), (-2, 5), (1, 7)}.",
        "Determine whether the following set of points represents a relation or a function: {(-4, 16), (-5, 25), (6, 36), (7, 49)}.",
        "Given f(x) = 3x² - 6, what is f(4)? ",
        "Lucena Network charges ₱450.00 monthly cable connection fee plus ₱130.00 for each hour of pay-per-view (PPV) event regardless of a full hour or a fraction of an hour. What is the monthly bill of a customer who watched 25 hours of PPV events?"
    ]

    const ansFR = [
        "Yes, because for each input value of time, there is only one corresponding height value.",
        "C (x, y) = 25x + 45y, where x is the number of oranges and y is the number of bananas.",
        "C(x) = 0.5x² + 10 <br />C (5) = 0.5 (5)² + 10 <br />C (5) = 22.5 degree Celsius",
        "G(x) = 1000 + 3x² <br />G (75) = 1000 + 3 (75)² <br />G (75) = 17, 875 pesos",
        "Relation but not a function (since x = 1 is associated with two different y-values, 2 and 5).",
        "Function or both (each x-value is associated with only one y-value).",
        "Relation but not a function (since x = 1 is associated with two different y-values, 8 and 7).",
        "Function or both (each x-value is associated with only one y-value)",
        "f(x) = 3x² – 6 <br />f(4) = 3(4)² – 6 <br />f(4) = 3(16) – 6 <br />f(4) = 48 – 6  <br />f(4) = 42",
        "f(x) = 450 + 130(x) <br />f(25) = 450 +130(25) <br />&ensp;&ensp;&ensp;= 450 + 130(25) <br />&ensp;&ensp;&ensp;= 45 + 3,250 <br />&ensp;&ensp;&ensp;= 3,750 <br/> The monthly bill of a customer who watched 25 hours of PPV event is ₱3,750.00"

    ]

    var question = []
    var solution = []

    if (topic.topic === topics[0]) {
        var question = LF
        var solution = ansLF
    } else if (topic.topic === topics[1]) {
        var question = FR
        var solution = ansFR
    } else if (topic.topic === topics[2]) {
        var question = QF
        var solution = ansQF
    }

    return(
        <>  
            <nav className={style_.SemNav}>
                <div className={style_.nameIconHolder}>
                    <img src={icon} alt="icon" className={style_.Icon}/>
                    <h1 className={style_.name}>CSMath101</h1>
                </div>
                <div className={style_.gobackContainer}>
                    <Link to="/Semi" id={style_.ID}>Back</Link>
                </div>
            </nav>
            <h1 className={style_.TopicTitle}>Functions <br /> and <br /> Relations</h1>
            <div className={style_.parentProblemContainer}>
                <img src={bg2} alt="" className={style_._1bg}/>
                <div className={style_.TryIT}>
                    <p className={style_.TryITChild}>Try it yourself</p>
                </div>
                <img src={bg1} alt="" className={style_._2bg}/>
                <img src={bg3} alt="" className={style_._3bg}/>
                <div className={style_.ProblemContainer}>
                    <Task qts={question[0]} ans={solution[0]} num={1}/>
                    <Task qts={question[1]} ans={solution[1]} num={2}/>
                    <Task qts={question[2]} ans={solution[2]} num={3}/>
                    <Task qts={question[3]} ans={solution[3]} num={4}/>
                    <Task qts={question[4]} ans={solution[4]} num={5}/>
                    <Task qts={question[5]} ans={solution[5]} num={6}/>
                    <Task qts={question[6]} ans={solution[6]} num={7}/>
                    <Task qts={question[7]} ans={solution[7]} num={8}/>
                    <Task qts={question[8]} ans={solution[8]} num={9}/>
                    <Task qts={question[9]} ans={solution[9]} num={10}/>
                </div>
            </div>
            <Foot/>
        </>
    )
    
}

export default SemiProblem