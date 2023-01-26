import styled from 'styled-components'

export const SideBarLinks = styled.div`
  width: 15vw;
  display: flex;
  flex-direction: column;
`

export const Sidebar = styled.div`
  width: 15vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 85vh;
`

export const SideHeadingSection = styled.div`
  display: flex;
  align-items: center;
  padding-left: 26px;
  padding-top: 10px;
`

export const SideHeading = styled.h1`
  padding-left: 16px;
  font-size: 15px;
  font-weight: 600;
  color: ${props => props.color};
`
export const ContactSection = styled.div`
  display: flex;

  padding-left: 25px;
  flex-direction: column;
`
export const ContactHeading = styled.p`
  font-size: 18px;
  padding-bottom: 10px;
  color: ${props => props.color};
`
export const ContactIcons = styled.div`
  display: flex;
  width: 9vw;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
`
export const Facebook = styled.img`
  width: 35px;
  height: 35px;
`
