import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  login_message = ""

  username = new FormControl("", [Validators.required])
  password = new FormControl("", [Validators.required])

  productForm = new FormControl({
    username:this.username,
    password:this.password 
  })

  login(){
    if(this.productForm.value?.password.value == "123" 
    && this.productForm.value?.username.value=="chetan"){
        this.login_message = "Login Successful.."
    }else{
      this.login_message = "Login Unsuccessful.."
    }
  }
}
