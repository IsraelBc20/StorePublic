import {Route} from "react-router-dom"
import PortadaView from "./views/PortadaView"
import ProductoView from "./views/ProductoView"
import CarritoView from "./views/CarritoView"
import PolosView from "./views/PolosView"
import ComprarView from "./views/ComprarView"

function Routes() {
    return (
        <div>
            <Route path="/" exact component={PortadaView}/>
            <Route path="/detalle/:id" component={ProductoView}/>
            <Route path="/carrito" exact component={CarritoView}/>
            <Route path="/poloscategory" exact component={PolosView}/>
            <Route path="/comprar" exact component={ComprarView}/>
        </div>
    )
}

export default Routes
