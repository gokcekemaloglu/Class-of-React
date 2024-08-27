import React from 'react'
import Counter from './components/counter/Counter'
import { Provider } from "react-redux"
import "./App.css"
import { store } from './redux/store'

const App = () => {
  // store={store} kısmında süslü içindeki bizim açtığımız sayfa, sol taraf da sabit komutumuz 
  return (
    <div className='app'>
      <Provider store={store}>
        <Counter/>
      </Provider>
      
    </div>
  )
}

export default App