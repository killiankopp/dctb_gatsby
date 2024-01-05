import * as React from "react"
import { dechaineur } from "./Dechaineur.module.css"

const Dechaineur = ({name, title, description, url_profile}) => {
    return (
        <div className={dechaineur}>
            <img src={url_profile} alt="{name}" />
            <div>
                <h3>{name}</h3>
                <strong>{title}</strong>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Dechaineur;
