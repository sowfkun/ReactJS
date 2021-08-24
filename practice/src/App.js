import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import './App.css';
import TopMenu from './components/top_menu/TopMenu';
import Product from './pages/Products';

const Home = () => <h2>Home</h2>;

function App() {
  return (
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
  );
}

export default App;
