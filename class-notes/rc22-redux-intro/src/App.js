import React from 'react'
// import Counter from './components/counter/Counter'
import { Provider } from "react-redux"
import "./App.css"
import { store } from './redux/store'
import Todo from './components/todo/Todo'

const App = () => {
  // store={store} kısmında süslü içindeki bizim açtığımız sayfa, sol taraf da sabit komutumuz 
  return (
    <div className='app'>
      <Provider store={store}>
        {/* <Counter/> */}
        <Todo/>
      </Provider>      
    </div>
  )
}

export default App