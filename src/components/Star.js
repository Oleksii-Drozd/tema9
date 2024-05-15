import starE from "../images/star-empty.png"
import starF from "../images/star-filled.png"

import React from "react";

export default function Star(props) {
    const starIcon = props.isFilled ? starE : starF;
    return (
        <img
            src={starIcon}
            className="card--favorite"
            onClick={props.handleClick}
            alt="Star"
        />
    );
}
