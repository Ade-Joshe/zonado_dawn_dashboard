import React from 'react';
import styles from "./cards.module.css";

const CounterCards = ({ title, count, isActive }) => {
    return (
        <div className={`${isActive ? styles.activeCard : ""} ${styles.counterCard}`}>
            <p>{title}</p>
            <h3>{count}</h3>
        </div>
    )
}

export { CounterCards }