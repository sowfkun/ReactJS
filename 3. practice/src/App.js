// import libs
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

// import components
import './App.css';
import TopMenu from './components/top_menu/TopMenu';
import Product from './pages/Products';

// import provider-consumer
import { CartProvider } from './contexts/Cart';

const Home = () => <h2>Home</h2>;

function App() {
  return (
    <CartProvider>
      <Router>
        <Container>
          <div className='App'>
            {/** Top menu */}
            <TopMenu />

            {/** Route */}
            <Route path='/' exact component={Home} />
            <Route path='/products/' exact component={Product} />
          </div>
        </Container>
      </Router>
    </CartProvider>
  );
}

export default App;
