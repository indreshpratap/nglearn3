import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit, OnDestroy {
    
    title = "Home Title";
   
   constructor() {
        console.log("Home constructor");

   }
    ngOnInit(): void {
        console.log("Home component ngOnInit");
    }

     ngOnDestroy(): void {
        console.log("Home component ngOnDestroy");
    }

    onBtnClick() {
        console.log("Button clicked");
        this.title = "Product Title";
    }
}