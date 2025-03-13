### Step 1: Generate the Toast Component

Open your terminal and navigate to your Angular project directory. Then run the following command to generate a new component named `toast`:

```bash
ng generate component components/Toast
```

This command will create a new folder named `toast` inside the `components` folder, along with the necessary files for the component.

### Step 2: Implement the Toast Component

Now, open the newly created `toast.component.ts` file located at `src/app/components/Toast/toast.component.ts` and implement the basic functionality for the Toast component. Here’s an example implementation:

```typescript
// filepath: /E:/TOSH_AI/WEB/src/app/components/Toast/toast.component.ts
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {
  @Input() message: string = '';
  @Input() duration: number = 3000; // Duration in milliseconds
  showToast: boolean = false;

  ngOnInit(): void {
    if (this.message) {
      this.showToast = true;
      setTimeout(() => {
        this.showToast = false;
      }, this.duration);
    }
  }
}
```

### Step 3: Create the Toast Component Template

Next, open the `toast.component.html` file located at `src/app/components/Toast/toast.component.html` and add the following HTML code:

```html
<!-- filepath: /E:/TOSH_AI/WEB/src/app/components/Toast/toast.component.html -->
<div *ngIf="showToast" class="toast">
  {{ message }}
</div>
```

### Step 4: Style the Toast Component

Now, open the `toast.component.css` file located at `src/app/components/Toast/toast.component.css` and add some basic styles for the toast notification:

```css
/* filepath: /E:/TOSH_AI/WEB/src/app/components/Toast/toast.component.css */
.toast {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 15px;
  border-radius: 5px;
  transition: opacity 0.5s ease;
  z-index: 1000;
}
```

### Step 5: Use the Toast Component

To use the Toast component in your application, you can include it in any parent component (like `signup.component.ts`) and pass the message and duration as inputs. For example, in your `signup.component.ts`, you can add:

```typescript
// Inside your SignupComponent class
showToast: boolean = false;
toastMessage: string = '';

onSubmit(): void {
  if (this.form.valid) {
    this.isSubmitted = true;
    this.toastMessage = 'Form submitted successfully!';
    this.showToast = true;
    console.log(this.form.value);
  } else {
    this.toastMessage = 'Please fill the form correctly!';
    this.showToast = true;
  }
}
```

And in your `signup.component.html`, include the Toast component:

```html
<!-- Inside signup.component.html -->
<app-toast [message]="toastMessage" [duration]="3000" *ngIf="showToast"></app-toast>
```

### Step 6: Update the Module

Ensure that the `ToastComponent` is declared in your module. Open `app.module.ts` and add the `ToastComponent` to the `declarations` array if it’s not already included:

```typescript
import { ToastComponent } from './components/Toast/toast.component';

@NgModule({
  declarations: [
    // other components,
    ToastComponent
  ],
  // other properties
})
export class AppModule { }
```

### Conclusion

You have now created a Toast component in your Angular project. This component can be used to display brief messages to the user, such as success or error notifications. You can further enhance its functionality by adding more features like different types of messages (success, error, info) or animations.