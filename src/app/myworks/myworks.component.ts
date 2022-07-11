import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myworks',
  templateUrl: './myworks.component.html',
  styleUrls: ['./myworks.component.scss']
})
export class MyworksComponent implements OnInit {
  projects = [
    {
      "name": "POKEDEX",
      "text": "The main focus of this app is to get the data from an API. The used languages: JavaScript, CSS and HTML",
      "src": "pokedex.png",
      "direction": "left",
      "github": "https://github.com/AndreHehn/pokedex",
      "link": "https://andrehehn.de/pokedex/"
    },
    {
      "name": "EL POLLO LOCO",
      "text": "This is little jump'n'run game, implemented with object-oriented programming (OOP). The used languages: JavaScript, CSS and HTML",
      "src": "pollo.png",
      "direction": "right",
      "github": "https://github.com/AndreHehn/portfolio",
      "link": "https://andrehehn.de/el_pollo_loco/"
    },
    {
      "name": "PORTFOLIO",
      "text": "That was my first angular project. While working on other projects, this project grew and was constantly improved. The used languages: TypeScript, SCSS and HTML",
      "src": "portfolio.png",
      "direction": "left",
      "github": "https://github.com/AndreHehn/el_pollo_loco",
      "link": "#"
    },
    {
      "name": "RING OF FIRE",
      "text": "During programming this well-known drinking game, I improved my skills in Angular, especially creating animations and working with databases (in this case, firebase from google).",
      "src": "ringoffire.png",
      "direction": "right",
      "github": "https://github.com/AndreHehn/ringoffire",
      "link": "https://ring-of-fire-74a66.web.app/"
    }
  ];
  constructor() { }

  ngOnInit(): void { }

}
