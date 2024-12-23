import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Signup from './components/Signup'
import Login from './components/Login'
import Profile from './components/Profile'
import UserList from './components/UserList'
import User from './components/User'
import ProductState from './context/ProductState'
// Bactics `

function App() {
  const [count, setCount] = useState(0)
  const[mode,setMode]=useState('light') // props pass gareko 
  const[btnText,setBtnText]=useState('Enable light')
  const[alert,setAlert]=useState(null)

  const showAlert=(type,message)=>{
    setAlert({
      type:type,
      message:message
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode=()=>{
    if (mode=='light') {
      setMode('dark')
      setBtnText(' Light Mode')
      showAlert("sucess:","Dark mode has been enabled")
    } else{
      setMode('light')
      setBtnText(' Dark Mode')
      showAlert("Danger:","Light mode has been enabled")
    }
  }
  return (
    <>
    <ProductState>
    <Router>
    <Navbar mode={mode} btnText={btnText} toggleMode={toggleMode}/>
    <Alert alert={alert} showAlert={showAlert}/>
  
    <Routes>
      
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/user/:userId/:userName' element={<User />}/>
      <Route path='/user' element={<UserList />}/>
    
    </Routes>
   
      </Router>
      
      </ProductState>

    </>
  )
}

export default App
