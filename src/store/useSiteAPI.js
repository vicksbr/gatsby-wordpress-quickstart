import { useStore } from './StateProvider';

const useSiteAPI = () => {
    const [state, dispatch] = useStore();
    const siteAPI = { setLanguage: language => dispatch({ type: 'SET_SITE_LANGUAGE', payload: language }) }

    return { state, ...siteAPI }
}

export default useSiteAPI;