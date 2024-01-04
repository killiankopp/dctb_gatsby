import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Dechaineur from "../components/Dechaineur";

const dechaineurs = [
    {
        name: "Aurélie",
        title: "Co-Présidente",
        description: "Aurélie, assure la communication, l'animation aux ateliers et aussi dans le bricolage.e",
        url_profile: "https://storage.googleapis.com/dctb/dechaineurs/aurelie.webp"
    },
    {
        name: "Alexandre",
        title: "Co-Président",
        description: "Alexandre fait partie du conseil d'administration. Il roule à vélo tous les jours, et sera là pour vous aider dans vos réparation",
        url_profile: "https://storage.googleapis.com/dctb/dechaineurs/alex.webp"
    },
    {
        name: "Pierre",
        title: "Co-Président",
        description: "Pierre, c'est lui le responsable des sous, il vous motivera pour trouver des itinéraires cyclables au top, et vous aidera dans vos réparations.",
        url_profile: "https://storage.googleapis.com/dctb/dechaineurs/pierre.webp"
    },
    {
        name: "Fabien",
        title: "Co-Président",
        description: "Un fan de vélo: rouler, bricoler, imaginer des voyages...",
        url_profile: "https://storage.googleapis.com/dctb/dechaineurs/fabien.webp"
    },
    {
        name: "Elisa",
        title: "Co-Présidente",
        description: "Vélotaf, communication, réparations essentielles et motivation",
        url_profile: "https://storage.googleapis.com/dctb/dechaineurs/elisa.webp"
    }
]

const Equipe = () => (
    <Layout>
        <h1>Equipe</h1>
        {dechaineurs.map((dechaineur) => (
            <Dechaineur
                name={dechaineur.name}
                title={dechaineur.title}
                description={dechaineur.description}
                url_profile={dechaineur.url_profile}/>
        ))}
    </Layout>
)

export const Head = () => <Seo title="Page two"/>

export default Equipe
