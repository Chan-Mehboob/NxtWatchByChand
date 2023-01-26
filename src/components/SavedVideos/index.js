import {HiFire} from 'react-icons/hi'
import ThemeContext from '../../Context/ThemeContext'
import TrendingCard from '../TrendingCard'

import {
  HomeContainer,
  TrendingVideosSection,
  TrendingVideosList,
  TrendingHeading,
  Body,
} from '../Trending/styledComponents'

import {Heading, Desc} from './styledComponents'

import SideBar from '../SideBar'

import Header from '../Header'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {lightTheme, savedVideosList, changeTheme} = value
      console.log(savedVideosList)
      const color = lightTheme ? '#000' : '#fff'
      const homeBg = lightTheme ? '#f9f9f9' : '#181818'
      const videosBg = lightTheme ? '#f9f9f9' : '#0f0f0f'

      const emptyView = () => (
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
            className="failure-img"
          />
          <Heading color={color}>No saved videos found</Heading>
          <Desc color={color}>
            You can save your videos while watching them
          </Desc>
        </div>
      )

      const renderVideosList = () => {
        if (savedVideosList.length === 0) {
          return emptyView()
        }

        return (
          <>
            <Heading color={color}>
              <HiFire size="35" color="red" />
              Saved Videos
            </Heading>

            <TrendingVideosList>
              {savedVideosList.map(each => (
                <TrendingCard
                  trendDetails={each}
                  key={each.id}
                  lightTheme={lightTheme}
                />
              ))}
            </TrendingVideosList>
          </>
        )
      }

      return (
        <>
          <HomeContainer data-testid="savedVideos" bgColor={videosBg}>
            <Header lightTheme={lightTheme} changeTheme={changeTheme} />
            <Body>
              <SideBar color={color} />
              <TrendingVideosSection>
                {renderVideosList()}
              </TrendingVideosSection>
            </Body>
          </HomeContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideos
