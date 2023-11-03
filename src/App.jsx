import styled from '@emotion/styled'
import { useState,useEffect } from 'react'
import ImagenCrypto from './img/imagen-criptos.png'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'



const Heading = styled.h1`color: red;
  font-family: 'Lato', sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
  `
const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
  `

const Imagen = styled.img`
  max-width: 400px;
  width: 800%;
  margin: 100px auto 0 auto;
  display: block;
  `

function App() {

  const [monedas, setMonedas] = useState({});
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    if(Object.keys(monedas).length === 0) return;

    const consultarAPI = async () => {
      setCargando(true);
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${monedas.cripto}&tsyms=${monedas.moneda}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setResultado(resultado.DISPLAY[monedas.cripto][monedas.moneda]);
      setCargando(false);
    }
    consultarAPI();
  }, [monedas])


  return (
    <>
      <Contenedor>
        <Imagen src={ImagenCrypto} alt="imagen crypto" />
        <div>
          <Heading>Cotiza Criptomonedas al Instante</Heading>
          <Formulario 
            setMonedas={setMonedas}
          />


          {/* {cargando && <Spinner /> } */}
          {resultado.PRICE ? <Resultado resultado={resultado} />: null}

        </div>
      </Contenedor>
    </>
  )
}

export default App
