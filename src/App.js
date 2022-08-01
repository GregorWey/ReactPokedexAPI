import './App.css';
import Header from './components/Header';
import {BrowserRouter, Link} from "react-router-dom"
import Pages from './pages/Pages';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Pages/>
      </BrowserRouter>
    </div>
  );
}

export default App;
