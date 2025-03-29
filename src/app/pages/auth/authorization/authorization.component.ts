import { Component, OnInit, OnDestroy} from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-authorization',
  imports: [NgClass, FormsModule, ButtonModule, InputTextModule],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.scss'
})
export class AuthorizationComponent implements OnInit, OnDestroy { 
  login: string;
  password: string;
  
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

 onAuth(): void {
    
  }


 
}