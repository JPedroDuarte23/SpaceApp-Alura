    import styled from 'styled-components';

    const BannerEstilizado = styled.div<StyledProps>`
        background-image: url(${props => props.$backgroundImage});
        width: 1156px;
        height: 328px;
        border-radius: 20px;
        display: flex;
        align-items: center;
        padding: 60px;
        box-sizing: border-box;
    `

    const TituloEstilizado = styled.h3`
        width: 300px;
        height: 144px;
        color: #FFFFFF;
        font-weight: 400;
        font-size: 40px;
        line-height: 48px;
    `
    interface StyledProps {
        $backgroundImage: string
    }

    interface Props{
        backgroundImage: string,
        texto: string
    }

    const Banner = ({ backgroundImage, texto }: Props) => {
        return(
            <BannerEstilizado $backgroundImage={backgroundImage}>
                <TituloEstilizado>{texto}</TituloEstilizado>
            </BannerEstilizado>
        )
    }

    export default Banner;