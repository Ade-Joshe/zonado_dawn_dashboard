import React from 'react'
import { Dot } from '../dot';
import styles from "./cards.module.css";

const EmailCard = ({ item: { title, time, messageTitle, messageBody } }) => {
    return (
        <div className={styles.emailCard}>
            <div>
                <Dot primary />
                <p>{title}</p>
                <span>{time}</span>
            </div>
            <p>{messageTitle}</p>
            <p>{messageBody}</p>
        </div>
    )
}

export { EmailCard }