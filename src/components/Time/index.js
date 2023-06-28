import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba';
import './Time.css'

const Time = (props) => {

    const background = {backgroundColor: hexToRgba(props.cor, '0.6')}
    const border = {borderColor: props.cor}

    return(
        props.colaboradores.length > 0 &&
        <section className='time' style={background}>
            <input 
                value={props.cor} 
                onChange={evento => props.mudarCor(evento.target.value, props.nome)} 
                type='color' 
                className='input-cor'
            /> 
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
                                        corFundo={props.cor}
                                        aoDeletar={props.aoDeletar}
                                        />})
            }
            </div>
        </section>
    )
}

export default Time;