import { Injectable } from '@angular/core';
import {Personne} from './Model/personne.model';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CvserviceService {
  private personnes: Personne [];
  apilink = 'http://localhost:3000/api/personnes';

  constructor(private http: HttpClient) {
    this.personnes = [
      new Personne(1, 'jawahdou', 'kacem', 27, 'rotating_card_profile2.png', 'développeur j2ee', 87459),
      new Personne(2, 'jaouahdou', 'kosmo', 28, 'rotating_card_profile3.png', 'développeur angular', 96523),
      new Personne(3, 'foulena', 'ben foulen', 30, '', 'développeur .Net', 822159)

    ];
  }

  getPersonnes() {
    return this.personnes;
  }

  getapiPersonnes(): Observable<Personne[]> {

    return this.http.get<Personne[]>(this.apilink);
  }
  deleteCv(personne: Personne) {
    const index = this.personnes.indexOf(personne);
    this.personnes.splice(index, 1);
  }

  findpersbyid(id): Personne {
    const personne = this.personnes.find( personne => personne.id == id);
    return personne;
  }
  findPersonneapiById(id: number): Observable<Personne> {
    return this.http.get<Personne>( this.apilink + `/${id}`);
  }
  getPersonneById(id: number): Observable<Personne> {
    return this.http.get<Personne>( this.apilink + `/${id}`);
  }
  findByName(name): Observable<Personne[]> {
    const filter = `{"where":{"name":{"like":"%${name}%"}}}`;
    const params = new HttpParams().set('filter', filter);
    return this.http.get<Personne[]>(this.apilink, {params});
  }
}
