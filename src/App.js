import logo from './logo.svg';
import './App.css';
import ReduxSample from './ReduxSample';
import {Navbar} from 'react-bootstrap';

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
     
      React Bootstrap
    </Navbar.Brand>
  </Navbar>
      <ReduxSample />
    </div>
  );
}

export default App;
