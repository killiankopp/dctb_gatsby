import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Ateliers = () => (
    <Layout>
        <h1>Ateliers Des Chaînes Ton Biclou</h1>
        <p>
            Les ateliers sont ouverts uniquement aux adhérents de l'association.<br/>
            L'adhésion est annuelle et coûte 10€.
        </p>
        <p>
            Des ateliers d'auto-réparation de vélos sont organisés par Des Chaînes Ton Biclou régulièrement.
        </p>
        <h4>Nos prochains ateliers</h4>
    </Layout>
)

export const Head = () => <Seo title="Ateliers Des Chaînes Ton Biclou"/>

export default Ateliers
