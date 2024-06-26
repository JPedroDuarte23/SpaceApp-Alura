import styled from "styled-components"
import EstilosGlobais from './componentes/EstilosGlobais';
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";
import imagemBanner from './assets/banner.png'
import Galeria from "./componentes/Galeria";
import fotos from "./fotos.json"
import { useEffect, useState } from "react";
import ModalZoom from "./componentes/ModalZoom";
import { IFoto } from "./common/jsonInterface";


const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 97.76%);
  background-size: cover;
  width: 100%;
  min-height: 100vh;
`

const AppContainerEstilizado = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App: React.FC = () => {

  const [fotosDaGaleria, setFotosDaGaleria] = useState<IFoto[]>(fotos)
  const [fotoSelecionada, setFotoSelecionada] = useState<IFoto | null>(null);
  const [filtro, setFiltro] = useState<string>('');
  const [tag, setTag] = useState<number >(0);

  useEffect(() => {
    const fotosFiltradas = fotos.filter(foto => {
        const filtroPorTag = !tag || foto.tagId === tag
        const filtroPorTitulo = !filtro || foto.titulo.toLocaleLowerCase().includes(filtro.toLocaleLowerCase())
        return filtroPorTag && filtroPorTitulo
    })

    setFotosDaGaleria(fotosFiltradas);
  }, [filtro, tag])


  const aoAlternarFavorito = (foto: IFoto) => {
    
    const atualizaFoto = {
      ...foto,
      favorita: !foto.favorita,
    };

    if (fotoSelecionada?.id === foto.id) {
      setFotoSelecionada(atualizaFoto);
    }

    setFotosDaGaleria(fotosDaGaleria.map(fotoDaGaleria => {
      return {
        ...fotoDaGaleria,
        favorita: fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita
      }
    }))
  }

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainerEstilizado>
        <Cabecalho filtro={filtro} setFiltro={setFiltro}/>
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner backgroundImage={imagemBanner} texto="A galeria mais completa de fotos do espaço!" />
            <Galeria
              fotos={fotosDaGaleria}
              aoFotoSelecionada={foto => setFotoSelecionada(foto)}
              aoAlternarFavorito={aoAlternarFavorito}
              tag={tag}
              setTag={setTag} 
              />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainerEstilizado>
      <ModalZoom foto={fotoSelecionada} aoFechar={() => setFotoSelecionada(null)} aoAlternarFavorito={aoAlternarFavorito} />
    </FundoGradiente>
  )
}

export default App
