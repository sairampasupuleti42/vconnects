import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cncts-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  fullName: string;

  constructor() { }

  ngOnInit() {
    this.fullName = localStorage.getItem('cnctsUn');
  }

}
