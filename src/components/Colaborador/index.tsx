import { IColaborador } from '../../shared/interfaces/IColaborador'
import './Colaborador.css'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

interface ColaboradorProps {
    colaborador : IColaborador
    corFundo: string, 
    aoDeletar: (id: any) => void
    aoFavoritar: (id: any) => void
}

const Colaborador = ({ colaborador, corFundo, aoDeletar, aoFavoritar }: ColaboradorProps) => {

    const textoAlternativo = `Imagem do(a) colaborador(a) ${colaborador.nome}`

    function favoritar(){
        aoFavoritar(colaborador.id)
    }

    const propsFavorito = {
        size: 25, 
        onClick: favoritar,
    }

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
                <div className='favoritar'>
                    {colaborador.favorito 
                        ? <AiFillHeart {...propsFavorito} color='#FF0000'/> 
                        : <AiOutlineHeart {...propsFavorito}/>
                        }
                </div>
            </div>
        </div>

    )
}

export default Colaborador;