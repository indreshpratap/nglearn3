import { Component, OnInit } from "@angular/core";
import { ProductService } from "app/products/product.service";
import { Title } from "@angular/platform-browser";

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

    constructor(private productService:ProductService,private titleService: Title) {
        // console.log("productlist constructor called!");
        this.titleService.setTitle("On product listing page");

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

        this.products = this.productService.getProductList();
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