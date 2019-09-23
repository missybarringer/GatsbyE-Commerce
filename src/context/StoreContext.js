import React, { createContext, useState } from 'react'

const StoreContext = createContext({
    isCartOpen: false,
    cart: [],
    addProductToCart: () => {}
})

const StoreProvider = ({children}) => {
    return(
        <StoreContext.Provider>
            {children}
        </StoreContext.Provider>
    )
}
