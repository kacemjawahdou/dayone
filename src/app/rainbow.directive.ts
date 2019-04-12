import {Directive, HostBinding, HostListener} from '@angular/core';
import {style} from '@angular/animations';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
@HostBinding ('style.color') couleur = 'white';
@HostListener ('keypress') changecouleur() {
  this.couleur = this.getRandomColor();
}
  @HostListener ('keydown') changecouleur2() {
    this.couleur = this.getRandomColor();
  }
  getRandomColor() {
    const color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }

  constructor() { }



}
