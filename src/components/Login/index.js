import {Component, Redirect} from 'react'

import Cookies from 'js-cookie'

import {
  LoginContainer,
  LoginFormOuterContainer,
  NxtWatchLogo,
  LoginFormInnerContainer,
  TextInputContainer,
  Label,
  InputBox,
  TextInput,
  CheckBoxInputContainer,
  CheckboxInput,
  CheckboxLabel,
  LoginButton,
  InvalidMessage,
} from './styledComponents'
import ThemeContext from '../context/ThemeContext'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showErrorMsg: false,
    errorMsg: '',
    isChecked: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    // console.log('In onSubmitSuccess()')
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onSubmit = async event => {
    // console.log('In onSubmit()')
    event.preventDefault()
    const url = 'https://apis.ccbp.in/login'

    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    // console.log(data)
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onToggleCheckBox = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  render() {
    // console.log('In Login render()')
    const jwtToken = Cookies.get('jwt_token')
    console.log(jwtToken)
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const {
            username,
            password,
            showErrorMsg,
            errorMsg,
            isChecked,
          } = this.state

          return (
            <LoginContainer isDarkTheme={isDarkTheme}>
              <LoginFormOuterContainer isDarkTheme={isDarkTheme}>
                <NxtWatchLogo
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                  isDarkTheme={isDarkTheme}
                />
                <LoginFormInnerContainer as="form" onSubmit={this.onSubmit}>
                  <TextInputContainer>
                    <Label
                      as="label"
                      htmlFor="username"
                      isDarkTheme={isDarkTheme}
                    >
                      USERNAME
                    </Label>
                    <InputBox>
                      <TextInput
                        type="text"
                        id="username"
                        placeholder="Username"
                        value={username}
                        onChange={this.onChangeUsername}
                        isDarkTheme={isDarkTheme}
                      />
                    </InputBox>
                  </TextInputContainer>
                  <TextInputContainer>
                    <Label
                      as="label"
                      htmlFor="password"
                      isDarkTheme={isDarkTheme}
                    >
                      PASSWORD
                    </Label>
                    <InputBox>
                      <TextInput
                        type={isChecked ? 'text' : 'password'}
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={this.onChangePassword}
                        isDarkTheme={isDarkTheme}
                      />
                    </InputBox>
                  </TextInputContainer>
                  <CheckBoxInputContainer>
                    <CheckboxInput
                      type="checkbox"
                      id="showPassword"
                      onClick={this.onToggleCheckBox}
                    />
                    <CheckboxLabel
                      as="label"
                      htmlFor="showPassword"
                      isDarkTheme={isDarkTheme}
                    >
                      Show Password
                    </CheckboxLabel>
                  </CheckBoxInputContainer>
                  <LoginButton type="submit">Login</LoginButton>
                  {showErrorMsg && <InvalidMessage>*{errorMsg}</InvalidMessage>}
                </LoginFormInnerContainer>
              </LoginFormOuterContainer>
            </LoginContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
