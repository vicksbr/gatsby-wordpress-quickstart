export const appInitialState = {
  language: 'pt_BR'
};

export const siteReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SITE_LANGUAGE':
      return { ...state, language: action.payload, };
    case 'CLEAR_SITE_STATE':
      return appInitialState;
    default:
      return state;
  }
}

export default siteReducer