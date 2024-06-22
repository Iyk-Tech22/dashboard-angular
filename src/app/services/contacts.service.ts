import { Injectable, signal } from '@angular/core';
import { IContact } from '../interfaces/contact.interface';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private contacts = signal<IContact[]>([]);

  constructor() {}

  getContacts() {
    return this.contacts();
  }

  addContact(contact: IContact) {
    this.contacts.update((contacts) => [...contacts, contact]);
  }
}
