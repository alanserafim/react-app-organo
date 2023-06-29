import "./Campo.css"

const Campo  = ({type = 'text', label, placeholder, valor, aoAlterado, obrigatorio}) => {

    const placeholderModificada = `${placeholder}...`
    // const textoMin = texto.toLowerCase(); 

    const aoDigitado = (evento) =>{ 
        //setValor(evento.target.value)   
        aoAlterado(evento.target.value)
    }

    return(
        <div className={`campo campo-${type}`}>
            <label>
                {label}
            </label>
            <input 
            type={type}
            placeholder={placeholderModificada}
            required={obrigatorio}
            value={valor}
            onChange={aoDigitado}
            />
        </div>
    )
}

export default Campo;