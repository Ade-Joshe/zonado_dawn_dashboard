import React from 'react';
import styles from "./button.module.css"

const Button = ({ children, primary, ...rest }) => {
    return (
        <button className={`${styles.button} ${primary ? styles.primaryButton : ""}`} {...rest}> {children} </button>
    )
}

export { Button }