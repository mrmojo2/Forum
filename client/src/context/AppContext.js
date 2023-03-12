import React, { useContext, useState } from 'react'

const AppContext = React.createContext()

const useMyContext = () => {
    return useContext(AppContext)
}

const AppProvider = ({ children }) => {
    const [toggle, setToggle] = useState(false)
    return <AppContext.Provider value={{ toggle, setToggle }}>{children}</AppContext.Provider>
}

export { AppProvider, useMyContext }