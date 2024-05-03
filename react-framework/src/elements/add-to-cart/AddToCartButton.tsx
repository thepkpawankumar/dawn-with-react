function AddToCartButton({variantId, productTitle}: {variantId: number, productTitle: string}) {

  async function addToCart() {

  const cartDrawer: any = document.querySelector("cart-drawer");
  const addToCartRequest =  await fetch(`${window.routes.cart_add_url}.js`, {
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
    console.log(response);
    cartDrawer.renderContents(response);
  }
  return (
    <>
     <button onClick={addToCart}>Add {productTitle} To Cart</button>
    </>
  )
}

export default AddToCartButton
