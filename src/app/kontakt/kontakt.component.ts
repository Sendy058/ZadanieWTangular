import { Component } from '@angular/core';


@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent {
  constructor(



  ) {
  }
  public showMenu : boolean = false;
  public toggleMenu(){
    this.showMenu = !this.showMenu;
    console.log(this.showMenu);
  }



}
