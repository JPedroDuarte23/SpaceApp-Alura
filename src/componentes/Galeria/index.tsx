import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";
import styled from "styled-components";
import Imagem from "./Imagem";
import { IFoto } from "../../common/jsonInterface";

const GaleriaContainer = styled.div`
    display: flex;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`

const SecaoFotos = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;
`

interface Props {
    fotos: IFoto[];
    aoFotoSelecionada: (foto: IFoto) => void;
    aoAlternarFavorito: (foto: IFoto) => void;
    tag: number,
    setTag: (tag: number) => void;
}

const Galeria = ({ fotos, aoFotoSelecionada, aoAlternarFavorito, tag, setTag }: Props) => {
    return(
        <>
            <Tags tag={tag} setTag={setTag}/>
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>   
                    <SecaoFotos>
                        {fotos.map((foto: IFoto) => 
                            <Imagem  
                                foto={foto}
                                key={foto.id}
                                aoZoomSelecionado={aoFotoSelecionada}
                                aoAlternarFavorito={aoAlternarFavorito}/>)}
                    </SecaoFotos>
                </SecaoFluida>
                <Populares>

                </Populares>
            </GaleriaContainer>
        </>
    )
}

export default Galeria;