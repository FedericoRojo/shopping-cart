import ShoppingPage from './components/ShoppingPage';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';

const routes = [
  {
    path: "/",
    element: <ShoppingPage />,  
  },
  {
    path: "/product/:productId",
    element: <ProductPage />,  
  },
  {
    path: "/cart",
    element: <CartPage />,  
  }
];

export default routes;
