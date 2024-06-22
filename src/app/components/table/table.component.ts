import { Component, OnInit, inject } from '@angular/core';
import { IContact } from '../../interfaces/contact.interface';
import { ContactsService } from '../../services/contacts.service';

const tableData = [
  {
    name: 'Convenant James',
    phone: '08102374790',
    email: 'admin@example.com',
    address: 'Live Camp, Abuja',
    latitude: '90,0993',
    longitude: '83,4957',
  },
  {
    name: 'Convenant James',
    phone: '08102374790',
    email: 'admin@example.com',
    address: 'Live Camp, Abuja',
    latitude: '90,0993',
    longitude: '83,4957',
  },
  {
    name: 'Convenant James',
    phone: '08102374790',
    email: 'admin@example.com',
    address: 'Live Camp, Abuja',
    latitude: '90,0993',
    longitude: '83,4957',
  },
  {
    name: 'Convenant James',
    phone: '08102374790',
    email: 'admin@example.com',
    address: 'Live Camp, Abuja',
    latitude: '90,0993',
    longitude: '83,4957',
  },
];
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit{
  contacts: IContact[] = [];
  contactsService = inject(ContactsService);

  ngOnInit(): void {
    this.contacts = this.contactsService.getContacts();
  }
}
