import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: 'Roboto';
  background-color: ${props => props.bgColor};
`

export const TrendingVideosSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 85vw;
  padding: 20px;
  background-color: ${props => props.bgColor};
`

export const TrendingVideosList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  width: 85vw;
`

export const TrendingHeadSection = styled.div`
  display: flex;
  background-color: ${props => props.bgColor};
  align-items: center;
`

export const TrendingHeading = styled.h1`
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
export const Body = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  font-family: 'Roboto';
  background-color: ${props => props.bgColor};
`
