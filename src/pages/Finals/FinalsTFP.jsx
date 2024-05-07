import React from 'react'

import Navi from '../../widgets/nav.jsx'
import Foot from '../../widgets/foot.jsx'

import style from './FinalsTFP.module.css'

// nulls are for the empty divs
import null1 from './assests/nulls/null1.png'
import null2 from './assests/nulls/null2.png'
import null3 from './assests/nulls/null3.png'

//eye
import eye from './assests/photos/eye.png'

// numbers
import one from './assests/nums/1.png'
import two from './assests/nums/2.png'
import three from './assests/nums/3.png' 
import four from './assests/nums/4.png'
import five from './assests/nums/5.png'
import six from './assests/nums/6.png'
import seven from './assests/nums/7.png'
import eight from './assests/nums/8.png'
import nine from './assests/nums/9.png'
import ten from './assests/nums/10.png'

// bg
import bg1 from './assests/bg/TFP/bg1.png'
import bg2 from './assests/bg/TFP/bg2.png'
import bg3 from './assests/bg/TFP/bg3.png'
import bg4 from './assests/bg/TFP/bg4.png'
import bg5 from './assests/bg/TFP/bg5.png'
import bg6 from './assests/bg/TFP/bg6.png'
import bg7 from './assests/bg/TFP/bg7.png'

