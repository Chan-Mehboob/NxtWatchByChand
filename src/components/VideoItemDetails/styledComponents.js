import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  font-family: 'Roboto';
  background-color: ${props => props.bgColor};
`
export const VideoSection = styled.div`
  display: flex;
  flex-direction: column;

  width: 80vw;
  padding: 20px;
  background-color: ${props => props.bgColor};
`

export const Title = styled.p`
  color: ${props => props.color};
  padding-top: 10px;
  font-size: 20px;
`

export const Name = styled.p`
  color: ${props => props.color};
  font-size: 14px;
`
export const Hr = styled.hr`
  background-color: #94a3b8;
  width: 100%;
  height: 2px;
`

export const LikeButton = styled.button`
  color: ${props => props.color};
  cursor: pointer;
  background-color: transparent;
  width: 100px;
  border-width: 0px;
  font-size: 14px;
  display: flex;
  align-items: center;
  color: ${props => props.changedColor};
`
export const Para = styled.p`
  color: ${props => props.color};
  font-size: 14px;
  color: ${props => props.changedColor};
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
export const Image = styled.img`
  width: 300px;
  height: 300px;
`
