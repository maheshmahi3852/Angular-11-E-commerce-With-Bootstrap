import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  shopping_cart_items: any[]=[];

  constructor(public toastr:ToastrService) { }

  addProduct = (product) => {
    let items = this.get_shopping_cart_items();
    if(items){
          items.push(product)
          localStorage.setItem('shopping_cart', JSON.stringify(items));
          this.toastr.success('Product add successfully!', 'Amazone!');

    }else{
      this.shopping_cart_items.push(product);
      localStorage.setItem('shopping_cart', JSON.stringify(this.shopping_cart_items));
    }
  //localStorage.setItem('shoping_cart', JSON.stringify(product));
}

get_shopping_cart_items = () =>{
  let items = localStorage.getItem('shopping_cart')
  return JSON.parse(items);
}



getCartLength = () =>{
  let items = this.get_shopping_cart_items();
  return items? this.get_shopping_cart_items().length: 0
}

getTotal = ()=>{
  let items = this.get_shopping_cart_items();
  return items?.reduce((acc, item)=> acc+ item.price, 0)

}

removerItem=(p)=>{
  console.log('calling remover ', p)
  let items = this.get_shopping_cart_items();
  
  const index = items.findIndex(item=> item.id == p.id);
  if(index>=0){
    console.log('hitting if')
    items.splice(index, 1);
    return localStorage.setItem('shopping_cart', JSON.stringify(items))
  }

}



}//end
