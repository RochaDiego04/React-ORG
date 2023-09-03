import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = () => {

    const manejarEnvio = (e) => {
        e.preventDefault();
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" required></CampoTexto>
            <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" required></CampoTexto>
            <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" required></CampoTexto>
            <ListaOpciones></ListaOpciones>
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}

export default Formulario