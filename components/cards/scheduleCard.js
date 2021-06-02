import React from 'react';
import styles from "./cards.module.css"

const ScheduleCard = ({ item: { time, isActive, schedule, hasNext, hasPrev } }) => {
    return (
        <>
            <p>{time}</p>
            <div
                className={`
                    ${!schedule ? styles.empty : ""} 
                    ${isActive ? styles.isActive : ""} 
                    ${hasNext ? styles.hasNext : ""}
                    ${hasPrev ? styles.hasPrev : ""}
                    `}
            >{schedule}</div>
        </>
    )
}

export { ScheduleCard }