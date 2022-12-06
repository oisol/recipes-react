import bg_img from '../../../assets/imgs/food-frame.png'

const Article = () => {
    return (
        <article className='mt-3 flex sm:justify-center sm:flex-row sm:items-start items-center flex-col'>

            <img src={bg_img} alt="Prato com comida mexicana e tortillas" className='w-2/4 cursor-pointer max-w-md sm:rounded-md'/>

            <div className='sm:w-2/5 flex flex-col sm:items-start items-center p-3'>
                <h2 className='text-left font-semibold text-sm text-orange-400'>Sobre Nós</h2>
                <h3 className='text-left font-semibold mt-2 text-xl'>A parte mais essencial de uma<br/>dieta bem balanceada é <span>COMIDA</span></h3>
                <p className='text-left w-11/12 max-h-52 overflow-scroll mt-4 text-xs'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloribus odit eligendi fugiat.
                    cupiditate esse ad doloremque molestiae delectus quasi nemo velit, natus facere mollitia quam.
                    Provident quam officiis aliquam harum, numquam dolor tenetur, facilis inventore, ad recusandae repellat non illum accus.
                </p>
                <button className='font-bold text-sm bg-orange-400 text-white rounded-full px-2 py-1 mt-6'>Leia mais</button>
            </div>

        </article>
    )
}

export default Article