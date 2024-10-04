import Link from "next/link"
import styles from "./Links.module.css"
import NavLink from "../navLink/navLink"

const Links = () => {
    const links = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Skills",
            path: "/skills",
        },
        {
            title: "Work Experiences",
            path: "/workExperiences",
        },
    ]

    return (
        <div className={styles.links}>
            {
                links.map(
                    (
                        link => (
                            <NavLink />
                        )
                    )
                )
            }
        </div>
    )
}

export default Links