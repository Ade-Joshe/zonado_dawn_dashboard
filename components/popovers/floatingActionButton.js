import Image from 'next/image';
import React, { useRef } from 'react';
import styles from "./popovers.module.css";
import { useOutsideAlerter } from './utilitiesHook';

const FABOptions = ({ show, close }) => {

    const fabRef = useRef(null);
    // useOutsideAlerter(fabRef, close);

    return (
        <div ref={fabRef} className={`${styles.dropdown} ${show ? styles.showDropDown : ""} ${styles.floatingButton}`}>
            <ul>
                <li>
                    <Image src={"/images/tasks.svg"} width={22} height={22} />
                    <span>New Task</span>
                </li>
                <li>
                    <Image src={"/images/emails.svg"} width={22} height={22} />
                    <span>New Email</span>
                </li>
                <li>
                    <Image src={"/images/calendar.svg"} width={22} height={22} />
                    <span>New Event</span>
                </li>

            </ul>
        </div>
    )
}

export { FABOptions }