import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { Assignment } from '../assignment.model';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-add-assignment',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [FormsModule,MatButtonModule,MatInputModule,MatDatepickerModule,MatFormFieldModule,CommonModule],
  templateUrl: './add-assignment.component.html',
  styleUrl: './add-assignment.component.css'
})
export class AddAssignmentComponent {
  @Output()
  newAssignment = new EventEmitter<Assignment>();
  //Champs des formulaires
  nomAssignment='';
  dateRendu=undefined;
  
  onSubmit(event:any){
    if((this.nomAssignment=='') || (this.dateRendu==undefined)) return;
    let newAss =new Assignment();
    newAss.nom=this.nomAssignment;
    newAss.dateDeRendu=this.dateRendu;
    newAss.rendu=false;
    this.newAssignment.emit(newAss);
  }
}
