import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../models/interfaces/role';
import { CommonModule } from '@angular/common';
import { MasterService } from '../../services/master.service';
import { ApiResponseModel } from '../../models/interfaces/apiresponsemodel';

@Component({
  selector: 'app-roles',
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {

  roles: IRole[] = [];
  masterService = inject(MasterService);
  ngOnInit(): void
  {
    this.getAllRoles();
  }

  httpClient = inject(HttpClient);

  getAllRoles() {
    this.masterService.getRoles().subscribe((res) => {
      this.roles = res;
      // console.log(this.roles);
      console.log(res);
    }, error => {
      console.error('Error fetching roles:', error);
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
