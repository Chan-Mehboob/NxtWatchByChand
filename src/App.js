import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import ThemeContext from './Context/ThemeContext'
import NotFound from './components/NotFound'
import './App.css'

class App extends Component {
  state = {
    lightTheme: true,
    savedVideosList: [],
  }

  addSavedVideos = newData => {
    const {savedVideosList} = this.state
    let check
    if (savedVideosList.length !== 0) {
      check = savedVideosList.find(each => each.id === newData.id)
      console.log(check)
    }
    if (check) {
      this.setState(prevState => ({
        savedVideosList: prevState.savedVideosList.filter(
          each => each.id !== newData.id,
        ),
      }))
    } else {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, newData],
      }))
    }
  }

  changeTheme = () => {
    this.setState(prevState => ({lightTheme: !prevState.lightTheme}))
  }

  render() {
    const {lightTheme, savedVideosList} = this.state
    return (
      <ThemeContext.Provider
        value={{
          lightTheme,
          changeTheme: this.changeTheme,
          addSavedVideos: this.addSavedVideos,
          savedVideosList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
