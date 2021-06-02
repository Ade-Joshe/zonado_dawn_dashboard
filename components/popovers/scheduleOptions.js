import React, { useRef } from 'react';
import styles from "./popovers.module.css";
import { useOutsideAlerter } from './utilitiesHook';

const ScheduleOptions = ({ show, close }) => {

    const scheduleRef = useRef(null);
    useOutsideAlerter(scheduleRef, close);

    return (
        <div ref={scheduleRef} className={`${styles.dropdown} ${show ? styles.showDropDown : ""} ${styles.scheduleOptions}`}>
            <ul>
                <li>
                    Last Week
                </li>
                <li>
                    This Month
                </li>

            </ul>
        </div>
    )
}

export { ScheduleOptions }