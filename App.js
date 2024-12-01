
import React from 'react'
import AppNavigator from './src/navigations/AppNavigator'
import { Provider } from 'react-redux'
import Store from './src/redux/Store'

const App = () => {
  return (
    <Provider store={Store}>
      <AppNavigator />
    </Provider>
  )
}

export default App