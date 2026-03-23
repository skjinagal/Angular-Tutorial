import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Client } from '../../models/client';
import { MasterService } from '../../services/master.service';
import { OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client',
  imports: [CommonModule, FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  clients: Client[] = [];
  client: Client = new Client();
  clientService = inject(ClientService);
  ngOnInit(): void {
    this.getAllClients();
  }
  saveClient() {
    // Simple in-memory add for now
    this.clientService.postClient(this.client).subscribe((response) => {
      console.log('Client saved successfully:', response);
    });
    this.resetClient();
  }

  getAllClients() {
    // This is a placeholder. You would implement this to fetch clients from your backend.
    // For now, it just logs the current clients array.
    this.clientService.getClients().subscribe((res) => {
      this.clients = res;
      console.log('Fetched clients:', this.clients);
    });
    console.log('Fetching all clients:', this.clients);
  }
  resetClient() {
    this.client = new Client();
  }

  deleteClient(client: Client) {
    this.clientService.deleteClient(client.id).subscribe((response) => {
      console.log('Client deleted successfully:', response);
      this.getAllClients(); // Refresh the client list after deletion
    });
  }
}
