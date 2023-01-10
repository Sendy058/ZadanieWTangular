import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {VypisLoginComponent} from "../vypis-login/vypis-login.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent  implements OnInit{
  isRoute:boolean = false;
  constructor(

    public dialog: MatDialog,
    private router:Router,
    ) {
  }
  public showMenu : boolean = false;
  public toggleMenu(){
    this.showMenu = !this.showMenu;
    console.log(this.showMenu);
  }

  openDialog(){
    this.dialog.open(VypisLoginComponent,{
      width: '350px',
      height:'auto'
      }
      );
  }
  ngOnInit() {
    if(this.router.url === "/databaza"){
      this.isRoute = true;
    }
    else{
      this.isRoute =  false;
    }

  }


}
