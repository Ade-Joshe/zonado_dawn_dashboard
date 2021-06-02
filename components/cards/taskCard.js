import React, { useEffect, useState } from 'react';
import styles from "./cards.module.css";

let timer = undefined;

const TaskCard = ({ item: { title, body, isUrgent } }) => {

    const [isChecked, setIsChecked] = useState(false);
    const [canRemove, setCanRemove] = useState(false);

    useEffect(() => {
        if (isChecked) {
            timer = setTimeout(() => {
                setCanRemove(true);
            }, 600);
        }
        return () => { clearTimeout(timer) }
    }, [isChecked])

    return (
        <div className={`${styles.taskCard} ${isChecked ? styles.checked : ""} ${canRemove ? styles.removeCard : ""}`}>

            <div onClick={e => setIsChecked(prevState => !prevState)} className={isChecked ? styles.checkedInput : ""} />

            <div>
                <div>
                    <p>{title}</p>
                    {
                        isUrgent ?
                            <span>Urgent</span>
                            :
                            <></>
                    }
                </div>

                <small>{body}</small>
            </div>

        </div>
    )
}

export { TaskCard }