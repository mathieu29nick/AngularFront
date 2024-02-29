import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';

@Injectable({
  //Dispo par tous les composants
  providedIn: 'root'
})
export class AssignmentsService {
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

  constructor() { }

  // Liste des assigments
  getAssignments():Observable<Assignment[]> {
    return of(this.assignments);
  }

  // Ajout assignment
  addAssignment(a : Assignment):Observable<String>{
    this.assignments.push(a);
    return of("Ajout avec succés");
  }
}
