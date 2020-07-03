// parser stuff

export const parseUrl = (url) => url.replace(/^.*\/\/[^/]+\//, '/')

export const groupBy = (array, key) => {
    return array.reduce((result, currentValue) => {
        (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue)
        return result;
    }, {});
};

export const getHomeURL = (languageCode) => {
    const codeMapToPath = {
        'pt_BR': '/',
        'en_US': '/en',
    }
    return codeMapToPath[languageCode]
}




