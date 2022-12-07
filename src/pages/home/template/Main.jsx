import { useState } from 'react'
import data from '../../../data'
import Card from './Card'

const Main = () => {

    const [search, setSearch] = useState('');

    const cards = data.map(values => {
        return (
            <Card
                key={values.id}
                type={values.category}
                image={values.image}
                imageDesc={values.imageDesc}
                name={values.name}
                desc={values.desc}                
            />
        )
    })

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
                />
            )
        }
    })

    console.log(search)

    return (
        <main className='bg-gray-200 mt-9'>

            <div className='pt-4 flex flex-col justify-center items-center gap-1'>
                <h4 className='text-orange-400 font-semibold text-base'>Receitas</h4>
                <h2 className='text-gray-800 font-bold text-xl'>Explore Nossas Receitas</h2>
                <nav>
                    <input type="radio" id="breakfast" value="breakfast" name="recipe_type" onChange={(e) => setSearch(e.target.value)}/>
                    <input type="radio" id="dinner" value="dinner" name="recipe_type" onChange={(e) => setSearch(e.target.value)}/>
                    <input type="radio" id="dessert" value="dessert" name="recipe_type" onChange={(e) => setSearch(e.target.value)}/>
                    <input type="radio" id="drink" value="drink" name="recipe_type" onChange={(e) => setSearch(e.target.value)}/>
                </nav>
            </div>

            <div className='flex flex-wrap gap-3 justify-center mt-9'>
                {
                    search ?
                    cardsFiltered
                    :
                    cards
                }
            </div>
            
        </main>
    )
}

const style = {
    mainContent: ``,
}

export default Main