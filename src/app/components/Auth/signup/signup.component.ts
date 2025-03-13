import { CommonModule } from '@angular/common';
import { Component, ChangeDetectorRef } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, ValidatorFn, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FirstKeyPipe } from '../../../pipes/firstkey.pipe';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-signup',
  imports: [RouterLink, ReactiveFormsModule, CommonModule, FirstKeyPipe],
  templateUrl: './signup.component.html',
  styles: ``
})
export class SignupComponent {

  form: FormGroup;
  isSubmitted: boolean = false;

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

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private toastr: ToastrService, private cdr: ChangeDetectorRef) {
    // Form initialization with validators
    this.form = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/(?=.*[^a-zA-Z0-9])/)]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^\d+$/)]],
      confirmPassword: ['']
    }, { validators: this.passwordMatchValidator });  // Correct way to add the custom validator
  }

  ngOnInit(): void { }

  // Form submission handler
  async onSubmit(): Promise<void> {
    this.isSubmitted = true;
    if (this.form.valid) {
      try {
        const response = await lastValueFrom(this.authService.createUser(this.form.value));
        this.toastr.success('User created successfully!', 'Success', {
          timeOut: 3000,
        });
        this.cdr.detectChanges(); // Manually trigger change detection
        this.form.reset();
        this.isSubmitted = false;
      } catch (error) {
        console.log(error);
        this.toastr.error("Something went wrong !", 'Error', {
          timeOut: 3000,
        });
      }
    } else {
      this.toastr.info('Please fill the form correctly!', 'Error', {
        timeOut: 3000,
      });
    }
  }

  hasDisplayableError(controlName: string): Boolean {
    const control = this.form.get(controlName);
    return Boolean(control?.invalid) && (this.isSubmitted || Boolean(control?.touched) || Boolean(control?.dirty));
  }
}
