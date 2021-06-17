import React,{useState, useEffect} from 'react'
import {obtenerProductos} from "../services/productoService"
import GroupProducts from "../components/GroupProducts"

function PolosView() {
  const [productos, setProductos] = useState([])

  const getProductos = async () => {
    try {
      let productosObtenidos = await obtenerProductos()
      setProductos(productosObtenidos)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getProductos()
  },[])

  return (
    <div>
      <GroupProducts 
        productos={productos} 
        categoria="Polos" 
        id_categoria="1" 
        mostrarFiltro={true}
        setProductos={setProductos}
      />
    </div>
  )
}

export default PolosView
