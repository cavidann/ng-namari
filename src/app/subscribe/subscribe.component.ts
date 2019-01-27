import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  subscribeForm: FormGroup;
  sending: boolean;

  get email() {
    return this.subscribeForm.get('email');
  }

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.subscribeForm = new FormGroup({
      email : new FormControl(null, [Validators.required, Validators.email])
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
