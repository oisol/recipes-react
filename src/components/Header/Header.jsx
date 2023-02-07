import { Link } from 'react-router-dom';
import logo from '../../assets/imgs/cooking-logo.svg';

const Header = () => {

    return (
        <header className="flex justify-between bg-gray-200 h-28 items-center px-5 sm:pt-6">

            <div>
                <Link to='/' className='flex items-baseline cursor-pointer'>
                    <img src={logo} alt="Pessoa cozinhando" className='w-8'/>
                    <span className='pl-3 font-bold text-lg'>Receitas Legais</span>
                </Link>
            </div>

            <nav className="flex flex-col justify-evenly sm:w-2/4 sm:flex-row sm:items-center items-end">
                <a href="#" className={style.navs}>
                    <Link to="/">Home</Link>
                </a>
                <a href="/contato" className={style.navs}>
                    Contato
                </a>

                {
                window.location.href === "http://127.0.0.1:5173/" || window.location.href === "http://127.0.0.1:5173/#recipes"
                ?
                <a href="/#recipes" className={style.navsAlt}>
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
    navs: `font-semibold hover:text-orange-700 hover:underline`,
    navsAlt: `font-semibold sm:bg-orange-400 rounded-full hover:text-orange-700 hover:underline sm:text-white sm:w-20 sm:h-6 sm:text-center sm:hover:text-orange-400 sm:hover:bg-white`,
}

export default Header;