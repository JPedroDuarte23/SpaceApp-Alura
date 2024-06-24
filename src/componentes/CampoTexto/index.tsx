import styled from "styled-components"
import lupa from "./search.png"

const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;
`

const InputEstilizado = styled.input`
    height: 56px;
    width: 566px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid #C98CF1;
    background: transparent;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    color: #d9d9d9;
    box-sizing: border-box;
`
const IconeLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
`

const CampoTexto = () => {
    return (
        <ContainerEstilizado>
            <InputEstilizado placeholder="O que você procura?"/>
            <IconeLupa src={lupa}/>
        </ContainerEstilizado>

    )
}

export default CampoTexto;