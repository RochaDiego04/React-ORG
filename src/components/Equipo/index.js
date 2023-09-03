import "./Equipo.css";

const Equipo = (props) => {
  //Destructuring
  const { titulo, colorPrimario, colorSecundario } = props.datos;

  return (
    <section className="equipo" style={{ backgroundColor: colorSecundario }}>
        <h3 style={{ borderBottomColor: colorPrimario }}>
            {titulo}
        </h3>
      <div className="colaboradores"></div>
    </section>
  );
};

export default Equipo;
