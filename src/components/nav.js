import * as React from "react"
import {Link} from "gatsby"

const menuLinks = [
    {
        text: "Ateliers",
        url: "/ateliers",
        badge: false,
        description:
            "Ateliers de Des Chaînes Ton Biclou",
    },
    {
        text: "Equipe",
        url: "/equipe",
        badge: false,
        description:
            "Equipe de Des Chaînes Ton Biclou",
    },
    {
        text: "Charte",
        url: "/charte",
        badge: false,
        description:
            "Charte de Des Chaînes Ton Biclou",
    },
]

const Nav = () => (
    <nav>
        <ul>
            {menuLinks.map((link, i) => (
                <React.Fragment key={link.url}>
                    <Link to={link.url}>{link.text}</Link>
                    {i !== menuLinks.length - 1 && <> · </>}
                </React.Fragment>
            ))}
        </ul>
    </nav>
)

export default Nav