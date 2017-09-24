import { NgModule } from "@angular/core";
import { DailyReportComponent } from "app/reports/dailyreport.component";
import { MontlyReportComponent } from "app/reports/monthlyreport.component";
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
declarations:[
    DailyReportComponent,
    MontlyReportComponent
],
imports:[
    BrowserModule
],
exports :[
    DailyReportComponent
]
})
export class ReportModule {

}