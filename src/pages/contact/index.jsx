import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Contact = () => {
    return (
        <div>
            <Header />
            <div className="flex justify-center mt-10">

                <div className="sm:h-96 w-96 flex justify-center">
                    <form action="#" className="flex flex-col w-3/4 gap-5">
                        <p>Tem uma duvida?</p>
                        <h1>Entre em contato!</h1>
                        <input type="text" name="name" id="name" placeholder="Seu Nome"/>
                        <input type="email" name="email" id="email" placeholder="Seu Email"/>
                        <textarea name="message" id="message" cols="25" rows="4"></textarea>
                        <button className="outline outline-2 text-lg font-bold p-2 hover:outline-none rounded-sm hover:bg-orange-300 hover:text-white hover:animate-pulse" type="submit" name="submitButton">Enviar</button>
                    </form>
                </div>

                <div>
                    <img src="" alt="" />
                </div>

            </div>
            <Footer />
        </div>
    )
};

export default Contact;