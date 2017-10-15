import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-product-list",
    templateUrl: "./productlist.component.html"
})
export class ProductListComponent implements OnInit {


    products: any[];
    cart: any[];
    imgnumber = 1;
    imgpath = "";
    productDetails;
    message;

    constructor() {
        // console.log("productlist constructor called!");

    }

    ngOnInit(): void {
        //    console.log("Product list initilized!");
        this.cart = [];
        this.message = "Hi learning ngOnChanges";
        this.productDetails = {
            id: 1,
            qty: 1,
            name: "Blue jeans",
            description: "A Blue jeans"
        };

        this.products = [
            {
                id: 1,
                name: "Product 1",
                price: 999,
                color: "white",
                category: "cloth",
            },
            {
                id: 2,
                name: "Television",
                price: 9999,
                color: "Black",
                category: "electronics",
            },
        ];
    }

    changeMessage() {
        this.message = "Learning change detection";
    }

    changeDetails() {
        let newdetails = { ...this.productDetails };
        newdetails.qty = newdetails.qty + 1;
        this.productDetails = newdetails;
    }

    changeDetailsOnly() {
        this.productDetails.qty += 1;
    }

    addToCart(data) {
        this.cart.push(data);
    }

    toggle() {
        if (this.imgnumber == 1) {
            this.imgnumber = 2;
        } else {
            this.imgnumber = 1;
        }
        this.imgpath = `assets/img${this.imgnumber}.jpg`;
    }
}