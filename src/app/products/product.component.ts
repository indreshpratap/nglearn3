import { Component, Input, EventEmitter, Output, OnInit } from "@angular/core";

@Component( {
selector:"app-product",
templateUrl:"./product.component.html"
})
export class ProductComponent implements OnInit {
    

    @Input()
    product:any;
    
    @Input()
    msg:string;

    @Input()
    isproductlist:boolean;

    @Output()
    onCartClick:EventEmitter<any> = new EventEmitter<any>(); 



    constructor() {
//  console.log("Product constructor");  
//  console.log("from constructor",this.product);  
}

    ngOnInit(): void {
    //  console.log("Product initilized");
    //  console.log("from ngonInit",this.product); 
    }

    onCartBtnClick() {
        this.onCartClick.emit(this.product);
    }
}