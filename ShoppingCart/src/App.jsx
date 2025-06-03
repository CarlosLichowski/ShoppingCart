import './App.css'
import { BrowserRouter  as Router, Route, Routes  } from 'react-router-dom'
import NavBar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {


  return (
    <Router>
      <div>
      <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/Contact' element={<Contact/>} />
        </Routes>
      </div>
      
    </Router>
  )
}

export default App
