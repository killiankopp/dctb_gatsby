import * as React from "react"

const Dechaineur = ({name, title, description, url_profile}) => {
    return (
        <div>
            <h3>{name}</h3>
            <img src={url_profile} alt="{name}" width={200} />
            <strong>{title}</strong>
            <p>{description}</p>
        </div>
    );
};

export default Dechaineur;
