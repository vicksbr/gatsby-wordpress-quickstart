import { useStore } from './StateProvider';

const useSiteAPI = () => {
    const [state, dispatch] = useStore();

    const siteAPI = {
        setLanguage: language => dispatch({ type: 'SET_SITE_LANGUAGE', payload: language }),
        handleAuth: (payload) => dispatch({ type: 'SET_USER_AUTH', payload: payload }),
        handleLogout: (homePath) => dispatch({ type: 'SET_USER_LOGOUT', payload: homePath }),
        getUser: () => state.user,
        getSiteLanguage: () => state.language
    }

    return { state, ...siteAPI }
}

export default useSiteAPI;