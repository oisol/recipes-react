import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Contact = () => {
    return (
        <div>
            <Header />
            <div>
                <div>
                    <form action="#">
                        <p>Tem uma duvida?</p>
                        <h1>Entre em contato!</h1>
                        <input type="text" name="name" id="name" />
                        <input type="email" name="email" id="email" />
                        <input type="text" name="message" id="message" />
                        <input type="submit" value="" />
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