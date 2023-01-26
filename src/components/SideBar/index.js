import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {GiTechnoHeart} from 'react-icons/gi'
import {BiListPlus} from 'react-icons/bi'
import {Link} from 'react-router-dom'

import {
  SideBarLinks,
  SideHeadingSection,
  SideHeading,
  ContactSection,
  ContactHeading,
  ContactIcons,
  Facebook,
  Sidebar,
} from './styledComponents'

const SideBar = props => {
  const {color} = props

  return (
    <Sidebar>
      <SideBarLinks>
        <SideHeadingSection>
          <AiFillHome color={color} />
          <Link to="/">
            <SideHeading color={color}>Home</SideHeading>
          </Link>
        </SideHeadingSection>

        <SideHeadingSection>
          <HiFire color={color} />
          <Link to="/trending">
            <SideHeading color={color}>Trending</SideHeading>
          </Link>
        </SideHeadingSection>

        <SideHeadingSection>
          <GiTechnoHeart color={color} />
          <Link to="/gaming">
            <SideHeading color={color}>Gaming</SideHeading>
          </Link>
        </SideHeadingSection>

        <SideHeadingSection>
          <BiListPlus color={color} />
          <Link to="/saved-videos">
            <SideHeading color={color}>Saved videos</SideHeading>
          </Link>
        </SideHeadingSection>
      </SideBarLinks>
      <ContactSection>
        <ContactHeading color={color}>CONTACT US</ContactHeading>
        <ContactIcons>
          <Facebook
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
          />
          <Facebook
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            alt="twitter logo"
          />
          <Facebook
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt="linked in logo"
          />
        </ContactIcons>
        <ContactHeading color={color}>
          Enjoy! Now to see your channels and recommendations!
        </ContactHeading>
      </ContactSection>
    </Sidebar>
  )
}
export default SideBar
