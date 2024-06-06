import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'
import { CommentAndDataContextProvider } from './components/context/CommentAndDataContext.jsx'
import App from './App.jsx'
import { UserContextProvider } from './components/context/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <UserContextProvider>
        <CommentAndDataContextProvider>
          <App />
        </CommentAndDataContextProvider>
      </UserContextProvider>
    </Router>
  </React.StrictMode>,
)
