import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myskills',
  templateUrl: './myskills.component.html',
  styleUrls: ['./myskills.component.scss']
})
export class MyskillsComponent implements OnInit {
  skills = [
    {
      "name": "JavaScript",
      "src": "javascript.png",
    },
    {
      "name": "Angular",
      "src": "angular.png",
    },
 
    {
      "name": "HTML/CSS",
      "src": "htss.png",
    },
    {
      "name": "SCRUM",
      "src": "scrum.png",
    },
    {
      "name": "Git",
      "src": "github.png",
    },
    {
      "name": "Design thinking",
      "src": "design.png",
    },
    {
      "name": "API",
      "src": "api.png",
    },
     {
     "name": "Test automation",
    "src": "test.png",
    },
    {
      "name": "Databases",
      "src": "databases.png",
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }

}


/*   
    
            <div class="skil-circle"><img class="skill-image" src="assets/img/GITHUB.png"></div>
            <div class="skill-rect">GIT</div>
        </div>
        <div class="skill-element">
            <div class="skil-circle"><img class="skill-image" src="assets/img/DESIGN.png"></div>
            <div class="skill-rect">DESIGN THINKING</div>
        </div>
        <div class="skill-element">
            <div class="skil-circle"><img class="skill-image" src="assets/img/API.png"></div>
            <div class="skill-rect">REST API</div>
        </div>
        <div class="skill-element">
            <div class="skil-circle"><img class="skill-image" src="assets/img/Test.png"></div>
            <div class="skill-rect">TEST AUTOMATION</div>
        </div>
        <div class="skill-element">
            <div class="skil-circle"><img class="skill-image" src="assets/img/Database.png"></div>
            <div class="skill-rect">DATABASES</div>
        </div>*/