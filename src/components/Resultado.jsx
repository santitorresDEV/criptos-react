import styled from '@emotion/styled'

const Texto = styled.p`
     font-size: 18px;
    span {
        font-weight: bold;
    }

`
const ResultadoStyle = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;
`

const Precio = styled.p`
    color: #fff;
    font-family: 'Lato', sans-serif;
    font-size: 30px;
    span {
        font-weight: bold;
    }
`
const Imagen = styled.img`
    display: block;
    max-width: 120px;
    margin-top: 5rem;
`

const Resultado = ({resultado}) => {

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE, IMAGEURL} = resultado;

  return (
    <ResultadoStyle>
    <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="" />
      <Precio>El precio es de: <span>{PRICE}</span></Precio>
        <Texto>Precio más alto del día: <span>{HIGHDAY}</span></Texto>
        <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
        <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
    </ResultadoStyle>
  )
}

export default Resultado
