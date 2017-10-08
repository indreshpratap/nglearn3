import {Component} from "@angular/core";

@Component( {
selector:"app-product-list",
templateUrl:"./productlist.component.html"
})
export class ProductListComponent {

    products:any[];
    cart:any[];

    constructor() {
        this.cart = [];
        this.products = [
            {
                id:1,
                name:"Product 1",
                price: 999,
                color:"white",
                category:"cloth",
            },
            {
                id:2,
                name:"Television",
                price: 9999,
                color:"Black",
                category:"electronics",
            },
        ]
    }


    addToCart(data) {
        this.cart.push(data);
    }
}