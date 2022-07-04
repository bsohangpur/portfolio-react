import { FacebookIcon, TwitterIcon, InstagramIcon, GithubIcon, LinkedinIcon } from "../../images/index"
import { useContext } from "react";
import { ContextBtn } from '../ContextApi/Contextapi';
import { Data } from "../AllData/Data";
import React from "react";



const HofWrapper = (Container, idName, ClassName) => function HOF() {
    const constValue = useContext(ContextBtn);
    const [logoData] = Data;
    const [darkBtn, lightBtn] = logoData.icon;

    return (
        <div id={idName} style={constValue.myStyle} className={`"container h-screen w-screen relative "  ${ClassName}`}>
            <div className="w-full h-1/6 flex justify-between items-center md:grid md:grid-cols-3 md:place-items-center hof-nav-links">
                <div className="brand-logo w-12 h-12">
                    <img src={constValue.logoImg} alt="logo" className="" />
                </div>

                <div >
                    <div id="menuItem" className="menu-item">
                        <ul className="lg:flex md:flex gap-4 hidden main-header-links menu-item-list" >
                            {
                                ["Home", "About", "Resume", "Work", "Contact"].map((navLink, index) => {
                                    return (
                                        <li key={index} className="main-nav-links">
                                            <a href={`#${navLink}`} className={idName === navLink ? "text-blue-400" : "text-gray-400"}>{navLink}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div
                    id="mode-btn"
                    className="mode-btn w-20 h-12 grid place-items-center relative"
                    onClick={constValue.ModeChange}>
                    <div id='dark-btn' style={constValue.darkBtn} className="dark-btn absolute top-2">
                        <img src={darkBtn.src} alt={darkBtn.alt} />
                    </div>
                    <div id='light-btn' style={constValue.lightBtn} className="light-btn absolute top-2">
                        <img src={lightBtn.src} alt={lightBtn.alt} />
                    </div>
                </div>

                <div >
                    <div className="mobile-humbager">
                        <div className="mobile-menu">
                            <div className="mobile-menu-box w-8 h-8" onClick={constValue.MenuOpen}>
                                <div id="menu-toggle" className="mobile-menu-line" ></div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div className="navigation-dots absolute right-4 h-4/5 flex flex-col justify-center ">
                {
                    ["Home", "About", "Resume", "Work", "Contact"].map((navLink, index) => {
                        return (
                            <div key={index} className="flex justify-end gap-2 nav-dots">
                                <h1 style={constValue.myLinkStyle}>{navLink}</h1>
                                <div className={`w-4 h-4 rounded-full ${idName === navLink ? "bg-gray-700" : "bg-gray-400"}`}><a href={`#${navLink}`} >{navLink}</a></div>
                            </div>

                        )
                    })
                }
            </div>
            <Container />
            <div className="hof-nav-social md:flex lg:flex gap-4 w-4/5 mx-auto ">
                {[FacebookIcon, TwitterIcon, InstagramIcon, GithubIcon, LinkedinIcon].map((icons, index) => {
                    return (
                        <div key={index} className="social-icons w-10 h-10 md:w-10 md:h-10 lg:w-10 lg:h-10 hover:scale-150 transition-transform  ">
                            <img src={icons} alt={icons} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default HofWrapper;