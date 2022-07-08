import { Component, OnInit, Input } from '@angular/core';
import AOS from 'aos';


@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss']
})
export class SkillItemComponent implements OnInit {
  @Input() skill = { 'name': '', 'src': '' };
  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
