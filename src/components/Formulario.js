import React, {useState, Fragment} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';
const shortid =  require('shortid');

const Formulario = ({guardarGasto, guardarCrearGasto }) => {



    const [nombre, guardarNombre] = useState("");
    const [cantidad, guardarCantidad] = useState();
    const [error, guardarError] = useState(false)

    const actualizarStateNombre = e => {
        guardarNombre(e.target.value);
    }
    const actualizarStateCantidad = e => {
        guardarCantidad(parseInt( e.target.value));
    }
   
   const agregarGasto = e =>{
       e.preventDefault();

       //validar
       if(cantidad< 1 || isNaN(cantidad) || nombre.trim() === ""){
            guardarError(true);
            return;
       }
       guardarError(false)
       //construir el gasto
const gasto = {
    nombre,
    cantidad,
    id: shortid.generate()
}
console.log(gasto)
       //pasar el gasto a componente principal
guardarGasto(gasto)
guardarCrearGasto(true);
       //resetear form 

       guardarNombre('');
       guardarCantidad(NaN);
   }

    return ( 

        <Fragment>

<form onSubmit={agregarGasto}>
            <h2>Agrega tus gastos aqui</h2>
            <div className="campo">
                <label>Nombre gasto</label>
                <input type="text"
                        className="u-full-width"
                        placeholder="Ej. trasporte"
                        value = {nombre}
                        onChange= {actualizarStateNombre}/>
            </div>
            <div className="campo">
                <label>Cantidad gasto</label>
                <input type="number"
                        className="u-full-width"
                        placeholder="Ej. 300"
                        value= {cantidad}
                        onChange= {actualizarStateCantidad}/>
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"
                />
        </form>
                        {error ? <Error mensaje ="Debe ingresar un nombre y un gasto"/> : null}


        </Fragment>
        

     );
}
 
Formulario.propTypes ={
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired,
}
export default Formulario;