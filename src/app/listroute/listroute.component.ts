import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listroute',
  templateUrl: './listroute.component.html',
  styleUrls: ['./listroute.component.css']
})
export class ListrouteComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  navigate(maroute) {
    this.router.navigate([maroute]);
  }
}
