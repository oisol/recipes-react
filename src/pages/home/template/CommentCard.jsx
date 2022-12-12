const CommentCard = (props) => {
    return (
        <div className="flex flex-col gap-5 justify-end shadow-3xl sm:w-96 w-fit sm:h-auto h-40 sm:mb-4 sm:mt-8 rounded-2xl">
            <p className="sm:px-7 px-3 h-auto sm:w-96 w-72 pt-3 overflow-scroll text-left font-semibold text-gray-600">
                <em>
                    <span className="text-orange-400 font-bold text-2xl">“</span>
                        {props.comment}
                    <span className="text-orange-400 font-bold text-2xl">”</span>
                </em>
            </p>

            <div className="flex flex-row justify-center gap-2 mb-2 sm:px-0 px-2">
                <img className="h-16 w-16 rounded-full cursor-pointer" src={props.profile} alt={props.profileDesc} />
                <p className="mt-1 font-semibold text-gray-500">{props.name}</p>

                <div className="flex flex-row-reverse gap-5 items-center sm:ml-6">

                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 fill-orange-400 hover:fill-orange-300">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 fill-orange-400 hover:fill-orange-300">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z" clipRule="evenodd" />
                        </svg>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default CommentCard