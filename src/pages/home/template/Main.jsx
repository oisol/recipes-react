import data from '../../../data'
import Card from './Card'

const Main = () => {

    const cards = data.map(values => {
        return (
            <Card
                key={values.id} 
                image={values.image}
                imageDesc={values.imageDesc}
                name={values.name}
                desc={values.desc}                
            />
        )
    })

    return (
        <main className='bg-gray-200 mt-9'>
            <div className='pt-4 flex flex-col justify-center items-center gap-1'>
                <h4 className='text-orange-400 font-semibold text-base'>Receitas</h4>
                <h2 className='text-gray-800 font-bold text-xl'>Explore Nossas Receitas</h2>
                <nav>
                    <input type="radio" id="breakfast" value="Lanche" name="recipe_type"/>
                    <input type="radio" id="dinner" value="Pratos Principais" name="recipe_type"/>
                    <input type="radio" id="dessert" value="Sobremesas" name="recipe_type"/>
                    <input type="radio" id="drink" value="Drinks" name="recipe_type"/>
                </nav>
            </div>
            <div className='flex flex-wrap gap-3 justify-center mt-9'>
                {cards}
            </div>
        </main>
    )
}

const style = {
    mainContent: ``,
}

export default Main