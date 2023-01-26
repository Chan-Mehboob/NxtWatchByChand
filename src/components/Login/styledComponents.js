import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Card = styled.form`
  box-shadow: 1px 2px 9px #f4aab9;
  width: 25vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`

export const Image = styled.img`
  width: 180px;
  height: 40px;
  margin: 10px;
`

export const ContainerInput = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 10px;
`

export const Label = styled.label`
  color: #475569;
  font-size: 13px;

  font-weight: 600;
`

export const Input = styled.input`
  border: 1px solid #475569;
  width: 20vw;
  height: 35px;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  margin-left: 0px;
`

export const CheckBoxContainer = styled.div`
  margin-bottom: 20px;
  align-self: flex-start;
  padding-left: 34px;
`

export const LoginButton = styled.button`
  width: 20vw;
  height: 35px;
  background-color: #3b82f6;
  border-radius: 10px;
  border-width: 0px;
  cursor: pointer;
  color: #ffffff;
`
export const InputCheck = styled.input``

export const Error = styled.p`
  color: #ff0000;
`
