import { Component } from '@angular/core';
import { OnInit, inject } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { IDesignation } from '../../models/interfaces/designations';
import { CommonModule } from '@angular/common';
import { ApiResponseModel } from '../../models/interfaces/apiresponsemodel';

@Component({
  selector: 'app-designation',
  imports: [CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {
  
  isLoading: boolean = true;
  masterService = inject(MasterService);
  designations: IDesignation[] = [];
  ngOnInit(): void
  {
    this.masterService.getDesignations().subscribe((res) => {
      this.designations = res;
      console.log(this.designations);
      this.isLoading = false;
    });
  }
}
