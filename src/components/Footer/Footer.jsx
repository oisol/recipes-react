const Footer = () => {
    return (
        <footer className="flex lg:flex-row flex-col sm:mt-5 bg-slate-500 h-auto">
            {/* NEWLETTER */}
            <div className="bg-white lg:w-1/3 w-full lg:h-44 h-36 pl-4 pb-4 flex flex-col lg:justify-end lg:items-start items-center justify-center">
                <p className="text-2xl font-semibold ">Pronto para cozinhar?</p>
                <h3 className="text-base font-medium">Assine nossa newsletter semanal!</h3>

                <form action="#" className="flex justify-start flex-wrap pt-4">
                    <input className="h-8 w-60 rounded-l-lg pl-3 focus:bg-gray-200 border-2 border-gray-200 outline-none" type="email" name="email" id="newsletter_input" placeholder="Digite seu Email"/>
                    <button className="bg-orange-400 hover:bg-white rounded-r-lg w-20 text-white hover:text-orange-400 hover:border-2 hover:border-orange-400
                    font-semibold" type="submit">Assinar</button>
                </form>

            </div>

            {/* LINKS RÁPIDOS */}
            <div className="bg-red-500 lg:w-2/3 w-full lg:h-44 h-48 flex flex-row justify-around flex-wrap">
                {/* QuickLinks */}
                <div>
                    <p>Links Rápidos</p>
                    <ul className="pl-4">
                        <li>
                            <a href="#">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Link2
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Link3
                            </a>
                        </li>
                    </ul>
                </div>
                {/* About Us */}
                <section className="flex flex-col items-center w-1/3 break-all">
                    <h3>Sobre Nós</h3>
                    <p className="overflow-scroll h-36">Sed non dolor mauris. Sed mi est, ornare ac felis a, volutpat suscipit mi. 
                        Integer in venenatis dolor. Donec sed nibh velit. Maecenas odio sapien, posuere gravida magna vel, porta.
                    </p>

                </section>
                {/* Social Media */}
                <div>
                    <li>
                        <a href="#">
                            Instagram Icon
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Twitter Icon
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Facebook Icon
                        </a>
                    </li>
                </div>
            </div>
        </footer>
    )
}

export default Footer