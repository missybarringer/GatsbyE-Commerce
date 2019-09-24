import React, { createContext, useState } from 'react'
import Client from 'shopify-buy'

const client = Client.buildClient({
    domain: "web-wabi-sabi.myshopify.com",
    storefrontAccessToken: "50c676159b0e37611699ecd324eae2c2"
})

const defaultValues = {
        isCartOpen: false,
        cart: [],
        addProductToCart: () => {},
    client,
}
export const StoreContext = createContext(defaultValues)

export const StoreProvider = ({children}) => {
    const addProductToCart = () => {
        console.log("!");
    }

    return(
        <StoreContext.Provider value={{
            ...defaultValues,
            addProductToCart
            }}>
            {children}
        </StoreContext.Provider>
    )
}
