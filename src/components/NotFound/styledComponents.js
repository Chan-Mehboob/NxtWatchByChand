import styled from 'styled-components'

export const Heading = styled.h1`
  font-size: 20px;
  color: ${props => props.color};
`
export const Para = styled.p`
  font-size: 13px;

  color: ${props => props.color};
`
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  font-family: 'Roboto';
  background-color: ${props => props.bgColor};
`

export const NotFoundSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f8fafc;
  width: 85vw;
  padding: 20px;
  background-color: ${props => props.bgColor};
  justify-content: center;
  align-items: center;
`
