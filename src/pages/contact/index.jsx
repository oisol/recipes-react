import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import imagem from "../../assets/imgs/contato.png";

const Contact = () => {

    const successMessage = () => {
        alert('Sua mensagem foi enviada com sucesso!')
    };

    return (
        <div>
            <Header />
            <div className="flex sm:justify-center items-center sm:flex-row flex-col-reverse mt-14 mb-16">

                <div className="sm:h-96 h-full sm:w-96 w-11/12 flex justify-center">
                    <form action="#" method="#POST" className="flex flex-col sm:w-3/4 w-11/12" onSubmit={successMessage}>
                        <div>
                            <p className="sm:text-xl text-lg font-medium">Tem uma duvida?</p>
                            <h1 className="sm:text-2xl text-xl font-semibold">Entre em contato!</h1>
                        </div>
                        <input className="mt-4 p-2 font-medium rounded-sm shadow-md outline-slate-300 focus:outline-none focus:bg-slate-200" type="text" name="name" id="name" placeholder="Seu Nome" required="true"/>
                        <input className="mt-3 p-2 font-medium rounded-sm shadow-md outline-slate-300 focus:outline-none focus:bg-slate-200" type="email" name="email" id="email" placeholder="Seu Email" required="true"/>
                        <textarea className="mt-3 p-2 rounded-sm shadow-md outline-slate-300 focus:outline-none focus:bg-slate-200" name="message" id="message" cols="25" rows="5" placeholder="Sua mensagem aqui" required="true"></textarea>
                        <button className="outline outline-2 text-lg font-bold p-2 py-3 mt-4 hover:outline-none rounded-sm hover:bg-orange-300 hover:text-white hover:animate-pulse" type="submit" name="submitButton">Enviar</button>
                    </form>
                </div>

                <div>
                    <img className="h-96 w-72 object-cover hidden sm:flex" src={imagem} alt="Pessoas sentadas de frente a um notebook" />
                </div>

            </div>
            <Footer />
        </div>
    )
};

export default Contact;