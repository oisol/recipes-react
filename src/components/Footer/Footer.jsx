const Footer = () => {
    return (
        <footer className="flex sm:flex-row flex-col sm:mt-5 bg-slate-500 h-80">
            <div className="bg-blue-500 sm:w-96 sm:h-44">
                <p>Pronto pra cozinhar?</p>
                <h3>Assine nossa newsletter semanal!</h3>
                <div>
                    <form action="#">
                        <input type="email" name="email" id="newsletter_input" placeholder="Digite seu Email"/>
                        <button type="submit">Assinar</button>
                    </form>
                </div>
            </div>
            <div className="bg-red-500 sm:w-full sm:h-44 flex flex-row justify-around">
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
        </footer>
    )
}

export default Footer