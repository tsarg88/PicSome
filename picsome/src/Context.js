import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [photos, setPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPhotos(data))
    }, [])

    function toggleFavorite(id) {
        const isFavorite = photos.map(img => {
            if(img.id === id){
                // console.log(!img.isFavorite)
                return {...img, isFavorite: !img.isFavorite}
            }
            return img
        })
        setPhotos(isFavorite)
    }

    function addToCart(photos) {
        setCartItems(prevItems => [...prevItems, photos])
        // console.log(cartItems)
    }

    function removeFromCart(obj) {
        const removeItem = cartItems.filter(item => item !== obj)
        setCartItems(removeItem)
    }

    function emptyCart() {
        setCartItems([])
    }
 
    return(
        <Context.Provider value={{photos, toggleFavorite, addToCart, cartItems, removeFromCart, emptyCart}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
