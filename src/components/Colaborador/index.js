import './Colaborador.css'
import { AiFillCloseCircle } from 'react-icons/ai'

const Colaborador = ({ nome, cargo, imagem, corFundo, aoDeletar }) => {

    const textoAlternativo = `Imagem do(a) colaborador(a) ${nome}`

    return(
        <div className='colaborador'>
        <AiFillCloseCircle size={25} className='deletar' onClick={aoDeletar}/>
            <div className='cabecalho' style={ {backgroundColor : corFundo } }>
                <img src={imagem} alt={textoAlternativo}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>

    )
}

export default Colaborador;