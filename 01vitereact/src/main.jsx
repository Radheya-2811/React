import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>This is myapp && harsh</h1>
    </div>
  )
}
const Element=(
  <a href='www.google.com' target='_blank'>FOOFGLE</a>
)
const createdElement=React.createElement('a',{
  href:'https://instagram.com',
  target:'_blank'
},'click here for instagram')
ReactDOM.createRoot(document.getElementById('root')).
render(
    <App/>
)
