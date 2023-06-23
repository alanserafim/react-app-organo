import "./CampoTexto.css"

const CampoTexto  = (props) => {

    const placeholderModificada = `${props.placeholder}...`
    // const textoMin = texto.toLowerCase(); 

    const aoDigitado = (evento) =>{ 
        //setValor(evento.target.value)   
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input 
            placeholder={placeholderModificada}
            required={props.obrigatorio}
            value={props.valor}
            onChange={aoDigitado}
            />
        </div>
    )
}

export default CampoTexto;