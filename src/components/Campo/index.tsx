import "./Campo.css"
import React from 'react'

interface CampoProps {
    type?: string,
    label: string,
    placeholder: string,
    valor: any,
    obrigatorio?: boolean,
    aoAlterado: (valor: any) => void
}

const Campo  = ({type = "text", label, placeholder, valor, aoAlterado, obrigatorio = false}: CampoProps) => {

    const placeholderModificada = `${placeholder}...`
    // const textoMin = texto.toLowerCase(); 

    const aoDigitado = (evento : React.ChangeEvent<HTMLInputElement>) =>{ 
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