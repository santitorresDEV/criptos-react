import styled from "@emotion/styled"
import { useState } from "react"

const Label = styled.label`
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    display: block;
    font-family: 'Lato', sans-serif;
    margin: 15px 0;
    margin-top: 30px;
`

const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
    margin-bottom: 20px;
`

function useSelectMonedas(label, opciones) {

    const [state, setState] = useState(''); // State del custom hook


    const SelectMonedas = () => (
        <>
            <Label>{label}</Label>
            <Select
                onChange={e => setState(e.target.value)}
                value={state}
            >
                <option value="">- Seleccione -</option>
                {opciones.map(opcion => (
                    <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                ))}
            </Select>
        </>
    )
  
    return [SelectMonedas, state]
}

export default useSelectMonedas
