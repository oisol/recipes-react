import { Link } from 'react-router-dom';
import logo from '../../assets/imgs/cooking-logo.svg';

const Header = () => {

    return (
        <header className={style.headerMain}>
            {/* Logo */}
            <div>
                <Link to='/' className={style.logoLink} >
                    <img className={style.logoImg} src={logo} alt="Pessoa cozinhando" />
                    <span className={style.logoTitle} >Receitas Legais</span>
                </Link>
            </div>

            <nav className={style.navMain}>

                <a href="#" className={style.navItem}>
                    <Link to="/">Home</Link>
                </a>

                <a href="#" className={style.navItem}>
                    <Link to="/">Contato</Link>
                </a>

                {
                window.location.href === "https://example-receitas-legais.netlify.app/" || window.location.href === "https://example-receitas-legais.netlify.app/#recipes"
                ?
                <a href="/#recipes" className={style.navsItemAlt}>
                    Receitas
                </a>
                :
                <>
                </>
                }
            </nav>
        </header>
    )
};

const style = {
    headerMain: 'flex justify-between bg-gray-200 h-28 items-center px-5 sm:pt-6',
    // Logo
    logoLink: 'flex items-baseline cursor-pointer',
    logoImg: 'w-8',
    logoTitle: 'pl-3 font-bold text-lg',
    // Navigation
    navMain: 'flex flex-col justify-evenly sm:w-2/4 sm:flex-row sm:items-center items-end',
    navItem: `font-semibold hover:text-orange-700 hover:underline`,
    navsItemAlt: `font-semibold sm:bg-orange-400 rounded-full hover:text-orange-700 hover:underline sm:text-white sm:w-20 sm:h-6 sm:text-center sm:hover:text-orange-400 sm:hover:bg-white`,
}

export default Header;