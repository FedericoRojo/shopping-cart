import '../styles/CartPage.css';

function CartPage ({cart, setCart}){

    const handleSum = (elem) => () => sumCant(elem);
    const handleSub = (elem) => () => subCant(elem);
    const handleDelete = (elem) => () => deleteElem(elem);

    const deleteElem = (elem) => {
        setCart( prevCart => 
            prevCart.filter( (e) => e != elem )
        );
    }

    const sumCant = (elem) => {
        setCart( prevCart => 
            prevCart.map( e => {
                let aux = null;
                if( elem == e ){
                   aux = { ...e, cant: e.cant+1}
                }else{
                   aux = e;
                }
                return aux;
            })
        );
    }

    const subCant = (elem) => {
        if(elem.cant - 1 >= 1){
            setCart( prevCart => 
                prevCart.map( e => {
                    let aux = null;
                    if( elem == e ){
                       aux = { ...e, cant: e.cant-1}
                    }else{
                       aux = e;
                    }
                    return aux;
                })
            );
        }
    }

    return(
        <>
         {
            (cart.length) > 0 && 
            <div className="cart-container">
                    <ul>
                        {cart.map((elem) => (
                            <li key={elem.id} className="product-card-cart">
                                <img src={elem.image} alt={elem.title} />
                                <div className='text-section'>
                                    <h1>{elem.title}</h1>
                                    <p>{elem.price}</p>
                                </div>
                                <div className="buttons-section">
                                    <div className="modify-quantity">
                                        <p>{elem.cant}</p>
                                        <button onClick={handleSum(elem)}>+</button>
                                        <button onClick={handleSub(elem)}>-</button>
                                    </div>
                                    <button className="delete-product-btn"
                                            onClick={handleDelete(elem)}>Delete</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                {cart.length > 0 && <button className="buy-button">Buy</button>}
            </div>
        }
        { cart.length == 0 && (
            <div className='nocart-container'>
                <h1>No items added</h1>
            </div>
        )}
        </>
    )
}

export default CartPage;