import styled from 'styled-components';
import tags from './tags.json'
import BotaoTags from './BotaoTags'

const ContainerTags = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    margin: 24px 0px 0px 0px;
`

const ParagrafoEstilizado = styled.p`
    width: 220px;
    color: #d9d9d9;
    font-size: 24px;
    line-height: 28.8px;
    font-weight: 400;
`

interface Props{
    tag: number;
    setTag: (tag:number) => void;
}

const Tags = ({ tag, setTag }: Props) => {

    return(
        <ContainerTags>
            <ParagrafoEstilizado>Busque por tags:</ParagrafoEstilizado>
            {tags.map(item => <BotaoTags onClick={() => setTag(item.tag)} tag={tag} key={item.id} titulo={item.titulo} tagId={item.tag}/>)}
        </ContainerTags>
    )
}

export default Tags;