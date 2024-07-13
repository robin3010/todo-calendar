import React from 'react'
import ReactDOM from 'react-dom/client'
import { UserContextProvider } from 'contexts/user/userContext'
import App from './components/App'
import 'style.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>,
)
