import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { User } from "./constant/user";
import { AccountService } from "./services/account.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartask';
  currentUser: User;


  constructor(

    private router: Router,
    public authenticationService: AccountService,
  ) {
    this.authenticationService.currentUser.subscribe(
      (x) => (this.currentUser = x)
    );

  }




  ngOnInit() {}
}
