import Link from "next/link"
import styles from "./links.module.css"
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
                            <NavLink item={link} key={link.title} />
                        )
                    )
                )
            }
        </div>
    )
}

export default Links