import { Component } from '@angular/core';

@Component({
  selector: 'app-sluzby-podstranka',
  templateUrl: './sluzby-podstranka.component.html',
  styleUrls: ['./sluzby-podstranka.component.css']
})
export class SluzbyPodstrankaComponent {
  public showMenu : boolean = false;
  public toggleMenu(){
    this.showMenu = !this.showMenu;
    console.log(this.showMenu);
  }

}
