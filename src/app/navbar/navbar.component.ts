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

    this.loginService.getUser$().subscribe({
      next: (v) => { this.user = v.username},
      error: (e) => { console.log(e) },
      complete: () => console.log("complete getUser")
    })

  }

  logout() {

    console.log("logout clicked");
    window.sessionStorage.clear();
    this.user = undefined;
    this.role = undefined;

  }

}
