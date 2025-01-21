import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from "./components/RegistrationAndLogin/SignUp";
import SignIn from "./components/RegistrationAndLogin/SignIn";

function App() {
  const [count, setCount] = useState(0);
  const [showSignIn, setShowSignIn] = useState(true);

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
      {showSignIn ? <SignIn setShowSignIn={setShowSignIn} /> : <SignUp setShowSignIn={setShowSignIn} />}
    </div>
    </>
  )
}

export default App
