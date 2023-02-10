import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import contactPhoto from "../../assets/imgs/contato.png";

const Contact = () => {

    const successMessage = () => {
        alert('Sua mensagem foi enviada com sucesso!')
    };

    return (
        <div>
            <Header />
            <div className={style.mainDiv}>
                {/* Formulario */}
                <div className={style.formMainDiv}>
                    <form action="#" method="#POST" className={style.formMain} onSubmit={successMessage}>
                        <div>
                            <p className={style.formMainTitle}>Tem uma duvida?</p>
                            <h1 className={style.formSubTitle}>Entre em contato!</h1>
                        </div>
                        {/* Name */}
                        <input className={style.formName} type="text" name="name" id="name" placeholder="Seu Nome" required="true"/>
                        {/* Email */}
                        <input className={style.formEmail} type="email" name="email" id="email" placeholder="Seu Email" required="true"/>
                        {/* MSG */}
                        <textarea className={style.formMessage} name="message" id="message" cols="25" rows="5" placeholder="Sua mensagem aqui" required="true"></textarea>
                        <button className={style.formButton} type="submit" name="submitButton">Enviar</button>
                    </form>
                </div>
                
                <div>
                    <img className={style.mainImage} src={contactPhoto} alt="Pessoas sentadas de frente a um notebook" />
                </div>

            </div>
            <Footer />
        </div>
    )
};

const style = {
    mainDiv: 'flex sm:justify-center items-center sm:flex-row flex-col-reverse mt-14 mb-16',
    // Fomulario
    formMainDiv: 'sm:h-96 h-full sm:w-96 w-5/6 flex justify-center',
        formMain: 'flex flex-col sm:w-3/4 w-11/12',
        // Titulo
        formMainTitle: 'sm:text-xl text-lg font-medium',
        formSubTitle: 'sm:text-2xl text-xl font-semibold',
        // Inputs
        formName: 'mt-4 p-2 font-medium rounded-sm shadow-md outline-slate-300 focus:outline-none focus:bg-slate-200 hover:bg-slate-100',
        formEmail: 'sm:mt-3 mt-5 p-2 font-medium rounded-sm shadow-md outline-slate-300 focus:outline-none focus:bg-slate-200 hover:bg-slate-100',
        formMessage: 'sm:mt-3 mt-5 p-2 rounded-sm shadow-md outline-slate-300 focus:outline-none focus:bg-slate-200 hover:bg-slate-100',
        formButton: 'outline outline-2 text-lg font-bold p-2 py-3 mt-4 hover:outline-none rounded-sm hover:bg-orange-300 hover:text-white hover:animate-pulse',
    // Image
        mainImage: 'h-96 w-72 object-cover hidden sm:flex md:p-0 pr-5'
};

export default Contact;