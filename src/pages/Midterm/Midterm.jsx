import React from "react";
import Navi from "../../widgets/nav";

import photo1 from "./midtermAssets/photo1.png"
import photo2 from "./midtermAssets/photo2.png"
import photo3 from "./midtermAssets/photo3.png"

import style from "./midterm.module.css"

function Midterm() {
    return(
        <>
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
                    <img src={photo1} alt="" className={style.photo1}/>
                    <div className={style.lessonContent}>
                        <h1 className={style.lessonTitle}>Basic Algebraic Concepts</h1>
                        <p>
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
                        <p>
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
                        <p>
                            In algebra, we use a variety of symbols and terminology to represent 
                            mathematical concepts and relationships. Variables, represented by 
                            letters like x, y, and z, stand for unknown or changing quantities 
                            that we aim to determine. Constants are fixed values that do not change, 
                            such as pi (𝜋) or the speed of light (c). Coefficients are multiplicative 
                            factors that appear alongside variables in expressions or equations. 
                            Operators, such as +, -, ×, and ÷, denote the basic arithmetic operations.
                        </p>
                        <p>
                            Algebraic expressions are combinations of variables, consonants, and operations,
                            while equations assert that two expressions are equal. For example, 2x + 3 is 
                            an expression, while 2x + 3 = 7 is an equation, indicating that the expressions 
                            on the left side is to constant on the right. 
                        </p>
                        <img src={photo3} alt="" className={style.photo3}/>
                        <h2 className={style.SubTopicTitle}>Understanding Variables</h2>
                        <p>
                            Variables are fundamental elements in algebra, representing unknown or 
                            changing quantities. They are typically denoted by letters such as x, y, or z. 
                            Variables allow us to express relationships and patterns in mathematical 
                            expressions and equations without specifying their precise values. Understanding 
                            variables is essential as they form the basis for solving equations and 
                            analyzing mathematical relationships.
                        </p>
                        <h2 className={style.SubTopicTitle}>Identifying Constants</h2>
                        <p>
                            Constants are fixed values that do not change. Unlike variables, 
                            which can take on different values, constants remain constant throughout 
                            a problem or mathematical expression. Common examples of constants include 
                            numerical values like 3, 𝜋, or (e), as well as physical constants like the 
                            gravitational constant (G) or the speed of light (c). Identifying constants 
                            is important for distinguishing them from variables and understanding their 
                            role in mathematical expressions and equations.
                        </p>
                        <h2 className={style.SubTopicTitle}>Identifying Constants</h2>
                        <p>
                            Algebraic expressions are mathematical phrases that contain variables, constants, 
                            and operators. They represent relationships between quantities and can take various 
                            forms, including monomials, binomials, and polynomials. Understanding expressions 
                            is essential for analyzing mathematical problems, simplifying equations, 
                            and solving real-world problems.
                        </p>
                        <p>
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
                </div>
            </div>
        </>
    )
}

export default Midterm