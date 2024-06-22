import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactsService } from '../../services/contacts.service';
import { Router } from '@angular/router';
import { IContact } from '../../interfaces/contact.interface';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  isSubmitted = false;

  contactsService = inject(ContactsService);
  router = inject(Router);

  submit(contactForm: NgForm) {
    const contact:IContact = {
      name:contactForm.value.name,
      email:contactForm.value.email,
      phone:contactForm.value.phone,
      address:contactForm.value.address,
      latitude:contactForm.value.latitude,
      longitude:contactForm.value.longitude,
    }
    
    console.log(contactForm.value.longitude);
    this.contactsService.addContact(contact);
    // this.router.navigate(["/dashboard"]);
  }
}
