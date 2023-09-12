import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AbstractHttpCommunication } from '../HttpCommunication';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  uname: FormControl;
  pass: FormControl;
  role: FormControl;
  frmGroup: FormGroup;
  statusDetails: string = '';

  constructor(
    private router: Router,
    private service: AbstractHttpCommunication
  ) {
    this.uname = new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z ]{3,20}$'),
      ])
    );
    
    this.pass = new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(
          '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
        ),
      ])
    );

    this.role = new FormControl(
      '',
      Validators.compose([
        Validators.required
      ])
    );

    this.frmGroup = new FormGroup({
      uname: this.uname,
      pass: this.pass,
      role: this.role
    });
  }

  submit(): void {
    if (this.frmGroup.invalid) {
      alert('Invalid Form');
    } else {
      var observableObj = this.service.SignUp(
        this.uname.value,
        this.pass.value,
        this.role.value
      );
      observableObj.subscribe({
        next: (result) => {
          alert('Registration successful. You can now log in.');
          this.router.navigate(['/login']);
        },
        error: (err) => {
          this.statusDetails = 'An error occurred during registration.';
          console.error(err); 
        },
      });
    }
  }
}
