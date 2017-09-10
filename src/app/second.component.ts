import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-second',
    template: `This is from second component
    <div>{{description}}</div>
    `
})

export class SecondComponent {

 description = "Second description";
    
}