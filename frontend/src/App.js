import logo from './logo.svg';
import './App.css';
import Register from './Components/Register';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home';

const App = () => {
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/register' Component={Register} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App