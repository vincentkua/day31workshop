import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { order } from 'src/app/models';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent {
  @Input()
  mycart : order[] = []

  @Output()
  ondelete = new Subject<number>()

  removeorder(index : number){
    this.ondelete.next(index)
  }
  

}
