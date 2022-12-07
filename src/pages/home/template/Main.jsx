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
        <main>
            {cards}
        </main>
    )
}

const style = {
    mainContent: ``,
}

export default Main