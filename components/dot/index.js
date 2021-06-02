import React from 'react';

const Dot = ({ primary, secondary }) => {
    return (
        <p className={`${primary ? "primary" : secondary ? "secondary" : ""} dot`}></p>
    )
}

export { Dot }