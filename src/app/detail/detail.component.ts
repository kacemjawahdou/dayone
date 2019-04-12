import {Component, Input, OnInit, Output} from '@angular/core';
import {Personne} from '../Model/personne.model';
import {CvserviceService} from '../cvservice.service';
import {EmbaucheService} from '../embauche.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() persdetail: Personne = null;
  personne: Personne;

  constructor(private embaucheService: EmbaucheService, private cvService: CvserviceService,
              private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {

  }

  embaucher() {
    this.embaucheService.embaucher(this.persdetail);
  }

  delete() {
    this.cvService.deleteCv(this.personne);
  }

  navigate() {
      console.log('nav');
      const link = ['cv', this.persdetail.id];
      this.router.navigate(link);
  }
}
