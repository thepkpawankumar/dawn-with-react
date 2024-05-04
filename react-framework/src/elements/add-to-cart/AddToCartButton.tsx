function AddToCartButton({variantId, productTitle}: {variantId: number, productTitle: string}) {

  async function addToCart() {

  const cartDrawer: any = document.querySelector("cart-drawer");
  
  const addToCartRequest =  await fetch(`/cart/add.js`, {
      method: "POST",
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify({
        items: [
          {
            quantity: 1,
            id: variantId
          }
        ],
        sections: cartDrawer.getSectionsToRender().map((section: any) => section.id)
      }),
      
    });

    let response = await addToCartRequest.json();
    
    cartDrawer.renderContents(response);
    
    cartDrawer.classList.remove("is-empty");
    
  }
  return (
    <>
     <button onClick={addToCart}>Add {productTitle} To Cart</button>
    </>
  )
}

export default AddToCartButton
