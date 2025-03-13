import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterLink,Router } from '@angular/router';
import { FirstKeyPipe } from '../../../pipes/firstkey.pipe';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [RouterLink, CommonModule, ReactiveFormsModule, FormsModule,FirstKeyPipe],
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {
  form: FormGroup;
  isSubmitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private toastr:ToastrService,
    private authService:AuthService,
    private router:Router,
  ){
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async onSubmit(): Promise<void> {
    this.isSubmitted = true;
    if (this.form.valid) {
      console.log(this.form.value);
      await this.authService.signin(this.form.value).subscribe({
        next:(res:any)=>{
          localStorage.setItem('token',res.token);
          this.router.navigateByUrl('/dashboard');
          this.toastr.success('Logged in successfully!','Success',{
            timeOut:3000
          });
        },
        error:(err:any)=>{
          if(err.status=400){
            this.toastr.error('Invalid email or password!','Error',{
              timeOut:3000
            });
          }
          else{
            console.log(err);
            this.toastr.error('Something went wrong!','Error',{timeOut:3000});
          }
        }
      })
    }
    else{
      this.toastr.info('Please fill the form correctly!','Error',{
        timeOut:3000
      });
    }
  }

  hasDisplayableError(controlName: string): Boolean {
    const control = this.form.get(controlName);
    return Boolean(control?.invalid) && (this.isSubmitted || Boolean(control?.touched) || Boolean(control?.dirty));
  }
}
