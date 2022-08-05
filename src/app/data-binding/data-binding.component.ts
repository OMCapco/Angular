import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-data-binding',
    templateUrl: './data-binding.component.html',
})

export class DataBindingComponent implements OnInit {
    allowNewUser = false;
    userCreationStatus = '';
    userName = ''

    constructor() {
        setTimeout(() => {
            this.allowNewUser = true;
        }, 2000);
    }

    ngOnInit(): void {
    }

    onCreateUser() {
        this.userCreationStatus = 'User was created! Name is ' + this.userName;
    }

    onUpdateServerName(event: any) {
        this.userName = (<HTMLInputElement>event.target).value;
        console.log(event)
    }

}