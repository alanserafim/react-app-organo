import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario';


function App() {


  const [colaboradores, setColaboladores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboladores([...colaboradores, colaborador])
    console.log(colaboradores);
  }

  return (
    <div>
       <Banner/>  
      <Formulario aoColaboradorCadastrado={ colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
    </div>
  );
}

export default App;
