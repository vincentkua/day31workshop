import { Component } from '@angular/core';
import { order } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inventory : string[] = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5']
  mycart : order[] = []

  addtocart(item : string){
    let existingOrder = this.mycart.find(order => order.item === item);
    if (existingOrder) {
      existingOrder.quantity += 1;
    } else {
      let neworder: order = { item: item, quantity: 1 };
      this.mycart.push(neworder);
    }
  }

  removeorder(index : number){
    this.mycart.splice(index, 1)
  }

}
