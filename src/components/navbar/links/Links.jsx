"use client"

import Link from "next/link"
import styles from "./links.module.css"
import NavLink from "../navLink/navLink"
import { useState } from "react";

const links = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "Chat with AI Me",
        path: "/chatWithAIMe",
    },
    {
        title: "My Skills",
        path: "/skills",
    },
    {
        title: "My Work Experiences",
        path: "/workExperiences",
    },
];


const Links = () => {
    const [open, setOpen] = useState(false)


    return (
        <div className={styles.container}>

            <div className={styles.links}>
                {
                    links.map(
                        (
                            link => (
                                <NavLink item={link} key={link.title} />
                            )
                        )
                    )
                }
            </div>
            <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
            {
                open && <div className={styles.mobileLinks}>
                    {
                        links.map(
                            (
                                link => (
                                    <NavLink item={link} key={link.title} />
                                )
                            )
                        )
                    }
                </div>
            }
        </div>
    )
}

export default Links