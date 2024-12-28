import { CodeXml } from "lucide-react"

const Navbar = () => {
    return (
        <div className="flex items-center justify-between">
            <a href="" className="flex items-center gap-1 text-2xl font-bold">
                <CodeXml />
                Martial<span className="text-accent">DEV</span>
            </a>

            <nav className="hidden md:flex items-center gap-3">
                <a href="#home" className="btn btn-sm btn-ghost text-xl">Accueil</a>
                <a href="#about" className="btn btn-sm btn-ghost text-xl">À Propos</a>
                <a href="#skills" className="btn btn-sm btn-ghost text-xl">Expériences</a>
                <a href="#projects" className="btn btn-sm btn-ghost text-xl">Projets</a>
            </nav>
        </div>
    )
}

export default Navbar