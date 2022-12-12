const CommentCard = (props) => {
    return (
        <div className="flex flex-col gap-5 justify-end shadow-3xl sm:w-96 w-auto sm:h-auto h-40 sm:mb-4 sm:mt-8 rounded-2xl">
            <p className="px-7 h-auto sm:w-96 pt-3 overflow-scroll text-left font-semibold text-gray-600">
                <em>
                    <span className="text-orange-400 font-bold text-2xl">“</span>
                        {props.comment}
                    <span className="text-orange-400 font-bold text-2xl">”</span>
                </em>
            </p>

            <div className="flex justify-center items-start gap-2 mb-2">
                <img className="h-16 w-16 rounded-full" src={props.profile} alt={props.profileDesc} />
                <p className="mt-1 font-semibold text-gray-500">{props.name}</p>
            </div>
        </div>
    )
}

export default CommentCard