import { NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
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
export class ContactComponent implements OnInit {
  isSubmitted = false;
  lat = 0;
  lng = 0;

  contactsService = inject(ContactsService);
  router = inject(Router);

  ngOnInit(): void {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
        });

      } else {
        alert("geolocation is not available");
      }

  }

  submit(contactForm: NgForm) {
    if (contactForm.invalid) return;
    const contact:IContact = {
      name:contactForm.value.name,
      email:contactForm.value.email,
      phone:contactForm.value.phone,
      address:contactForm.value.address,
      latitude:this.lat,
      longitude:this.lng,
    }
    
    this.contactsService.addContact(contact);
    this.router.navigate(["/dashboard"]);
  }
}
