import './App.css'
import { Provider } from 'react-redux'
import Store from './Components/Store'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="store-container">
        <Store />
      </div>
    </Provider>
  )
}

export default App
