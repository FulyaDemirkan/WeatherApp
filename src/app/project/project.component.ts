import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Project } from  '../Project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects: Project[] = [];
  webProjects: Project[] = [];
  desktopProjects: Project[] = [];

  constructor(
    private titleService: Title,
    private projectService: ProjectService
    ) { }

  ngOnInit() {
    this.titleService.setTitle("Fulya Demirkan :: Projects");
    this.getProjects();
  }

  getProjects(): void {

    this.projectService.getProjects().
    subscribe(projects => this.projects = projects);

    for (let project of this.projects) {
      switch (project["type"])
      {
        case "webProject":
          this.webProjects.push(project);
        case "desktopProject":
          this.desktopProjects.push(project);
      }
    }
  }
}
