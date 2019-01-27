import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactusForm: FormGroup;
  sending: boolean;


  get firstName() {
    // console.log(this.contactusForm.get('firstName').status['VALID']);
    return this.contactusForm.get('firstName');
  }

  get lastName() {
    return this.contactusForm.get('lastName');
  }

  get email() {
    return this.contactusForm.get('email');
  }

  get message() {
    return this.contactusForm.get('message');
  }

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.contactusForm = new FormGroup({
      firstName : new FormControl(null, Validators.required),
      lastName : new FormControl(null, Validators.required),
      email : new FormControl(null, [Validators.required, Validators.email]),
      message : new FormControl(null, Validators.required),
    });
    this.sending = false;
  }

  sendMessage(formData: NgForm) {
    this.sending = true;
    console.log(formData);
    setTimeout(() => {
      this.sending = false;
      this.cancelForm();
    }, 1000);
  }

  cancel() {
    this.cancelForm();
  }

  cancelForm() {
    this.router.navigate([{outlets: { popup: null }}] );
  }

}
