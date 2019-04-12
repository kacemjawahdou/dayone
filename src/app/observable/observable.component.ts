import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  obs: Observable<string>;
  Images = [
    'rotating_card_profile.png',
    'rotating_card_profile2.png',
    'rotating_card_profile3.png',

  ];
  Image: string;
  constructor() { }

  ngOnInit() {
    this.obs = new Observable(
      (observer) => {
        let i = this.Images.length - 1;
        setInterval(
          () => {
            observer.next(this.Images[i]);
            if (i > 0 ) {
              i--;
            } else {
              i = this.Images.length - 1;
            }
          }
          , 1500);
      }
    );
    this.obs.subscribe(
      (result) => {
        console.log(result);
        this.Image = result;
      }
    );
  }
}
