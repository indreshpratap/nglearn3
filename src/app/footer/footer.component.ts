
import { Component } from "@angular/core";

@Component({
    selector: "app-footer",
    templateUrl: "./footer.component.html"
})
export class FooterComponent {
description="Do";

counters=[];
count=0;
    dosomework() {
        console.log("doing some work");
        this.description="Description changed";
    }

    inc() {
        ++this.count;
        this.counters.push(this.count);
    }


}