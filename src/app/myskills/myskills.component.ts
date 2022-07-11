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
    },/*
    {
      "name": "HTML/CSS",
      "src": "htss.png",
    },*/
    {
      "name": "HTML",
      "src": "html.png",
    },
    {
      "name": "CSS",
      "src": "css.png",
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
    /* {
     "name": "Test automation",
    "src": "test.png",
    },*/
    {
      "name": "Databases",
      "src": "databases.png",
    },

  ];

  constructor() { }

  ngOnInit(): void { 
  }

}