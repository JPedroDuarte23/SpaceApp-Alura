import styled from "styled-components";


const ItemEstilizado = styled.li<StyledProps>`
    display: flex;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${ props => props.$ativo ? '#7B78E5' : '#D9D9D9' };
    font-family: ${ props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular' };
    align-items: center;
    gap: 22px;
`

interface StyledProps {
    $ativo: boolean
}

interface Props {
    children: React.ReactNode,
    iconeAtivo?: string,
    iconeInativo?: string,
    ativo?: boolean
}

const ItemNavegacao = ({ children, iconeAtivo, iconeInativo, ativo = false }: Props ) => {


    return(
        <ItemEstilizado $ativo={ativo}>
            <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
            {children}
        </ItemEstilizado>

    )
}

export default ItemNavegacao;