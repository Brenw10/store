import Routes from './components/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartProvider from './contexts/Cart';

const App = () =>
  <CartProvider>
    <Routes />
  </CartProvider>;

export default App;