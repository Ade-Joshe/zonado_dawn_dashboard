import React, { useRef } from 'react';
import { Dot } from '..';
import { Button } from '..';
import styles from "./popovers.module.css";
import { useOutsideAlerter } from './utilitiesHook';

const NotificationCard = ({ item: { isNew, title, body } }) => {
    return (
        <div className={styles.notificationCard}>
            <div>
                <Dot primary={isNew} />
                <p className={isNew ? styles.activeNotificationHeader : ""}>{title}</p>
            </div>
            <p>{body}</p>
        </div>
    )
}

const Notification = ({ show, data, close }) => {

    const notificationRef = useRef(null);
    useOutsideAlerter(notificationRef, close);

    return (
        <div ref={notificationRef} className={`${styles.dropdown} ${show ? styles.showDropDown : ""} ${styles.notificationDropDown}`}>

            {
                data.map((item, index) => (
                    <NotificationCard item={item} key={index} />
                ))
            }

            <Button>See all notifications</Button>
        </div>
    )
}

export { Notification }