// Icons
import facebook from '../../assets/imgs/facebook.png'
import instagram from '../../assets/imgs/instagram.png'
import linkedin from '../../assets/imgs/linkedin.png'

const Footer = () => {

    // Impedir que o form dê submit
    const handleSubmit  = event => {
        event.preventDefault();
    }

    return (
        <footer>
            <div className={style.mainDiv}>

                {/* NEWSLETTER */}
                <div className={style.newsMain}>
                    <p className={style.newsTitle}>Pronto para cozinhar?</p>
                    <h3 className={style.newsSubTitle}>Assine nossa newsletter semanal!</h3>

                    <form className={style.newsForm} action="#" method='#' onSubmit={handleSubmit} >
                        <input className={style.newsFormInpt} type="email" name="email" id="newsletter_input" placeholder="Digite seu Email"/>
                        <button className={style.newsFormBtn} type="submit">Assinar</button>
                    </form>

                </div>

                {/* Footer Nav */}
                <div className={style.footerNav}>

                    {/* QuickLinks */}
                    <div>
                        <p className={style.linksTitle}>Links Rápidos</p>
                        <ul className={style.linksList}>
                            <li>
                                <a className={style.linksItem} href="/">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className={style.linksItem} href="/contato">
                                    Contato
                                </a>
                            </li>
                            <li>
                                <a className={style.linksItem} href="/#recipes">
                                    Receitas
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* About Us */}
                    <section className={style.aboutMain}>
                        <p className={style.aboutTitle}>Sobre Nós</p>
                        <p className={style.aboutText}>
                            Sed non dolor mauris. Sed mi est, ornare ac felis a, volutpat suscipit mi. 
                            Integer in venenatis dolor. Donec sed nibh velit. Maecenas odio.
                        </p>
                    </section>

                    {/* Social Media */}
                    <div className={style.socialMain}>
                        <p className={style.socialTitle}>Redes Sociais</p>
                        <div>
                            <a href="#">
                                <img className={style.socialIcon} src={linkedin} alt="icone do linkedin" />
                            </a>
                            <a href="#">
                                <img className={style.socialIcon} src={facebook} alt="icone do facebook" />
                            </a>
                            <a href="#">
                                <img className={style.socialIcon} src={instagram} alt="icone do instagram" />
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </footer>
    )
}

const style = {
    mainDiv: 'flex lg:flex-row flex-col sm:mt-12 h-auto',
    // Newsletter
        newsMain: 'bg-white lg:w-1/3 w-full h-auto pl-5 pb-6 flex flex-col lg:justify-start lg:items-start items-center justify-center',
        newsTitle: 'text-2xl font-semibold',
        newsSubTitle: 'text-base font-medium',
        newsForm: 'flex justify-start flex-wrap pt-4',
        newsFormInpt: 'h-8 w-60 rounded-l-lg pl-3 focus:bg-gray-200 border-2 border-gray-200 outline-none',
        newsFormBtn: 'bg-orange-400 hover:bg-white rounded-r-lg w-20 text-white hover:text-orange-400 hover:border-2 hover:border-orange-400 font-semibold',
    // Navigation Menu
        footerNav: 'lg:w-2/3 w-full lg:h-44 h-48 flex flex-row justify-around flex-wrap',
    // Quick Links
        linksTitle: 'text-base text-gray-900 sm:font-medium font-semibold ',
        linksList: 'pl-4',
        linksItem: 'hover:text-orange-400 font-medium',
    // About
        aboutMain: 'flex flex-col items-center w-1/3 break-all',
        aboutTitle: 'text-base text-gray-900 sm:font-medium font-semibold',
        aboutText: 'sm:overflow-visible overflow-y-scroll h-36',
    // Social Media
        socialMain: 'flex flex-col items-center',
        socialTitle: 'text-base text-gray-900 sm:font-medium font-semibold',
        socialIcon: 'w-9 mt-1'
};

export default Footer;