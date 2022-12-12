import { useState } from 'react'
import CommentCard from './CommentCard'
import commentsData from './testimonalData'

const Testimonal = () => {

    const [count, setCount] = useState(0)

    const commentsCard = commentsData.map(values => {
        return (
            <CommentCard
                key={values.id}
                profile={values.profile}
                profileDesc={values.profileDesc}
                name={values.name}
                comment={values.comment}               
            />
        )
    })

    return (
        <div className="flex flex-col items-center sm:gap-3 gap-2 mt-5">
            <h2 className='text-orange-400 font-semibold text-base'>Depoimentos</h2>
            <p className='text-gray-900 font-bold text-xl'>Quadro de avaliações</p>

            <div>
                {commentsCard[count]}
            </div>
        </div>
    )
}

export default Testimonal