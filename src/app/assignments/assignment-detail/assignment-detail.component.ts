import { Component, Input } from '@angular/core';
import { Assignment } from '../assignment.model';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
@Component({
  selector: 'app-assignment-detail',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatCheckboxModule],
  templateUrl: './assignment-detail.component.html',
  styleUrl: './assignment-detail.component.css'
})
export class AssignmentDetailComponent {
  @Input()
  assignmentTransmis!: Assignment;

  //function setStatus devoir
  rendreDevoir(){
    this.assignmentTransmis.rendu=true;
  }
}
