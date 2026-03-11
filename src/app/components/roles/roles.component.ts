import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  name: string = 'John Doe';
  department: string = 'Engineering';
  JoinDate: Date = new Date()
  inputType = 'button';
  selectedRole: string = '';
  showWelcomeAlert() {
    alert(`Welcome, ${this.name} from ${this.department} department!`);
  }

  showMessage(message: string) {
    alert(message);
  }
}
