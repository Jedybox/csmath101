import React from "react";
import Navi from "../../widgets/nav";
import { Link } from "react-router-dom";

import photo1 from "./midtermAssets/photo1.png"
import photo2 from "./midtermAssets/photo2.png"
import photo3 from "./midtermAssets/photo3.png"
import photo4 from "./midtermAssets/photo4.png"
import photo5 from "./midtermAssets/photo5.png"
import photo6 from "./midtermAssets/photo6.png"
import photo7 from "./midtermAssets/photo7.png"
import photo8 from "./midtermAssets/photo8.png"
import photo9 from "./midtermAssets/photo9.png"
import photo10 from "./midtermAssets/photo10.png"

import bg1 from "../../assets/bgGradients/bg1.png"
import bg2 from "../../assets/bgGradients/bg2.png"
import bg3 from "../../assets/bgGradients/bg3.png"

import style from "./midterm.module.css"
import Foot from "../../widgets/foot";

function Midterm() {
    return(
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
            <header className={style.head}>
                <Navi/>
                <div className={style.TermTitle}>
                    <h1 className={style.Title}>Midterm</h1>
                    <p className={style.midsub}>
                        ·Basic Algebraic Concepts <br />
                        ·Equations and Inequalities <br />
                        ·Systems of Linear Equations and Matrices
                    </p>
                </div>
            </header>
            <div className={style.lessonsContainer}>
                <div className={style.lesson}>
                    <div className={style.lessonContent}>
                        <img src={photo1} alt="" className={style.photo1}/>
                        <h1 className={style.lessonTitle}>Basic Algebraic Concepts</h1>
                        <p className={style.p}>
                            Algebra is a branch of mathematics that deals with symbols and 
                            the rules for manipulating these symbols to solve problems. 
                            It extends the basic arithmetic operations of addition, 
                            subtraction, multiplication, and division by introducing 
                            variables and symbols to represent unknown quantities. In algebra, 
                            we use letters like x, y, and z to represent these variables, 
                            allowing us to express relationships and patterns in a more general 
                            and abstract way.
                        </p>
                        <img src={photo2} alt="" className={style.photo2}/>
                        <h2 className={style.SubTopicTitle}>Historical Overview of Algebra</h2>
                        <p className={style.p}>
                            The roots of algebra can be traced back to ancient civilizations 
                            such as Babylon, Egypt, and Greece, where mathematicians developed 
                            methods for solving equations and geometric problems. The term "algebra" 
                            itself is derived from the Arabic word "al-jabr," which was used by the 
                            mathematician Al-Khwarizmi in his influential work "The Compendious Book 
                            on Calculation by Completion and Balancing" in the 9th century. 
                            During the Renaissance, mathematicians like Descartes and Fermat made 
                            significant contributions to the development of algebraic notation and 
                            techniques, laying the groundwork for modern algebra.
                        </p>
                        <h2 className={style.SubTopicTitle}>Notation and Terminology</h2>
                        <p className={style.p}>
                            In algebra, we use a variety of symbols and terminology to represent 
                            mathematical concepts and relationships. Variables, represented by 
                            letters like x, y, and z, stand for unknown or changing quantities 
                            that we aim to determine. Constants are fixed values that do not change, 
                            such as pi (𝜋) or the speed of light (c). Coefficients are multiplicative 
                            factors that appear alongside variables in expressions or equations. 
                            Operators, such as +, -, ×, and ÷, denote the basic arithmetic operations.
                        </p>
                        <p className={style.p}>
                            Algebraic expressions are combinations of variables, consonants, and operations,
                            while equations assert that two expressions are equal. For example, 2x + 3 is 
                            an expression, while 2x + 3 = 7 is an equation, indicating that the expressions 
                            on the left side is to constant on the right. 
                        </p>
                        <img src={photo3} alt="" className={style.photo3}/>
                        <h2 className={style.SubTopicTitle}>Understanding Variables</h2>
                        <p className={style.p}>
                            Variables are fundamental elements in algebra, representing unknown or 
                            changing quantities. They are typically denoted by letters such as x, y, or z. 
                            Variables allow us to express relationships and patterns in mathematical 
                            expressions and equations without specifying their precise values. Understanding 
                            variables is essential as they form the basis for solving equations and 
                            analyzing mathematical relationships.
                        </p>
                        <h2 className={style.SubTopicTitle}>Identifying Constants</h2>
                        <p className={style.p}>
                            Constants are fixed values that do not change. Unlike variables, 
                            which can take on different values, constants remain constant throughout 
                            a problem or mathematical expression. Common examples of constants include 
                            numerical values like 3, 𝜋, or (e), as well as physical constants like the 
                            gravitational constant (G) or the speed of light (c). Identifying constants 
                            is important for distinguishing them from variables and understanding their 
                            role in mathematical expressions and equations.
                        </p>
                        <h2 className={style.SubTopicTitle}>Identifying Constants</h2>
                        <p className={style.p}>
                            Algebraic expressions are mathematical phrases that contain variables, constants, 
                            and operators. They represent relationships between quantities and can take various 
                            forms, including monomials, binomials, and polynomials. Understanding expressions 
                            is essential for analyzing mathematical problems, simplifying equations, 
                            and solving real-world problems.
                        </p>
                        <p className={style.p}>
                            ·  Monomials: Algebraic expressions consisting of a single term. <br />
                            &ensp;&ensp;Example: 3x <br />
                            ·  Binomials: Algebraic expressions consisting of two terms connected by an operator. <br />   
                            &ensp;&ensp;Example: 2x + 5. <br />
                            ·  Polynomials: Algebraic expressions consisting of multiple terms. 
                            Examples include 4x^2 - 3x + 7 and 2y^3 + 5y^2 - y + 1. Polynomials 
                            are classified by their degree, which is the highest power of the 
                            variable present in the expression.
                        </p>
                    </div>
                    <div className={style.btnContainer}>
                        <button id={style.btn}><Link to="/Midterm/Basic-Algebraic-Concepts" id={style.inbtn}>Problems</Link></button>
                    </div>
                </div>
                <div className={style.lesson}>
                    <div className={style.lessonContent}>
                        <img src={photo4} alt="" className={style.photo4}/>
                        <h1 className={style.lessonTitle}>Equations and Inequalities</h1>
                        <p className={style.p}>
                            Equations and inequalities are fundamental concepts in mathematics 
                            that describe relationships between quantities. Equations express 
                            equality between two expressions, while inequalities express 
                            relationships where one quantity is greater than, less than, or equal 
                            to another.
                        </p>
                        <h2 className={style.SubTopicTitle}>Understanding Equations</h2>
                        <p className={style.p}>
                            An equation is a mathematical statement asserting that two expressions are equal. 
                            It consists of two sides separated by an equal sign. <br />
                            Examples: <br />
                            ·         2x + 3 = 7 <br />
                            ·         4y - 5 = 3y + 7
                        </p>
                        <p className={style.p}>
                            To solve an equation, perform operations on both sides of the equation to 
                            isolate the variable. The goal is to find the value of the variable that 
                            makes the equation true. <br />
                            Example: Solve for x in the equation 2x + 3 = 7. <br />
                            ·         2x + 3 = 7 <br />
                            ·         2x = 7 - 3 <br />
                            ·         2x = 4 <br />
                            ·         x = 2 <br />
                        </p>
                        <img src={photo5} alt="" className={style.photo5}/>
                        <h2 className={style.SubTopicTitle}>Understanding Inequalities:</h2>
                        <p className={style.p}>
                            An inequality is a mathematical statement indicating that 
                            one expression is greater than, less than, or equal to another expression. <br />
                            Examples: <br />
                            ·         3x + 2 {"<"} 10 <br/>
                            ·         5y ≥ 25 <br />
                        </p>
                        <p className={style.p}>
                            To solve an inequality, perform operations on both sides of the inequality
                             sign while maintaining the inequality's direction. 
                             The solution set may involve a range of values rather than a single value. <br />
                            Example: Solve for y in the inequality 5y ≥ 25. <br />
                            ·         5y ≥ 25 <br />
                            ·         y ≥ 25/5 <br />
                            ·         y ≥ 5
                        </p>
                        <img src={photo6} alt="" className={style.photo6}/>
                        <h2 className={style.SubTopicTitle}>Equations vs. Expressions</h2>
                        <p className={style.p}>
                            While both equations and expressions involve variables, 
                            they serve different purposes: <br />
                            ·  Expressions represent mathematical relationships and can be evaluated 
                            to obtain numerical results. Example: 2x + 3 is an expression. <br />
                            ·    Equations assert that two expressions are equal. 
                            They typically involve an equality symbol (=) and are used 
                            to solve for the value(s) of the variable(s) that satisfy the equation. 
                            Example: 2x + 3 = 7 is an equation.
                        </p>
                    </div>
                    <div className={style.btnContainer}>
                        <button id={style.btn}><Link to="/Midterm/Equations-and-Inequalities" id={style.inbtn}>Problems</Link></button>
                    </div>
                </div>
                <div className={style.lesson}>
                    <div className={style.lessonContent}>
                        <img src={photo7} alt="" className={style.photo7}/>
                        <h1 className={style.lessonTitle}>Systems of Linear Equations and Matrices</h1>
                        <h2 className={style.SubTopicTitle}>Linear Equations</h2>
                        <p className={style.p}>
                            Linear equations are fundamental algebraic expressions that 
                            represent straight lines when graphed on a coordinate plane. 
                            They play a central role in various mathematical applications and 
                            real-world scenarios. This chapter explores the properties of 
                            linear equations, methods for graphing them, and techniques for 
                            solving linear equations.
                        </p>
                        <img src={photo8} alt="" className={style.photo8}/>
                        <h2 className={style.SubTopicTitle}>Graphing Linear Equations</h2>
                        <p className={style.p}>
                            •	Slope-Intercept Form: y = mx + b <br />
                            &ensp; &ensp; &ensp;o	The slope (m) represents the rate of change or steepness of the line. <br />
                            &ensp; &ensp; &ensp;o	The y-intercept (b) represents the point where the line intersects the y-axis.
                        </p>
                        <p className={style.p}>
                            •	Point-Slope Form: y - y_1 = m(x - x_1) <br />
                            &ensp; &ensp; &ensp;o	This form uses a point (x_1, y_1) on the line and the slope (m) to define the        
                            equation.
                        </p>
                        <p className={style.p}>
                            •	Standard Form: Ax + By = C <br />
                            &ensp; &ensp; &ensp;o	This form represents linear equations in a more general format.
                        </p>
                        <h2 className={style.SubTopicTitle}>Understanding Systems of Linear Equations:</h2>
                        <p className={style.p}>
                            •	A system of linear equations consists of two or more linear equations involving the same variables.
                        </p>
                        <p className={style.p}>
                            •	Each equation represents a line in a coordinate system, 
                            and the solution to the system is the point(s) where these lines intersect.
                        </p>
                        <p className={style.p}>
                            •	Types of solutions: <br />
                            &ensp; &ensp; &ensp;o	Unique solution: The system has exactly one solution. <br />
                            &ensp; &ensp; &ensp;o	No solution: The system has no common solution. <br />
                            &ensp; &ensp; &ensp;o	Infinitely many solutions: The system has infinite solutions.
                        </p>
                        <p className={style.p}>
                            •	Example: 2x + y = 5 and 3x - 2y = 1.
                        </p>
                        <img src={photo9} alt="" className={style.photo9}/>
                        <h2 className={style.SubTopicTitle}>Representing Systems of Linear Equations Using Matrices:</h2>
                        <p className={style.p}>
                            Matrices are rectangular arrays of numbers. They are used to compactly represent linear equations.
                        </p>
                        <p className={style.p}>
                            &ensp; &ensp; &ensp;•	Coefficient matrix: A matrix representing the coefficients of the variables in the 
                            system of linear equations. <br />
                            &ensp; &ensp; &ensp;•	Variable matrix: A matrix representing the variables in the system of linear equations. <br />
                            &ensp; &ensp; &ensp;•	Constant matrix: A matrix representing the constants in the system of linear equations. <br />
                            &ensp; &ensp; &ensp;•	Augmented matrix: The combination of the coefficient matrix and the constant matrix.
                        </p>
                        <p className={style.p}>
                            Example: Convert the system of linear equations into matrix form: <br />
                            &ensp; &ensp; &ensp;2x + y = 5 <br />
                            &ensp; &ensp; &ensp;3x - 2y = 1
                        </p>
                        <div className={style.photo10Container}>
                            <p>Into matrix form:</p>
                            <img src={photo10} alt="" className={style.photo10}/>
                        </div>
                    </div>
                    <div className={style.btnContainer}>
                        <button id={style.btn}><Link to="/Midterm/Systems-of-Linear-Equations-and-Matrices" id={style.inbtn}>Problems</Link></button>
                    </div>
                </div>
            </div>
            <Foot/>
        </>
    )
}

export default Midterm