import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, addToCart, removeFromCart, clearCart } = useContext(CartContext);

  // Bill Calculation
  const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const taxPrice = itemsPrice * 0.15; // 15% tax
  const shippingPrice = itemsPrice > 2000 ? 0 : 50; // Free shipping for orders > $2000
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  const placeOrderHandler = () => {
      // Here you would typically send the order to the backend
      alert('Order placed successfully! (Backend order creation not implemented in this step)');
      clearCart(); // Clear cart after placing order
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-stone-gray">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center">Your cart is empty. <Link to="/marketplace" className="text-leaf-green">Go Shopping</Link></div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {cartItems.map(item => (
              <div key={item._id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow mb-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded"/>
                <Link to={`/product/${item._id}`} className="flex-grow mx-4 font-bold">{item.name}</Link>
                <div className="flex items-center">
                    <span className="font-bold">${item.price} x {item.qty}</span>
                </div>
                <button onClick={() => removeFromCart(item)} className="ml-4 text-red-500 font-bold">Remove</button>
              </div>
            ))}
          </div>
          <div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-4">Bill Details</h2>
              <div className="flex justify-between mb-2"><span>Subtotal</span><span>${itemsPrice.toFixed(2)}</span></div>
              <div className="flex justify-between mb-2"><span>Tax (15%)</span><span>${taxPrice.toFixed(2)}</span></div>
              <div className="flex justify-between mb-4"><span>Shipping</span><span>${shippingPrice.toFixed(2)}</span></div>
              <hr />
              <div className="flex justify-between font-bold text-xl my-4"><span>Total</span><span>${totalPrice.toFixed(2)}</span></div>
              <button onClick={placeOrderHandler} disabled={cartItems.length === 0} className="w-full bg-leaf-green text-white font-bold py-3 rounded-lg hover:bg-forest-green">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;