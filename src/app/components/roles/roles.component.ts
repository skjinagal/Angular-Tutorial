import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../models/interfaces/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {

  roles: IRole[] = [];

  ngOnInit(): void
  {
    this.getAllRoles();
  }

  httpClient = inject(HttpClient);

  getAllRoles() {
    this.httpClient.get('http://localhost:3000/roles').subscribe((data) => {
      this.roles = data as IRole[];
      console.log(this.roles);
    });
  }
  // name: string = 'John Doe';
  // department: string = 'Engineering';
  // JoinDate: Date = new Date()
  // inputType = 'button';
  // selectedRole: string = '';
  // showWelcomeAlert() {
  //   alert(`Welcome, ${this.name} from ${this.department} department!`);
  // }

  // showMessage(message: string) {
  //   alert(message);
  // }

}
