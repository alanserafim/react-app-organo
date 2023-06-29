import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba';
import './Time.css'

const Time = ({ time, colaboradores, aoDeletar, mudarCor}) => {

    const background = {backgroundColor: hexToRgba(time.cor, '0.6')}
    const border = {borderColor: time.cor}

    return(
        colaboradores.length > 0 &&
        <section className='time' style={background}>
            <input 
                value={time.cor} 
                onChange={evento => mudarCor(evento.target.value, time.id)} 
                type='color' 
                className='input-cor'
            /> 
            <h3 style={border}>{time.nome}</h3>
            <div className='colaboradores'>
            {
                colaboradores.map(
                    (colaborador, indice) => {
                        return <Colaborador 
                                        key={indice} 
                                        colaborador={colaborador} 
                                        corFundo={time.cor}
                                        aoDeletar={aoDeletar}
                                        />})
            }
            </div>
        </section>
    )
}

export default Time;