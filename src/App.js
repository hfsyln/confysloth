import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import './App.css';
import HomePage from './components/Home';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import CardPage from './pages/CardPage';
import ProductsPage from './pages/ProductsPage';
import ErrorPage from './pages/ErrorPage';
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Filter from './components/Filter';

function App() {
  return (
    
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
        <Route path='/cart' element={<CardPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/error' element={<ErrorPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
