import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from '../Model/personne.model';
import {CvserviceService} from '../cvservice.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() personne: Personne;
  @Output() selectedpers = new EventEmitter();
  constructor(private  cvService: CvserviceService) { }

  ngOnInit() {
  }

  sendDataToDad() {
    this.selectedpers.emit(
      this.personne
    );
  }

  deletePersonne() {
    this.cvService.deleteCv(this.personne);
  }
}
