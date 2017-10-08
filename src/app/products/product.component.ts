import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component( {
selector:"app-product",
templateUrl:"./product.component.html"
})
export class ProductComponent {
    
    @Input()
    product:any;
    
    @Input()
    msg:string;

    @Input()
    isproductlist:boolean;

    @Output()
    onCartClick:EventEmitter<any> = new EventEmitter<any>(); 



    constructor() {
    }

    onCartBtnClick() {
        this.onCartClick.emit(this.product);
    }
}