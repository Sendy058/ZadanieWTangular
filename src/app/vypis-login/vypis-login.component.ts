import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialogRef} from "@angular/material/dialog";
interface loginData{
  name:string,
  password:string,
}
@Component({
  selector: 'app-vypis-login',
  templateUrl: './vypis-login.component.html',
  styleUrls: ['./vypis-login.component.css']
})
export class VypisLoginComponent {
  constructor(
    private router: Router,
    public dialogRef:MatDialogRef<VypisLoginComponent>
    ) {
  }
  openDatabase(data: loginData){
    if(data.name == "admin" && data.password == "admin"){
      this.router.navigateByUrl('/databaza');
      this.dialogRef.close();
    }else {
      window.alert("Nespravne udaje");
    }


  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
