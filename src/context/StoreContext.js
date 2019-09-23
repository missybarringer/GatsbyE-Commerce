import React, { createContext, useState } from 'react'

export const StoreContext = createContext({
    isCartOpen: false,
    cart: [],
    addProductToCart: () => { console.log('added') },
})

export const StoreProvider = ({children}) => {
    return(
        <StoreContext.Provider>
            {children}
        </StoreContext.Provider>
    )
}
