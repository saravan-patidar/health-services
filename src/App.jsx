import React, { useEffect, useState } from "react";
import './App.css'
import ServiceForm from "./components/ServiceForm";
import ServiceList from "./components/ServiceList";

function App() {
  const [services, setServices] = useState([]);
  const [editingServices, setEditingService] = useState(null);
  const [newService, setNewService] = useState({ id: '', name: '', description: '', price: '' });

  useEffect(()=>{
     setServices(JSON.parse(localStorage.getItem('services')) ||[])

  },[])
  useEffect(()=>{
    if(services.length>0){
      localStorage.setItem('services',JSON.stringify(services))
    }
  },[services])

  const addServices = () => {
    if (newService.name && newService.description && newService.price) {
      setServices([...services, { ...newService, id: Date.now() }])
      setNewService({ id: '', name: '', description: '', price: '' });
    }
    else {
      alert('All feilds are required!!');
    }
  }

  const updateServices = () => {
    setServices(services.map((service) => (
      service.id === editingServices.id ? editingServices : service
    )))
    setEditingService(null)
  }

  const deleteService = (id) => {
    const updateServices = services.filter((service) => service.id !== id)
    setServices(updateServices)
  }

  return (
    <div className="bg-bg-color ">
      <div className="container mx-auto  border-black">
        <h1 className="text-center font-bold text-5xl p-3 pt-10 underline ">Health Services</h1>

        {editingServices == null ? <ServiceForm services={newService} setServices={setNewService} isEditing={false} addServices={addServices} /> : <ServiceForm services={editingServices} setServices={setEditingService} isEditing={true} addServices={updateServices} />}
        <ServiceList services={services} deleteService={deleteService} setEditingService={setEditingService} />
      </div>

    </div>
  )
}

export default App;