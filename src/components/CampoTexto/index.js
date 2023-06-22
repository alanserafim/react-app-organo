import "./CampoTexto.css"

const CampoTexto  = (props) => {

    const placeholderModificada = `${props.placeholder}...`
    // const textoMin = texto.toLowerCase(); 

    return(
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input 
            placeholder={placeholderModificada}
            required={props.obrigatorio}
            />
        </div>
    )
}

export default CampoTexto;