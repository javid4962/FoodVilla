import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'


function App() {
  return (
    <div className="appContainer">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)

