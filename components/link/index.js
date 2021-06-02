import React from 'react';
import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ className, activeClassName, href, children }) => {

    const router = useRouter();

    return (
        <Link className={`${className} ${router.pathname === href ? activeClassName : ""}`} href={href} >
            {children}
        </Link>
    )
}

export { NavLink }