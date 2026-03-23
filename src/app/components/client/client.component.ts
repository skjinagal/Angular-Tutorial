import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Client } from '../../models/client';

@Component({
  selector: 'app-client',
  imports: [CommonModule, FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
  clients: Client[] = [];
  client: Client = new Client();

  saveClient() {
    // Simple in-memory add for now
    this.clients = [...this.clients, { ...this.client }];
    this.resetClient();
  }

  resetClient() {
    this.client = new Client();
  }
}
