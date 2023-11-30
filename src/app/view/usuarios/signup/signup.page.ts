import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/common/alert.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private alertService: AlertService) { }

  ngOnInit() {
  }

}
