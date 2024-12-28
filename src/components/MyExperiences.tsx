import SkillLevel from "./SkillLevel"

const MyExperiences = () => {
    return (
        <div id="skills" className="my-8">
            <h2 className="text-4xl font-extrabold text-accent text-center md:text-left mb-6">Mes Expériences</h2>

            <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8">
                {/* Section des compétences */}
                <div className="lg:w-1/3 flex flex-col items-center md:items-start">
                    <div className="grid grid-cols-3 gap-6">
                        {[
                            { src: "/techno/python.png", alt: "Python", level: 100, color: "#EAB308" },
                            { src: "/techno/django.png", alt: "Django", level: 100, color: "#092E20" },
                            { src: "/techno/matlab.png", alt: "MATLAB", level: 100, color: "#EAB308" },
                            { src: "/techno/next-js.webp", alt: "NextJS", level: 80, color: "#000000" },
                            { src: "/techno/node-js.png", alt: "NodeJS", level: 85, color: "#8CC84B" },
                            { src: "/techno/react.png", alt: "React", level: 100, color: "#61DBFB" },
                            { src: "/techno/prisma.webp", alt: "Prisma", level: 80, color: "#2D3748" },
                            { src: "/techno/tailwind.png", alt: "Tailwind CSS", level: 100, color: "#38BDF8" },
                            { src: "/techno/typescript.svg", alt: "TypeScript", level: 70, color: "#3178C6" },
                            { src: "/techno/js.png", alt: "JavaScript", level: 100, color: "#F7DF1E" },
                            { src: "/techno/html.png", alt: "HTML", level: 100, color: "#E34F26" },
                            { src: "/techno/css.png", alt: "CSS", level: 100, color: "#1572B6" },
                        ]
                            .sort((a, b) => b.level - a.level)  // Trier par niveau décroissant
                            .map(({ src, alt, level, color }) => (
                                <SkillLevel key={alt}
                                    src={src}
                                    alt={alt}
                                    level={level}
                                    color={color}
                                />
                            ))}
                    </div>
                </div>

                {/* Section des réalisations */}
                <div className="space-y-6">
                    <p className="p-6 border-l-4 border-accent shadow-lg rounded-lg bg-base-100 text-xl font-medium transition-all duration-300 hover:shadow-xl hover:bg-base-300">
                        Premier meilleur participant à l'Ecole d'Eté sur l'Intelligence Artificielle édition <span className="text-info">2024</span>
                        <ul className="font-normal list-disc ml-12 text-gray-300">
                            <li>
                                Machine Learning
                            </li>
                            <li>
                                Deep Learning
                            </li>
                            <li>
                                Robotique
                            </li>
                        </ul>
                    </p>

                    <p className="p-6 border-l-4 border-accent shadow-lg rounded-lg bg-base-100 text-xl font-medium transition-all duration-300 hover:shadow-xl hover:bg-base-300">
                        Lauréat d'un championnat de développement d'une IA capable de jouer au jeu <span className="text-info">Puissance 4</span> en <span className="text-info">2023</span>
                        <ul className="font-normal list-disc ml-12 text-gray-300">
                            <li>
                                Algorithme Minimax avec élagage Alpha-Bêta
                            </li>
                            <li>
                                Q-Learning
                            </li>
                        </ul>
                    </p>

                    <p className="p-6 border-l-4 border-accent shadow-lg rounded-lg bg-base-100 text-xl font-medium transition-all duration-300 hover:shadow-xl hover:bg-base-300">
                        Développeur sénior depuis <span className="text-info">2022</span>
                        <ul className="font-normal list-disc ml-12 text-gray-300">
                            <li>
                                Algorithmique
                            </li>
                            <li>
                                Programmation <span className="font-bold text-success">Python</span>
                            </li>
                            <li>
                                Programmation en <span className="font-bold text-success">C</span>
                            </li>
                            <li>
                                Programmation en <span className="font-bold text-success">Next.Js, React,</span>...
                            </li>
                        </ul>
                    </p>

                    <p className="p-6 border-l-4 border-accent shadow-lg rounded-lg bg-base-100 text-xl font-medium transition-all duration-300 hover:shadow-xl hover:bg-base-300">
                        Parle courrament:
                        <ul className="font-normal list-disc ml-12 text-gray-300">
                            <li>
                                Le Français
                            </li>
                            <li>
                                l'Anglais avec le niveau <span className="font-bold text-success">C1</span> en <span className="font-bold text-info">2024</span>
                            </li>
                            <li>
                                le Fon
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>

    )
}

export default MyExperiences