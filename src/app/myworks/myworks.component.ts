import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myworks',
  templateUrl: './myworks.component.html',
  styleUrls: ['./myworks.component.scss']
})
export class MyworksComponent implements OnInit {
  projects = [
    {
      "name": "EL POLLO LOCO",
      "text": "With this little jump'n'run game I learned object oriented programming.",
      "src": "pollo.png",
      "direction": "left",
      "github": "https://github.com/AndreHehn/portfolio",
      "link": "https://andre-hehn.developerakademie.net/el_pollo_loco/"
    },
    {
      "name": "PORTFOLIO",
      "text": "This was my first angular project. While other projects were being coded, this project grew and was constantly improved.",
      "src": "portfolio.png",
      "direction": "right",
      "github": "https://github.com/AndreHehn/el_pollo_loco",
      "link": "#"
    },
    {
      "name": "POKEDEX",
      "text": "By coding this app, I learned how to work with an API.",
      "src": "pokedex.png",
      "direction": "left",
      "github": "https://github.com/AndreHehn/pokedex",
      "link": "https://github.com/AndreHehn/pokedex"
    }/*,
    {
      "name": "CUSTOMER MANAGEMENT SYSTEM",
      "text": "With this little jump'n'run game i learned object oriented programming.",
      "src": "crm.png",
      "direction": "right",
      "github": "",
      "link": ""


      "text": "By programming this well-known drinking game, I improved my skills in Angular,especially creating animations and working with databases(in this case firebase from google). ",

    }*/
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
