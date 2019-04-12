import { Component, OnInit } from '@angular/core';
import {CvserviceService} from '../cvservice.service';
import {Router} from '@angular/router';
import {Personne} from '../Model/personne.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  chaine = '';
  serachResult: Personne[];
  constructor(
    private cvService: CvserviceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.serachResult = [];
  }
  search() {
    const name = this.chaine;
    if (name.length) {
      this.cvService.findByName(name).subscribe(
        (personnes) => {
          console.log(personnes);
          this.serachResult = personnes;
        }
      );
    } else {
      this.serachResult = [];
    }
  }
  selectPeronne(personne: Personne) {
    const link = ['cv', personne.id];
    this.router.navigate(link);
    this.serachResult = [];
    this.chaine = '';
  }

}
