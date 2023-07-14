import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba';
import './Time.css'
import { ITime } from '../../shared/interfaces/ITime';
import { IColaborador } from '../../shared/interfaces/IColaborador';
import React from 'react';

interface TimeProps {
    time: ITime,
    colaboradores: IColaborador[]
    aoDeletar: (id: string) => void
    mudarCor: (evento: string, id: string) => void
    aoFavoritar: (id: string) => void
}

const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar}:TimeProps) => {

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
                                        aoFavoritar={aoFavoritar}
                                        />})
            }
            </div>
        </section>
    )
}

export default Time;