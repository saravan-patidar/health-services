
function ServiceForm({ services, setServices, isEditing, addServices }) {

    const handleChange=(e)=>{
        setServices({...services,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addServices();
    }

    return (
        <section className="md:m-10 p-3">
            <div className="rounded-3xl  shadow-2xl shadow-blue-700 mx-auto lg:w-1/2 md:w-3/4">
            <h3 className="text-center font-bold text-2xl">{isEditing?"Edit Services":'New Services'}</h3>
            <form onSubmit={handleSubmit}
                className=" flex flex-col p-5 sm:p-12  ">
                <input className="m-2 bg-transparent border placeholder:text-black my-4 p-3 shadow-lg  rounded" type="text" placeholder="Service Name"
                    onChange={handleChange}
                    name="name"
                    value={services?.name} />
                <textarea className="m-2 bg-transparent border placeholder:text-black my-4 p-3 shadow-lg  rounded h-32" type="text" placeholder="Description"
                    onChange={handleChange}
                    name='description'
                    value={services?.description}  ></textarea>
                <input className="m-2 bg-transparent border placeholder:text-black my-4 p-3 shadow-lg  rounded" type="number" placeholder="Price" min='0'
                    onChange={handleChange}
                    name='price'
                    value={services?.price} />

                <button className="bg-blue-500  p-3 m-3 rounded-tr-xl rounded-bl-xl hover:bg-blue-600 font-bold">{isEditing ? "Update" : "Add"}</button>
            </form>
            </div>
        </section>
    )
}

export default ServiceForm