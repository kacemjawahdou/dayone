import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Personne} from '../Model/personne.model';
import {AuthentificationService} from '../authentification.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/internal/operators/tap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authentificationService: AuthentificationService,
              private  router: Router,
              private http: HttpClient) { }

  ngOnInit() {
  }
  login2(formulaire: NgForm) {
    console.log(formulaire.value);
    return this.http.post<any>('http://localhost:3000/api/Users/login', formulaire.value).subscribe(
      (response) => {
        const link = [''];
        localStorage.setItem('token', response.id);
        this.router.navigate(link);
        console.log(response);
      },
      (erreur) => {
        console.log('ereuuuur', erreur);
      }
    );
    }
}
