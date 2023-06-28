import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';
import Rodape from './components/Rodape.css';


function App() {

  const [times, setTimes] = useState([
    {
      nome: "Programação",
      cor: "#d9f7e9",
    },
    {
      nome: "Front-End",
      cor: "#82CFFA",
    },
    {
      nome: "Data Science",
      cor: "#A6D157",
    },
    {
      nome: "Devops",
      cor: "#E06B69",
    },
    {
      nome: "Ux e Design",
      cor: "#DB6EBF",
    },
    {
      nome: "Mobile",
      cor: "#FFBA05",
    },
    {
      nome: "Inovação e Gestão",
      cor: "#FF8A29",
    }
  ])

  const inicial = [
    {
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[0].nome
    },
    {
      nome: 'ALAN SERAFIM',
      cargo: 'Agente de Tecnologia no Banco do Brasil',
      imagem: 'https://github.com/alanserafim.png',
      time: times[0].nome
    },
    {
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[0].nome
    },
    {
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[0].nome
    },
    {
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[1].nome
    },
    {
      nome: 'ALAN SERAFIM',
      cargo: 'Agente de Tecnologia no Banco do Brasil',
      imagem: 'https://github.com/alanserafim.png',
      time: times[1].nome
    },
    {
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[1].nome
    },
    {
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[1].nome
    },
    {
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[2].nome
    },
    {
      nome: 'ALAN SERAFIM',
      cargo: 'Agente de Tecnologia no Banco do Brasil',
      imagem: 'https://github.com/alanserafim.png',
      time: times[2].nome
    },
    {
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[2].nome
    },
    {
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[2].nome
    },
    {
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[3].nome
    },
    {
      nome: 'ALAN SERAFIM',
      cargo: 'Agente de Tecnologia no Banco do Brasil',
      imagem: 'https://github.com/alanserafim.png',
      time: times[3].nome
    },
    {
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[3].nome
    },
    {
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[3].nome
    },
    {
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[4].nome
    },
    {
      nome: 'ALAN SERAFIM',
      cargo: 'Agente de Tecnologia no Banco do Brasil',
      imagem: 'https://github.com/alanserafim.png',
      time: times[4].nome
    },
    {
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[4].nome
    },
    {
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[4].nome
    },
    {
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[5].nome
    },
    {
      nome: 'ALAN SERAFIM',
      cargo: 'Agente de Tecnologia no Banco do Brasil',
      imagem: 'https://github.com/alanserafim.png',
      time: times[5].nome
    },
    {
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[5].nome
    },
    {
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[5].nome
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  const deletaColaborador = () =>{
    console.log("deletar chamado");
  }

  const mudarCorTime = (cor, nome) => {
      setTimes(times.map(time => {
        if(time.nome === nome) {
          time.cor = cor;
        }
        return time
      }));
  }

  return (
    <div>
       <Banner/>  
      <Formulario 
        times={times.map( time => time.nome)} 
        aoColaboradorCadastrado={ colaborador => aoNovoColaboradorAdicionado(colaborador)}
        />
      {
        times.map((time)=>{
          return(
            <Time
              mudarCor={mudarCorTime}
              key={time.nome} 
              nome={time.nome} 
              cor={time.cor} 
              colaboradores={colaboradores.filter( colaborador => colaborador.time === time.nome)}
              aoDeletar={deletaColaborador}
              />
          )
        })
      }
      <Rodape/>
    </div>
  );
}

export default App;
