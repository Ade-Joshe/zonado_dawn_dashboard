import Image from 'next/image';
import React, { useState } from 'react';
import styles from "./sidebar.module.css"

const Sidebar = ({ showMenu, closeSidebar }) => {

    const [openSidebar, setOpenSidebar] = useState(true)

    const toggleFunc = () => {
        setOpenSidebar(value => !value)
    }

    return (
        <aside className={`${styles.aside} ${openSidebar ? "" : styles.closeSidebar} ${showMenu ? "showMenu" : ""}`}>

            <div>
                <Image src={"/images/logo.svg"} width={98} height={28} alt={"logo image"} />
                <Image src={"/images/collapse.svg"} width={20} height={20} alt={"collapse icon"} onClick={toggleFunc} />
            </div>

            <section>
                <ul>
                    <li onClick={closeSidebar} className={styles.activeClassName}>
                        <>
                            <Image src={"/images/home.svg"} width={20} height={20} alt={"dashboard icon"} />
                            <p>Dashboard</p>
                        </>
                    </li>
                    <li onClick={closeSidebar}>
                        <>
                            <Image src={"/images/tasks.svg"} width={20} height={20} alt={"dashboard icon"} />
                            <p>Tasks</p>
                        </>
                    </li>
                    <li onClick={closeSidebar}>
                        <>
                            <Image src={"/images/emails.svg"} width={20} height={20} alt={"dashboard icon"} />
                            <p>Emails</p>
                        </>
                    </li>
                    <li onClick={closeSidebar}>
                        <>
                            <Image src={"/images/calendar.svg"} width={20} height={20} alt={"dashboard icon"} />
                            <p>Calendar</p>
                        </>
                    </li>
                    <li onClick={closeSidebar}>
                        <>
                            <Image src={"/images/board.svg"} width={20} height={20} alt={"dashboard icon"} />
                            <p>Board</p>
                        </>
                    </li>
                </ul>
            </section>

            <section>
                <ul>
                    <li onClick={closeSidebar}>
                        <>
                            <Image src={"/images/customers.svg"} width={20} height={20} alt={"dashboard icon"} />
                            <p>Customers</p>
                        </>
                    </li>
                    <li onClick={closeSidebar}>
                        <>
                            <Image src={"/images/support.svg"} width={20} height={20} alt={"dashboard icon"} />
                            <p>Support</p>
                        </>
                    </li>
                    <li onClick={closeSidebar}>
                        <>
                            <Image src={"/images/styleGuide.svg"} width={20} height={20} alt={"dashboard icon"} />
                            <p>Style Guide</p>
                        </>
                    </li>
                </ul>
            </section>

            <section>
                <ul>
                    <li onClick={closeSidebar}>
                        <>
                            <Image src={"/images/help.svg"} width={20} height={20} alt={"dashboard icon"} />
                            <p>Help and Support</p>
                        </>
                    </li>
                </ul>
            </section>

        </aside>
    )
}

export { Sidebar }