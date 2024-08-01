import './App.css'
import Login from './Components/Login'
import Signup from './Components/Signup'
import { authContext } from './AuthContext'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth" 
import { auth } from './Firebase'
import { Routes, Route} from "react-router-dom"
import Home from './Components/Home'
import Protected from './Protected'
import Dashboard from './Components/Dashboard'
import { useNavigate } from "react-router-dom"

function App() {
 const navigate = useNavigate()

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    // .then((d) => navigate("/dashboard"))
    .then((d) => {
      if(d.user.emailVerified == false)   {
        alert("Verify your email please.");
        navigate("/");
      } else {
        navigate("/dashboard");
      }
    })
    .catch((err) => console.log("Error is ", err));
  }

  const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((d) => {
      return sendEmailVerification(d.user)
      
    })
    .then(() => {
      alert("Signup success!")
      navigate("/login");
    })
    .catch((err) => console.log("Error is ", err));
  }

  function logout() {
    auth.signOut();
    navigate("/login")
  }
  return (
    <div>
      <authContext.Provider value={{login, signup, logout}}>
        <Routes >
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/dashboard' element={<Protected> <Dashboard /> </Protected>} />
        {/* <Login />
        <Signup /> */}
        </Routes>
        </authContext.Provider>
    </div>
  )
}

export default App
