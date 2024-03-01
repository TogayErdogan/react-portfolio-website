import React from "react";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { SiTypescript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { HiCheckBadge } from "react-icons/hi2";
import { SiNestjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

const Backend = () => {
    return(
        <div className="skills__content">
        <h3 className="skills__title">Backend</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <FaNodeJs />
                    <div>
                        <h3 className="skills__name">Node.js</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                
                <div className="skills__data">
                    <SiNestjs />
                    <div>
                        <h3 className="skills__name">Nest.js</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                    <SiExpress />
                    <div>
                        <h3 className="skills__name">Express.js</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>
            <div className="skills__group">
                <div className="skills__data">
                    <AiOutlineConsoleSql />
                    <div>
                        <h3 className="skills__name">SQL</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                    <SiTypescript />
                    <div>
                        <h3 className="skills__name">Typescript</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                    <FaGitAlt />
                    <div>
                        <h3 className="skills__name">Git</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    );
}

export default Backend;