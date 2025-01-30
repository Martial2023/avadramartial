import { Globe, Images } from "lucide-react";


const projects = [
    {
        id: 1,
        title: 'FacePresence',
        description: 'Une application de reconnaissance faciale qui automatise la gestion de présences pour les entreprises, en associant chaque visage détecté à son propriétaire et en générant des rapports détaillés.',
        technologies: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript'],
        demoLink: 'https://facepresence-dm3062hn9-martial-avadras-projects.vercel.app/',
        repoLink: '#',
        image: "/projects/facepresence.png",
        demoImg: [
            "/projects/facepresence/img1.png",
            "/projects/facepresence/img2.png",
            "/projects/facepresence/img3.png",
            "/projects/facepresence/img4.png"
        ]
    },
    {
        id: 2,
        title: 'FindMyPhoto',
        description: "Une solution innovante permettant de retrouver toutes les photos contenant une personne cible dans un ensemble de fichiers, qu'ils soient stockés localement ou sur Google Drive.",
        technologies: ['Python', 'Django', 'Next.js'],
        demoLink: '#',
        repoLink: '#',
        image: "/projects/findmyphoto.jpg",
        demoImg: [
            "/projects/findmyphoto/img1.png",
            "/projects/findmyphoto/img2.png",
            "/projects/findmyphoto/img3.png"
        ]
    },
    {
        id: 3,
        title: 'CommentsAnalysis',
        description: "Une application basée sur l'intelligence artificielle pour analyser et extraire des informations pertinentes des commentaires laissés sur des plateformes de commerce en ligne.",
        technologies: ['Python', 'Django', 'Scraping', 'Hugging Face', 'Next.js'],
        demoLink: 'https://comments-analysis.vercel.app/',
        repoLink: '#',
        image: "/projects/commentsanalysis.jpeg",
        demoImg: [
            "/projects/commentsanalysis/img1.png",
            "/projects/commentsanalysis/img2.png",
            "/projects/commentsanalysis/img3.png",
            "/projects/commentsanalysis/img4.png",
        ]
    },
    {
        id: 4,
        title: 'Gestion de Stock',
        description: "Une plateforme web pour automatiser la gestion des ventes dans les supermarchés, avec une fonctionnalité permettant aux clients de passer leurs commandes en ligne à distance.",
        technologies: ['Python', 'Django', 'Bootstrap'],
        demoLink: '#',
        repoLink: '#',
        image: "/projects/gestiondestock.jpeg",
        demoImg: [
            "/projects/gestiondestock/img1.png",
            "/projects/gestiondestock/img2.png",
            "/projects/gestiondestock/img3.png",
            "/projects/gestiondestock/img4.png",
            "/projects/gestiondestock/img5.png",
            "/projects/gestiondestock/img6.png",
        ]
    },
    {
        id: 5,
        title: 'Réseau Étudiant',
        description: "Une application de réseau social dédiée aux étudiants, favorisant la communication et le partage d'informations au sein d'une école ou d'une université, semblable à un Facebook personnalisé.",
        technologies: ['Python', 'Django', 'Ajax'],
        demoLink: '#',
        repoLink: '#',
        image: "/projects/studentnetwork.jpeg",
        demoImg: [
            "/projects/studentnetwork/img1.png",
            "/projects/studentnetwork/img2.png",
            "/projects/studentnetwork/img3.png",
            "/projects/studentnetwork/img4.png",
            "/projects/studentnetwork/img5.png",
        ]
    },
    {
        id: 6,
        title: 'Jeu Mathématique',
        description: "Un jeu interactif conçu pour améliorer les compétences en calcul mental et en raisonnement logique.",
        technologies: ['Python', 'Pygame'],
        demoLink: '#',
        repoLink: '#',
        image: "/projects/game.jpeg",
        demoImg: [
            "/projects/games/img1.png",
            "/projects/games/img2.png",
            "/projects/games/img3.png",
        ]
    },
];


const Projects = () => {
    return (
        <div className="my-24" id="projects">
            <h2 className="text-4xl font-extrabold text-accent text-center mb-6">Quelques Projets</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    projects.map((projet) => (
                        <div key={projet.id} className="bg-base-300 p-5 h-full rounded-xl shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-lg">
                            <img
                                src={projet.image}
                                alt={projet.title}
                                className="w-full rounded-xl h-56 object-cover"
                            />

                            <div>
                                <h4 className="my-2 font-bold text-warning">{projet.title}</h4>
                                <p className="text-sm text-justify">{projet.description}</p>
                            </div>
                            <div className="flex flex-wrap gap-2 my-3">
                                {
                                    projet.technologies.map((tech) => (
                                        <span className="badge badge-info badge-sm">{tech}</span>
                                    ))
                                }
                            </div>
                            <div className="flex gap-3">
                                <button className="btn btn-accent w-2/3 " onClick={() => (document.getElementById(`my_modal_${projet.id}`) as HTMLDialogElement).showModal()}>
                                    Images({ projet.demoImg.length })
                                    <Images className="w-4" />
                                </button>
                                <a href={projet.demoLink} className="btn btn-neutral w-1/3">
                                    <Globe className="w-12" />
                                </a>
                                <dialog id={`my_modal_${projet.id}`} className="modal">
                                    <div className="modal-box">
                                        <div className="carousel w-full">
                                            {
                                                projet.demoImg?.map((img, index) => (
                                                    <div id={`projet${projet.id}${index}`} className="carousel-item w-full">
                                                        <img
                                                            src={img}
                                                            className="w-full" />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className="flex w-full justify-center gap-2 py-2">
                                            {
                                                [...Array(projet.demoImg.length).keys()].map((index) => (
                                                    <a href={`#projet${projet.id}${index}`} className="btn btn-xs">{index + 1}</a>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <form method="dialog" className="modal-backdrop">
                                        <button>close</button>
                                    </form>
                                </dialog>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects