import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  Container,
  Card,
  Image,
  ContainerInput,
  Label,
  Input,
  CheckBoxContainer,
  LoginButton,
  InputCheck,
  Error,
} from './styledComponents'

class Login extends Component {
  state = {username: '', password: '', showPassword: false, errorMsg: ''}

  onSubmitLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMsg})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeCheck = event => {
    this.setState({showPassword: event.target.checked})
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      console.log(jwtToken)
      return <Redirect to="/" />
    }

    const {errorMsg, showPassword, username, password} = this.state

    let value = 'password'
    if (showPassword) {
      value = 'text'
    }

    return (
      <Container>
        <Card onSubmit={this.onSubmitLogin}>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <ContainerInput>
            <Label htmlFor="username">USERNAME</Label>
            <Input
              onChange={this.onChangeUsername}
              type="text"
              id="username"
              placeholder="Username"
              value={username}
            />
          </ContainerInput>
          <ContainerInput>
            <Label htmlFor="password">PASSWORD</Label>
            <Input
              onChange={this.onChangePassword}
              type={value}
              id="password"
              placeholder="Password"
              value={password}
            />
          </ContainerInput>
          <CheckBoxContainer>
            <InputCheck
              onChange={this.onChangeCheck}
              type="checkbox"
              id="checkbox"
            />
            <Label htmlFor="checkbox">Show Password</Label>
          </CheckBoxContainer>
          <LoginButton type="submit">Login</LoginButton>
          <Error>{errorMsg}</Error>
        </Card>
      </Container>
    )
  }
}
export default Login
