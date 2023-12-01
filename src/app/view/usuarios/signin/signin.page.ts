import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/common/alert.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  formLogar: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private alertService: AlertService) {
    this.formLogar = new FormGroup({
      email: new FormControl(''),
      senha: new FormControl('')
    });
  }

  ngOnInit() {
    this.formLogar = this.formBuilder.group({
      // o primeiro campo se refere ao campo que pode vir preenchido quando carregamos a tela ou vazio como está configurado no momento
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get erroControl() {
    return this.formLogar.controls;
  }

  submitForm() {
    if(!this.formLogar.valid){
      this.alertService.presentAlert("Erro", "Campos Obrigatórios!");
      return false;
    }
    else{
      this.logar();
      return true;
    }
  }

  private logar() {
    this.alertService.presentAlert("Sucesso", "Login realizado com sucesso!");
    this.router.navigate(['home']);
  }

  logarComGoogle(): void{}

  irParaSignUp() {
    this.router.navigate(['signup']);
  }
}
