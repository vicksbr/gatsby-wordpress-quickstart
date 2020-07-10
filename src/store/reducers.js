import { handleLogin, logout } from '../services/auth'
import { navigate } from 'gatsby'

export const appInitialState = {
  language: 'pt_BR',
  user: {}
};


export const siteReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SITE_LANGUAGE':
      return { ...state, language: action.payload, };

    case 'SET_USER_AUTH':
      const { username, password, homePath } = action.payload
      const login_user = handleLogin({ username: username, password: password })
      navigate(homePath)
      return { ...state, user: login_user };

    case 'SET_USER_LOGOUT':
      logout(() => navigate(action.payload))
      return { ...state, user: {} };

    case 'GET_CURRENT_LANGUAGE':
      return state.language

    case 'GET_CURRENT_USER':
      return state.user

    case 'CLEAR_SITE_STATE':
      return appInitialState;

    default:
      return state;
  }
}

export default siteReducer

