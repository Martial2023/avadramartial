'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Check, CircleX } from 'lucide-react';

const ContactForm = () => {
    const [status, setStatus] = useState<boolean | null>(null);
    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm(
                    'service_f68i55q',
                    'template_g4qga8p',
                    form.current,
                    'bi9LHnozKoosLFQ1g' // Clé publique directement passée ici
                )
                .then(
                    () => {
                        console.log('SUCCESS!');
                        (document.getElementById('email_msg') as HTMLDialogElement).showModal();
                        setStatus(true);
                        if (form.current) {
                            form.current.reset();
                        }
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                        (document.getElementById('email_msg') as HTMLDialogElement).showModal();
                        setStatus(false);
                    }
                );
        }
    };

    return (
        <div id='contact' className='w-full'>
            <div>
                {/* {status !== null && (
                    <dialog
                        id="email_msg"
                        className="modal text-gray-900 bg-gray-50 shadow-lg rounded-lg overflow-hidden animate-fade-in"
                    >
                        <div className="modal-box p-6 relative">
                            <div className="w-full flex items-center justify-center mb-4">
                                {status ? (
                                    <Check
                                        width={60}
                                        height={60}
                                        className="bg-green-500 text-white rounded-full p-3 shadow-md"
                                    />
                                ) : (
                                    <CircleX
                                        width={60}
                                        height={60}
                                        className="bg-red-500 text-white rounded-full p-3 shadow-md"
                                    />
                                )}
                            </div>
                            <p className="text-center text-lg font-semibold mb-6">
                                {status
                                    ? "✅ Votre message a été envoyé avec succès. Nous vous répondrons sous peu."
                                    : "❌ Message non envoyé. Veuillez réessayer."
                                }
                            </p>
                            <div className="w-full flex justify-center">
                                <form method="dialog">
                                    <button
                                        className="py-2 px-4 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-700 transition duration-200 shadow-md"
                                    >
                                        Fermer
                                    </button>
                                </form>
                            </div>
                        </div>
                    </dialog>

                )} */}
                <dialog id="email_msg" className="modal text-gray-900">
                    <div className="modal-box">
                        <div className="w-full flex items-center justify-center">
                            {status ? (
                                <Check width={40} height={40} className="bg-accent text-white rounded-full w-20 h-20" />
                            ) : (
                                <CircleX width={40} height={40} className="bg-red-400 text-white rounded-full w-20 h-20" />
                            )}
                        </div>
                        <p className="py-4 text-center text-white">
                            {status
                                ? 'Votre message a été envoyé avec succès. Martial vous répond sous peu.'
                                : 'Message non envoyé. Réessayez !'
                            }
                        </p>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>Fermer</button>
                    </form>
                </dialog>
            </div>

            <form
                ref={form}
                method="POST"
                encType="text/plain"
                className="space-y-6 bg-base-200 p-2 md:p-4 shadow-xl rounded-xl w-full"
                onSubmit={sendEmail}
                id="senderEmail"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="from_name" className="block text-sm font-medium">
                            Nom
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="from_name"
                            placeholder="Votre nom"
                            required
                            className="w-full p-4 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition duration-300 shadow-md hover:shadow-lg"
                        />
                    </div>

                    <div>
                        <label htmlFor="from_company" className="block text-sm font-medium">
                            Nom de l'entreprise
                        </label>
                        <input
                            type="text"
                            id="company"
                            name="from_company"
                            placeholder="Nom de votre entreprise"
                            required
                            className="w-full p-4 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition duration-300 shadow-md hover:shadow-lg"
                        />
                    </div>

                    <div>
                        <label htmlFor="from_email" className="block text-sm font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="from_email"
                            placeholder="Email de votre entreprise"
                            required
                            className="w-full p-4 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition duration-300 shadow-md hover:shadow-lg"
                        />
                    </div>

                    <div>
                        <label htmlFor="from_location" className="block text-sm font-medium">
                            Localisation
                        </label>
                        <input
                            type="text"
                            id="location"
                            name="from_location"
                            placeholder="Votre localisation"
                            required
                            className="w-full p-4 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition duration-300 shadow-md hover:shadow-lg"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="subject" className="block text-sm font-medium">
                        Objet
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Objet de votre message"
                        required
                        className="w-full p-4 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition duration-300 shadow-md hover:shadow-lg"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Votre message"
                        required
                        className="w-full p-4 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition duration-300 shadow-md hover:shadow-lg"
                    ></textarea>
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full py-3 px-6 bg-accent text-white rounded-md text-lg font-semibold hover:bg-accent-dark focus:outline-none focus:ring-4 focus:ring-accent-dark transition duration-300"
                    >
                        Envoyer le message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
