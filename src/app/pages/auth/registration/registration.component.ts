import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-registration',
  imports: [NgClass, FormsModule, InputTextModule, ButtonModule, CheckboxModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent implements OnInit{
  login: string;
  password: string;
  passwordRepeat: string;
  cardNumber: string;
  email: string;
  isRemember: boolean;
  labelText = "Сохранить пользователя в хранилище";  
  constructor(private userService: UserService) {}

ngOnInit(): void {
    
}

onAuth(): void {
 this.userService.addUser({login: this.login, password: this.password})

}
 }
