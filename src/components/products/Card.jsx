export default function Tarjeta(props) {
  console.log(props);

    return (
      <div className="max-w-sm lg:flex text-center w-96 h-96">
        {/* <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" 
        style={{ backgroundImage: `url(${props.product.person.image})` }} 
        title="Avatar">
        </div> */}
        <div className="border-r border-b border-l border-gray-400 
        lg:border-l-0 lg:border-t lg:border-gray-400 
        rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between 
        opacity-70 leading-normal bg-white hover:opacity-80">
          <div className="mb-8">
            
            <div className="text-gray-900 font-bold text-xl mb-2">{props.title}</div>
            <p className="text-gray-700 text-base"> {props.description} </p>
          </div>
          <div className="flex items-center">
            <img className="w-32 h-32 rounded-full mr-4" src={props.image} alt="Avatar"/>
            <div className="text-sm">
              <p className="text-gray-600">Category: {props.category}</p>
              <p className="text-gray-600">Price: {props.price}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }