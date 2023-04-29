export default function Tarjeta(props) {

    return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg text-center h-96">
            <img className="max-h-32 " src={props.image} alt={props.title}/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.title}</div>
                <p className="text-gray-700 text-base">
                {props.description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{props.category}</span>

            </div>
        </div>
    )
}