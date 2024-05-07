import React, {useState} from 'react'

import Navi from '../../widgets/nav.jsx'
import Foot from '../../widgets/foot.jsx'

import style from './FinalsTFP.module.css'

// nulls are for the empty divs
import null1 from './assests/nulls/null1.png'
import null2 from './assests/nulls/null2.png'
import null3 from './assests/nulls/null3.png'

//eye
import eye from './assests/photos/eye.png'
import closeeye from './assests/photos/closeeye.png'

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

  const [show, setShow] = useState(false)

  const showHandler = () => {
    setShow(!show)
  }

  if (show) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }

  const [show1, setShow1] = useState(false)

  const showHandler1 = () => {
    setShow1(!show1)
  }

  if (show1) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }

  const [show2, setShow2] = useState(false)

  const showHandler2 = () => {
    setShow2(!show2)
  }

  if (show2) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }

  const [show3, setShow3] = useState(false)

  const showHandler3 = () => {
    setShow3(!show3)
  }

  if (show3) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }

  const [show4, setShow4] = useState(false)

  const showHandler4 = () => {
    setShow4(!show4)
  }

  if (show4) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }

  const [show5, setShow5] = useState(false)

  const showHandler5 = () => {
    setShow5(!show5)
  }

  if (show5) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }

  const [show6, setShow6] = useState(false)

  const showHandler6 = () => {
    setShow6(!show6)
  }

  if (show6) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }

  const [show7, setShow7] = useState(false)

  const showHandler7 = () => {
    setShow7(!show7)
  }

  if (show7) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }

  const [show8, setShow8] = useState(false)

  const showHandler8 = () => {
    setShow8(!show8)
  }

  if (show8) {
    document.body.style.overflow = 'hidden'
  }

  return (
    <>  
        { show && (
          <div className={style.popContainer}>
            <div className={style.pop}>
              <img src={one} alt="" className={style.problemNum}/>
              <p className={style.popContent}>
                Evalute <br />
                f(x) = e<sup>(-x) cos (x)</sup>  from 0 to <sup>π</sup>/<sub>2</sub> <br /> <br />
                Solution: <br />
                We can use integration by parts to solve this problem. <br />
                Let u = cos(x) and dv = e<sup>-x</sup> dx <br /> <br />
                Then we find du = -sin(x) dx and v = -e<sup>-x</sup>. <br /> <br />
                Using the integration by parts formula ∫ udv = uv -  ∫ vdu, we have: <br />
                ∫(e<sup>(-x)cos(x)</sup>)dx = -e<sup>(-x)cos(x)</sup> -  ∫(e<sup>(x)(sin(x)</sup>)) <br /> <br />
                Now let’s find the anti derivative of e<sup>(x)(-sin(x))</sup>. <br />
                Let u = -sin(x) and dv = e<sup>-x</sup> dx. <br /> <br />
                Then we find = -cos(x) dx and v = -e<sup>-x</sup> <br /> <br />
                Using the integration by parts formula again, we have: <br />
                ∫(e<sup>(-x)(-sin(x))</sup>)dx  = e<sup>(-x)sin(x)</sup> + ∫(e<sup>(-x)cos(x)</sup>)dx <br /> <br />
                Substituting this back into our original equation, we get: <br />
                ∫(e<sup>(-x)cos(x)</sup>)dx = -e<sup>(-x)cos(x)</sup> + e<sup>(-x)sin(x)</sup> + ∫(e<sup>(-x)cos(x)</sup>)dx <br /> <br />
                Subtracting ∫ (e<sup>(-x)cos(x)</sup>)dx from both sides, we get: <br />
                0 = e<sup>(-x)cos(x)</sup> + e<sup>(-x)sin(x)</sup> <br /> <br />
                So the anti derivative of e<sup>(-x)cos(x)</sup> is F(x) = e<sup>(-x)(sin(x)-cos())</sup>. <br /> <br />
                Now we can evaluate the definite integral: <br />
                ∫ (e<sup>(-x)cos(x)</sup>)dx from 0 to <sup>π</sup>/<sub>2</sub> = F(<sup>π</sup>/<sub>2</sub>) - F(0) <br />
                = e(<sup>π</sup>/<sub>2</sub>)(sin(<sup>π</sup>/<sub>2</sub>) - cos(<sup>π</sup>/<sub>2</sub>)) - e(-0)(<sup>sin(x=0)-cos(0)</sup>)
                = e(<sup>π</sup>/<sub>2</sub>)(1-0) - e<sup>(-0)(0-1)</sup>
                = e<sup>π</sup>/<sub>2</sub> - 1
              </p>
              <div className={style.close} onClick={showHandler}>
                <img src={closeeye} alt="" id={style.closer}/>
              </div>
            </div>
          </div>
        )}
        {show1 && (
            <div className={style.popContainer}>
              <div className={style.pop}>
                <img src={two} alt="" className={style.problemNum}/>
                <p className={style.popContent}>
                  Evaluate <br />
                  ∑(n = 1)<sup>∞</sup> (sin<sup>n)</sup>/<sub>n<sup>3</sup></sub>). <br /> <br />
                  Solution: <br />
                  We can use intergration by parts to solve this problem. <i>Let u</i> = cos(x) and dv = e<sup>-x</sup> dx <br /> <br />
                  Then we <i>find du</i> = -sin(x) dx and v = -e<sup>-x</sup>. <br /> <br />
                  Using the integration by parts formula ∫ udv = uv -  ∫ vdu, we have: <br />
                  ∫(e<sup>(-x)cos(x)</sup>)dx = -e<sup>(-x)cos(x)</sup> -  ∫(e<sup>(-x)(sin(x)</sup>))dx <br /> <br />
                  Now let’s find the anti derivative of e<sup>(-x)(-sin(x))</sup>. Then we find = -cos(x) dx and v = -e<sup>-x</sup> <br /> <br />
                  Using the integration by parts formula again, we have: <br />
                  ∫(e<sup>(-x)(-sin(x))</sup>)dx  = e<sup>(-x)sin(x)</sup> + ∫(e<sup>(-x)cos(x)</sup>)dx <br /> <br />
                  Substituting this back into our original equation, we get: <br />
                  ∫(e<sup>(-x)cos(x)</sup>)dx = -e<sup>(-x)cos(x)</sup> + e<sup>(-x)sin(x)</sup> + ∫(e<sup>(-x)cos(x)</sup>)dx <br /> <br />
                  Subtracting ∫ (e<sup>(-x)cos(x)</sup>)dx from both sides, we get: <br />
                  0 = e<sup>(-x)cos(x)</sup> + e<sup>(-x)sin(x)</sup> <br /> <br />
                  So the anti derivative of e<sup>(-x)cos(x)</sup> is F(x) = e<sup>(-x)(sin(x)-cos())</sup>. <br /> <br />
                  Now we can evaluate the definite integral: <br />
                  ∫ (e<sup>(-x)cos(x)</sup>)dx from 0 to <sup>π</sup>/<sub>2</sub> = F(<sup>π</sup>/<sub>2</sub>) - F(0) <br />
                  = e(<sup>π</sup>/<sub>2</sub>)(sin(<sup>π</sup>/<sub>2</sub>) - cos(<sup>π</sup>/<sub>2</sub>)) - e(-0)(<sup>sin(x=0)-cos(0)</sup>) <br />
                  = e(<sup>π</sup>/<sub>2</sub>)(1-0) - e<sup>(-0)(0-1)</sup>
                  = e<sup>π</sup>/<sub>2</sub> - 1
                </p>
                <div className={style.close} onClick={showHandler1}>
                  <img src={closeeye} alt="" id={style.closer}/>
                </div>
              </div>
            </div>
        )}
        {show2 && (
          <div className={style.popContainer}>
            <div className={style.pop}>
              <img src={three} alt="" className={style.problemNum}/>
              <p className={style.popContent}>
                Evaluate <br />
                tan(x) = √3 for x in the interval [0,2π]. <br /> <br />
                Solution: <br />
                We know that the tangent function has a period of π,
                so we can find all solutions by finding the solutions in the interval [0,<sup>π</sup>/<sub>2</sub>]
                and adding integer multiples of π.<br />
                In the interval [0,<sup>π</sup>/<sub>2</sub>], the equation tan(x) = √3 has only one solution, which is x = <sup>π</sup>/<sub>6</sub>. <br />
                So, the solutions in the interval [0,2π] are: <br />
                x = <sup>π</sup>/<sub>6</sub> + nπ for n = 0, 1, 2, ... <br />
                x = <sup>π</sup>/<sub>6</sub> + πn for n = 0, 1, 2, ... <br /> <br />
                These solutions can be simplified to: <br />
                x = <sup>π</sup>/<sub>6</sub> + nπ for n = 0, 1, 2, ... <br />
                x = (<sup>5π</sup>/6) nπ for n = 0, 1, 2, ... <br />
              </p>
              <div className={style.close} onClick={showHandler2}>
                <img src={closeeye} alt="" id={style.closer}/>
              </div>
            </div>
          </div>
        )}
        {show3 && (
          <div className={style.popContainer}>
            <div className={style.pop}>
              <img src={four} alt="" className={style.problemNum}/>
              <p className={style.popContent}>
                Find the Derivative <br />
                g(x) = x<sup>2</sup> + 3x + 1 <br /> <br />
                Solution: <br />
                To find the derivative of g(x) = x<sup>2</sup> + 3x + 1, we can use the power rule for differentiation,
                which states that if f(x) = x<sup>n</sup>, then f'(x) = nx<sup>n-1</sup>. <br />
                Therefore, the derivative of g(x) is: <br />
                g'(x) = 2x + 3 <br />
              </p>
              <div className={style.close} onClick={showHandler3}>
                <img src={closeeye} alt="" id={style.closer}/>
              </div>
            </div>
          </div>
        )}
        {show4 && (
          <div className={style.popContainer}>
            <div className={style.pop}>
              <img src={five} alt="" className={style.problemNum}/>
              <p className={style.popContent}>
                Find the Integral <br />
                ∫(x<sup>2</sup> + 3x + 1)dx <br /> <br />
                To find the integral of x<sup>2</sup> + 3x + 1 with respect to x, we can use the power rule for integration,
                which states that if f(x) = x<sup>n</sup>, then ∫(n<sup>x</sup>)dx = <sup>x<sup>n+1</sup></sup>/<sub>n+1</sub> + C,
                where C is the constant of integration. <br />
                Therefore the integral of x<sup>2</sup> + 3x + 1 is: <br />
                ∫(x<sup>2</sup> + 3x + 1)dx = <sup>x<sup>3</sup></sup>/<sub>3</sub> + <sup>3x<sup>2</sup></sup>/<sub>2</sub> + x + C
              </p>
              <div className={style.close} onClick={showHandler4}>
                <img src={closeeye} alt="" id={style.closer}/>
              </div>
            </div>
          </div>
        )}
        {show5 && (
          <div className={style.popContainer}>
            <div className={style.pop}>
              <img src={six} alt="" className={style.problemNum}/>
              <p className={style.popContent}>
                Find the Solution <br />
                <sup>dy</sup>/<sub>dx</sub> = y tan(x) <br /> <br />
                Solution: <br />
                To find the solution of the first-order differential equation <sup>dy</sup>/<sub>dx</sub> = y tan(x),
                we can use the method of separation of variables. <br />
                First, we can rewrite the equation as: <br />
                <sup>dy</sup>/<sub>y</sub> = tan(x) dx <br />
                Nextm, integrade both sides: <br />
                ∫ (<sup>1</sup>/<sub>y</sub>)dy = tan ∫ (x)dx <br /> <br />
                The left side integrates to ln|y|, and the right side integrates to -ln|cos(x)| + C,
                where C is the constant of integration. <br />
                Therefore, the solution is: <br />
                ln|y| = -ln|cos(x)| + C <br />
                Taking the exponential of both sides, we get: <br />
                y = <sup>e</sup>/|cos(x)| <br />
                where K is an arbitrary constant.
              </p>
              <div className={style.close} onClick={showHandler5}>
                <img src={closeeye} alt="" id={style.closer}/>
              </div>
            </div>
          </div>
        )}
        {show6 && (
            <div className={style.popContainer}>
              <div className={style.pop}>
                <img src={seven} alt="" className={style.problemNum}/>
                <p className={style.popContent}>
                  Find the Maximum Value <br />
                  f(x) = x In(x) on the interval [1,e] <br /> <br />
                  To find the maximum value of the function f(x) = x ln(x) on the interval [1,e],
                  we can use calculus. <br />
                  First, find the derivative of f(x) with respect to x: <br />
                  f'(x) = ln(x) + 1 <br />
                  Simplify for x: <br />
                  f'(x) = ln(x) + 1<br /> 
                  Next, find the critical points by setting the derivative equal to zero: <br />
                  ln(x) + 1 = 0 <br />
                  Solve for zero: <br />
                  ln(x) = -1 <br />
                  Exponentiate both sides: <br />
                  x = e<sup>-1</sup>
                  Since x = e<sup>-1</sup> is in the interval [1,e], it is a critical point. <br />
                  To determine whether it is a maximum or minimum, we can use the second derivative test. <br />
                  First, find the second derivative of f(x) with respect to x: <br />
                  f''(x) = 1/x <br />
                  Next, evaluate the second derivative at the critical point: <br />
                  f''(e<sup>-1</sup>) = <sup>1</sup>/<sub>e<sup>-1</sup></sub> = e<br />
                  Since the second  f''(e<sup>-1</sup>) is positive, the critical point x = e<sup>-1</sup>
                  corresponds to a local minimum. <br />
                  Therefore, the maximum value of f(x) on the interval [1,e] occurs at this end points, <br />
                  Evaluate f(1) and f(e): <br />
                  f(1) = 1 ln(1) = 0 <br />
                  f(e) = e ln(e) = e <br />
                  Since f(e) is greater than f(1), the maximum value of f(x) on the interval [1,e] is f(e) = e.
                </p>
                <div className={style.close} onClick={showHandler6}>
                  <img src={closeeye} alt="" id={style.closer}/>
                </div>
              </div>
            </div>
        )}
        {show7 && (
          <div className={style.popContainer}>
            <div className={style.pop}>
              <img src={eight} alt="" className={style.problemNum}/>
              <p className={style.popContent}>
                A farmer from Philippines wants to maximize the
                yield of his crop, which is modeled by the
                transcendental function f(x) = sin(x) + cos(x),
                where x is the angle of the sun's rays.
                What is the optimal angle of the sun's rays to
                maximize the crop yield? <br /> <br />
                Solution: <br />
                To find the optinal angle, we need to find maximum value of the function f(x) = sin(x) + cos(x).
                We can use the derivative to find the critical points. <br />
                The deriviative of f(x) is f'(x) = cos(x) - sin(x). Setting this equal to zero, we get: <br />
                cos(x) - sin(x) = 0 <br />
                cos(x) = sin(x) <br />
                We can solve for x by dividing both sides by cos(x): <br />
                1 = tan(x) <br />
                x = arctan(1)
                x = <sup>π</sup>/<sub>4</sub> <br />
                Therefore, the optimal angle of the sun's rays to maximize the crop yield is x = <sup>π</sup>/<sub>4</sub> or 45 degrees.
              </p>
              <div className={style.close} onClick={showHandler7}>
                <img src={closeeye} alt="" id={style.closer}/>
              </div>
            </div>
          </div>
        )}
        {show8 && (
          <div className={style.popContainer}>
            <div className={style.pop}>
              <img src={nine} alt="" className={style.problemNum}/>
              <p className={style.popContent}>
                A Filipino fisherman is trying to determine the optimal depth
                to drop his net to catch the most fish. The number of fish in
                the area is modeled by the transcendental f(x) = ex/10 ,
                where    is the depth in meters. What is the optimal depth
                to drop the net to catch the most fish? <br /> <br />
                Solution: <br />
                To find the optimal depth, we need to find the maximum value of the function f(x) = e<sup>x/10</sup>.
                We can use the derivative to find the critical points. <br />
                The derivative of f(x) is f'(x) = (<sup>1</sup>/<sub>10</sub>)e<sup>x/10</sup>. Setting this equal to zero, we get: <br />
                (<sup>1</sup>/<sub>10</sub>)e<sup>x/10</sup> = 0 <br />
                This equation has no solution since e<sup>x/10</sup> is never equal to zero. <br />
                Therefore, the maximum value of the function occurs at the boundary of the domain. <br />
                Since x is the depth in meters, the domain of the function is x ≥ 0. 
                Therefore, the optimal depth to drop the net to catch the most fish is 0 meters, which means
                dropping the net at the surface of the water.
              </p>
              <div className={style.close} onClick={showHandler8}>
                <img src={closeeye} alt="" id={style.closer}/>
              </div>
            </div>
          </div>
        )}
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
                <div className={style.showContainer} onClick={showHandler}>
                  <img src={eye} alt="" id={style.eye}/>
                </div>
              </div>
              <div className={style.problemHaft}>
                <img src={two} alt="" className={style.problemNum}/>
                <p className={style.question}>
                Evaluate <br />
                ∑(n = 1)<sup>∞</sup> (<sup>sin(n)</sup>/<sub>n<sup>3</sup></sub>).
                </p>
                <div className={style.showContainer} onClick={showHandler1}>
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
