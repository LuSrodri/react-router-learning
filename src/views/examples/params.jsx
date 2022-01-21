

import React from "react";
import { useParams } from "react-router-dom";

export default props => {
    let { number } = useParams()
    return (
        <div className="params">
            <h1>Params</h1>
            <h2>Valor: {number}</h2>
        </div>
    )
}

