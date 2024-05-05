import React from 'react'
import Navi from '../../widgets/nav'

import style from './AboutUs.module.css'

export default function AboutUs() {
  return (
    <>
        <header className={style.header}>
            <Navi/>
            <div className={style.TitileContainer}>
                <h1 className={style.Title}>About Us</h1>
            </div>
        </header>
        <div className={style.groupContainer}>
            <div className={style.group}>
                <h1 className={style.groupNum}></h1>
                <div className={style.members}>
                    <div className={style.member}>
                        <div className={style.pfpContainer}>
                            <img className={style.pfp} src="" alt=""/>
                        </div>
                        <div className={style.memberDetails}>
                            <h1 className={style.memberRole}></h1>
                            <p className={style.memberName}></p>
                        </div>
                    </div>
                    <div className={style.member}>
                        <div className={style.pfpContainer}>
                            <img className={style.pfp} src="" alt=""/>
                        </div>
                        <div className={style.memberDetails}>
                            <h1 className={style.memberRole}></h1>
                            <p className={style.memberName}></p>
                        </div>
                    </div>
                    <div className={style.member}>
                        <div className={style.pfpContainer}>
                            <img className={style.pfp} src="" alt=""/>
                        </div>
                        <div className={style.memberDetails}>
                            <h1 className={style.memberRole}></h1>
                            <p className={style.memberName}></p>
                        </div>
                    </div>
                    <div className={style.member}>
                        <div className={style.pfpContainer}>
                            <img className={style.pfp} src="" alt=""/>
                        </div>
                        <div className={style.memberDetails}>
                            <h1 className={style.memberRole}></h1>
                            <p className={style.memberName}></p>
                        </div>
                    </div>
                    <div className={style.member}>
                        <div className={style.pfpContainer}>
                            <img className={style.pfp} src="" alt=""/>
                        </div>
                        <div className={style.memberDetails}>
                            <h1 className={style.memberRole}></h1>
                            <p className={style.memberName}></p>
                        </div>
                    </div>
                    <div className={style.member}>
                        <div className={style.pfpContainer}>
                            <img className={style.pfp} src="" alt=""/>
                        </div>
                        <div className={style.memberDetails}>
                            <h1 className={style.memberRole}></h1>
                            <p className={style.memberName}></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
