const Advertisement = () => {
    return (
        <section className={style.section}>

            <h2 className={style.title}>Vire um Membro Pro</h2>

            <div className={style.mainDiv}>

                <div className={style.adCard}>
                    {style.icons.smiley}
                    <span className={style.cardTitle}>Receitas Únicas</span>
                    <p className={style.cardText}>Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Non doloribus odit eligendi fugia.
                    </p>
                </div>

                <div className={style.adCard}>
                    {style.icons.no}
                    <span className={style.cardTitle}>Livre de Propagandas</span>
                    <p className={style.cardText}>Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Non doloribus odit eligendi fugia.
                    </p>
                </div>

                <div className={style.adCardAlt}>
                    {style.icons.discount}
                    <span className={style.cardTitleAlt}>Descontos Especiais</span>
                    <p className={style.cardTextAlt}>Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Non doloribus odit eligendi fugia.
                    </p>
                </div>

            </div>
        </section>
    )
}

const style = {
    section: `flex items-center flex-col mt-12`,
    title: `font-semibold text-lg`,
    mainDiv: `flex sm:flex-row sm:justify-center sm:gap-10 gap-2 flex-col items-center w-full px-9 mt-8`,
    adCard: `bg-white sm:w-56 sm:h-32 sm:mt-0 w-2/3 max-w-xs mt-3 rounded-xl p-2 flex flex-col items-center cursor-pointer shadow-3xl`,
    adCardAlt: `bg-orange-400 sm:w-56 sm:h-32 w-2/3 max-w-xs sm:mt-0 mt-3 rounded-xl p-2 flex flex-col items-center cursor-pointer shadow-3xl animate-pulse`,
    cardTitle: `text-center font-semibold text-gray-800`,
    cardText: `text-left break-all sm:overflow-visible overflow-y-scroll text-xs mt-1 text-gray-700 mx-2`,
    cardTitleAlt: `text-center text-white font-semibold`,
    cardTextAlt: `text-left text-white break-all sm:overflow-visible overflow-y-scroll text-xs mt-1 mx-2`,

    icons: {
        smiley: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-orange-400">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clipRule="evenodd" />
                </svg>
            ,
        no: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-orange-400">
                <path fillRule="evenodd" d="M6.72 5.66l11.62 11.62A8.25 8.25 0 006.72 5.66zm10.56 12.68L5.66 6.72a8.25 8.25 0 0011.62 11.62zM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788z" clipRule="evenodd" />
            </svg>
            ,
        discount: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                    <path fillRule="evenodd" d="M12 1.5c-1.921 0-3.816.111-5.68.327-1.497.174-2.57 1.46-2.57 2.93V21.75a.75.75 0 001.029.696l3.471-1.388 3.472 1.388a.75.75 0 00.556 0l3.472-1.388 3.471 1.388a.75.75 0 001.029-.696V4.757c0-1.47-1.073-2.756-2.57-2.93A49.255 49.255 0 0012 1.5zm3.53 7.28a.75.75 0 00-1.06-1.06l-6 6a.75.75 0 101.06 1.06l6-6zM8.625 9a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm5.625 3.375a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
                </svg>
            ,
    },
}

export default Advertisement