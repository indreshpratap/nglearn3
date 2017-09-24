import { Component } from "@angular/core";

@Component({
    selector: "app-monthly-report",
    templateUrl: "./monthlyreport.component.html"
})
export class MontlyReportComponent {
  
    currentYear = 2017;
    years = [2017];
    disableYearBtn = false;

    changeYear() {
        this.currentYear = this.currentYear + 1;
        this.years.push(this.currentYear);
      
       var test = "Fsdf";
       let dummy = "fdsf";
    }

    toogle() {
        this.disableYearBtn = !this.disableYearBtn;
    }
}