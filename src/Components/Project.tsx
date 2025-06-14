import React from  "react";
import './_project.scss'

type props = {
    imgSrc?: string;
    projName: string;
    usedTechs: string[];
    projLink: string;
}

const Project: React.FC<props> = ({imgSrc, projName, usedTechs, projLink}) => {
    return(
        <div className="projSpace">
            <div className="imgCover">
                <img src= {imgSrc} alt="Imagem" />
            </div>
            <h2 className="projName">{projName}</h2>
            <h4>{usedTechs.join(', ')}</h4>
            <a href={projLink}  target="_blank" rel="noopener noreferrer" className="projLink">Acessar Projeto</a>
        </div>
    )
}

export default Project;