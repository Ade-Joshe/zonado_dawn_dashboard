import React, { useState } from 'react'
import { Sidebar } from '..'
import { Header, FABOptions } from '..'

const MainLayout = ({ children }) => {

    const [showOptions, setShowOptions] = useState(false);
    const [sidebar, setSidebar] = useState(false)

    return (
        <>
            <Sidebar showMenu={sidebar} closeSidebar={() => setSidebar(false)} />

            <main>
                <Header toggleMenu={setSidebar} />
                {children}
            </main>

            {/* floating action button */}
            <div className={"fab_block"}>
                <FABOptions show={showOptions} />
                <div className={`floatingButton ${showOptions ? 'rotate45' : ""}`} onClick={() => setShowOptions(prevState => !prevState)}>+</div>
            </div>
        </>
    )
}

export { MainLayout }