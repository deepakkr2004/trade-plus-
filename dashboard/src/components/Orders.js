// import React from "react";
// import { Link } from "react-router-dom";

// const Orders = () => {
//   return (
//     <div className="orders">
//       <div className="no-orders">
//         <p>You haven't placed any orders today</p>

//         <Link to={"/"} className="btn">
//           Get started
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Orders;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Orders.css";

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3002/allOrders")
            .then((response) => {
                setOrders(response.data);
            })
            .catch((error) => {
                console.log("Error fetching orders:", error);
            });
    }, []);

    return (
        <div className="orders-page">

            <div className="orders-header">
                <div>
                    <h1>My Orders</h1>
                    <p>View all your recent orders</p>
                </div>

                <div className="order-count">
                    {orders.length} Orders
                </div>
            </div>

            {orders.length === 0 ? (
                <div className="empty-orders">
                    <h2>No orders yet</h2>
                    <p>You haven't placed any orders today.</p>

                    <Link to="/" className="start-btn">
                        Get Started
                    </Link>
                </div>
            ) : (
                <div className="orders-table">

                    <div className="orders-table-header">
                        <span>Stock</span>
                        <span>Quantity</span>
                        <span>Price</span>
                        <span>Mode</span>
                    </div>

                    {orders.map((order) => (
                        <div className="order-row" key={order._id}>

                            <div className="stock-name">
                                <div className="stock-icon">
                                    {order.name.charAt(0)}
                                </div>

                                <div>
                                    <strong>{order.name}</strong>
                                    <small>Equity</small>
                                </div>
                            </div>

                            <div className="order-value">
                                {order.qty}
                            </div>

                            <div className="order-value">
                                ₹{Number(order.price).toLocaleString("en-IN")}
                            </div>

                            <div>
                                <span
                                    className={
                                        order.mode === "BUY"
                                            ? "mode buy"
                                            : "mode sell"
                                    }
                                >
                                    {order.mode}
                                </span>
                            </div>

                        </div>
                    ))}

                </div>
            )}

        </div>
    );
};

export default Orders;
