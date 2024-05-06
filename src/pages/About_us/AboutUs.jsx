import React from 'react'
import Navi from '../../widgets/nav'
import Footer from '../../widgets/foot'

// group 1
import dave from './assets/group1/dave.jpg'
import luke from './assets/group1/luke.jpg'
import mojado from './assets/group1/mojado.jpg'
import sander from './assets/group1/sander.jpg'
import sayat from './assets/group1/sayat.jpg'
import van from './assets/group1/van.jpg'


// group 2
import Albos from './assets/group2/Albos.jpg'
import Apolonio from './assets/group2/Apolonio_.jpg'
import nica from './assets/group2/nica.jpg'
import Jerome from './assets/group2/Jerome.webp'
import stephen from './assets/group2/stephen.png'
import kerby from './assets/group2/kerby.jpg'

// group 3
import Alpuerto from './assets/group3/Alpuerto.jpg'
import Hannz from './assets/group3/Hannz.jpeg'
import jim from './assets/group3/jim.jpg'
import Jp from './assets/group3/Jp.jpg'
import shreck from './assets/group3/shreck.png'
import vlad from './assets/group3/Vlad.jpg'

// group 4
import adormeo from './assets/group4/adormeo.png'
import baracael from './assets/group4/baracael.jpg'
import gab from './assets/group4/gab.jpg'
import ken from './assets/group4/ken.jpg'
import kenjie from './assets/group4/kenjie.jpg'
import pena from './assets/group4/pena.png'

import style from './AboutUs.module.css'
import Foot from '../../widgets/foot'

