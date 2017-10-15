
import { Component, Input, OnInit, OnChanges, SimpleChanges,DoCheck,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked } from "@angular/core";

@Component({
    selector: "app-product-details",
    templateUrl: './productdetail.component.html'

})
export class ProductDetailsComponent implements OnChanges, OnInit,DoCheck,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked {
   
    ngAfterContentChecked(): void {
       console.log("After content checked");
    }
    ngAfterContentInit(): void {
       console.log("After content init");
    }
    ngAfterViewChecked(): void {
        console.log("After view checked");
    }

    ngAfterViewInit(): void {
        console.log("After view init");
    }

    ngDoCheck(): void {
        console.log("DoCheck from product details");
    }

    @Input()
    product: any;
    @Input()
    msg: string;

    ngOnChanges(changes: SimpleChanges): void {
        console.log("Simple changes", changes);
    }

    ngOnInit(): void {
        console.log("Product Details ngOnInit");
    }


}