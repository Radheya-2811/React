import './App.css'
import LogIn from './components/logIn'
import Profile from './components/profile'
import UserContextProvider from './context/UserContextProvider.'

function App() {

  return (
    <UserContextProvider>
      <h1>ContextAPi demo</h1>
      <LogIn/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
