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
        <main className={style.mainDiv} id='recipes'>
            {/* Menu */}
            <div className={style.menuMainDiv}>

                <h2 className={style.menuTitle}>Receitas</h2>
                <p className={style.menuSubTitle}>Explore Nossas Receitas</p>
                {/* Search */}
                <form className={style.searchMainDiv}>
                    <input className={style.searchInput} type="text" name="recipe_search" id="textSearch" onChange={(e) => setSearch((e.target.value).toLowerCase())}/>
                    {style.searchIcon}
                </form>

                <nav className={style.categoryMainDiv}>
                    <label>
                        <input className={style.categoryInput} defaultChecked type="radio" id="all" value="all" name="recipe_type" onChange={(e) => setSearch(e.target.value)}/>
                        <div className={style.categoryName}>Todos</div>
                    </label>

                    <label>
                        <input className={style.categoryInput} type="radio" id="breakfast" value="breakfast" name="recipe_type" onChange={(e) => setSearch(e.target.value)}/>
                        <div className={style.categoryName}>Lanche</div>
                    </label>

                    <label>
                        <input className={style.categoryInput} type="radio" id="dinner" value="dinner" name="recipe_type" onChange={(e) => setSearch(e.target.value)}/>
                        <div className={style.categoryName}>Jantar</div>
                    </label>

                    <label>
                        <input className={style.categoryInput} type="radio" id="dessert" value="dessert" name="recipe_type" onChange={(e) => setSearch(e.target.value)}/>
                        <div className={style.categoryName}>Sobremesa</div>
                    </label>

                    <label>
                        <input className={style.categoryInput} type="radio" id="drink" value="drink" name="recipe_type" onChange={(e) => setSearch(e.target.value)}/>
                        <div className={style.categoryName}>Drink</div>
                    </label>
                </nav>

            </div>

            <div className={style.cardsMainDiv}>
                {
                    cardsFiltered
                }
            </div>
            
        </main>
    )
}

const style = {
    mainDiv: `bg-gray-50 mt-9 sm:pb-3 pb-1`,
    // Menu
        menuMainDiv: 'pt-4 flex flex-col justify-center items-center gap-1',
        menuTitle: 'text-orange-400 font-semibold text-base',
        menuSubTitle: 'text-gray-800 font-bold text-xl sm:px-0 px-3',
        // Menu Search
            searchMainDiv: 'flex gap-2 items-center',
            searchInput: 'h-8 w-16 focus:w-44 rounded-lg pl-3 focus:bg-gray-200 border-2 border-gray-200 outline-none',
            searchIcon: 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-orange-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>,
        // Menu Category
            categoryMainDiv: 'flex sm:flex-row sm:gap-3 sm:mt-4 gap-2 flex-wrap sm:px-0 px-3',
            categoryInput: 'peer sr-only',
            categoryName: `bg-gray-300 w-full h-8 mx-1 text-center cursor-pointer rounded-md p-1 font-medium text-gray-800 hover:shadow peer-checked:bg-orange-400 peer-checked:text-white`,
    // Cards
        cardsMainDiv: 'flex flex-wrap gap-4 xl:justify-start xl:ml-20 my-9 justify-center items-center '
};

export default Main