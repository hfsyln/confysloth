import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import './App.css';
import HomePage from './components/Home';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import Register from './pages/Register';
import CardPage from './pages/CardPage';
import Product from './components/Product';
import ErrorPage from './pages/ErrorPage';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CartDetail from './components/cartDetail';


function App() {
  return (
    
      <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/cart' element={<CardPage />} />
          <Route path='/product' element={<Product />} />
          <Route path='/error' element={<ErrorPage />} />
          <Route path='/detail' element={<CartDetail/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
