import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Charte = () => (
    <Layout>
        <h1>Charte des ateliers Des Chaînes Ton Biclou</h1>
        <ol>
            <li>
                L’atelier a pour vocation d’aider les participants à entretenir et réparer leurs vélos afin de favoriser
                la pratique du vélo au quotidien.
            </li>

            <li>Le but de l’atelier est d’apprendre les réparations de base pour devenir autonome. Pour cela,
                il faut mettre les mains dans le cambouis !
            </li>

            <li>Les bénévoles sont là pour vous conseiller et vous guider dans les réparations.
                Ils n’ont pas d’obligation de résultats, et l’association ne peut être tenue responsable en cas de panne
                ou d’accident à la suite d’un atelier.
            </li>

            <li>
                De nombreux outils sont mis à la disposition des participants : renseignez-vous sur leur utilisation,
                prenez-en soin, et ranger les après usage. L’atelier doit rester propre et ordonné.
            </li>

            <li>L’association ne vend pas de pièces détachées : nous vous conseillons d’acheter vos pièces
                dans un magasin de cycle après avoir effectué un premier diagnostic avec les bénévoles.
            </li>

            <li>L’atelier est un espace convivial, solidaire et coopératif ouvert à tous. On y vient pour
                faire des réparations, mais aussi pour échanger et parler vélo dans la bonne humeur.
            </li>

            <li>Les participants sont invités à contribuer à la caisse de l’association suivant leurs moyens :
                cela permet de renouveler le matériel et les consommables, et d’imaginer de nouveaux projets !
            </li>
        </ol>
    </Layout>
)

export const Head = () => <Seo title="Charte DCTB"/>

export default Charte
