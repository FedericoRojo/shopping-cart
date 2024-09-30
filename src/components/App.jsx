import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import ShoppingPage from './ShoppingPage';
import ProductPage from './ProductPage';
import CartPage from './CartPage';
import {useState, useEffect} from "react";

/*
- Todas con un header, el header tiene titulo de la app, 2 botones: tienda y 
cart( el carti tiene la cantidad de elementos en el)
- Shopping page: 
(va a tener 6 a 8 cards. Que van a mostrar la imagen del articulo y el titulo, con precio)
Queremos un carrousel. Cuando alguien clickea en estas nos vamos a la otra pagina
- Product page 
Imagen, precio, titulo, descripcion, boton para añadir al carro junto con la cantidad que queremos 
- Cart Page
Una lista de todos los elementos que vamos a comprar con su imagen, titulo y precio. Un modificador de
cantidad, un botton de borrar.

to-do:
1 $- cantidad de cosas que queremos en el momento de agregar. Eso falta modificar Product Page, y
cada vez que añadimos queremos poner un nuevo atributo cantidad
2 $ - Borrar en cart, queremos poder borrar un elem del cart
3 $- Modificar cantidad en cart, queremos poder bajar la cantidad de elemntos. Minimo es 1, osea no se borra
4-
5- idea extra
6- que quede prolijo el css, letras, margenes, borders, colores.





Ideas extras:
En shopping page, imaginando la situacion para mas elementos me gustaria cargar 2 paginas. Cuando se
carga una 3era se borra alguna de las actuales basandonos en FIFO. Pero ahora como tengo pocos elems
no tiene sentido.
Quiero cargar la cantidad de elementos por pagina. 

*/


function App() {
  const [cart, setCart] = useState([]);

  const [productsSP, setProductsSP] = useState([]);
  const [errorSP, setErrorSP] = useState(null);
  const [loadingSP, setLoadingSP] = useState(true);

  useEffect(() => {
    if(productsSP.length == 0){
        fetchCategories();
    }
  }, [productsSP]); 

  const fetchCategories = async () => {
      try {
          const response = await fetch('https://fakestoreapi.com/products');
          if (!response.ok) {
              throw new Error('Network response was not ok ' + response.statusText);
          }
          const json = await response.json();
          setProductsSP(json);
      } catch (error) {
          setErrorSP(error.message);
      } finally {
          setLoadingSP(false);
      }
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ShoppingPage products={productsSP} loading={loadingSP} error={errorSP}/>} />
        <Route path="/product/:productId" element={<ProductPage 
                                                    cart={cart} setCart={setCart}/>} />
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
