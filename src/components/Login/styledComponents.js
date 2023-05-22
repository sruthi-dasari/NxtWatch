import styled from 'styled-components'

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '')};
`
export const LoginFormOuterContainer = styled.div`
  border-radius: 10px;
  box-shadow: ${props =>
    props.isDarkTheme ? '' : '5px 5px 10px 10px #f1f1f1'};
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '')};
`

export const NxtWatchLogo = styled.img`
  height: 38px;
  width: 170px;
  margin-top: 30px;
  margin-bottom: 30px;
`
export const LoginFormInnerContainer = styled.div`
  width: 380px;
`
export const TextInputContainer = styled.div`
  margin-bottom: 20px;
`
export const Label = styled.div`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#64748b')};
  font-family: 'Roboto';
  font-weight: 500;
`

export const InputBox = styled.div`
  border: 1px solid #64748b;
  height: 50px;
  width: 100%;
  margin-top: 10px;
  padding: 10px;
`
export const TextInput = styled.input`
  border: none;
  outline: none;
  height: 100%;
  width: 100%;
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#64748b')};
  background: transparent;
`

export const CheckBoxInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`

export const CheckboxInput = styled.input`
  height: 20px;
  width: 20px;
  margin-right: 10px;
`
export const CheckboxLabel = styled.div`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 400;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#64748b')};
`

export const LoginButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 500;
  border-radius: 10px;
  border: none;
`
export const InvalidMessage = styled.p`
  color: #ff0000;
  font-size: 16px;
  font-family: 'Roboto';
`
