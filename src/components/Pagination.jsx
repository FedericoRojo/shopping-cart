import React, { useState } from 'react';
import "../styles/Pagination.css";
import {Link} from "react-router-dom";

const Pagination = ({ products, productsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <ul className='product-list'>
          {currentProducts.map((product) => (
              <Link 
                  key={product.id}
                  to={`/product/${product.id}`} 
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                      <li className="product-card-pag">
                          <img src={product.image} alt={product.title} />
                          <h3>{product.title}</h3>
                          <p>Price: ${product.price}</p>
                      </li>
              </Link>
          ))}
      </ul>
      <div className="pagination-controls">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => changePage(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
  </div>
  );
};

export default Pagination;
