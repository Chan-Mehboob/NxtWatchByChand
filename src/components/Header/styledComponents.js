import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  height: 12vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  background-color: ${props => props.bgColor};
  width: 100vw;
`

export const Image = styled.img`
  width: 180px;
  height: 40px;
  margin: 10px;
`
export const UnorderedList = styled.ul`
  list-style-type: none;
  width: 18vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ThemeButton = styled.button`
  border-width: 0px;
  cursor: pointer;
  background-color: transparent;
  width: 50px;
  height: 50px;
`

export const Profile = styled.img`
  width: 40px;
  height: 40px;
  margin: 10px;
`

export const LogoutButton = styled.button`
  width: 90px;
  height: 35px;
  background-color: transparent;
  border-radius: 10px;
  border-width: 0px;
  cursor: pointer;
  color: ${props => props.color};
  font-weight: 600;
  border: 2px solid ${props => props.color};
`