export default function AboutUs() {
  return (
    <>
        <header className={style.header}>
            <Navi/>
            <div className={style.titleContainer}>
                <h1 className={style.title}>About Us</h1>
            </div>
        </header>
        <div className={style.groupContainer}>
            <div className={style.group}>
                <h1 className={style.groupNum}>Group 1: Prelim</h1>
                <div className={style.members}>
                    <div className={style.member}>
                        <div className={style.memberImg}>
                            <div className={style.pfpContainer}>
                                <img src={dave} alt="dave" className={style.pfp} id={style.dave}/>
                            </div>
                        </div>
                        <div className={style.memberInfo}>
                            <h2 className={style.memberRole}>TC / Problem Creator</h2>
                            <p className={style.memberName}>Dave Andrei Capistrano</p>
                        </div>
                    </div>
                    <div className={style.member}>
                        <div className={style.memberImg}>
                            <div className={style.pfpContainer}>
                                <img src={sander} alt="sander" className={style.pfp} id={style.sander}/>
                            </div>
                        </div>
                        <div className={style.memberInfo}>
                            <h2 className={style.memberRole}>ATC / Problem Creator</h2>
                            <p className={style.memberName}>Aerron Sander Gumarao</p>
                        </div>
                    </div>
                    <div className={style.member}>
                        <div className={style.memberImg}>
                            <div className={style.pfpContainer}>
                                <img src={sayat} alt="sayat" className={style.pfp} id={style.sayat}/>
                            </div>
                        </div>
                        <div className={style.memberInfo}>
                            <h2 className={style.memberRole}>TV - F2F / Problem Creator</h2>
                            <p className={style.memberName}>Nash Adriane Sayat</p>
                        </div>
                    </div>
                    <div className={style.member}>
                        <div className={style.memberImg}>
                            <div className={style.pfpContainer}>
                                <img src={van} alt="van" className={style.pfp} id={style.van}/>
                            </div>
                        </div>
                        <div className={style.memberInfo}>
                            <h2 className={style.memberRole}>TV - F2F / Problem Creator</h2>
                            <p className={style.memberName}>Nash Adriane Sayat</p>
                        </div>
                    </div>
                    <div className={style.member}>
                        <div className={style.memberImg}>
                            <div className={style.pfpContainer}>
                                <img src={mojado} alt="mojado" className={style.pfp} id={style.mojado}/>
                            </div>
                        </div>
                        <div className={style.memberInfo}>
                            <h2 className={style.memberRole}>TV - F2F / Problem Creator</h2>
                            <p className={style.memberName}>Nash Adriane Sayat</p>
                        </div>
                    </div>
                    <div className={style.member}>
                        <div className={style.memberImg}>
                            <div className={style.pfpContainer}>
                                <img src={luke} alt="luke" className={style.pfp} id={style.luke}/>
                            </div>
                        </div>
                        <div className={style.memberInfo}>
                            <h2 className={style.memberRole}>TV - F2F / Problem Creator</h2>
                            <p className={style.memberName}>Nash Adriane Sayat</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.group}>
                <h1 className={style.groupNum}>Group 2: Midterm</h1>
                <div className={style.members}>
                    <div className={style.member}>
                        <div className={style.memberImg}>
                            <div className={style.pfpContainer}>
                                <img src={stephen} alt="stephen" className={style.pfp} id={style.stephen}/>
                            </div>
                        </div>
                        <div className={style.memberInfo}>
                            <h2 className={style.memberRole}>TC / Web Designer</h2>
                            <p className={style.memberName}>Stephen Raine Villeta</p>
                        </div>
                    </div>
                    <div className={style.member}>
                        <div className={style.memberImg}>
                            <div className={style.pfpContainer}>
                                <img src={Albos} alt="Albos" className={style.pfp} id={style.Albos}/>
                            </div>
                        </div>
                        <div className={style.memberInfo}>
                            <h2 className={style.memberRole}>ATC / Problem Creator</h2>
                            <p className={style.memberName}>Jean Aliah Yzabel Albos</p>
                        </div>
                    </div>
                    <div className={style.member}>
                        <div className={style.memberImg}>
                            <div className={style.pfpContainer}>
                                <img src={Apolonio} alt="Apolonio" className={style.pfp} id={style.Apolonio}/>
                            </div>
                        </div>
                        <div className={style.memberInfo}>
                            <h2 className={style.memberRole}>TV - F2F / Problem Creator</h2>
                            <p className={style.memberName}>Melissa Jane Apolonio</p>
                        </div>
                    </div>
                    <div className={style.member}>
                        <div className={style.memberImg}>
                            <div className={style.pfpContainer}>
                                <img src={nica} alt="nica" className={style.pfp} id={style.nica}/>
                            </div>
                        </div>
                        <div className={style.memberInfo}>
                            <h2 className={style.memberRole}>TV - Online / Problem Creator</h2>
                            <p className={style.memberName}>Thessalonica Surell</p>
                        </div>
                    </div>
                    <div className={style.member}>
                        <div className={style.memberImg}>
                            <div className={style.pfpContainer}>
                                <img src={Jerome} alt="Jerome" className={style.pfp} id={style.Jerome}/>
                            </div>
                        </div>
                        <div className={style.memberInfo}>
                            <h2 className={style.memberRole}>MBR / Problem Creator</h2>
                            <p className={style.memberName}>Jerome Iloilo</p>
                        </div>
                    </div>
                    <div className={style.member}>
                        <div className={style.memberImg}>
                            <div className={style.pfpContainer}>
                                <img src={kerby} alt="kerby" className={style.pfp} id={style.kerby}/>
                            </div>
                        </div>
                        <div className={style.memberInfo}>
                            <h2 className={style.memberRole}>MBR / Problem Creator</h2>
                            <p className={style.memberName}>Kerby Oribiana</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.group}>
                <h1 className={style.groupNum}>Group 3: Semi-Finals</h1>
                <div className={style.members}>
                    <div className={style.member}>
                        <div className={style.memberImg}>
                            <div className={style.pfpContainer}>
                                <img src={Jp} alt="stephen" className={style.pfp} id={style.Jp}/>
                            </div>
                        </div>
                        <div className={style.memberInfo}>
                            <h2 className={style.memberRole}>TC / Web Designer</h2>
                            <p className={style.memberName}>John Paul Martirez</p>
                        </div>
                    </div>
                    <div className={style.member}>
                        <div className={style.memberImg}>
                            <div className={style.pfpContainer}>
                                <img src={jim} alt="Albos" className={style.pfp} id={style.jim}/>
                            </div>
                        </div>
                        <div className={style.memberInfo}>
                            <h2 className={style.memberRole}>ATC / Problem Creator</h2>
                            <p className={style.memberName}>Jim Owen Bogñalbal</p>
                        </div>
                    </div>
                    <div className={style.member}>
                        <div className={style.memberImg}>
                            <div className={style.pfpContainer}>
                                <img src={shreck} alt="JEDY" className={style.pfp} id={style.jedy}/>
                            </div>
                        </div>
                        <div className={style.memberInfo}>
                            <h2 className={style.memberRole}>TV - F2F / Lead Web Developer</h2>
                            <p className={style.memberName}>Jhon Ericsson Ytac</p>
                        </div>
                    </div>
                    <div className={style.member}>
                        <div className={style.memberImg}>
                            <div className={style.pfpContainer}>
                                <img src={Alpuerto} alt="Alpuerto" className={style.pfp} id={style.Alpuerto}/>
                            </div>
                        </div>
                        <div className={style.memberInfo}>
                            <h2 className={style.memberRole}>TV - Online / Web Designer</h2>
                            <p className={style.memberName}>Julian Gabriel Alpuerto</p>
                        </div>
                    </div>
                    <div className={style.member}>
                        <div className={style.memberImg}>
                            <div className={style.pfpContainer}>
                                <img src={vlad} alt="vlad" className={style.pfp} id={style.vlad}/>
                            </div>
                        </div>
                        <div className={style.memberInfo}>
                            <h2 className={style.memberRole}>MBR / Problem Creator</h2>
                            <p className={style.memberName}>Luis Vladimir Badillo</p>
                        </div>
                    </div>
                    <div className={style.member}>
                        <div className={style.memberImg}>
                            <div className={style.pfpContainer}>
                                <img src={Hannz} alt="Hannz" className={style.pfp} id={style.Hannz}/>
                            </div>
                        </div>
                        <div className={style.memberInfo}>
                            <h2 className={style.memberRole}>MBR / Problem Creator</h2>
                            <p className={style.memberName}>Hannz Jimdandy Naag</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.group}>
                <h1 className={style.groupNum}>Group 3: Semi-Finals</h1>
                <div className={style.members}>
                    <div className={style.member}>
                        <div className={style.memberImg}>
                            <div className={style.pfpContainer}>
                                <img src={ken} alt="stephen" className={style.pfp} id={style.ken}/>
                            </div>
                        </div>
                        <div className={style.memberInfo}>
                            <h2 className={style.memberRole}>TC / Web Designer</h2>
                            <p className={style.memberName}>Kenneth Villabroza </p>
                        </div>
                    </div>
                    <div className={style.member}>
                        <div className={style.memberImg}>
                            <div className={style.pfpContainer}>
                                <img src={kenjie} alt="Albos" className={style.pfp} id={style.kenjie}/>
                            </div>
                        </div>
                        <div className={style.memberInfo}>
                            <h2 className={style.memberRole}>ATC / Problem Creator</h2>
                            <p className={style.memberName}>Kenjie Aeron Deleña</p>
                        </div>
                    </div>
                    <div className={style.member}>
                        <div className={style.memberImg}>
                            <div className={style.pfpContainer}>
                                <img src={pena} alt="JEDY" className={style.pfp} id={style.pena}/>
                            </div>
                        </div>
                        <div className={style.memberInfo}>
                            <h2 className={style.memberRole}>TV - F2F / Lead Designer</h2>
                            <p className={style.memberName}>Nikolas Jon Peña</p>
                        </div>
                    </div>
                    <div className={style.member}>
                        <div className={style.memberImg}>
                            <div className={style.pfpContainer}>
                                <img src={gab} alt="Alpuerto" className={style.pfp} id={style.gab}/>
                            </div>
                        </div>
                        <div className={style.memberInfo}>
                            <h2 className={style.memberRole}>TV - Online / Problem Creator</h2>
                            <p className={style.memberName}>Aaron Gabriel Escobal</p>
                        </div>
                    </div>
                    <div className={style.member}>
                        <div className={style.memberImg}>
                            <div className={style.pfpContainer}>
                                <img src={adormeo} alt="vlad" className={style.pfp} id={style.adormeo}/>
                            </div>
                        </div>
                        <div className={style.memberInfo}>
                            <h2 className={style.memberRole}>MBR / Problem Creator</h2>
                            <p className={style.memberName}>Joshua Aeron Adormeo</p>
                        </div>
                    </div>
                    <div className={style.member}>
                        <div className={style.memberImg}>
                            <div className={style.pfpContainer}>
                                <img src={baracael} alt="Hannz" className={style.pfp} id={style.baracael}/>
                            </div>
                        </div>
                        <div className={style.memberInfo}>
                            <h2 className={style.memberRole}>MBR / Web Designer</h2>
                            <p className={style.memberName}>John Ahron Cedrick</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Foot/>
    </>
  )
}
