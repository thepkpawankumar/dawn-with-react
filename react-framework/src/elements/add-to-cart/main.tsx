import React from 'react'
import ReactDOM from 'react-dom/client'
import AddToCartButton from './AddToCartButton.tsx'

const addToCartRoot = document.getElementById('add-to-cart');

if(addToCartRoot){

  let variantId = addToCartRoot.dataset.variantId;
  let productTitle = addToCartRoot.dataset.productTitle;
  if(variantId && productTitle) {

    ReactDOM.createRoot(addToCartRoot!).render(
      <React.StrictMode>
        <AddToCartButton variantId={Number.parseInt(variantId)} productTitle={productTitle} />
      </React.StrictMode>,
    )

  }

  
}
