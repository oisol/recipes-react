const Footer = () => {
    return (
        <footer className="flex md:flex-row flex-col sm:mt-5 bg-slate-500 sm:h-80 h-auto">
            {/* NEWLETTER */}
            <div className="bg-blue-500 md:w-1/3 w-full md:h-44 h-36">
                <p>Pronto pra cozinhar?</p>
                <h3>Assine nossa newsletter semanal!</h3>
                <div>
                    <form action="#">
                        <input type="email" name="email" id="newsletter_input" placeholder="Digite seu Email"/>
                        <button type="submit">Assinar</button>
                    </form>
                </div>
            </div>
            {/* LINKS RÁPIDOS */}
            <div className="bg-red-500 md:w-2/3 w-full md:h-44 h-48 flex flex-row justify-around">
                <ul>
                    <li>a</li>
                    <li>1</li>
                </ul>
                <ul>
                    <li>b</li>
                    <li>2</li>
                </ul>
                <ul>
                    <li>c</li>
                    <li>3</li>
                </ul>
            </div>
            {/* SOCIAL MEDIA */}
        </footer>
    )
}

export default Footer