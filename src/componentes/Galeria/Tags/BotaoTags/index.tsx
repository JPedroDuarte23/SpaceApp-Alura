import styled from "styled-components"
import { useEffect, useState } from "react"

const BotaoEstilizado = styled.button<StyledProps>`
    height: 50px;
    color: #d9d9d9;
    font-size: 24px;
    line-height: 28.8px;
    font-weight: 400;
    text-align: center;
    border-radius: 10px;
    padding: 10px 8px;
    border: ${props => props.$selecionado ? '2px solid #C98CF1' : '2px solid transparent'};
    background-color: rgba(217, 217, 217, 0.3);
    box-sizing: border-box;
    cursor: pointer;
    transition: background-color 0.3s;
`

interface StyledProps {
    $selecionado?: boolean
}

interface Props {
    tag: number;
    tagId: number;
    titulo: string;
    onClick: () => void;
}

const BotaoTags = ({ tag, tagId, titulo, onClick }: Props) => {

    const [selecionado, setSelecionado] = useState<boolean>(false);

    useEffect(() => {
        setSelecionado(tag === tagId);
    }, [tag, tagId]);

    return (
        <BotaoEstilizado $selecionado={selecionado} onClick={onClick}>
            {titulo}
        </BotaoEstilizado>
    )
}

export default BotaoTags;