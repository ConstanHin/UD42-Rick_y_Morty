import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: string | undefined = undefined;
  role: string | undefined = undefined;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    // If there is a username in storage assign it
    const usernameSession = window.sessionStorage.getItem("auth-username")
    if (usernameSession) this.user = usernameSession;

    this.loginService.getUser$().subscribe({
      next: (v) => { this.user = v.username },
      error: (e) => { console.error(e, "asd") },
      complete: () => console.log("complete getUser")
    })

  }

  /**
   * Logout
   */
  logout() {

    console.log("logout clicked");
    window.sessionStorage.clear();
    this.user = undefined;
    this.role = undefined;

  }

  /**
   * Register
   */
  signUp() {
    // this.loginService.
  }

}
