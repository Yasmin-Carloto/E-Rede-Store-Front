import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './contexts/CartContext.jsx'
import { TokenProvider } from './contexts/LoginContext.jsx'
import { SearchQueryProvider } from './contexts/SearchContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TokenProvider>
      <SearchQueryProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </SearchQueryProvider>
    </TokenProvider>
  </React.StrictMode>,
)
