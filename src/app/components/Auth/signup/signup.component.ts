import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, ValidatorFn, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [RouterLink, ReactiveFormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styles: ``
})
export class SignupComponent {

  form: FormGroup;
  isSubmitted:boolean=false;

  // Password match validator
  passwordMatchValidator: ValidatorFn = (control: AbstractControl) => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword?.setErrors({ passwordMismatch: true });
    } else {
      confirmPassword?.setErrors(null);
    }
    return null;
  };

  constructor(private formBuilder: FormBuilder) {
    // Form initialization with validators
    this.form = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/(?=.*[^a-zA-Z0-9])/)]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      confirmPassword: ['']
    }, { validators: this.passwordMatchValidator });  // Correct way to add the custom validator
  }

  ngOnInit(): void { }

  // Form submission handler
  onSubmit(): void {
    if (this.form.valid) {
      this.isSubmitted=true;
      console.log(this.form.value);
      alert('Form submitted successfully!');
    } else {
      alert('Please fill the form correctly!');
    }
  }

  hasDisplayableError(controlName:string):Boolean{
    const control=this.form.get(controlName);
    return Boolean(control?.invalid) && (this.isSubmitted || Boolean(control?.touched))
  }
}
