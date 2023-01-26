import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: 'Roboto';
  background-color: ${props => props.bgColor};
  height: 100%;
`

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  font-family: 'Roboto';
  background-color: ${props => props.bgColor};
`

export const HomeVideosSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f8fafc;
  width: 85vw;
  padding: 20px;
  background-color: ${props => props.bgColor};
`

export const SearchSection = styled.div`
  display: flex;
  width: 25vw;
  height: 28px;
`
export const InputSearch = styled.input`
  width: 22vw;
  height: 28px;
  padding: 10px;
`

export const SearchButton = styled.button`
  width: 3vw;
  height: 28px;
  cursor: pointer;
`
export const HomeVideosList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  list-style-type: none;
  width: 85vw;
`
export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 80vw;
  height: 35vh;
  display: flex;
  flex-direction: column;
  background-size: cover;
  padding-left: 40px;
  justify-content: center;
  margin-bottom: 17px;
`

export const BannerHeading = styled.p`
  font-size: 20px;
  width: 390px;
  padding-left: 15px;
`
export const Image = styled.img`
  width: 180px;
  height: 40px;
  margin: 10px;
`
export const GetItNowButton = styled.button`
  width: 130px;
  height: 35px;
  background-color: transparent;

  cursor: pointer;
  font-weight: 600;
  margin-left: 15px;
`
export const CloseButton = styled.button`
  background-color: transparent;

  cursor: pointer;
  font-weight: 600;
  align-self: flex-end;
  border-width: 0px;
  margin-right: 20px;
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
