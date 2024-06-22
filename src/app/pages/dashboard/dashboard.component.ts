import { Component, OnInit, inject } from '@angular/core';
import { MapComponent } from '../../components/map/map.component';
import { TableComponent } from '../../components/table/table.component';
import { ContactsService } from '../../services/contacts.service';
import { IContact } from '../../interfaces/contact.interface';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MapComponent, TableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {


}
