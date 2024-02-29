import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RenduDirective } from '../shared/rendu.directive';
import { Assignment } from './assignment.model';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';
import { DetailDirective } from '../shared/detail.directive';
import {MatTableModule} from '@angular/material/table';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';
import { AssignmentsService } from '../shared/assignments.service';

@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [CommonModule,RenduDirective,AssignmentDetailComponent,
  DetailDirective,MatTableModule,MatButtonModule,AddAssignmentComponent],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})
export class AssignmentsComponent implements OnInit{
  // Variables
  titre = "A RENDRE";
  buttonDisabled = true;
  titreTable: string[] = ['nom', 'dateDeRendu', 'rendu','voir'];
  assignementClicker!: Assignment;
  isFormAjout=false;
  
  assignments : Assignment[]= [];
  
  dataSource = this.assignments;

  //CSS conditionnel
  getColor(status:any){
    return status.rendu ? 'green' : 'red';
  }

  // Detail : action voir Détail
  assignmentClic(a:Assignment){
    this.assignementClicker=a;
  }

  activerFormAjout(){
    this.isFormAjout=true;
  }

  ajoutAssignment(a:Assignment){
    this.assignementsService.addAssignment(a)
    .subscribe((response) =>{
      this.dataSource=[...this.assignments];
      this.isFormAjout=false;
    }); 
  }

  /* SERVICE */
  // Injection du AssignmentsService
  constructor(private assignementsService : AssignmentsService){}

  ngOnInit(){
    this.getAssignmentsFromService();
  }
  
  getAssignmentsFromService(){
    this.assignementsService.getAssignments()
    .subscribe((assignments) =>{
      this.assignments=assignments;
      this.dataSource=[...this.assignments];
    });
  }
  
}
