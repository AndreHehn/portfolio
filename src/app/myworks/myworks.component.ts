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
      "text": "With this little jump'n'run game <br>i learned object oriented programming.",
      "src": "pollo.png",
      "direction" :"left"
    },
    {
      "name": "PORTFOLIO",
      "text": "This was my first angular project.<br>While other projects were being coded,<br> this project grew and was constantly improved.",
      "src": "portfolio.png",
      "direction" :"right"
    },
    {
      "name": "RING OF FIRE",
      "text": "By programming this well-known drinking game,<br> I improved my skills in Angular,<br>especially creating animations and <br>working with databases(in this case firebase from google). ",
      "src": "ringoffire.png",
      "direction" :"left"
    },
    {
      "name": "CUSTOMER MANAGEMENT SYSTEM",
      "text": "With this little jump'n'run game i learned object oriented programming.",
      "src": "crm.png",
      "direction" :"right"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
