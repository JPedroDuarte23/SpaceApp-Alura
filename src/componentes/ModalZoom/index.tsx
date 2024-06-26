import styled from "styled-components";
import { IFoto } from "../../common/jsonInterface";
import Imagem from "../Galeria/Imagem";
import BotaoIcone from "../BotaoIcone";
import iconeFechar from "/icones/fechar.png"


const OverlayEstilizado = styled.div`
    background-color: rgba(0,0,0,0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 294px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;

    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`

interface Props {
    foto: IFoto | null,
    aoFechar: () => void,
    aoAlternarFavorito: (foto: IFoto) => void
}

const ModalZoom = ({ foto, aoFechar, aoAlternarFavorito }: Props) => {
    return (
        <>
            {foto &&
                <>
                    <OverlayEstilizado />
                    <DialogEstilizado open={!!foto} onClose={aoFechar}>

                        <Imagem foto={foto} expandida aoZoomSelecionado={() => { }} aoAlternarFavorito={aoAlternarFavorito} />

                        <form method="dialog">
                            <BotaoIcone>
                                <img src={iconeFechar} alt="Icone fechar"/>
                            </BotaoIcone>
                        </form>
                    </DialogEstilizado>
                </>
            }
        </>

    )
}

export default ModalZoom;
