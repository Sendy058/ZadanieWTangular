import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-hlavna-stranka',
  templateUrl: './hlavna-stranka.component.html',
  styleUrls: ['./hlavna-stranka.component.css']
})
export class HlavnaStrankaComponent {



  public showMenu : boolean = false;
  public toggleMenu(){
    this.showMenu = !this.showMenu;
    console.log(this.showMenu);
  }

}
