import "./Equipo.css";
import Colaborador from "../Colaborador";

const Equipo = (props) => {
  //Destructuring
  const { titulo, colorPrimario, colorSecundario } = props.datos;
  const { colaboradores } = props;

  return (
    // condicion ternaria, mostrar si hay colaboradores en el equipo
    <> 
      {colaboradores.length > 0 && (
        <section
          className="equipo"
          style={{ backgroundColor: colorSecundario }}
        >
          <h3 style={{ borderBottomColor: colorPrimario }}>{titulo}</h3>
          <div className="colaboradores">
            
            {colaboradores.map((colaborador, index) => (
              <Colaborador 
                datos={colaborador} 
                key={index} 
                colorPrimario={colorPrimario}/>
            ))}
            
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;
