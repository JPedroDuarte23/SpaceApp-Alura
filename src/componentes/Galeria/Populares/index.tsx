import styled from "styled-components"
import popularesFotos from "./fotos-populares.json"
import Titulo from "../../Titulo"

const ColunaFotos = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`
const Imagem = styled.img`
    width: 212px;
    height: 158px;
    border-radius: 20px;
`

const Botao = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin: 16px 0px;
`

const Populares = () => {
    return (
        <section>
            <ColunaFotos>
                <Titulo $alinhamento='center'>Populares</Titulo>
                {popularesFotos.map(foto => <Imagem src={foto.path} alt={foto.alt} key={foto.id} />)}
            </ColunaFotos>
            <Botao>Ver mais</Botao>
        </section>
    )
}

export default Populares