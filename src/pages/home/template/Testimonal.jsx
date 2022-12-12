import { useState } from 'react'
import CommentCard from './CommentCard'
import commentsData from './testimonalData'

const Testimonal = () => {

    let [count, setCount] = useState(0)

    // Função para próximo comentario
    const nextComment = () => {
        if ((commentsData.length - 1)> count) {
            return (
                setCount((count += 1)) & console.log(commentsData.length)
            )
        } else {
            return
        }
        
    }
    
    // Função para comentario anterior
    const previousComment = () => {
        if ((count > 0)) {
            return (
                setCount((count -= 1))
            )
        } else {
            return
        }
    }

    // Montar card de comentarios com map e props
    const commentsCard = commentsData.map(values => {
        return (
            <CommentCard
                key={values.id}
                profile={values.profile}
                profileDesc={values.profileDesc}
                name={values.name}
                comment={values.comment}
                nextEvent={nextComment}   
                previousEvent={previousComment}            
            />
        )
    })

    return (
        <div className="flex flex-col items-center sm:gap-3 gap-2 mt-5 bg-white">
            <h2 className='text-orange-400 font-semibold text-base'>Depoimentos</h2>
            <p className='text-gray-900 font-bold text-xl'>Quadro de avaliações</p>

            <div>
                {commentsCard[count]}
            </div>
        </div>
    )
}

export default Testimonal