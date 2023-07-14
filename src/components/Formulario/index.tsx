import './Formulario.css'
import Campo from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';
import { ITime } from '../../shared/interfaces/ITime';
import { IColaborador } from '../../shared/interfaces/IColaborador';
import React from 'react';

interface FormularioProps {
    aoColaboradorCadastrado: (colaborador: IColaborador) => void, 
    cadastrarTime: (time: ITime) => void, 
    times: ITime[]

}

const Formulario = ({ aoColaboradorCadastrado, cadastrarTime, times}: FormularioProps) => {
    const { v4: uuidv4 } = require('uuid');
  
    const [nome, setNome] = useState("")
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");
    const [nomeTime, setNomeTime] = useState("");
    const [corTime, setCorTime] = useState("");

    const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        aoColaboradorCadastrado({
            id: uuidv4(),
            nome, 
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    const aoCadastrarTime = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        cadastrarTime({ id: uuidv4(), nome: nomeTime, cor: corTime })
        setNomeTime("")
        setCorTime("")
    }


    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Campo 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={ valor => setNome(valor) }
                /> 
                <Campo 
                    obrigatorio={true} 
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={ valor => setCargo(valor) }
                /> 
                <Campo 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem"
                    valor={imagem}
                    aoAlterado={ valor => setImagem(valor) }
                /> 
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={times}
                    valor={time}
                    aoAlterado={ valor => setTime(valor) }
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>


            <form onSubmit={aoCadastrarTime}>
                <h2>Preencha os dados para criar um novo time</h2>
                <Campo 
                    obrigatorio
                    label="Nome" 
                    placeholder="Digite o nome do time"
                    valor={nomeTime}
                    aoAlterado={ valor => setNomeTime(valor) }
                /> 
                <Campo 
                    type='color'
                    obrigatorio
                    label="Cor"
                    placeholder="Digite a cor do time"
                    valor={corTime}
                    aoAlterado={ valor => {setCorTime(valor) }}
                /> 
                <Botao>
                    Criar Time
                </Botao>
            </form>
        </section>
    )

}

export default Formulario