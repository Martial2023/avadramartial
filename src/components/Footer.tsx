import { Github, Linkedin, MailCheck } from "lucide-react"

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover hover:text-accent" href="#about">About</a>
        <a className="link link-hover hover:text-accent" href="#skills">Skills</a>
        <a className="link link-hover hover:text-accent" href="#projects">Projects</a>
        <a className="link link-hover hover:text-accent" href="#contact">Contact</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://github.com/Martial2023">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/martial-hilarion-avadra-4680bb321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <Linkedin />
          </a>
          <a href="mailto:martial@gmail.com">
            <MailCheck />
          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className="text-accent">Martial AVADRA</span> </p>
      </aside>
    </footer>
  )
}

export default Footer