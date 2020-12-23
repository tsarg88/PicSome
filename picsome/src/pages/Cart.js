import React, {useState, useContext} from "react"
import {Context} from "../Context"
import CartItem from "../Components/CartItem"

function Cart() {
    const [isPlaced, setIsPlaced] = useState("Place Order")

    const {cartItems, emptyCart} = useContext(Context)
    const cartItemElements = cartItems.map(item => {
        return <CartItem key={item.id} item={item} />
    })

    const totalCost = cartItems.length * 5.99
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})


    function placeOrder() {
      setIsPlaced("Ordering...")
      setTimeout(() => {
        console.log("Order placed!")
        setIsPlaced("Place Order")
        emptyCart()      
      }, 3000)
    }
    
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            {cartItems.length > 0 ?
            <div className="order-button">
              <button onClick={placeOrder}>{isPlaced}</button>
            </div> :
            <p>You have no items in your cart.</p>
            }
        </main>
    )
}

export default Cart