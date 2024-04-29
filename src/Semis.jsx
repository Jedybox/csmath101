import React from "react";
import { Link } from "react-router-dom";

import style from "./Semis.module.css";

import functrelation from "./assets/semis/functionrelation.png"
import linearfunc from "./assets/semis/linearfunc.png"
import quadra from "./assets/semis/quadrafunc.png"
import icon from "./assets/icon.png";
import bg1 from "./assets/bgGradients/bg1.png"
import bg2 from "./assets/bgGradients/bg2.png"
import bg3 from "./assets/bgGradients/bg3.png"

import Foot from "./widgets/foot";

function Semi() {

    const formula = "{(1, 2), (3, 4), (2, 5)}";
    const formula2 = "R = {(2, 6), (3, 4), (2, 5)}";
    const formula3 = "S = {(1, 2), (3, 4), (5, 6)}";

    return(
        <>
        <nav className={style.navi}>
            <div className={style.nameIcon}>
                <img src={icon} alt="" className={style.icon}/>
                <h1 className={style.name}>CSMath101</h1>
            </div>
            <ul className={style.navList}>
                <li className={style.navItems}>
                    <Link to="/Semi/FunctionsRelations">Functions<br/>Relations</Link>
                </li>
                <li className={style.navItems}>
                    <Link to="/Semi/LinearFunction">Linear<br/>Function</Link>
                </li>
                <li className={style.navItems}>
                    <Link to="/Semi/QuadraticFunctions">Quadratic<br/>Functions</Link>
                </li>
                <li className={style.navItems}>
                    <Link to="/">Back</Link>
                </li>
            </ul>
        </nav>
        <header className={style.head}>
            <img src={bg2} alt="" className={style.headBG}/>
            <h1 className={style.termTitle}>Semi-Final<b className={style.TitleEffect}>Term</b></h1>
            <p className={style.sub}>
                This page contains issues with functions and relations, linear and quadratic functions, along with their solutions and answers. Some of the problems may come from real-world situations.
            </p>
        </header>
        <div className={style.topic}>
            <img src={functrelation} alt="" className={style.sampleImg}/>
            <section className={style.topicContent}>
            <h1 className={style.topicTitle}>Functions and Relations</h1>
                <div className={style.content}>
                    <p>
                        In mathematics,  are closely related concepts, but they have some important differences.
                    </p>
                    <p>
                        A <b>relation</b> is a set of ordered pairs, where each ordered pair consists of two elements, 
                        typically from two sets. For example, consider the relation <b>R = {formula}</b>. 
                        Here, each ordered pair represents a relationship between the first element (input) and the second element (output). 
                        Relations can be represented graphically as points on a coordinate plane</p>
                    <p>
                        A <b>function</b> is a special type of relation where each input (first element) is associated with exactly one output (second element). 
                        In other words, for every <b>x</b> in the domain of the function, there is exactly one <b>y</b> value in the range of the function. 
                        If a relation fails to meet this criteria, it is not considered a function. 
                        Functions are typically represented by equations or formulas.</p>
                    <p>
                        Here's a simple example to illustrate the difference:
                    </p>
                    <p>
                        Consider the relation <b>{formula2}</b>.
                        This relation is not a function because the input <b>2</b> is associated with two different outputs, <b>2</b> and <b>5</b>.
                    </p>
                    <p>
                        However, consider the relation <b>{formula3}</b>.
                        This relation is a function because each input is associated with exactly one output.
                    </p>
                    <p>
                        In summary, while all functions are relations, not all relations are functions. 
                        Functions have the specific property that each input is associated with exactly one output, 
                        whereas relations may allow for multiple outputs for a single input, making them more general.
                    </p>
                </div>
                <img src={bg1} alt="" className={style.FRBG}/>
                <Link to="/Semi/FunctionsRelations" id={style.try}>Try Some Problems</Link>
            </section>
        </div>
        <div className={style.topic}>
            <img src={bg3} alt="" className={style.LFBG}/>
            <img src={linearfunc} alt="" className={style.sampleImg}/>
            <section className={style.topicContent}>
                <h1 className={style.topicTitle}>Linear Functions</h1>
                <div className={style.content}>
                    <p>
                        <b>Linear functions</b> are a fundamental concept in mathematics, particularly in algebra. 
                        They represent <b>relationships</b> between two variables that can be graphically represented as a straight line. 
                        A linear function has the general form:
                    </p>
                    <b>f(x) = mx + b</b>
                    <p>In this equation:</p>
                    <p>
                    - <b>f(x)</b> represents the output (dependent variable). <br />
                    - <b>x</b> represents the input (independent variable). <br />
                    - <b>m</b> is the slope of the line, which determines its steepness. It represents the rate of change of the dependent variable with respect to the independent variable. <br />
                    - <b>b</b> is the y-intercept, which is the value of the dependent variable when the independent variable is zero. It's the point where the line intersects the y-axis.
                    </p>
                    <p>
                        1. <b>Straight Line</b>: Graphically, linear functions produce straight lines when plotted on a Cartesian coordinate system.
                    </p>
                    <p>
                        2. <b>Constant Rate of Change</b>: The slope m represents the constant rate of change of the function. 
                        It indicates how much the output changes for a given change in the input.
                    </p>
                    <p>
                        3. <b>Y-Intercept</b>: The y-intercept b is the value of the function when x = 0, meaning it's the point where the line crosses the y-axis.
                    </p>
                    <p>
                        4. <b>Domain and Range</b>: Linear functions have infinite domains and ranges, 
                        meaning they extend indefinitely in both directions along the x and y axes.
                    </p>
                    <p>
                        5. <b>Linearity</b>: The term "linear" comes from the fact that the function's graph is a straight line, 
                        and the relationship between the variables is linear, 
                        meaning the change in the dependent variable is proportional
                        to the change in the independent variable.
                    </p>
                    <p>
                        <b>Linear functions</b> are widely used to model various real-world phenomena, such as population growth, straight-line motion, and financial relationships. 
                        They serve as a foundation for more complex mathematical models and are essential in fiel ds like physics, economics, engineering, and more.
                    </p>
                </div>
                <Link id={style.try} to="/Semi/LinearFunction">Try Some Problems</Link>
                <img src={bg1} alt="" className={style.LFBG2}/>
            </section>
        </div>
        <div className={style.topic}>
        <img src={bg2} alt="" className={style.QTBG}/>
            <img src={quadra} alt="" className={style.sampleImg}/>
            <section className={style.topicContent}>
                <h1 className={style.topicTitle}>Quadratic Functions</h1>
                <div className={style.content}>
                    <p>
                        <b>Quadratic functions</b> are another fundamental concept in mathematics, particularly in algebra. 
                        They represent relationships between two variables where the highest degree of the variable is 2. 
                        Quadratic functions have the general form:
                    </p>
                    <b>f(x) = ax² + bx + c</b>
                    <p>
                        In this equation:
                    </p>
                    <p>- 
                        <b>f(x)</b> represents the output (dependent variable). <br />
                        - <b>x</b> represents the input (independent variable). <br />
                        - <b>a</b>, <b>b</b>, and <b>c</b> are constants, with a not equal to zero. These constants determine the shape, position, and orientation of the quadratic function's graph.
                    </p>
                    <p>
                        Key characteristics of quadratic functions include:
                    </p>
                    <p>
                        1. <b>Parabolic Shape</b>: Graphically, quadratic functions produce curves called parabolas when plotted on a Cartesian coordinate system. 
                        The direction and width of the parabola depend on the sign and magnitude of the coefficient <b>a</b>.
                    </p>
                    <p>
                        - If a {'>'} 0, the parabola opens upwards.
                        - If a {'<'} 0, the parabola opens downwards.
                    </p>
                    <p>
                        2. <b>Vertex</b>: The vertex of a quadratic function is the point where the parabola reaches its minimum or maximum value. 
                        It lies on the axis of symmetry of the parabola.
                    </p>
                    <p>
                        3. Axis of Symmetry: The axis of symmetry of a quadratic function is a vertical line that passes through the vertex of the parabola.
                        It divides the parabola into two symmetric halves.
                    </p>
                    <p>
                        4. Vertex Form: Quadratic functions can also be expressed in vertex form, 
                        which is given by:
                    </p>
                    <b> f(x) = a(x - h)² + k</b>
                    <p>
                        where <b>(h, k)</b> represents the coordinates of the vertex.
                    </p>
                    <p>
                        5. <b>Roots or Zeros</b>: The roots, also known as zeros or x-intercepts, 
                        of a quadratic function are the points where the function intersects the x-axis.
                        They represent the solutions to the quadratic equation <b>ax² + bx + c = 0</b>.
                    </p>
                    <p>
                        <b>Quadratic functions</b> are used to model various phenomena in physics, engineering, economics, and other fields. 
                        They are particularly useful for describing the motion of objects under the influence of gravity, optimization problems, 
                        and the behavior of systems with quadratic relationships. 
                        Understanding quadratic functions is essential for solving equations, graphing parabolas, 
                        and analyzing real-world situations.
                    </p>
                </div>
                <Link id={style.try} to="/Semi/QuadraticFunctions">Try Some Problems</Link>
            </section>
        </div>
        <Foot/>
        </>
    )
}

export default Semi