export default function FinalsTFP() {
  return (
    <>
        <header className={style.header}>
            <Navi/>
            <div className={style.TitleContainer}>
                <h1 className={style.Title}>Transcendental Function <br />Problems</h1>
            </div>
        </header>
        <main className={style.TasksContainer}>
          <div className={style.Task}>
            <h1 className={style.Taskpart}>Part I</h1>
            <img src={bg1} alt="" className={style.bg} id={style.bg1}/>
            <div className={style.TPFpart1haft}>
              <div className={style.problemHaft}>
                <img src={one} alt="" className={style.problemNum}/>
                <p className={style.question}>
                  Evalute <br />
                  f(x) = e<sup>(-x) cos (x)</sup>  from 0 to <sup>π</sup>/<sub>2</sub>
                </p>
                <div className={style.showContainer}>
                  <img src={eye} alt="" id={style.eye}/>
                </div>
              </div>
              <div className={style.problemHaft}>
                <img src={two} alt="" className={style.problemNum}/>
                <p className={style.question}>
                Evaluate <br />
                ∑(n = 1)<sup>∞</sup> (<sup>sin(n)</sup>/<sub>n<sup>3</sup></sub>).
                </p>
                <div className={style.showContainer}>
                  <img src={eye} alt="" id={style.eye}/>
                </div>
              </div>
              <div className={style.problemHaft}>
                <img src={three} alt="" className={style.problemNum}/>
                <p className={style.question}>
                  Evaluate <br />
                  tan(x) = √3 for x in the interval (0,2π).
                </p>
                <div className={style.showContainer}>
                  <img src={eye} alt="" id={style.eye}/>
                </div>
              </div>
              <div className={style.problemHaft}>
                <img src={four} alt="" className={style.problemNum}/>
                <p className={style.question}>
                  Find the Derivative <br />
                  g(x) = x<sup>2</sup> + 3x + 1
                </p>
                <div className={style.showContainer}>
                  <img src={eye} alt="" id={style.eye}/>
                </div>
              </div>
              <div className={style.problemHaft}>
                <img src={five} alt="" className={style.problemNum}/>
                <p className={style.question}>
                  Find the Integral <br />
                  ∫(x<sup>2</sup> + 3x + 1)dx
                </p>
                <div className={style.showContainer}>
                  <img src={eye} alt="" id={style.eye}/>
                </div>
              </div>
              <div className={style.problemHaft}>
                <img src={six} alt="" className={style.problemNum}/>
                <p className={style.question}>
                  Find the Solution <br />
                  <sup>dy</sup>/<sub>dx</sub> = y tan(x)
                </p>
                <div className={style.showContainer}>
                  <img src={eye} alt="" id={style.eye}/>
                </div>
              </div>
              <div className={style.problemHaft}>
                <img src={seven} alt="" className={style.problemNum}/>
                <p className={style.question}>
                  Find the Maximum Value <br />
                  f(x) = x In(x) on the interval [1,e]
                </p>
                <div className={style.showContainer}>
                  <img src={eye} alt="" id={style.eye}/>
                </div>
              </div>
              <div className={style.problemHaft} >
                <img src={null1} alt="" id={style.null}/>
              </div>
            </div>
            <img src={bg2} alt="" className={style.bg} id={style.bg2}/>
            <div className={style.TPFpart1lasthaft}>
              <div className={style.lasfthaftQuestion}>
                <img src={eight} alt="" className={style.problemNumhaft}/>
                <p className={style.question}>
                  A farmer from Philippines wants to maximize the
                  yield of his crop, which is modeled by the
                  transcendental function f(x) = sin(x) + cos(x),
                  where x is the angle of the sun's rays.
                  What is the optimal angle of the sun's rays to
                  maximize the crop yield?
                </p>
                <div className={style.showContainer}>
                  <img src={eye} alt="" id={style.eye}/>
                </div>
              </div>
              <div className={style.lasfthaftQuestion}>
                <img src={nine} alt="" className={style.problemNumhaft}/>
                <p className={style.question}>
                  A Filipino fisherman is trying to determine the
                  optimal depth to drop his net to catch the most fish.
                  The number of fish in the area is modeled by the transcendental
                  f(x) = e<sup><sup>x</sup>/<sub>10</sub></sup>,
                  where    is the depth in meters. What is the optimal depth to drop the net to catch the most fish?
                </p>
                <div className={style.showContainer}>
                  <img src={eye} alt="" id={style.eye}/>
                </div>
              </div>
              <div className={style.lasfthaftQuestion}>
                <img src={ten} alt="" className={style._10}/>
                <p className={style.question}>
                  An engineer is designing a building with a roof that
                  is modeled by the transcendental f(x) = tan(x),
                  where x is the angle of the roof.
                  The engineer wants to determine the optimal angle
                  of the roof to maximize the amount of sunlight that
                  enters the building. What is the optimal angle of
                  the roof to maximize the amount of sunlight?
                </p>
                <div className={style.showContainer}>
                  <img src={eye} alt="" id={style.eye}/>
                </div>
              </div>
            </div>
          </div>
          <div className={style.Task}>
            <h1 className={style.Taskpart}>Part II</h1>
            <img src={bg3} alt="" className={style.bg} id={style.bg3}/>
            <div className={style.TPFpart1haft}>
              <div className={style.problemHaft}>
                <img src={one} alt="" className={style.problemNum}/>
                <p className={style.question}>
                  Evaluate <br />
                  f(x) = sin(2x) at x = <sup>π</sup>/<sub>6</sub>
                </p>
                <div className={style.showContainer}>
                  <img src={eye} alt="" id={style.eye}/>
                </div>
              </div>
              <div className={style.problemHaft}>
                <img src={two} alt="" className={style.problemNum}/>
                <p className={style.question}>
                  Evaluate <br />
                  tan(x) = 1 for x in the interval of 
                  [0,2π].
                </p>
                <div className={style.showContainer}>
                  <img src={eye} alt="" id={style.eye}/>
                </div>
              </div>
              <div className={style.problemHaft}>
                <img src={three} alt="" className={style.problemNum}/>
                <p className={style.question}>
                  Evaluate <br />
                  lim <sup>In(x)</sup>/<sub>x</sub> <br />
                  <sup>x {"->"} ∞</sup>
                </p>
                <div className={style.showContainer}>
                  <img src={eye} alt="" id={style.eye}/>
                </div>
              </div>
              <div className={style.problemHaft}>
                <img src={four} alt="" className={style.problemNum}/>
                <p className={style.question}>
                  Evaluate <br />
                  sin(x) = 0.5 for x in the interval of [0,2π].
                </p>
                <div className={style.showContainer}>
                  <img src={eye} alt="" id={style.eye}/>
                </div>
              </div>
              <div className={style.problemHaft}>
                <img src={five} alt="" className={style.problemNum}/>
                <p className={style.question}>
                  Evaluate <br />
                  e<sup>x</sup> = 10
                </p>
                <div className={style.showContainer}>
                  <img src={eye} alt="" id={style.eye}/>
                </div>
              </div>
              <div className={style.problemHaft}>
                <img src={six} alt="" className={style.problemNum}/>
                <p className={style.question}>
                  Find the Derivative <br />
                  g(x) = e<sup>3x</sup>
                </p>
                <div className={style.showContainer}>
                  <img src={eye} alt="" id={style.eye}/>
                </div>
              </div>
              <div className={style.problemHaft} >
                <img src={null2} alt="" id={style.null}/>
              </div>
              <div className={style.problemHaft}>
                <img src={seven} alt="" className={style.problemNum}/>
                <p className={style.question}>
                  Find the Maximum Value <br />
                  f(x) = x In(x) on the interval [1,e]
                </p>
                <div className={style.showContainer}>
                  <img src={eye} alt="" id={style.eye}/>
                </div>
              </div>
            </div>
            <img src={bg4} alt="" className={style.bg} id={style.bg4}/>
            <div className={style.TPFpart1lasthaft}>
              <div className={style.lasfthaftQuestion}>
                <img src={eight} alt="" className={style.problemNumhaft}/>
                <p className={style.question}>
                  In the Philippines, population growth can be modeled
                  using the exponential function. Let's say the population
                  of a city is growing exponentially at a rate of 3% per year,
                  starting with an initial population of 1 million people.
                  The population growth function P(t) over time t can be modeled as:
                </p>
                <div className={style.showContainer}>
                  <img src={eye} alt="" id={style.eye}/>
                </div>
              </div>
              <div className={style.lasfthaftQuestion}>
                <img src={nine} alt="" className={style.problemNumhaft}/>
                <p className={style.question}>
                  The population of a province in the Philippines grows
                  exponentially with a doubling time of 10 years.
                  If the current population is 1,000,000, what will
                  be the population after 20 years?
                </p>
                <div className={style.showContainer}>
                  <img src={eye} alt="" id={style.eye}/>
                </div>
              </div>
              <div className={style.lasfthaftQuestion}>
                <img src={ten} alt="" className={style._10}/>
                <p className={style.question}>
                  The tidal variation in coastal areas of the
                  Philippines can be modeled using trigonometric functions.
                  For instance, the height of the tide throughout the day
                  can be modeled using a sinusoidal function.
                  Let's say the average tidal height is 1.5 meters and
                  the tide varies sinusoidal with a maximum height of
                  2 meters and a period of 12 hours. The tidal height
                  function ℎ(t) at time can be modeled as:
                </p>
                <div className={style.showContainer}>
                  <img src={eye} alt="" id={style.eye}/>
                </div>
              </div>
            </div>
          </div>
          <div className={style.Task}>
            <h1 className={style.Taskpart}>Part III</h1>
            <img src={bg5} alt="" className={style.bg} id={style.bg5}/>
            <img src={bg6} alt="" className={style.bg} id={style.bg6}/>
            <div className={style.halves}>
              <div className={style.halvesChild}>
                <img src={one} alt="" className={style.problemNum}/>
                <p className={style.question}>
                  Solve <br />
                  2<sup>x</sup> = 8
                </p>
                <div className={style.showContainer}>
                  <img src={eye} alt="" id={style.eye}/>
                </div>
              </div>
              <div className={style.halvesChild}>
                <img src={two} alt="" className={style.problemNum}/>
                <p className={style.question}>
                  Solve <br />
                  cos(2x -  <sup>π</sup>/<sub>3</sub>) = <sup>1</sup>/<sub>2</sub>
                </p>
                <div className={style.showContainer}>
                  <img src={eye} alt="" id={style.eye}/>
                </div>
              </div>
            </div>
            <div className={style.lasfthaftQuestion}>
              <img src={three} alt="" className={style.problemNum}/>
              <p className={style.question}>
                Solve <br />
                A population of bacteria doubles every hour.
                If the initial population is 100, write a function
                to model the population growth over time (t in hours)
              </p>
              <div className={style.showContainer}>
                <img src={eye} alt="" id={style.eye}/>
              </div>
            </div>
            <div className={style.halves}>
              <div className={style.halvesChild}>
                <img src={four} alt="" className={style.problemNum}/>
                <p className={style.question}>
                  Evaluate <br />
                  10<sup>x</sup> = 0.001
                </p>
                <div className={style.showContainer}>
                  <img src={eye} alt="" id={style.eye}/>
                </div>
              </div>
              <div className={style.halvesChild}>
                <img src={null3} alt="" id={style.null}/>
              </div>
            </div>
            <div className={style.lasfthaftQuestion}>
              <img src={five} alt="" className={style.problemNum}/>
              <p className={style.question}>
                Solve <br />
                Analyze the function f(x) = <sup>sin(x)</sup>/<sub>x</sub> as x approaches 0. Does the limit exist, and is the function continuous at x = 0?
              </p>
              <div className={style.showContainer}>
                <img src={eye} alt="" id={style.eye}/>
              </div>
            </div>
            <div className={style.halves}>
              <div className={style.halvesChild}>
                <img src={six} alt="" className={style.problemNum}/>
                <p className={style.question}>
                  Find the Derivative <br />
                  f(x) = 3<sup>x</sup>
                </p>
                <div className={style.showContainer}>
                  <img src={eye} alt="" id={style.eye}/>
                </div>
              </div>
              <div className={style.halvesChild}>
                <img src={seven} alt="" className={style.problemNum}/>
                <p className={style.question}>
                Find the Inverse of the Function <br />
                f(x) = sin(x)
                </p>
                <div className={style.showContainer}>
                  <img src={eye} alt="" id={style.eye}/>
                </div>
              </div>
            </div>
            <div className={style.lasfthaftQuestion}>
              <img src={eight} alt="" className={style.problemNum}/>
              <p className={style.question}>
                Solve <br />
                Analyze the function f(x) = <sup>sin(x)</sup>/<sub>x</sub> as x approaches 0. Does the limit exist, and is the function continuous at x = 0?
              </p>
              <div className={style.showContainer}>
                <img src={eye} alt="" id={style.eye}/>
              </div>
            </div>
            <div className={style.lasfthaftQuestion}>
              <img src={nine} alt="" className={style.problemNum}/>
              <p className={style.question}>
                Answer this <br />
                Coconut is a major crop in the Philippines.
                Farmers want to maximize the amount of coconut
                oil they extract from a fixed amount of coconuts.
              </p>
              <div className={style.showContainer}>
                <img src={eye} alt="" id={style.eye}/>
              </div>
            </div>
            <div className={style.lasfthaftQuestion}>
              <img src={ten} alt="" className={style._10}/>
              <p className={style.question}>
                Answer this <br />
                Filipinos rely heavily on loans for businesses
                and personal needs. Understanding interest rates
                is crucial for financial planning.
              </p>
              <div className={style.showContainer}>
                <img src={eye} alt="" id={style.eye}/>
              </div>
            </div>
          </div>
          <img src={bg7} alt="" className={style.bg} id={style.bg7}/>
        </main>
        <Foot/>
    </>
  )
}
