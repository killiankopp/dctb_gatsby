import * as React from "react"
import {Link} from "gatsby"
import {StaticImage} from "gatsby-plugin-image";
import Nav from "./nav";

const Header = ({siteTitle}) => (
    <header
        style={{
            margin: `0 auto`,
            padding: `var(--space-4) var(--size-gutter)`,
            display: `flex`,
            alignItems: `center`,
            justifyContent: `space-between`,
        }}
    >
        <Link
            to="/"
            style={{
                fontSize: `var(--font-sm)`,
                textDecoration: `none`,
            }}
        >
            <StaticImage
                src="../images/logo.webp"
                loading="eager"
                width={64}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
                style={{marginBottom: `var(--space-3)`}}
            />
        </Link>
        {siteTitle}
        <Nav/>
    </header>
)

export default Header
