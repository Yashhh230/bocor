import { Component, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-viewmore',
  templateUrl: './viewmore.component.html',
  styleUrls: ['./viewmore.component.scss']
})
export class ViewmoreComponent {
  /**
   * this is the datavar variable for input 
   */
  datavar:any
  // this for the close button 
  
  forClose = false;
  //this can emit the data 
  @Output() myOutput = new EventEmitter();  
  
  constructor(private elem: ElementRef) { }
  /**
   * 
   * @param data this will emit the data which will be in boolean 
   */
  onClick(data: any) {
    this.myOutput.emit(data)
    this.elem.nativeElement.remove()
}

}
