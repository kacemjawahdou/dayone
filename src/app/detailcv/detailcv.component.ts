import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Personne} from '../Model/personne.model';
import {CvserviceService} from '../cvservice.service';

@Component({
  selector: 'app-detailcv',
  templateUrl: './detailcv.component.html',
  styleUrls: ['./detailcv.component.css']
})
export class DetailcvComponent implements OnInit {
  personne: Personne;
  personnes: Personne[];

  constructor(private  activatedRoute: ActivatedRoute, private cvservice: CvserviceService, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((parametres => {
      this.cvservice.findPersonneapiById(parametres.id).subscribe(
        (personne) => {
          this.personne = personne;
        }); }
  ))
    ;
    if (this.personne) {
      const link = ['cv'];
      this.router.navigate(link);
    }

  }

  delete() {
    this.cvservice.deleteCv(this.personne);
    const link = ['cv'];
    this.router.navigate(link);
  }
}
