import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  contactData = {
    name: "Mario",
    mail: "mario@pario",
    message: "Hello",
  }

  mailTest = true;

  onSubmit(ngForm: NgForm) {
    if(ngForm.valid && ngForm.submitted)
    console.log(this.contactData);
  }
}
