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
      "text": "With this little jump'n'run game i learned object oriented programming.",
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
    }/*,
    {
      "name": "RING OF FIRE",
      "text": "By programming this well-known drinking game, I improved my skills in Angular,especially creating animations and working with databases(in this case firebase from google). ",
      "src": "ringoffire.png",
      "direction": "left",
      "github": "https://github.com/AndreHehn/ringoffire",
      "link": ""
    },
    {
      "name": "CUSTOMER MANAGEMENT SYSTEM",
      "text": "With this little jump'n'run game i learned object oriented programming.",
      "src": "crm.png",
      "direction": "right",
      "github": "",
      "link": ""
    }*/
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
