
import { Role } from './../../../constant/Role';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/app/constant/user";
import { AccountService } from "src/app/services/account.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  currentUser: User;
  constructor(
    private router: Router,
    public authenticationService: AccountService
  ) {
    this.authenticationService.currentUser.subscribe(
      (x) => (this.currentUser = x)
    );
  }

  get isAdmin(){
    return this.currentUser && this.currentUser.role === Role.Admin;
  }
  get isUserSupervisor(){
    return this.currentUser && this.currentUser.role === Role.UserSupervisor;
  }


  logout() {
    debugger;
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }

  ngOnInit() {}


}
