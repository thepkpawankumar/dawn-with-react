import React from 'react'
import ReactDOM from 'react-dom/client'
import AddToCartButton from './AddToCartButton.tsx'

ReactDOM.createRoot(document.getElementById('add-to-cart')!).render(
  <React.StrictMode>
    <AddToCartButton />
  </React.StrictMode>,
)
