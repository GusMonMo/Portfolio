import React from "react";
import './_button.scss'

type buttonProps = {
    iconSrc: string;
    skillName: string;
}

const Button: React.FC<buttonProps> = ({iconSrc, skillName}) => {
    return(
        <div className="button">
            <img src={iconSrc} alt="icon" className="iconButton" />
            <span className="separator"/>
            <span className="skillName">{skillName}</span>
        </div>
    )
}

export default Button;