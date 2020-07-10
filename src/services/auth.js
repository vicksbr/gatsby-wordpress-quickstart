const isBrowser = typeof window !== `undefined`

const getUser = () =>
    window.localStorage.racconSite
        ? JSON.parse(window.localStorage.racconSite)
        : {}

const setUser = user => {
    window.localStorage.racconSite = JSON.stringify({ user: user })
    return user
}

export const handleLogin = ({ username, password }) => {
    if (!isBrowser) return false

    if (username === `raccoon` && password === `raccoon`) {
        return setUser({
            name: `Raccoon User`,
            legalName: `Raccoon User Legit`,
            email: `user@raccoon.ag`,
        })
    }
    return false
}

export const isLoggedIn = () => {
    if (!isBrowser) return false
    const user = getUser()
    return !!user.email
}

export const getCurrentUser = () => isBrowser && getUser()

export const logout = callback => {
    if (!isBrowser) return
    setUser({})
    callback()
}