import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { timer } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submited: boolean = false;
  success: boolean = false;
  fail: boolean = false;

  loginGroupFrom = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * On submit click atempt login
   */
  onSubmit() {
    const username = this.loginGroupFrom.value.username;
    const password = this.loginGroupFrom.value.password;

    const observable = this.authService.login(username, password)

    observable.subscribe({
      next: (v) => {
        this.success = true;

        // Show success message for 2.5sec
        const contador = timer(2500);
        contador.subscribe(() => this.success = false)

        // Make submit button available again
        this.submited = false
        console.log(v);

        // Save login in sessionStorage
        window.sessionStorage.setItem("auth-token", v.token)

        this.router.navigate(['/']);
      },
      error: (e) => {
        this.fail = true;

        // Show fail message for 2.5sec
        const contador = timer(2500);
        contador.subscribe(() => this.fail = false)

        // Make submit button available again
        this.submited = false
        console.log(e)
      },
      complete: () => {
        console.log("complete!")
      }

    })
  }

}
