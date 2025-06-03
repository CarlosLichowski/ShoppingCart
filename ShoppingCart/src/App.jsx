import './App.css'
import { BrowserRouter  as Router, Route, Routes  } from 'react-router-dom'
import Header from './components/Header' 
import Home from './pages/Home' 
import Footer from './components/Footer'
import Login from './pages/Login'
import Perfil from './pages/Perfil'
import Productos from './pages/Products'
import Admin from './pages/Admin'
import RutaProtegida from './components/ProtectedRoute'

function App() {


  return (
    <Router>
      <div>
      <Header/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Login' element={<Login/>} />
            <Route path='/Perfil/:id' element={
              <RutaProtegida>
                <Perfil/>
              </RutaProtegida>
              } />
            <Route path='/Productos' element={<Productos/>} />
            <Route path='/Admin' element={
              <RutaProtegida>
                <Admin/>
              </RutaProtegida>

              } />
            

        </Routes>
      </div>
      
    </Router>
  )
}

export default App
