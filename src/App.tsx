import styled from "styled-components"
import EstilosGlobais from './componentes/EstilosGlobais';
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";
import imagemBanner from './assets/banner.png'


const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 97.76%);
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`

const ContainerEstilizado = styled.div`
  display: flex;
  justify-content: space-between;

`

function App() {

  return (
    <FundoGradiente>
      <EstilosGlobais/>
      <Cabecalho/>
      <ContainerEstilizado>
        <BarraLateral/>
        <Banner backgroundImage={imagemBanner} texto="A galeria mais completa de fotos do espaço!"/>
      </ContainerEstilizado>
      
    </FundoGradiente>
  )
}

export default App
