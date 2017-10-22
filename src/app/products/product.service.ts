import { Injectable } from "@angular/core";

@Injectable()
export class ProductService {
    
    getProductList() {
        return  [
            {
                id: 1,
                name: "Product one from service",
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
}