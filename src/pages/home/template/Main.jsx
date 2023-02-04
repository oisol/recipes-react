import { useState } from 'react'
import data from '../../../data'
import Card from './Card'

const Main = () => {

    const [search, setSearch] = useState('all');

    // Filtrar Cards de Acordo com a categoria 
    const cardsFiltered = data.map(values => {
        if (values.category == search || search == "all" || values.name.toLowerCase().replace('-', ' ').trim().includes(search)) {
            return (
                <Card
                    key={values.id}
                    id={values.id}
                    type={values.category}
                    image={values.image}
                    imageDesc={values.imageDesc}
                    name={values.name}
                    desc={values.desc}  
                    recipe={values.recipe}               
                />
            )
        }
    })


    return (
        <main className='bg-gray-50 mt-9 sm:pb-3 pb-1' id='recipes'>

            <div className='pt-4 flex flex-col justify-center items-center gap-1'>

                <h2 className='text-orange-400 font-semibold text-base'>Receitas</h2>
                <p className='text-gray-800 font-bold text-xl sm:px-0 px-3'>Explore Nossas Receitas</p>

                <form className='flex gap-2 items-center'>
                    <input className='h-8 w-16 focus:w-44 rounded-lg pl-3 focus:bg-gray-200 border-2 border-gray-200 outline-none' type="text" name="recipe_search" id="textSearch" onChange={(e) => setSearch((e.target.value).toLowerCase())}/>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-orange-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </form>

                <nav className='flex sm:flex-row sm:gap-3 sm:mt-4 gap-2 flex-wrap sm:px-0 px-3'>
                    <label>
                        <input className='peer sr-only' defaultChecked type="radio" id="all" value="all" name="recipe_type" onChange={(e) => setSearch(e.target.value)}/>
                        <div className={style.categoryName}>Todos</div>
                    </label>

                    <label>
                        <input className='peer sr-only' type="radio" id="breakfast" value="breakfast" name="recipe_type" onChange={(e) => setSearch(e.target.value)}/>
                        <div className={style.categoryName}>Lanche</div>
                    </label>

                    <label>
                        <input className='peer sr-only' type="radio" id="dinner" value="dinner" name="recipe_type" onChange={(e) => setSearch(e.target.value)}/>
                        <div className={style.categoryName}>Jantar</div>
                    </label>

                    <label>
                        <input className='peer sr-only' type="radio" id="dessert" value="dessert" name="recipe_type" onChange={(e) => setSearch(e.target.value)}/>
                        <div className={style.categoryName}>Sobremesa</div>
                    </label>

                    <label>
                        <input className='peer sr-only' type="radio" id="drink" value="drink" name="recipe_type" onChange={(e) => setSearch(e.target.value)}/>
                        <div className={style.categoryName}>Drink</div>
                    </label>
                </nav>
            </div>

            <div className='flex flex-wrap gap-4 xl:justify-start xl:ml-20 my-9 justify-center items-center '>
                {
                cardsFiltered
                }
            </div>
            
        </main>
    )
}

const style = {
    mainContent: ``,
    categoryName: `bg-gray-300 w-full h-8 mx-1 text-center cursor-pointer rounded-md p-1 font-medium text-gray-800 hover:shadow peer-checked:bg-orange-400 peer-checked:text-white`,
}

export default Main