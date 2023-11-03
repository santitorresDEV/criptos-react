import styled from '@emotion/styled'


const Texto = styled.div`
    background-color: #b7322c;
    padding: 1rem;
    color: #fff;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-family: 'Lato', sans-serif;
    border-radius: 10px;
    margin-top: 2rem;
`


const Error = ({children}) => {
  return (
    <Texto>
        {children}
    </Texto>
  )
}

export default Error

