import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {Route, Router} from '@angular/router';
import {convertRuleOptions} from 'tslint/lib/configuration';

@Component({
  selector: 'app-addperson',
  templateUrl: './addperson.component.html',
  styleUrls: ['./addperson.component.css']
})
export class AddpersonComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  public createperson(formulaire: NgForm) {

  /*  const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token);*/


    return this.http.post(`http://localhost:3000/api/personnes`, formulaire.value/*, {headers}*/).subscribe(
      (response) => {
        this.router.navigate(['cv']);
        console.log('c est bon !!!!!!!!');
      },
      (erreur) => {
        console.log('ereuuuur', erreur);

      }
    );
  }
}

