import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/ProductPage.css';

const ProductPage = ( {cart, setCart} ) => {
    const [cant, setCant] = useState(1);
    const [showMessage, setShowMessage] = useState(false);
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const { productId } = useParams();
    

    useEffect(() => {
        fetchProduct();
    }, [productId]);

    const isInCart = () => {
        let result = false;
        for(let i = 0; i < cart.length && !result; i++){
            if(cart[i].id == product.id){
                result=true;
            }
        }
        return result;
    }

    const addToCart = () => {
        if( isInCart() == false ){
            setShowMessage(true);
            setTimeout(() => {
                setShowMessage(false);
            }, 1000);


            const updatedProduct = {
                ...product,
                cant: cant 
            };
            setCart(prevCart => [...prevCart, updatedProduct]);
        }
    }
    
    const addCant = () => {
        setCant(cant+1);
    }

    const subCant = () => {
        if( cant-1 >= 1){
            setCant(cant-1);
        }
    }

    const fetchProduct = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const json = await response.json();
            setProduct(json);
            
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="product-page">
            <div className="product-image">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="product-details">
                <h1 className="product-title">{product.title}</h1>
                <p className="product-description">Description: {product.description}</p>
                <p className="product-price">Price: ${product.price}</p>
                <div className='buttons-container'>
                    <div className='add-to-cart-container'>
                        <button className="add-to-cart-button" onClick={addToCart}>Add to Cart</button>
                        {showMessage && <div className="cart-message">Item added</div>} 
                    </div>
                    <div className="modify-quantity">
                        <p>{cant}</p>
                        <button className="btn-modify-quantity" onClick={addCant}>+</button>
                        <button className="btn-modify-quantity" onClick={subCant}>-</button>
                    </div>
                </div>
                
            </div>
        </div>

    );

};

export default ProductPage;
