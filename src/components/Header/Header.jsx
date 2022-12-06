import logo from '../../assets/imgs/cooking-logo.svg';

const Header = () => {
    return (
        <header className="flex justify-between bg-gray-200 h-28 items-center px-5 sm:pt-6">
            <div className='flex items-baseline'>
                <img src={logo} alt="Pessoa cozinhando" className='w-8'/>
                <span className='pl-3 font-bold text-lg'>Receitas Lhegais</span>
            </div>
            <nav className="flex flex-col justify-evenly sm:w-2/4 sm:flex-row sm:items-center items-end">
                <a href="#" className='font-semibold'>Home</a>
                <a href="#" className='font-semibold'>Sobre</a>
                <a href="#" className='font-semibold'>Contato</a>
                <a href="#" className='font-semibold sm:bg-orange-400 rounded-full sm:text-white sm:w-20 sm:h-6 sm:text-center'>Receitas</a>
            </nav>
        </header>
    )
};

export default Header;