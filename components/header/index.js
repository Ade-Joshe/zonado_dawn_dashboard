import Image from 'next/image'
import React, { useState } from 'react';
import { Button } from '..';
import { notifications, emailNotif } from '../../data';
import { ProfileDropdown, Notification } from '../popovers';
import styles from "./header.module.css"

const Header = ({ toggleMenu }) => {

    const [visibleStates, setVisibleStates] = useState({
        profile: false,
        notification: false,
        emailNotif: false
    });


    const toggle = (newKey) => {
        setVisibleStates(prevState => ({
            ...prevState,
            [newKey]: true
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <header className={styles.header}>

            <Image width={15} height={15} src={"/images/menu.svg"} onClick={() => toggleMenu(prevState => !prevState)} />

            <form onSubmit={handleSubmit}>
                <button type={"submit"}>
                    <Image src={"/images/search.svg"} alt={"search for tasks"} width={15} height={15} />
                </button>

                <input placeholder={"Search"} required />
            </form>

            <div>
                <Button primary>
                    <p>Upgrade Plan</p>
                </Button>

                <div className={styles.withNotification} onClick={() => toggle("emailNotif")} >
                    <Image src={"/images/recycle.svg"} width={24} height={24} alt={"recycle"} />
                    <Notification show={visibleStates.emailNotif} data={emailNotif} close={() => setVisibleStates(prevState => ({ ...prevState, emailNotif: false }))} />
                </div>

                <div className={styles.withNotification} onClick={() => toggle("notification")} >
                    <Image src={"/images/notification.svg"} width={24} height={24} alt={"notification"} />
                    <Notification show={visibleStates.notification} data={notifications} close={() => setVisibleStates(prevState => ({ ...prevState, notification: false }))} />
                </div>

                <div className={styles.avatar} onClick={() => toggle("profile")} >
                    <Image src={"/images/avatar.jpeg"} width={36} height={36} alt={"user dp"} />
                    <Image src={"/images/caretDown.svg"} width={15} height={15} alt={"caret"} className={styles.caret} />
                    <ProfileDropdown show={visibleStates.profile} close={() => setVisibleStates(prevState => ({ ...prevState, profile: false }))} />
                </div>

            </div>

        </header>
    )
}

export { Header }