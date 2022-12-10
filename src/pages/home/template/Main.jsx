import { useState } from 'react'
import data from '../../../data'
import Card from './Card'

const Main = () => {

    const [search, setSearch] = useState('all');

    // Filtrar Cards de Acordo com a categoria
    const cardsFiltered = data.map(values => {

        if (values.category == search) {
            return (
                <Card
                    key={values.id}
                    type={values.category}
                    image={values.image}
                    imageDesc={values.imageDesc}
                    name={values.name}
                    desc={values.desc}  
                    recipe={values.recipe}               
                />
            )
        }
        
        // Todos Selecionado
        if (search == "all"){

            return (
                <Card
                    key={values.id}
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
        <main className='bg-gray-50 mt-9'>

            <div className='pt-4 flex flex-col justify-center items-center gap-1'>

                <h4 className='text-orange-400 font-semibold text-base'>Receitas</h4>
                <h2 className='text-gray-800 font-bold text-xl'>Explore Nossas Receitas</h2>

                <nav className='flex sm:flex-row sm:gap-3 sm:mt-4 gap-2 flex-wrap'>
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

            <div className='flex flex-center items-center'>
                <div className='flex flex-wrap gap-4 xl:justify-start xl:ml-20 my-9 justify-center items-center '>
                    {cardsFiltered}
                </div>
            </div>
        
        </main>
    )
}

const style = {
    mainContent: ``,
    categoryName: `bg-gray-300 w-full h-8 mx-1 text-center cursor-pointer rounded-md p-1 font-medium text-gray-800 hover:shadow peer-checked:bg-orange-400 peer-checked:text-white`,
}

export default Main