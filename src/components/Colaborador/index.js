import './Colaborador.css'

const Colaborador = ({ nome, cargo, imagem, corFundo }) => {

    const textoAlternativo = `Imagem do(a) colaborador(a) ${nome}`

    return(
        <div className='colaborador'>
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