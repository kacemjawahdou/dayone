import {Component, Input, OnInit, Output} from '@angular/core';
import {Personne} from '../Model/personne.model';
import {CvserviceService} from '../cvservice.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  @Input() personne: Personne;
  @Input() pers: Personne;

  constructor(private cvService: CvserviceService) {
  }

  ngOnInit() {
  }

  treatSonData2(data) {

    this.pers = data;
  }
}
