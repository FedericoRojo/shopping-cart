import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import "../styles/ShoppingPage.css";

const ShoppingPage = ({ products, loading, error}) => {
        
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="product-grid">
            <h1>Products</h1>
            <Pagination products={products}
                        productsPerPage={6} />
        </div>

    );
};

export default ShoppingPage;
