import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

    const background = {backgroundColor: props.corSecundaria}
    const border = {borderColor: props.corPrimaria}

    return(
        props.colaboradores.length > 0 &&
        <section className='time' style={background}> 
            <h3 style={border}>{props.nome}</h3>
            <div className='colaboradores'>
            {
                props.colaboradores.map(
                    colaborador => {
                        return <Colaborador 
                                        key={colaborador.nome} 
                                        nome={colaborador.nome} 
                                        cargo={colaborador.cargo} 
                                        imagem={colaborador.imagem}
                                        corFundo={props.corPrimaria}
                                        aoDeletar={props.aoDeletar}
                                        />})
            }
            </div>
        </section>
    )
}

export default Time;