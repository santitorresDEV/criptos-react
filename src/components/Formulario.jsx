import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import useSelectMonedas from '../hooks/useSelectMonedas'
import monedas from '../data/monedas';
import Error from './Error';



const Input = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color : #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 10px;
    transition: background-color .3s ease;

    &:hover {
        background-color: #7a7dfe;
        cursor: pointer;
    }
    `

function Formulario({setMonedas}) {


    const [criptos, setCriptos] = useState([]);
    const [error, setError] = useState(false);
    const [SelectMonedas,moneda] = useSelectMonedas('Elige tu Moneda', monedas);
    const [SelectCripto,cripto] = useSelectMonedas('Elige tu Criptomoneda', criptos);

    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();

            const arrayCriptos = resultado.Data.map(cripto => {
                return {
                    nombre: cripto.CoinInfo.FullName,
                    codigo: cripto.CoinInfo.Name
                }
            })
            setCriptos(arrayCriptos);
        } 
        consultarAPI();
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        if(moneda === '' || cripto === '') {
            setError(true);
            return;
        }
        setError(false);
    
        setMonedas({
            moneda,
            cripto
        })
    }
    


  return (
    <form onSubmit={handleSubmit}>

        {error && <Error>Todos los campos son obligatiorios</Error>}
        <SelectMonedas />
        <SelectCripto />
        <Input type="submit" value="Calcular" />
        
    </form>
  )
}

export default Formulario
