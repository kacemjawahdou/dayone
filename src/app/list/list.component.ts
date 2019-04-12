import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from '../Model/personne.model';
import {TodoService} from '../todo.service';
import {CvserviceService} from '../cvservice.service';
import {TodoModel} from '../Model/todo.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() personnes: Personne[];
  @Output() selectedperslist = new EventEmitter();

  constructor(private cvService: CvserviceService) { }

  ngOnInit() {
// rotating_card_profile2.png
    // rotating_card_profile3.png

    this.cvService.getapiPersonnes().subscribe(
      (personnes) => {
        this.personnes = personnes;
      },
      (error) => {
//   alert('Problème d\'accès à l api les données affichées sont faux');
        console.log(error);
        this.personnes = this.cvService.getPersonnes();
      }
    );
  }

  treatSonData(data) {
    this.selectedperslist.emit(
      data
    );
  }
}
