import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import State from './state.jsx'
import header from './header.jsx'
import body from './body.jsx'
import Footer from './footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <body />
    <Footer />
    {/* <State/> */}
    {/* <App /> */}

  </StrictMode>,
)
