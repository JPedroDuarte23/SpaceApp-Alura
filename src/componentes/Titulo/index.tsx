import styled from "styled-components";

interface StyledProps {
    $alinhamento?: string
}

const Titulo = styled.h2<StyledProps>`
    color: #7B78E6;
    font-size: 32px;
    text-align: ${ props => props.$alinhamento ? props.$alinhamento : 'left' };
`

export default Titulo