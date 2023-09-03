import "./CampoTexto.css"

const CampoTexto = (props) => {
    const placeHolderModificado = `${props.placeholder}...`;
    
    return <div className="campo-texto">
        <label>{ props.titulo }</label>
        <input 
            placeholder = {placeHolderModificado} 
            htmlFor = "label"
            required = {props.required}
        >
        </input>
    </div>
}

export default CampoTexto