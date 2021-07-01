import { Navbar } from '../components/Navbar/index.js'
import { Footer } from '../components/Footer/index.js'
import { Routes } from '../Router.js'
import ChatBox from './ChatBox/index.js'
import Pager from '../context/PagerContext'
import {UserContextProvider} from '../context/UserContext'

// import UserContext from '../context/UserContext'

import React, { useState} from 'react'

export const App = () => {
    const [context, setContext] = useState({currentPage: 'Login', params: {id: null}})
    console.log(context)
    return (
        <>
            <UserContextProvider>
                <Pager.Provider value={[context, setContext]}>        
                    <Navbar />
                    <ChatBox /> 
                    <Routes />
                </Pager.Provider>
            </UserContextProvider>
          <Footer />
        </>
    )
}
