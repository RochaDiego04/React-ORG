import "./CampoTexto.css"

const CampoTexto = (props) => {
    const placeHolderModificado = `${props.placeholder}...`;
    
    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value);
    }

    return <div className="campo-texto">
        <label>{ props.titulo }</label>
        <input 
            placeholder = {placeHolderModificado} 
            htmlFor = "label"
            required = {props.required}
            value={props.valor}
            onChange={manejarCambio}
        >
        </input>
    </div>
}

export default CampoTexto