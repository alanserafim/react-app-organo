import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';
import Rodape from './components/Rodape.css';
// import {v4 as uuidv4} from 'uuid';
import './App.css'
import botaoEsconder from './components/Botao/botao.png'
import { IColaborador } from './shared/interfaces/IColaborador';
import { ITime } from './shared/interfaces/ITime';
import React from 'react';

function App() {

  const { v4: uuidv4 } = require('uuid');

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programação",
      cor: "#d9f7e9",
    },
    {
      id: uuidv4(),
      nome: "Front-End",
      cor: "#82CFFA",
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      cor: "#A6D157",
    },
    {
      id: uuidv4(),
      nome: "Devops",
      cor: "#E06B69",
    },
    {
      id: uuidv4(),
      nome: "Ux e Design",
      cor: "#DB6EBF",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#FFBA05",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#FF8A29",
    }
  ])

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[0].id
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'ALAN SERAFIM',
      cargo: 'Especialista em Engenharia de Software',
      imagem: 'https://github.com/alanserafim.png',
      time: times[0].id
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[0].id
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[0].id
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[1].id
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'ALAN SERAFIM',
      cargo: 'Desenvolvedor de Software SPRING | Angular',
      imagem: 'https://github.com/alanserafim.png',
      time: times[1].id
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[1].id
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[1].id
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[2].id
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'ALAN SERAFIM',
      cargo: 'Desenvolvedor de Software React | NODE.js',
      imagem: 'https://github.com/alanserafim.png',
      time: times[2].id
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[2].id
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[2].id
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[3].id
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'ALAN SERAFIM',
      cargo: 'Desenvolvedor Fullstack',
      imagem: 'https://github.com/alanserafim.png',
      time: times[3].id
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[3].id
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[3].id
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[4].id
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'ALAN SERAFIM',
      cargo: 'Desenvolvedor Frontend',
      imagem: 'https://github.com/alanserafim.png',
      time: times[4].id
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[4].id
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[4].id
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[5].id
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'ALAN SERAFIM',
      cargo: 'DevOps',
      imagem: 'https://github.com/alanserafim.png',
      time: times[5].id
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[5].id
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[5].id
    },
  ]

  const [colaboradores, setColaboradores] = useState<IColaborador[]>(inicial)
  const [visibilidadeForm, setVisibilidadeForm] = useState(true)

  const aoNovoColaboradorAdicionado = (colaborador: IColaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  const deletaColaborador = (id: any): void => {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  const mudarCorTime = (cor: any, id: any): void => {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor;
      }
      return time
    }));
  }

  const cadastrarTime = (novoTime: ITime) => {
    setTimes([...times, { ...novoTime, id: uuidv4() }])
  }

  function resolverFavorito(id: any): any {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) {
        colaborador.favorito = !colaborador.favorito
      }
      return colaborador
    }))
  }

  return (
    <div className='app'>
      <Banner src="/img/banner.png" />

      {visibilidadeForm ? <Formulario
        cadastrarTime={cadastrarTime}
        times={times}
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      /> : <></>}
      <div className='organizacao'>
        <div className='titulo__container'>
          <h2 className='titulo'>Minha Organização</h2>
        </div>
        <div className='botao__container'>
          <button
            className="botaoEsconder"
            onClick={() => setVisibilidadeForm(!visibilidadeForm)}
          >
            <img
              src={botaoEsconder}
              alt='Botao esconder formulário'
            />
          </button>
        </div>
      </div>

      {
        times.map((time, indice) => {
          return (
            <Time
              mudarCor={mudarCorTime}
              key={indice}
              time={time}
              colaboradores={colaboradores.filter(colaborador => colaborador.time === time.id)}
              aoDeletar={deletaColaborador}
              aoFavoritar={resolverFavorito}
            />
          )
        })
      }
      <Rodape />
    </div>
  );
}

export default App;
