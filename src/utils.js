import { useState } from 'react';

export const getHeaderOptions = (languageCode) => {
    const options = {
        'pt_BR': [
            { value: 'pt_BR', label: 'Português' },
            { value: 'en_US', label: 'Inglês' },

        ],
        'en_US': [
            { value: 'pt_BR', label: 'Portuguese' },
            { value: 'en_US', label: 'English' },

        ],
    }
    return options[languageCode]
}

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


// hooks 

export const useLocalStorage = (key) => {
    const _localStorage = localStorage.getItem(key)
    const cachedData = _localStorage ? JSON.parse(_localStorage) : null;
    const [data, setData] = useState(cachedData);

    return [data, (newData) => {
        localStorage.setItem(key, JSON.stringify(newData))
        setData(newData);
    }]
}


// object assertion

export const isEmptyObj = (objToCheck) => Object.entries(objToCheck).length === 0 ? true : false
