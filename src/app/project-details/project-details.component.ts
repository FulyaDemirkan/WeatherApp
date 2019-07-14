import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Project } from '../Project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  private title: string = "";

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private router: Router
    ) { }

  @Input() project: Project;

  ngOnInit() {
    this.getProject();
    
    if(this.project) {
      this.titleService.setTitle("Fulya Demirkan :: " + this.title);
    } else {
      this.router.navigate(["project"]);
    }
  }

    getProject(): void {
      const id = +this.route.snapshot.paramMap.get("id");

      this.projectService.getProject(id)
      .subscribe(project => 
        { this.project = project;
          this.title = this.project.name;
        });
    }
}
