
const getstoredCart = ()=>{
    //localstorage a cart k getItem korte hbe
    const storedCart = localStorage.getItem('cart')
    //jodhi localstorage ar vitor cart thka thly (storedCart)k JSON.parse korbe .na holy retryb korbe empty []
    if(storedCart){
        return JSON.parse(storedCart)
    }
    return []
}

const saveCartTools = (cart)=>{
    const storedCartStringfy = JSON.stringify(cart)
    localStorage.setItem('cart',storedCartStringfy)
}

const AddTOLS = (id)=>{
  const cart = getstoredCart();
  cart.push(id)
  //save to LocalStorage
  saveCartTools(cart)
}
export { AddTOLS ,getstoredCart }