import "./Equipo.css";
import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
  //Destructuring
  const { titulo, colorPrimario, colorSecundario } = props.datos;
  const { colaboradores, eliminarColaborador, actualizarColor } = props;

  return (
    // condicion ternaria, mostrar si hay colaboradores en el equipo
    <> 
      {colaboradores.length > 0 && (
        <section
          className="equipo"
          style={{ backgroundColor: hexToRgba(colorPrimario, 0.6) }}
        >
          <input 
            type="color"
            className="input-color"
            value={colorPrimario}
            onChange={(e)=> actualizarColor(e.target.value, titulo)}
            />
          <h3 style={{ borderBottomColor: colorPrimario }}>{titulo}</h3>
          <div className="colaboradores">
            
            {colaboradores.map((colaborador, index) => (
              <Colaborador 
                datos={colaborador} 
                key={index} 
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}/>
            ))}
            
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;
