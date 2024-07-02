import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private _AuthService:AuthService ,private _Router:Router,private _FormBuilder:FormBuilder) {}

  errMsg:string='';

  isLoading:boolean=false;
  // loginForm:FormGroup= new FormGroup({
   
  //   email:new FormControl('',[Validators.required,Validators.email]),

    
  //   password:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9])(?!.*\s).{6,}$/)]),

    
    
  // });

  loginForm:FormGroup= new FormGroup({
    // displayName:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    email:new FormControl('',[Validators.required,Validators.email]),

    // phone:new FormControl('',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9])(?!.*\s).{6,}$/)]),

    // rePassword:new FormControl('')
    
  });


handleForm():void{
  // console.log(this.loginForm.value)

  const userData=this.loginForm.value;
  this.isLoading=true;
  // console.log(userData);

  if(this.loginForm.valid===true){
    this._AuthService.login(userData).subscribe({
      next:(response)=>{
        // console.log(response);

      
        if(response.message==="success"){

          localStorage.setItem('etoken',response.token);
          this._AuthService.decodeUser();
          this.isLoading=false;
          this._Router.navigate(['/home']);
        }
      },
      error:(err)=>{
         console.log(err);
        this.errMsg="InValid Email";
         this.isLoading=false;
        
        
      }
    });
  }
}

}
