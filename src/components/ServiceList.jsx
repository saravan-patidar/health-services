
const ServiceList = ({ services, deleteService, setEditingService }) => {
    // console.log(services)

    return (
        <section className="container mx-auto sm:px-10 lg:px-20 ">
            <div className=" mx-auto">
                {services.length !== 0 ?
                    (<ul className="grid py-5 gap-3 md:grid-cols-2  ">
                        {services.map((service) => {
                            const { id, name, description, price } = service;
                            return <li key={id} className="bg-blue-200 rounded-lg shadow-lg p-5 space-y-3">
                                <h1 className="text-2xl font-bold capitalize">{name}</h1>
                                <p>{description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="font-bold inline-block rounded-lg bg-green-100 capitalize p-2 my-2">{`price- ${price}`}</div>
                                    <div>
                                        <button className="p-2 font-bold hover:scale-105 px-4 bg-blue-400 hover:bg-blue-500 rounded-xl"
                                            onClick={() => setEditingService(service)}>Edit</button>
                                        <button className="p-2 font-bold hover:scale-105 px-4 bg-red-800 hover:bg-red-700 text-white m-2 rounded-xl"
                                            onClick={() => { deleteService(id) }}
                                        >Delete</button>
                                    </div>
                                </div>
                            </li>
                        })}
                    </ul>) :
                    (<p className="p-10 text-center text-red-500">No services available. </p>)
                }


            </div>

        </section>
    )
}
export default ServiceList  