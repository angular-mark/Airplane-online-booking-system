import { Component } from "@angular/core";

@Component({
    selector: 'app-home',
    template: `
        <div>
            404 page :( 
            <a routerLink="/">Go home</a>
        </div>
    `,
})

export class NotFoundComponent {

}
