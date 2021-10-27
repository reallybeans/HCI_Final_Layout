import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  showSpinner = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  login() {
    this.showSpinner = true;
    timer(2000).subscribe((x) => {
      this.router.navigate(['main/dashboard']);
    });
  }
}
