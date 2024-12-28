import { Mails } from "lucide-react";
import Apropos from "./components/Apropos";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MyExperiences from "./components/MyExperiences";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div>
      <div className="p-3 md:p-5 md:px-[8%]">
        <Navbar />

        <Home />

        <Apropos />

        <MyExperiences />

        <Projects />
      </div>

      <div className="w-full bg-base-300">
        <div className="w-full bg-base-100 shadow-2xl py-12">
          <h2 className="text-4xl font-extrabold text-blue-600 text-center mb-8 flex gap-3 items-center justify-center">
            <Mails className="w-12 h-12 text-blue-500" />
            Contactez Moi
          </h2>

          <div className="flex w-full items-center justify-center flex-col gap-6 lg:flex-row-reverse lg:gap-12 px-6 lg:px-24">
            {/* Formulaire de contact */}
            <div className="shadow-md rounded-lg md:p-6 w-full lg:w-1/2">
              <ContactForm />
            </div>

            {/* Citation ou message */}
            <div className="bg-blue-500 text-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center w-full lg:w-1/3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 h-10 text-blue-300 mb-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 15.75l9-6m0 0l-9-6m9 6v12"
                />
              </svg>
              <p className="text-lg text-center font-medium">
                L’intelligence humaine a des limites,
                mais l’intelligence artificielle multiplie
                les possibilités de l’intelligence humaine.
              </p>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}