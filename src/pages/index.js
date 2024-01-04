import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
    <Layout>
        <h1>Des Chaînes Ton Biclou</h1>
        <p>
            Des Chaînes Ton Biclou a été créé fin 2018 afin d'ouvrir un atelier d'auto-réparation de vélos à
            Saint-Malo.
        </p>

        <p>C'est notre passion pour le vélo et tout ce qui va avec :
            impact environnemental faible, mobilité douce, prendre soin de soi, rencontrer des gens,
            qui nous a conduit à créer un atelier collaboratif.
        </p>

        <p>Pour augmenter le nombre de cyclistes sur notre commune, il faut que les vélos soient en état car
            « Un vélo qui fonctionne est un vélo qui roule ».
        </p>
        
        <p>
            Toutes nos réparations sont réalisées par vous-même, mais avec les conseils de nos experts
            et les outils adéquats que nous mettons à votre disposition.
        </p>
    </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home"/>

export default IndexPage
