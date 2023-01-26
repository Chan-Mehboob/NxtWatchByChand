import styled from 'styled-components'

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  font-family: 'Roboto';
  background-color: ${props => props.bgColor};
`

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  font-family: 'Roboto';
  background-color: ${props => props.bgColor};
  height: 100%;
`

export const GamingVideosSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: ${props => props.bgColor};
`

export const GamingVideosList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  flex-wrap: wrap;
  width: 80vw;
`

export const GamingHeadSection = styled.div`
  display: flex;
  background-color: ${props => props.bgColor};
  align-items: center;
`

export const GamingHeading = styled.h1`
  font-size: 20px;
  padding-left: 15px;
  color: ${props => props.color};
`
export const Button = styled.button`
  width: 130px;
  height: 35px;

  cursor: pointer;
  font-weight: 600;
`
export const Heading = styled.h1`
  font-size: 20px;
  width: 390px;
  padding-left: 15px;
`
export const Para = styled.p`
  font-size: 20px;
  width: 390px;
  padding-left: 15px;
`
export const Image = styled.img`
  width: 300px;
  height: 300px;
`
