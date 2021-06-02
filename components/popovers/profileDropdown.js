import React, { useRef } from 'react';
import { Divider } from '..';
import styles from "./popovers.module.css";
import { useOutsideAlerter } from './utilitiesHook';

const ProfileDropdown = ({ show, close }) => {

    const profileRef = useRef(null);
    useOutsideAlerter(profileRef, close);

    return (
        <div ref={profileRef} className={`${styles.dropdown} ${show ? styles.showDropDown : ""} ${styles.profileDropdown}`}>
            <ul>

                <li>My Profile</li>
                <li>Settings</li>

                <Divider />

                <li>Help Center</li>
                <li>Report an Issue</li>
                <li>Terms & Condition</li>
                <li>Privacy Policy</li>
                <li>Licenses</li>

                <Divider />

                <li>Logout</li>

            </ul>
        </div>
    )
}

export { ProfileDropdown }