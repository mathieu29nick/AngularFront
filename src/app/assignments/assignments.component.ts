import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenduDirective } from '../shared/rendu.directive';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Assignment } from './assignment.model';
import {provideNativeDateAdapter} from '@angular/material/core';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';
import { DetailDirective } from '../shared/detail.directive';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-assignments',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [CommonModule,RenduDirective,FormsModule,MatButtonModule,MatInputModule,MatDatepickerModule,MatFormFieldModule,AssignmentDetailComponent,
  DetailDirective,MatTableModule],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})
export class AssignmentsComponent {
  titre = "A RENDRE";
  buttonDisabled = true;
  titreTable: string[] = ['nom', 'dateDeRendu', 'rendu','voir'];

  //Champs des formulaires
  nomAssignment='';
  dateRendu=undefined;

  assignments : Assignment[]=[
    {
      nom:"Devoir Test 1",
      dateDeRendu: new Date("2024-02-15"),
      rendu:false
    },
    {
      nom:"Devoir Test 2",
      dateDeRendu: new Date("2024-02-25"),
      rendu:true
    },
    {
      nom:"Devoir Test 3",
      dateDeRendu: new Date("2024-01-26"),
      rendu:false
    }
  ];
  
  dataSource = this.assignments;

  //CSS conditionnel
  getColor(status:any){
    return status.rendu ? 'green' : 'red';
  }

  onSubmit(event:any){
    if((this.nomAssignment=='') || (this.dateRendu==undefined)) return;
    let newAss =new Assignment();
    newAss.nom=this.nomAssignment;
    newAss.dateDeRendu=this.dateRendu;
    newAss.rendu=false;

    //Ajout dans la liste
    this.assignments.push(newAss);
    this.dataSource = [...this.assignments];

    this.nomAssignment='';
    this.dateRendu=undefined;
  }
}
