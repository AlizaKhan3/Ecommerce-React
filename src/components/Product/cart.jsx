import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    // Load cart from localStorage
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("user-cart")) || [];
        setCartItems(storedCart);
    }, []);

    const handleRemove = (id) => {
        const updated = cartItems.filter((item) => item.id !== id);
        setCartItems(updated);
        localStorage.setItem("user-cart", JSON.stringify(updated));
    };

    const total = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const handleQuantity = (btntype, id) => {
        console.log(btntype, id);
        const updatedCart = cartItems.map((item) => {
            if (item.id === id) {
                let newQty = item.quantity;
                if (btntype === '+' && item.quantity < 10) {
                    newQty += 1;
                } else if (btntype === '-' && item.quantity > 1) {
                    newQty -= 1;
                }
                return { ...item, quantity: newQty };
            }

            // if(item.quantity === 0) {
            //     handleRemove(item.id);
            // }
            return item;
        })
        setCartItems(updatedCart)
        localStorage.setItem("user-cart", JSON.stringify(updatedCart));

    }


    // const proceedToStripeCheckout = () => {
    //     // console.log("stripe")
    //     axios.post("/create-checkout-session", cartItems)
    //         .then((res) => {
    //             window.location.href = res.data.url
    //         })
    //         .catch((err) => {
    //             console.error(err);
    //         });
    // }

    const proceedToStripeCheckout = async () => {
        try {
            const res = await axios.post(
                "https://ecommerce-react-backend-production.up.railway.app/create-checkout-session",
                cartItems
            );

            // const res = await axios.post("http://localhost:5000/create-checkout-session", cartItems);
            window.location.href = res.data.url;
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl font-bold text-[#ed8900] mb-6 text-center">🛒 Your Cart</h1>

            {cartItems.length === 0 ? (
                <p className="text-center text-gray-500 text-lg">Your cart is empty.
                    <br />
                    <Link to="/products" className="font-semibold text-primary p-1 rounded-sm bg-gray-200">Back to Shop </Link></p>

            ) : (
                <div className="max-w-4xl mx-auto space-y-4">
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between bg-white rounded-2xl shadow p-4"
                        >
                            <div className="flex items-center space-x-4">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-20 h-20 object-contain rounded-xl border"
                                />
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                                    <div className="flex gap-3 items-center">
                                        {

                                        }
                                        <p onClick={() => handleQuantity('-', item.id)}> <FaMinus /></p>
                                        <p className="text-gray-600">{item.quantity}</p>
                                        <p onClick={() => handleQuantity('+', item.id)}>  <FaPlus /> </p>
                                    </div>

                                    <p className="text-gray-600">${item.price} × {item.quantity}</p>
                                    <p className="text-sm text-gray-400">Subtotal: ${item.price * item.quantity}</p>
                                </div>
                            </div>

                            <button
                                onClick={() => handleRemove(item.id)}
                                className="text-red-500 hover:text-red-600 font-semibold text-sm"
                            >
                                ✖
                            </button>
                        </div>
                    ))}

                    <div className="text-right mt-8">
                        <p className="text-xl font-bold text-gray-800">
                            Total: <span className="text-[#fea928]">${total.toFixed(2)}</span>
                        </p>
                        <button
                            className="mt-4 bg-[#ed8900] hover:bg-[#fea928] text-white font-bold py-2 px-6 rounded-xl shadow transition"
                            onClick={proceedToStripeCheckout}
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;