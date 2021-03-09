import Routes from './components/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartProvider from './contexts/Cart';
import UserProvider from './contexts/User';
import Loader from './components/Loader';

const App = () =>
  <UserProvider>
    <CartProvider>
      <Loader />
      <Routes />
    </CartProvider>
  </UserProvider>;

export default App;