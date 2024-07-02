import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormControlOptions, FormGroup, ReactiveFormsModule ,Validators} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

 
  constructor(private _AuthService:AuthService ,private _Router:Router,private _FormBuilder:FormBuilder) {}

  errMsg:string='';

  isLoading:boolean=false;
  registerForm:FormGroup= new FormGroup({
    displayName:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    email:new FormControl('',[Validators.required,Validators.email]),

    phone:new FormControl('',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9])(?!.*\s).{6,}$/)]),

    rePassword:new FormControl('')
    
  },{validators:[this.confirmPassword]}as FormControlOptions);

confirmPassword(group:FormGroup):void{
const password=group.get("password");
const rePassword=group.get("rePassword");


if(rePassword?.value==''){
  rePassword.setErrors({require:true});

}

else if(password?.value!=rePassword?.value){
rePassword?.setErrors({mismatch:true})

}

}

handleForm():void{
  // console.log(this.registerForm.value)

  const userData=this.registerForm.value;
  this.isLoading=true;
  // console.log(userData);

  if(this.registerForm.valid===true){
    this._AuthService.register(userData).subscribe({
      next:(response)=>{
        // console.log(response);

      
        if(response.message==="success"){
          this.isLoading=false;
          this._Router.navigate(['/login']);
        }
      },
      error:(err)=>{
        //  console.log(err);

        this.errMsg="You Have aready an account";
       
        this.isLoading=false;
        
        
      }
    });
  }
}
}
