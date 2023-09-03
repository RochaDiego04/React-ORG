import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    const equipos = [
        "Programación",
        "FrontEnd",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ];

    const manejarCambio = (e) => {
       props.actualizarValor(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            
            {equipos.map( (equipo, index) => {
                return <option key={index} value={equipo}>
                            {equipo}
                    </option>
            } ) }
            
        </select>
    </div>
}

export default ListaOpciones;