import styled from 'styled-components'
import {GiHamburgerMenu} from 'react-icons/gi'
// import {MdLogout} from 'react-icons/md'
import {FiLogOut} from 'react-icons/fi'

export const HeaderContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff ')};
`

export const SmHamburgBtn = styled(GiHamburgerMenu)`
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
`

export const SmLogoutBtn = styled(FiLogOut)`
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
`
