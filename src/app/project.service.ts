import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Project } from './project';
import { Projects } from './projects_json';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects = Projects;

  constructor() { }

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getProject(id: number): Observable<Project> {
    return of(Projects.find(project => project.id === id))
  }
}
