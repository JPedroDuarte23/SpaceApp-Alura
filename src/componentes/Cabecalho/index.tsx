import styled from "styled-components"
import CampoTexto from "../CampoTexto"


const HeaderEstilizado = styled.header`
    padding: 60px 0px;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;
    }
`

interface Props {
    filtro: string,
    setFiltro: (filtro: string) => void
}

const Cabecalho = ({ filtro, setFiltro }: Props) => {
    return(
        <HeaderEstilizado>
            <img src="imagens/logo.png" alt=""/>
            <CampoTexto filtro={filtro} setFiltro={setFiltro}/>
        </HeaderEstilizado>
    )
}

export default Cabecalho