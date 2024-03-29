import { Provider } from 'react-redux'
import Store from './Components/Store'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Store />
    </Provider>
  )
}

export default App
