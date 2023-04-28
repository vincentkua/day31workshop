import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  @Input()
  itemarray : string[] = []

  @Output()
  onadditem = new Subject<string>()

  additem(item : string){
    this.onadditem.next(item)
  }
}
