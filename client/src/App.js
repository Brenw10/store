import Routes from './components/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartProvider from './contexts/Cart';
import Loader from './components/Loader';

const App = () =>
  <CartProvider>
    <Loader />
    <Routes />
  </CartProvider>;

export default App;