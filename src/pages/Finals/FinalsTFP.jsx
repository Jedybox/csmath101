import React from 'react'

import Navi from '../../widgets/nav.jsx'
import Foot from '../../widgets/foot.jsx'

import style from './FinalsTFP.module.css'

export default function FinalsTFP() {
  return (
    <>
        <header className={style.header}>
            <Navi/>
            <div>
                <h1 className={style.Title}></h1>
            </div>
        </header>
        <main>

        </main>
        <Foot/>
    </>
  )
}
