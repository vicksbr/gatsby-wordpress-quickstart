// parser stuff

export const parseUrl = (url) => url.replace(/^.*\/\/[^/]+\//, '/')

export const groupBy = (array, key) => {
    return array.reduce((result, currentValue) => {
        (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue)
        return result;
    }, {});
};

