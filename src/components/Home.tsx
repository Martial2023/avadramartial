"use client"

import { useEffect, useState } from "react";
import { Mail } from "lucide-react"

const Home = () => {
    const [greeting, setGreeting] = useState("Bonjour");

    useEffect(() => {
        const currentHour = new Date().getHours();
        if (currentHour >= 12 || currentHour < 6) {
            setGreeting("Bonsoir");
        }
    }, []);

    return (
        <div id="home" className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">
            <div className="flex flex-col">
                <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
                    {greeting},
                    Je suis <br /><span className="text-info">Martial Hilarion AVADRA</span>
                </h1>

                <p className="my-4 text-md text-center md:text-left">
                    Développeur passionné par la création de solutions <br /> modernes et efficaces.
                    Mon expertise couvre le développement web, <br />l'IA et les solutions innovantes pour le monde numérique.
                </p>

                <a href="#contact"
                    className="btn btn-accent md:w-fit flex items-center gap-2 px-4 py-2 rounded-md"
                >
                    <Mail className="w-5 h-5" />
                    Contactez-moi
                </a>
            </div>

            <div className="avatar lg:w-1/3 h-full md:ml-8 lg:ml-12">
                <div className="mask mask-hexagon">
                    <img
                        src="/eeia1.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;
