import styled from "styled-components";
import iconeFavoritoAtivo from "/icones/favorito-ativo.png"
import iconeFavoritoInativo from "/icones/favorito.png"
import iconeExpandir from "/icones/expandir.png"
import { IFoto } from "../../../common/jsonInterface";
import BotaoIcone from "../../BotaoIcone"

const FigureEstilizado = styled.figure<StyledProps>`
    width: ${props => props.$expandida ? '90%' : '460px'};
    transition: width 0.5s ease-in-out;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0px 0px;
    }
    figcaption{
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            color: #FFFFFF;
            font-family: GandhiSansBold;
            font-size: 20px;
            line-height: 24px;
        }
        h4 {
            color: #ffffff;
            font-size: 16px;
            line-height: 19.2px;
            flex-grow: 1;
        }
        h3,
        h4 {
            margin: 0;
        }
        footer{
            display: flex;
        }
    }
`

interface StyledProps {
    $expandida: boolean
}

interface Props {
    foto: IFoto,
    aoZoomSelecionado: (foto: IFoto) => void,
    aoAlternarFavorito: (foto: IFoto) => void,
    expandida?: boolean
}

const Imagem = ({ foto, aoZoomSelecionado, aoAlternarFavorito, expandida = false }: Props) => {

    const iconeFavorito = foto.favorita ? iconeFavoritoAtivo : iconeFavoritoInativo

    return (
        <FigureEstilizado $expandida={expandida}>
            <img src={foto.path} alt={foto.fonte} />
            <figcaption>
                <h3>{foto.titulo}</h3>
                <footer>
                    <h4>{foto.fonte}</h4>
                    <BotaoIcone onClick={() => aoAlternarFavorito(foto)}>
                        <img src={iconeFavorito} alt="Icone favoritar" />
                    </BotaoIcone>
                    {!expandida &&
                        <BotaoIcone aria-hidden={expandida} onClick={() => aoZoomSelecionado(foto)}>
                            <img src={iconeExpandir} alt="Icone expandir"/>
                        </BotaoIcone>
                    }

                </footer>
            </figcaption>
        </FigureEstilizado>
    )
}

export default Imagem;