import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const cartStyles = {
        background: "#F59E0D",
        display: "flex",
        padding: '6px 12px',
        borderRadius: '50px', 
    }
    return (
        <>
        <nav className="navbar container mx-auto flex items-center justify-between py-4">
                <Link to="/">
                    <img style={{height: 45}} src="/images/logo.png" alt="Logo"/>
                </Link>
                <ul className="flex items-center">
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li className="ml-6">
                        <Link to="/products">Products</Link>
                    </li>

                    <li className="ml-6">
                        <Link to="/cart">
                            <div style={cartStyles}>
                                <span>12</span>
                                <img className="ml-2" src="/images/cart.png" alt="Cart"/>
                            </div>
                        </Link>
                    </li>
                </ul>         
        </nav>
        </>
    );
};

export default Navigation;