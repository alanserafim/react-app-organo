import './Colaborador.css'
import { AiFillCloseCircle } from 'react-icons/ai'

const Colaborador = ({ colaborador, corFundo, aoDeletar }) => {

    const textoAlternativo = `Imagem do(a) colaborador(a) ${colaborador.nome}`

    return(
        <div className='colaborador'>
        <AiFillCloseCircle 
            size={25} 
            className='deletar' 
            onClick={() => aoDeletar(colaborador.id)}
        />
            <div className='cabecalho' style={ {backgroundColor : corFundo } }>
                <img src={colaborador.imagem} alt={textoAlternativo}/>
            </div>
            <div className='rodape'>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
            </div>
        </div>

    )
}

export default Colaborador;