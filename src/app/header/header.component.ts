import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {CvserviceService} from '../cvservice.service';
import {Personne} from '../Model/personne.model';
import {Observable} from 'rxjs';
import {AuthenticationInterceptorProvider} from '../intercepteurs/login.service';
import {AuthentificationService} from '../authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  l = '';
  x = false;
  personne: Personne;
  personnes: Personne[];
  constructor(private http: HttpClient, private cvService: CvserviceService, private auth: AuthentificationService,
              private router: Router) {
  }
  change() {
    this.x = ! this.x;
  }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
    const link = ['login'];
    this.router.navigate(link);
  }

}
