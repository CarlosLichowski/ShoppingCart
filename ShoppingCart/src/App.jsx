import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import Productos from './pages/Products';
import Admin from './pages/Admin';
import RutaProtegida from './components/ProtectedRoute';
import Cart from './pages/Cart'; 

import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <Router>
      <AuthProvider> 
        <CartProvider> 
          <div>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/Perfil/:id' element={
                <RutaProtegida>
                  <Perfil />
                </RutaProtegida>
              } />
              <Route path='/Productos' element={<Productos />} />
              <Route path='/Admin' element={
                <RutaProtegida>
                  <Admin />
                </RutaProtegida>
              } />
              <Route path='/cart' element={
                <RutaProtegida>
                  <Cart />
                </RutaProtegida>
              } />
            </Routes>
            <Footer /> 
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;