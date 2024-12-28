"use client"

import { LayoutGrid, Sparkles, SquareCode, SquareSigma } from "lucide-react";

const Apropos = () => {
    return (
        <section id="about" className="py-8 my-32">
            <h2 className="text-center text-3xl font-bold text-accent">
                À propos de moi
            </h2>
            <p className="my-4 text-center text-lg">
                Passionné par la technologie, les mathématiques appliquées, et l'intelligence artificielle,
                je conçois des solutions innovantes et performantes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8">
                <div className="relative border rounded-xl overflow-hidden shadow-lg w-full h-full">
                    <img
                        src="/ia.gif"
                        alt="Mon portrait ou logo"
                        className="w-full h-full object-fit"
                    />
                </div>

                <div>
                    <ul className="steps steps-vertical space-y-4">
                        <li className="step step-success m-3">
                            <div className="cursor-pointer w-full flex gap-2 items-center rounded-xl p-4 text-xl bg-base-200 duration-75 hover:text-black hover:bg-gray-200 transition">
                                <SquareSigma className="w-8 h-8 text-blue-500" />
                                <span className="text-xl font-medium">
                                    Élève ingénieur en Génie Mathématiques et Modélisation
                                </span>
                            </div>
                        </li>
                        <li className="step step-success m-3">
                            <div className="cursor-pointer w-full flex gap-2 items-center rounded-xl p-4 text-xl bg-base-200 hover:bg-accent duration-75 hover:text-black">
                                <Sparkles className="w-8 h-8 text-green-500" />
                                <span className="text-xl font-medium">
                                    Développeur de modèles d'Intelligence Artificielle et Vision par Ordinateur
                                </span>
                            </div>
                        </li>
                        <li className="step step-accent m-3">
                            <div className="cursor-pointer w-full flex gap-2 items-center rounded-xl p-4 text-xl bg-base-200 hover:bg-gray-200 duration-75 hover:text-black">
                                <LayoutGrid className="w-8 h-8 text-purple-500" />
                                <span className="text-xl font-medium">
                                    Développeur FullStack
                                </span>
                            </div>
                        </li>
                        <li className="step step-accent m-3">
                            <div className="cursor-pointer w-full flex gap-2 items-center rounded-xl p-4 text-xl bg-base-200 hover:bg-accent duration-75 hover:text-black">
                                <SquareCode className="w-8 h-8 text-yellow-500" />
                                <span className="text-xl font-medium">
                                    Développeur d'applications web (Django, Next.js)
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Apropos;
