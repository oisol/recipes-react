import Zoom from 'react-medium-image-zoom'
import bg_img from '../../../assets/imgs/food-frame.png'

const Article = () => {
    return (
        <article className={style.article}>
            <Zoom>
                <img className={style.image} src={bg_img} alt="Prato com comida mexicana e tortillas"/>
            </Zoom>

            <div className={style.mainDiv}>
                <h2 className={style.subtitle}>Sobre Nós</h2>
                <h3 className={style.title}>A parte mais essencial de uma<br/>dieta bem balanceada é <span>COMIDA</span></h3>
                <p className={style.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloribus odit eligendi fugiat.
                    cupiditate esse ad doloremque molestiae delectus quasi nemo velit, natus facere mollitia quam.
                    Provident quam officiis aliquam harum, numquam dolor tenetur, facilis inventore, ad recusandae repellat non illum accus.
                </p>
                <button className={style.buttom}>Leia mais</button>
            </div>

        </article>
    )
}

const style = {
    article: `mt-3 flex sm:justify-center sm:flex-row sm:items-start items-center flex-col`,
    image: `sm:w-full w-64 cursor-pointer max-w-md sm:rounded-md`,
    mainDiv: `sm:w-2/5 flex flex-col sm:items-start items-center p-3`,
    subtitle: `text-left font-semibold text-sm text-orange-400`,
    title: `text-left font-semibold mt-2 text-xl`,
    text: `text-left w-11/12 max-h-52 sm:overflow-visible overflow-y-scroll mt-4 text-xs`,
    buttom: `font-bold text-sm bg-orange-400 text-white rounded-full px-2 py-1 mt-6 hover:translate-y-1 delay-50 hover:scale-105`
}

export default Article